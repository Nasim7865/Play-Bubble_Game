let timer =60;
let score=0;
let hitrn =0;
function makeBubble(){
let clat ='';
for(let i=0; i<=90; i++){
    let rand = Math.floor(Math.random()*10);
    clat += `<div class="bubble">${rand}</div>`;
}
document.querySelector('#pbtm').innerHTML=clat;
}

function runTimer(){
  let timerset =  setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector('#timerval').textContent =timer;
        }else{
            clearInterval(timerset);
            document.querySelector('#pbtm').innerHTML=`<h1>Game over </h1>`;
        }
       
    }, 1000);
}
function getHit(){
     hitrn= Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent=hitrn;
}
function getScore(){
    score +=10;
    document.querySelector('#scoreval').textContent=score;
}
document.querySelector('#pbtm').addEventListener('click',function(val){
    var clicked = (Number(val.target.textContent));
    if(clicked===hitrn){
        getScore();
        makeBubble();
        getHit();

    }
})

runTimer();
makeBubble();
getHit();
//getScore();