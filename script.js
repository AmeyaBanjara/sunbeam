function chooseActivity(activity) {
    document.getElementById("result").innerText =
        "You chose: " + activity;
}

function showBeachOptions() {
    document.getElementById("beach-options").style.display = "block";
}

function chooseBeach(person) {
    document.getElementById("result").innerText =
        "You chose: Beach with " + person;
}