// Get DOM elements
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

// Initialize variables
let interval;
let timeLeft = 1500;

// Update the timer display
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;
}

// Start the timer
function startTimer() {
    clearInterval(interval); // Clear any existing interval
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500; // Reset the timer
            updateTimer();
        }
    }, 1000);
}

// Stop the timer
function stopTimer() {
    clearInterval(interval);
}

// Reset the timer
function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

// Attach event listeners
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

// Initialize the timer display
updateTimer();
