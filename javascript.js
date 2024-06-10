const body = document.querySelector("body");
const humanRock = document.querySelector(".rock");
const humanPaper = document.querySelector(".paper");
const humanScissors = document.querySelector(".scissors");

const choices = document.createElement("div");
choices.classList.add("choices");
body.appendChild(choices);

const roundResult = document.createElement("div");
roundResult.classList.add("roundResult");
body.appendChild(roundResult);

const score = document.createElement("div");
score.classList.add("score");
body.appendChild(score);

const whoWon = document.createElement("h2");
whoWon.classList.add("whoWon");
body.appendChild(whoWon);

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        let choice = "rock";
        return choice;
    } else if (number === 1) {
        let choice = "paper";
        return choice;
    } else {
        let choice = "scissors";
        return choice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        choices.textContent = humanChoice + " vs " + computerChoice;
        roundResult.textContent = "Draw!";
        score.textContent = humanScore + ":" + computerScore;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        choices.textContent = humanChoice + " vs " + computerChoice;
        roundResult.textContent = "You lose! Paper beats Rock!";
        computerScore++;
        score.textContent = humanScore + ":" + computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        choices.textContent = humanChoice + " vs " + computerChoice;
        roundResult.textContent = "You win! Rock beats scissors!";
        humanScore++;
        score.textContent = humanScore + ":" + computerScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        choices.textContent = humanChoice + " vs " + computerChoice;
        roundResult.textContent = "You win! Paper beats Rock!";
        humanScore++;
        score.textContent = humanScore + ":" + computerScore;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        choices.textContent = humanChoice + " vs " + computerChoice;
        roundResult.textContent = "Draw!";
        score.textContent = humanScore + ":" + computerScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        choices.textContent = humanChoice + " vs " + computerChoice;
        roundResult.textContent = "You lose! Scissors beat Paper!";
        computerScore++;
        score.textContent = humanScore + ":" + computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        choices.textContent = humanChoice + " vs " + computerChoice;
        roundResult.textContent = "You lose! Rock beats Scissors!";
        computerScore++;
        score.textContent = humanScore + ":" + computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        choices.textContent = humanChoice + " vs " + computerChoice;
        roundResult.textContent = "You win! Scissors beat Paper!";
        humanScore++;
        score.textContent = humanScore + ":" + computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        choices.textContent = humanChoice + " vs " + computerChoice;
        roundResult.textContent = "Draw!";
        score.textContent = humanScore + ":" + computerScore;
    } else {
        roundResult.textContent = "Something went wrong...";
    }

    if (humanScore === 5) {
        window.alert("YOU WON!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        window.alert("YOU LOST! :(");
        humanScore = 0;
        computerScore = 0;
    }
}

humanRock.addEventListener("click", function () {
    playRound("rock", getComputerChoice())
});

humanPaper.addEventListener("click", function() {
    playRound("paper", getComputerChoice())
});

humanScissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice())
});