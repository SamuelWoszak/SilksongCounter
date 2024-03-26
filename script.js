var countDownDate = new Date("Jul 3, 2024 15:00:00");
var x = setInterval(function() {
  var now = new Date().getTime();
  var difference = countDownDate - now;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.getElementsByClassName("Description")[0].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  if (difference < 0){
    clearInterval(x);
    document.getElementsByClassName("Description")[0].innerHTML = "RELEASED";
  }
}, 100);
