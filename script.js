let morning = "";
let afternoon = "";
let evening = "";


// Show the follow-up options
function showOptions(optionId) {

    let allOptions = document.querySelectorAll(".hidden-options");

    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = "none";
    }

    document.getElementById(optionId).style.display = "block";
}


// Highlight whichever smaller option was clicked
function selectButton(button) {

    let optionBox = button.parentElement;

    let buttons = optionBox.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }

    button.classList.add("selected");
}


// Check whether all 3 parts of the day have been selected
function checkIfReady() {

    if (
        morning !== "" &&
        afternoon !== "" &&
        evening !== ""
    ) {
        document.getElementById("start-day-button").style.display =
            "inline-block";
    }
}


// Save morning choice
function chooseMorning(choice, button) {

    morning = choice;

    selectButton(button);

    document.getElementById("morning-result").innerText =
        "Morning: " + morning;

    checkIfReady();
}


// Save afternoon choice
function chooseAfternoon(choice, button) {

    afternoon = choice;

    selectButton(button);

    document.getElementById("afternoon-result").innerText =
        "Afternoon: " + afternoon;

    checkIfReady();
}


// Save evening choice
function chooseEvening(choice, button) {

    evening = choice;

    selectButton(button);

    document.getElementById("evening-result").innerText =
        "Evening: " + evening;

    checkIfReady();
}


// Save choices and go to the experience page
function startMyDay() {

    localStorage.setItem("morning", morning);
    localStorage.setItem("afternoon", afternoon);
    localStorage.setItem("evening", evening);

    window.location.href = "startmyday.html";
}