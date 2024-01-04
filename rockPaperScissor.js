function getComputerChoice() {
    let ch = Math.floor(Math.random() * 3);
    if (ch == 1) {
        return "rock";
    }
    else if (ch == 2) {
        return "paper";
    }
    else {
        return "scissors"
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie!";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        return "player won!";
    }
    else {
        return "computer won!";
    }
}
function game() {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    console.log("player choice: ", playerSelection);
    console.log("computer choice: ", computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}
game();
game();
game();
game();
game();