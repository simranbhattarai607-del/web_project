let userScore = 0;
let compScore = 0;

function play(userChoice) {
    let choices = ["rock", "paper", "scissors"];
    let compChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === compChoice) {
        result = "It's a Draw!";
    } 
    else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        result = "You Win!";
        userScore++;
    } 
    else {
        result = "You Lose!";
        compScore++;
    }

    document.getElementById("result").innerText =
    `You: ${userChoice} | Computer: ${compChoice} → ${result}`;

    document.getElementById("userScore").innerText = userScore;
    document.getElementById("compScore").innerText = compScore;
}