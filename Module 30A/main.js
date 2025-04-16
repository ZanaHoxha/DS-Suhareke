var wakeuptime;
var dstime;
var sleeptime;
var noon=12;

function showCurrentTime(){
    var clock=document.getElementById('clock');
    var currentTime= new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var meridian= "AM";
    if(hours>=noon){
        maridian="PM";

    }
    var clockTime=hours + ":" + minutes + ":" + seconds + "" + meridian;
    clock.innerTime= clockTime;
    changeImage();

};

var oneSecond= 1000;
setInterval(showCurrentTime, oneSecond);
function changeImage(){
    var time=new Date().getHours();
    console.log(time);
    var image= "ds_clock.png";
    var imageHTML=document.getElementById("timeImage");
}