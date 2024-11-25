let timerInterval;
let seconds = 0;

function acceptCall() {
  document.getElementById("call-screen").classList.add("hidden");
  document.getElementById("in-call-screen").classList.remove("hidden");

  timerInterval = setInterval(() => {
    seconds++;
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    document.getElementById("call-timer").textContent = `${minutes}:${secs}`;
  }, 1000);
}

function endCall() {
  clearInterval(timerInterval);
  seconds = 0;
  document.getElementById("call-timer").textContent = "00:00";
  document.getElementById("in-call-screen").classList.add("hidden");
  document.getElementById("call-screen").classList.remove("hidden");
}
