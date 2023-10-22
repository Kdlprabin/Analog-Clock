window.setInterval(function () {

    //date
    var date = new Date();

    //getting hour, minute and second
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    //rotating degree for hour, minute and second arm
    var hourDeg = hour * 30 + minute * 0.5;
    var minuteDeg = minute * 6;
    var secondDeg = second * 6;


    //taking the HTML elements
    var hourHand = document.getElementsByClassName("hour__hand");
    var minuteHand = document.getElementsByClassName("minute__hand");
    var secondHand = document.getElementsByClassName("second__hand");

    var hourText = document.getElementsByClassName("hour");
    var minuteText = document.getElementsByClassName("minute");
    var secondText = document.getElementsByClassName("second");


    //rotating analog clock arms
    hourHand[0].style.transform = `rotate(${hourDeg}deg)`;
    minuteHand[0].style.transform = `rotate(${minuteDeg}deg)`;
    secondHand[0].style.transform = `rotate(${secondDeg}deg)`;


    //setting time in digital clock
    hourText[0].innerHTML = hour;
    minuteText[0].innerHTML = minute;
    secondText[0].innerHTML = second;

    hourText[0].style.fontSize = "48px";
    minuteText[0].style.fontSize = "48px";
    secondText[0].style.fontSize = "48px";

}, 1000);