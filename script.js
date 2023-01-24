// Accessing the buttons and text labels
const rockButton = document.getElementById("rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieText = document.getElementById("result-tie");
// Define constants to find errors in case of a typo
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
// Global variables to keep track of round results that I am not a fan of
let computerWinAmount = 0;
let playerWinAmount = 0;
let tieAmount = 0;

function clickListener(event) {
    // Exit, if not a button was clicked
    if (event.target.tagName !== "BUTTON") {
       return;
    }
    const playerSelection = event.target.id;
    const computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
 }
 const buttonCont = document.querySelectorAll("#button-container");
 buttonCont.forEach((button) => {
    button.addEventListener('click', clickListener)
 })
//document.getElementById("#button-container").addEventListener("click", clickListener);

const signs = [ROCK, PAPER, SCISSORS];

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return signs[choice];
}

// Group of functions to change text labels after rounds
function playerWin() {
    ++playerWinAmount;
    playerScore.innerHTML = "Your score is: " + playerWinAmount;
}

function computerWin() {
    ++computerWinAmount;
    computerScore.innerHTML = "The computer score is: " + computerWinAmount;
}

function tieWin() {
    ++tieAmount;
    tieText.innerHTML = "Tie rounds: " + tieAmount;
}

// Function that checks winning very inelegantly
function playRound(playerSelection, computerSelection) {
    if (playerSelection == ROCK &&
    computerSelection == ROCK) {
        tieWin();
    } else if (playerSelection == ROCK &&
    computerSelection == SCISSORS) {
        playerWin();
    } else if (playerSelection == ROCK &&
    computerSelection == PAPER) {
        computerWin();
    }

    if (playerSelection == PAPER &&
    computerSelection == ROCK) {
        playerWin();
    } else if (playerSelection == PAPER &&
    computerSelection == PAPER) {
        tieWin();
    } else if (playerSelection == PAPER &&
    computerSelection == SCISSORS) {
        computerWin();
    }

    if(playerSelection == SCISSORS &&
    computerSelection == ROCK) {
        computerWin();
    } else if (playerSelection == SCISSORS &&
    computerSelection == PAPER) {
        playerWin();
    } else if (playerSelection == SCISSORS &&
    computerSelection == SCISSORS) {
        tieWin();
    }

    if(computerWinAmount == 5) {
        alert("You lost! Better luck next time :(");
        reset();
    } else if (playerWinAmount == 5) {
        alert("You won! Congratulations! :)")
        reset();
    }
}

// Helper function to reset after game end
function reset() {
    playerScore.textContent = "Your score is: 0";
    computerScore.textContent = "The computer score is: 0";
    tieText.textContent = "Tie rounds: 0";
}
