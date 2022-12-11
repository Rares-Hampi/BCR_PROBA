const timer = document.getElementById("timer");
let seconds = 60;
let minutes = 4;
const interval = setInterval(function () {
  timer.innerText = minutes + " min " + ": " + seconds-- + "sec";

  stop();
  if (seconds == 0) {
    minutes--;
    seconds = 60;
  }
}, 1000);

function stop() {
  if (minutes == 0 && seconds == 0) {
    seconds = 0;
    clearInterval(interval);
  }
}

const nume = document.getElementById("nume");
let text1 = document.createTextNode(window.localStorage.getItem("Prenume"));

nume.appendChild(text1);
