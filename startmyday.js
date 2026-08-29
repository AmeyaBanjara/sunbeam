let morning = localStorage.getItem("morning");
let afternoon = localStorage.getItem("afternoon");
let evening = localStorage.getItem("evening");

let plotTwist = "";
let twistResponse = "";


// Show morning
document.getElementById("morning-plan").innerText = morning;


// Go to afternoon
function showAfternoon() {

    document.getElementById("morning-screen").style.display = "none";
    document.getElementById("afternoon-screen").style.display = "block";

    document.getElementById("afternoon-plan").innerText = afternoon;

    window.scrollTo(0, 0);
}


// Show a random plot twist
function showPlotTwist() {

    document.getElementById("afternoon-screen").style.display = "none";
    document.getElementById("plot-twist-screen").style.display = "block";

    let twists = [];


    // ================= BEACH =================

    if (afternoon.includes("Beach")) {

        twists = [
            {
                text: "It suddenly starts pouring rain at the beach 🌧️",
                choices: [
                    "Dance in the rain 🌧️",
                    "Find a cute café ☕",
                    "Have a movie day instead 🎬"
                ]
            },

            {
                text: "Traffic to the beach is terrible 🚗",
                choices: [
                    "Blast music and enjoy the drive 🎶",
                    "Find a closer beach 🏖️",
                    "Turn around and get food 🍟"
                ]
            },

            {
                text: "The beach is unexpectedly closed 🏖️",
                choices: [
                    "Explore somewhere new 🗺️",
                    "Find another beach 🌊",
                    "Go get ice cream instead 🍦"
                ]
            }
        ];
    }


    // ================= SHOPPING =================

    else if (afternoon.includes("Shopping")) {

        twists = [
            {
                text: "The store you wanted to visit is closed 😭",
                choices: [
                    "Go thrifting instead 👗",
                    "Explore another store 🛍️",
                    "Get food instead 🍜"
                ]
            },

            {
                text: "The thing you wanted is completely sold out 🛍️",
                choices: [
                    "Find something unexpected ✨",
                    "Check another store 🔎",
                    "Save your money 💰"
                ]
            },

            {
                text: "You realize you left your wallet at home 💳",
                choices: [
                    "Window shop instead 👀",
                    "Go back for it 🚗",
                    "Find something free to do 🌳"
                ]
            }
        ];
    }


    // ================= PICNIC =================

    else if (afternoon.includes("Picnic")) {

        twists = [
            {
                text: "Someone forgot all of the picnic food 🧺",
                choices: [
                    "Order pizza to the park 🍕",
                    "Make a snack run 🥨",
                    "Laugh about it and stay anyway 😂"
                ]
            },

            {
                text: "It suddenly starts raining during your picnic 🌧️",
                choices: [
                    "Have the picnic in the car 🚗",
                    "Run to a café ☕",
                    "Dance in the rain 🌧️"
                ]
            },

            {
                text: "A swarm of ants discovers your picnic 🐜",
                choices: [
                    "Move to another spot 🌳",
                    "Protect the snacks at all costs 🫡",
                    "Give up and get ice cream 🍦"
                ]
            }
        ];
    }


    // ================= AMUSEMENT PARK =================

    else if (afternoon.includes("Amusement Park")) {

        twists = [
            {
                text: "Your favorite ride is closed 🎢",
                choices: [
                    "Try a different ride 🎡",
                    "Get theme park food 🍦",
                    "Wait and hope it reopens ⏰"
                ]
            },

            {
                text: "The line for your favorite ride is TWO HOURS long 😭",
                choices: [
                    "Wait it out 🫡",
                    "Find a shorter line 🎠",
                    "Go get snacks instead 🍿"
                ]
            },

            {
                text: "It starts raining right when you arrive 🌧️",
                choices: [
                    "Find an indoor ride 🎢",
                    "Buy a poncho and keep going 🌧️",
                    "Leave and find another adventure 🚗"
                ]
            }
        ];
    }


    // Pick one random plot twist
    let randomNumber = Math.floor(Math.random() * twists.length);

    let chosenTwist = twists[randomNumber];

    plotTwist = chosenTwist.text;


    // Show plot twist text
    document.getElementById("plot-twist-text").innerText =
        plotTwist;


    // Find the area where the response buttons go
    let buttonArea = document.getElementById("twist-buttons");

    // Clear old buttons
    buttonArea.innerHTML = "";


    // Create the 3 response buttons
    for (let i = 0; i < chosenTwist.choices.length; i++) {

        let button = document.createElement("button");

        button.type = "button";

        button.innerText = chosenTwist.choices[i];

        button.onclick = function() {

            chooseTwistResponse(chosenTwist.choices[i]);

        };

        buttonArea.appendChild(button);
    }


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


// Show final receipt
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
        "You chose: " + twistResponse;


    window.scrollTo(0, 0);
}