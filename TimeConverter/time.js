let userHoursInput = document.getElementById("hoursInput");
let userMinInput = document.getElementById("minutesInput");
let BtnElement = document.getElementById("convertBtn");
let paraError = document.getElementById("errorMsg");
let paraSeconds = document.getElementById("timeInSeconds");

BtnElement.addEventListener("click", ConvertToSec);

function ConvertToSec() {
    paraSeconds.textContent = "";
    paraSeconds.classList.remove("secondsTime");
    let hours = userHoursInput.value;
    if (hours === "") {
        paraError.textContent = "Please enter a valid number of hours";
        return;
    }
    let minutes = userMinInput.value;
    if (minutes === "") {
        paraError.textContent = "Please enter a valid number of minutes";
        return;
    }
    paraError.textContent = "";
    printSeconds(parseInt(hours), parseInt(minutes));
}

function printSeconds(hrs, min) {
    let seconds = 3600 * hrs + 60 * min;
    paraSeconds.classList.add("secondsTime")
    paraSeconds.textContent = seconds + "s";
    return;
}