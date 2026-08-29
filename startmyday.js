let morning = localStorage.getItem("morning");
let afternoon = localStorage.getItem("afternoon");
let evening = localStorage.getItem("evening");

let plotTwist = "";
let twistResponse = "";


// Show the saved morning plan
document.getElementById("morning-plan").innerText = morning;


// Go to afternoon
function showAfternoon() {

    document.getElementById("morning-screen").style.display = "none";

    document.getElementById("afternoon-screen").style.display = "block";

    document.getElementById("afternoon-plan").innerText = afternoon;

    window.scrollTo(0, 0);
}


// Choose a random plot twist based on the afternoon activity
function showPlotTwist() {

    document.getElementById("afternoon-screen").style.display = "none";

    document.getElementById("plot-twist-screen").style.display = "block";


    if (afternoon.includes("Beach")) {

        let twists = [
            "It suddenly starts pouring rain 🌧️",
            "Traffic to the beach is terrible 🚗",
            "The beach is unexpectedly closed 🏖️"
        ];

        let randomNumber =
            Math.floor(Math.random() * twists.length);

        plotTwist = twists[randomNumber];
    }


    else if (afternoon.includes("Shopping")) {

        let twists = [
            "The store you wanted to visit is closed 😭",
            "The thing you wanted is completely sold out 🛍️",
            "You realize you left your wallet at home 💳"
        ];

        let randomNumber =
            Math.floor(Math.random() * twists.length);

        plotTwist = twists[randomNumber];
    }


    else if (afternoon.includes("Picnic")) {

        let twists = [
            "Someone forgot all the picnic food 🧺",
            "It suddenly starts raining 🌧️",
            "A swarm of ants discovers your picnic 🐜"
        ];

        let randomNumber =
            Math.floor(Math.random() * twists.length);

        plotTwist = twists[randomNumber];
    }


    else if (afternoon.includes("Amusement Park")) {

        let twists = [
            "Your favorite ride is closed 🎢",
            "The line for the ride is two hours long 😭",
            "It starts raining right when you arrive 🌧️"
        ];

        let randomNumber =
            Math.floor(Math.random() * twists.length);

        plotTwist = twists[randomNumber];
    }


    document.getElementById("plot-twist-text").innerText =
        plotTwist;

    window.scrollTo(0, 0);
}


// Save the user's response to the plot twist
function chooseTwistResponse(choice) {

    twistResponse = choice;

    document.getElementById("plot-twist-screen").style.display =
        "none";

    document.getElementById("evening-screen").style.display =
        "block";

    document.getElementById("evening-plan").innerText =
        evening;

    window.scrollTo(0, 0);
}


// Show the final receipt
function showReceipt() {

    document.getElementById("evening-screen").style.display =
        "none";

    document.getElementById("receipt-screen").style.display =
        "block";


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