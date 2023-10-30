let low = 1;
let high = 10;
let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
let attempts = 3;
let message = document.getElementById("message");

function checkGuess() {
    let userInput = parseInt(document.getElementById("userInput").value);

    if (attempts > 1) {
        if (userInput === correct_ans) {
            message.textContent = "You Win!";
        } else if (userInput < correct_ans) {
            message.textContent = "Correct answer is greater! You have " + (attempts - 1) + " attempts left.";
        } else {
            message.textContent = "Correct answer is smaller! You have " + (attempts - 1) + " attempts left.";
        }
    } else {
        if (userInput === correct_ans) {
            message.textContent = "You Win!";
        } else {
            message.textContent = "You lose! The correct answer was " + correct_ans + ".";
        }
    }

    attempts--;
}
