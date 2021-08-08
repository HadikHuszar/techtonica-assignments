// This is a test ????


// let spinArray = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];
    
const animation900 = {
    classname: "animation900", 
    degrees: 900
}

const animation1080 = {
    classname: "animation1080", 
    degrees:  1080
}

const animation1260 = {
    classname: "animation1260", 
    degrees: 1260
}

const animation1440 = {
    classname: "animation1440", 
    degrees: 1440
}

const animation1620 = {
    classname: "animation1620", 
    degrees: 1620
}

const animation1800 = {
    classname: "animation1800", 
    degrees: 1800
}

const animation1980 = {
    classname: "animation1980", 
    degrees: 1980
}

const animation2160 = {
    classname: "animation2160", 
    degrees: 2160
}


let spinArray2 = [animation900,animation1080,animation1260,animation1440,animation1620,animation1800,animation1980,animation2160];


function getSpin() {
    let spin = spinArray2[Math.floor(Math.random()*spinArray2.length)];
    return spin;
}
    
const coin = document.getElementById('coin');

let totalDegreesSpun = 0;

function isCurrentlyHeads (degrees) {
//    console.log('total degrees spun inside isCurrentlyHeads', totalDegreesSpun);
    return degrees % 360 === 0 ;
}

const headTailCount = {
    heads: 0,
    tails: 0
}

coin.addEventListener('click', function(){

    $('#coin').removeClass();
// coin.classList.remove();

   setTimeout(function(){
        const result = getSpin();

        if (isCurrentlyHeads(result.degrees)) {
            headTailCount.heads += 1;
        } else {
            headTailCount.tails += 1;
        }

        $('#coin').addClass(result.classname);
        // coin.classList.add(result.classname);
        console.log(headTailCount);

        document.getElementById('coin-flip-result').innerHTML = 'Heads = ' + headTailCount.heads + '     Tails =  ' + headTailCount.tails;
   }, 100);

});


function play(){
    let audio = document.getElementById("audio");
    audio.play();
}


