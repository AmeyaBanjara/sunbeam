<!DOCTYPE html>
<html>
<head>
    <title>Perfect Day</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Build Your Perfect Day ☀️</h1>

    <p>How would you like to start your day?:</p>

    <button onclick="chooseActivity('Beach')">Beach 🏖️</button>
    <button onclick="chooseActivity('Brunch')">Brunch 🥞</button>
    <button onclick="chooseActivity('Shopping')">Shopping 🛍️</button>

    <p id="result">Your choice will show here.</p>
    

    <script src="script.js"></script>
</body>
</html>






script

function chooseActivity(activity) {
    document.getElementById("result").innerText =
        "You chose: " + activity;
}


css

body {
    font-family: Verdana, Geneva, Tahoma, sans-serif, sans-serif;
    text-align: center;
    padding: 50px;
}

h1 {
    font-size: 40px;
}

button {
    padding: 15px 20px;
    margin: 10px;
    font-size: 18px;
    cursor: pointer;
}