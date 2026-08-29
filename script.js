// These variables remember the user's choices
let morning = "";
let afternoon = "";
let evening = "";


// Show the follow-up options for an activity
function showOptions(optionId) {

    // Find all of the follow-up option boxes
    let allOptions = document.querySelectorAll(".hidden-options");

    // Hide them
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = "none";
    }

    // Show the one the user just clicked
    document.getElementById(optionId).style.display = "block";
}


// Save the morning choice
function chooseMorning(choice) {

    morning = choice;

    document.getElementById("morning-result").innerText =
        "Morning: " + morning;
}


// Save the afternoon choice
function chooseAfternoon(choice) {

    afternoon = choice;

    document.getElementById("afternoon-result").innerText =
        "Afternoon: " + afternoon;
}


// Save the evening choice
function chooseEvening(choice) {

    evening = choice;

    document.getElementById("evening-result").innerText =
        "Evening: " + evening;
}