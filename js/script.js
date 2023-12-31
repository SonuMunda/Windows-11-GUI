// Get current date and display it in the taskbar
let date = new Date();
let currDate = date.toLocaleDateString();
document.getElementById("taskbar-date").innerHTML = currDate;

// Get current time and display it in the taskbar
function getCurrentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let amPM = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  let currTime = hours + ":" + minutes + " " + amPM;
  document.getElementById("taskbar-time").innerHTML = currTime;
}

// Refresh the current time every second
setInterval(getCurrentTime, 1000);

// Function to open/close the Start Menu
const openStartMenu = () => {
  let startMenu = document.getElementById("start-menu");
  let startBtn = document.getElementById("start");

  if (startMenu.style.bottom === "-100vh") {
    startMenu.style.bottom = "8vh";
    startBtn.style.backgroundColor = "white";
  } else {
    startMenu.style.bottom = "-100vh";
    startBtn.style.backgroundColor = "transparent";
  }
};
