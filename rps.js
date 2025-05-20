function getComputerChoice() {
    let num = Math.random() * 3;
    let hand;
    if (num < 1) {
        hand = "rock";
    }
    else if (num > 2) {
        hand = "scissors";
    }
    else {
        hand = "paper"
    }
    return hand;
}

console.log(getComputerChoice());