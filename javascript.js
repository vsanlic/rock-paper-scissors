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

function getHumanChoice() {
    return prompt("Choose between rock, paper or scissors");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log(humanChoice + " vs " + computerChoice);
            console.log("Draw!");
            console.log(humanScore + ":" + computerScore);
            console.log("------------------------------");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(humanChoice + " vs " + computerChoice);
            console.log("You lose! Paper beats Rock!");
            computerScore++;
            console.log(humanScore + ":" + computerScore);
            console.log("------------------------------");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(humanChoice + " vs " + computerChoice);
            console.log("You win! Rock beats scissors!");
            humanScore++;
            console.log(humanScore + ":" + computerScore);
            console.log("------------------------------");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(humanChoice + " vs " + computerChoice);
            console.log("You win! Paper beats Rock!");
            humanScore++;
            console.log(humanScore + ":" + computerScore);
            console.log("------------------------------");
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log(humanChoice + " vs " + computerChoice);
            console.log("Draw!");
            console.log(humanScore + ":" + computerScore);
            console.log("------------------------------");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(humanChoice + " vs " + computerChoice);
            console.log("You lose! Scissors beat Paper!");
            computerScore++;
            console.log(humanScore + ":" + computerScore);
            console.log("------------------------------");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(humanChoice + " vs " + computerChoice);
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
            console.log(humanScore + ":" + computerScore);
            console.log("------------------------------");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(humanChoice + " vs " + computerChoice);
            console.log("You win! Scissors beat Paper!");
            humanScore++;
            console.log(humanScore + ":" + computerScore);
            console.log("------------------------------");
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log(humanChoice + " vs " + computerChoice);
            console.log("Draw!");
            console.log(humanScore + ":" + computerScore);
            console.log("------------------------------");
        } else {
            console.log("Something went wrong...");
            console.log("------------------------------");
        }
    }

    for (i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        console.log(playRound(humanSelection.toLowerCase(), computerSelection));
    } 
}

console.log(playGame());