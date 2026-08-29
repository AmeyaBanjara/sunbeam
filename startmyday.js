let morning = localStorage.getItem("morning");
let afternoon = localStorage.getItem("afternoon");
let evening = localStorage.getItem("evening");

let plotTwist = "";
let twistResponse = "";


// Show the saved morning plan
document.getElementById("morning-plan").innerText = morning;


// Move to afternoon
function showAfternoon() {

    document.getElementById("morning-screen").style.display = "none";
    document.getElementById("afternoon-screen").style.display = "block";

    document.getElementById("afternoon-plan").innerText = afternoon;

    window.scrollTo(0, 0);
}


// Show a plot twist based on the afternoon activity
function showPlotTwist() {

    document.getElementById("afternoon-screen").style.display = "none";
    document.getElementById("plot-twist-screen").style.display = "block";


    if (afternoon.includes("Beach")) {
        plotTwist = "It suddenly starts pouring rain right before the beach 🌧️";
    }

    else if (afternoon.includes("Shopping")) {
        plotTwist = "The store you wanted to visit is unexpectedly closed 😭";
    }

    else if (afternoon.includes("Picnic")) {
        plotTwist = "Someone forgot all of the picnic food 🧺";
    }

    document.getElementById("plot-twist-text").innerText = plotTwist;

    window.scrollTo(0, 0);
}


// Save what the user decides to do
function chooseTwistResponse(choice) {

    twistResponse = choice;

    document.getElementById("plot-twist-screen").style.display = "none";
    document.getElementById("evening-screen").style.display = "block";

    document.getElementById("evening-plan").innerText = evening;

    window.scrollTo(0, 0);
}


// Show the final receipt
function showReceipt() {

    document.getElementById("evening-screen").style.display = "none";
    document.getElementById("receipt-screen").style.display = "block";

    document.getElementById("receipt-morning").innerText =
        "Morning: " + morning;

    document.getElementById("receipt-afternoon").innerText =
        "Afternoon: " + afternoon;

    document.getElementById("receipt-evening").innerText =
        "Evening: " + evening;

    document.getElementById("receipt-twist").innerText =
        "Plot Twist: " + plotTwist;

    document.getElementById("receipt-response").innerText =
        "Your Choice: " + twistResponse;

    window.scrollTo(0, 0);
}