
var timer = 60;
var timerint;
var clickrn;
var score=0;
var incscore=0;
var lives = 3;


function show(){
    var clutter = "";


for(i=0; i<64; i++){
    var rn = Math.floor(Math.random()*30)
    clutter += `<div id="bubble">${rn}</div>`
}

document.querySelector("#bottom").innerHTML = clutter
}

function timerhandle(){

   timerint = setInterval(function(){
        if(timer>0){
            --timer;
            document.querySelector("#elem1").innerHTML = timer;
    
        }
        else{
            clearInterval(timerint);
            document.querySelector("#popup").style.display = "flex";
        }
    },1000)
    
}

function click(){
    
     clickrn = Math.floor(Math.random()*30)
    
    document.querySelector("#box1").textContent = clickrn;
}

function increasescore(){
    incscore = incscore+10;
    document.querySelector("#score").textContent = incscore;

   
}


function decreaselive(){
    if(lives > 0){
        lives--;
        document.querySelector("#Lives").textContent = lives;
    }

}

function close(){
    document.querySelector("#close").addEventListener("click",function(){
        window.location.reload();
    })

}


function scorestore(){
    document.querySelector("#bottom").addEventListener("click",function(dets){
        if(Number(dets.target.textContent) === clickrn){
            increasescore();
            click();
            show();
        }

        else{
            decreaselive();
            if(lives === 0){
                document.querySelector("#popup").style.display = "flex";
            }
        }

    })
}

show();
timerhandle();
click();
close();
scorestore();
