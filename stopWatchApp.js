let time = 0;
let intervalId;


function start(){
  intervalId = setInterval(()=>{
   time++;
   displaytime();
  },1000)
}
document.querySelector('.js-start-button').addEventListener('click', ()=>{
  start();
});

function stop(){
  clearInterval(intervalId);
}
document.querySelector('.js-stop-button').addEventListener('click', ()=>{
  stop();
});


function reset(){
 stop();
 time = 0;
 displaytime();
 intervalId = null;

}

document.querySelector('.js-reset-button').addEventListener('click', ()=>{
  reset();
});

function displaytime(){
  const hours = Math.floor (time/3600).toString().padStart(2,'0');
  const minutes = Math.floor ((time % 3600)/60).toString().padStart(2,'0');
  const seconds = Math.floor (time % 60).toString().padStart(2,'0');
  document.querySelector('.js-time-counter').innerHTML = ` ${hours} : ${minutes} : ${seconds}`;


}
