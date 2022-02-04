function start() {
  document.getElementById("alert").innerHTML = "";
  var [minCounter, secCounter] = [1, 60];
  counter = setInterval(() => {
    document.getElementById("min").innerHTML = minCounter + " min";
    secCounter -= 1;
    if (secCounter == 0 && minCounter != 0) {
      secCounter = 59;
      minCounter -= 1;
      document.getElementById("min").innerHTML =  "";
    }
    if (minCounter == 0 && secCounter == 0) {
      clearInterval(counter);
      document.getElementById("alert").innerHTML = "Time out!";
    }
    document.getElementById("sec").innerHTML = secCounter + " sec";
  }, 1000);
}

function restart() {
  clearInterval(counter);
  document.getElementById("min").innerHTML = "2 min";
  document.getElementById("sec").innerHTML = "00 sec";
  start();
}
