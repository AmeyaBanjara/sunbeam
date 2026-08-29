// These variables remember the user's choices
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


// Highlight whichever button was clicked
function selectButton(button) {

    // Find the box containing this button
    let optionBox = button.parentElement;

    // Find all buttons inside that box
    let buttons = optionBox.querySelectorAll("button");

    // Remove the selected look from all of them
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }

    // Highlight the button that was clicked
    button.classList.add("selected");
}


// Save morning choice
function chooseMorning(choice, button) {

    morning = choice;

    selectButton(button);

    document.getElementById("morning-result").innerText =
        "Morning: " + morning;
}


// Save afternoon choice
function chooseAfternoon(choice, button) {

    afternoon = choice;

    selectButton(button);

    document.getElementById("afternoon-result").innerText =
        "Afternoon: " + afternoon;
}


// Save evening choice
function chooseEvening(choice, button) {

    evening = choice;

    selectButton(button);

    document.getElementById("evening-result").innerText =
        "Evening: " + evening;
}