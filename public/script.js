
let deadline = new Date("oct 13, 2023 00:00:01").getTime();

let x = setInterval(function () {
    

let now  = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t/(1000*60*60*24));
let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((t%(1000*60*60))/(1000*60));
let seconds = Math.floor((t%(1000*60))/1000);

document.getElementById('day-countdown').innerHTML = days + " DAYS ";

document.getElementById('time-count').innerHTML = hours + "hrs : " + minutes +"min : "+ seconds + "sec ";

if(t<0){
    clearIntervl(x);
    document.getElementById("demo").innerHTML = "CELEBRATE!!";
      } }, 
1000)
