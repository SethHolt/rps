function getComputerChoice() {
    let num = Math.random() * 3;
    let comHand;
    if (num < 1) {
        comHand = "r";
    }
    else if (num > 2) {
        comHand = "s";
    }
    else {
        comHand = "p"
    }
    return comHand;
}

function getHumanChoice() {
    let myHand = window.prompt("Rock, Paper, or Scissors?");
    if (myHand.toLowerCase() == "rock") {
        return "r";
    }
    else if (myHand.toLowerCase() == "paper") {
        return "p";
    }
    else if (myHand.toLowerCase() == "scissors") {
        return "s";
    }
    else {
        alert("Invalid selection");
        return;
    }
}

let humanScore = 0, computerScore = 0;

function playRound() {
    let player = getHumanChoice(), com = getComputerChoice();
    if (player == "r") {
        if (com == "r") {
            console.log("Draw!");
        }
        else if (com == "p") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        }
        else {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        }
    }
    else if (player == "p") {
        if (com = "r") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        }
        else if (com == "p") {
            console.log("Draw!");
        }
        else {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        }
    }
    else if (player == "s") {
        if (com = "r") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        }
        else if (com == "p") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        }
        else {
            console.log("Draw!");
        }
    }
//     else {
//         alert("Invalid selection");
//     }
    }

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        alert("You win!");
    }
    else if (computerScore > humanScore) {
        alert("You lose!");
    }
    else {
        alert("Draw!");
    }
    console.log(`${humanScore}:${computerScore}`);
}

playGame();