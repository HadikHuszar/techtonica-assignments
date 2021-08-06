// This is a test ????


let spinArray = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];
    
function getSpin() {
let spin = spinArray[Math.floor(Math.random()*spinArray.length)];
return spin;
}
    
$('#coin').on('click', function(){

    $('#coin').removeClass();
    // document.getElementById("coin").removeClass();

    setTimeout(function(){
        $('#coin').addClass(getSpin());
    }, 100);

});


function play(){
    let audio = document.getElementById("audio");
    audio.play();
}


