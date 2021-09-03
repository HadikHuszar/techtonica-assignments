const express = require("express");
const cors = require('cors')
const app = express();
// const  { quizquestions } = require("./data.js");
const  { totalQuestions } = require("./data.js");

const PORT = process.env.PORT || 3001;

app.use(cors())



app.get("/api", (req, res) => {
    res.json(totalQuestions);
  });
  

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});

//https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/