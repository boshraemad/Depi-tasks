let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let hrs = new Date().getHours();
let mins = new Date().getMinutes();
let secs = new Date().getSeconds();

hours.innerText=hrs;
minutes.innerText=mins;
seconds.innerText=secs;

setInterval(()=>{
 secs++;
 if(secs > 59){
    secs=0;
    mins++;
 }
 if(mins>59){
    mins=0;
    hrs++;
 }

 if(hrs>23){
    hrs=0
 }

 hours.innerText=hrs<10 ? `0${hrs}` : hrs;
minutes.innerText=mins<10? `0${mins}` : mins;
seconds.innerText=secs<10? `0${secs}` :secs;
} ,1000)
