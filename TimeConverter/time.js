const userHoursInput = document.getElementById("hoursInput");
const userMinInput = document.getElementById("minutesInput");
const BtnElement = document.getElementById("convertBtn");
const paraError = document.getElementById("errorMsg");
const paraSeconds = document.getElementById("timeInSeconds");

// Constant for clearer reading (60 seconds/min * 60 minutes/hr)
const SECONDS_PER_HOUR = 3600;

BtnElement.addEventListener("click", convertToSec);

function isValidInput(value) {
    // 1. Check if the value is empty or not a number
    if (value === null || value.trim() === "" || isNaN(Number(value))) {
        return false;
    }
    const num = Number(value);
    // 2. Check if the number is a non-negative integer
    if (num < 0 || !Number.isInteger(num)) {
        return false;
    }
    return true;
}

function convertToSec() {
    // Clear previous results and errors
    paraSeconds.textContent = "";
    paraSeconds.classList.remove("seconds-time");
    paraError.textContent = "";
    
    // Get trimmed values
    const hoursValue = userHoursInput.value.trim();
    const minutesValue = userMinInput.value.trim();
    
    // Validate Hours
    if (!isValidInput(hoursValue)) {
        paraError.textContent = "Please enter a non-negative whole number for hours.";
        userHoursInput.focus();
        return;
    }
    
    // Validate Minutes
    if (!isValidInput(minutesValue)) {
        paraError.textContent = "Please enter a non-negative whole number for minutes.";
        userMinInput.focus();
        return;
    }
    
    // Convert to numbers
    const hours = parseInt(hoursValue);
    const minutes = parseInt(minutesValue);
    
    // Calculate seconds
    const totalSeconds = (SECONDS_PER_HOUR * hours) + (60 * minutes);
    
    // Display result
    printSeconds(totalSeconds);
}

function printSeconds(seconds) {
    // Only display if the result is valid
    if (seconds >= 0) {
        paraSeconds.classList.add("seconds-time");
        paraSeconds.textContent = `${seconds} seconds`;
    }
}