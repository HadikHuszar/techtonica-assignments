import React, { useEffect, useState } from 'react';
import "./App.css";

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const [questions, setQuestions] = useState([]);

	const [resetGame, setResetGame] = useState(false);

	const handleAnswerButtonClick = (choice) => {
		if (choice === questions[currentQuestion].correct) {
			alert("the answer is correct!") 
			setScore(score + 1);      
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const handleResetGameButton = () => {
		setResetGame(true);
	}

	useEffect(() => {
	    if (resetGame){
		setShowScore(false);
		setScore(0);
		setCurrentQuestion(0);
		setResetGame(false);
		}
	}, [resetGame])



//// fetching the data from an api (via Express) /////

	useEffect(() => {  
		fetch ("http://localhost:3001/api")
		.then(res => {
			return res.json()
		})
		.then(totalQuestions => {
			setQuestions(totalQuestions)
		})
	}, [] )

//////////////// RENDERING OF THE APP //////////////////////////


//// something to do while there is no data

	if (questions.length === 0) {
		return (
			<div className='app'>
				"loading ..."
			</div>
		)
	}


////// the actual rendering of the app in the front-end /////////

	return (
		<div className='app'>

			{showScore ? (
				<div>
				<div className='score-section'>You scored {score} out of {questions.length}</div>
				<br/>
				<button onClick={() => handleResetGameButton()}>Reset</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].title}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].choices.map((choice, index) => 
							<Button key={`button_${index}`} buttonAnswer={choice} handleAnswerButtonClick={handleAnswerButtonClick}/> 
						)}
					</div>
				</>
			)}
		</div>
	);
}

export function Button(props) {
	return <button onClick={() => props.handleAnswerButtonClick(props.buttonAnswer)}>{props.buttonAnswer}</button>
}
