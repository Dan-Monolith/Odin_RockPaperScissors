function getComputerChoice () {
    randomNum = Math.floor(Math.random() * 9) + 1;
    
    if (randomNum >= 1 && randomNum <= 3) {
        return ("rock");
    } else if (randomNum >= 4 && randomNum <= 6) {
        return ("paper");
    } else {
        return ("scissors");
    }
}
let computerSelection = getComputerChoice();
console.log(computerSelection);

function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper or Scissors?");
    playerInput = playerInput.toLowerCase();

    if (playerInput === "rock") {
        return ("rock");
    } else if (playerInput === "paper") {
        return ("paper");
    } else if (playerInput === "scissors") {
        return ("scissors");
    } else {
        alert("That's not RPS! Please reload the page");
    }        
}
let playerSelection = getPlayerChoice();
console.log(playerSelection);

function rpsRound(playerSelection, computerSelection) {
   
    function getComputerChoice () {
        randomNum = Math.floor(Math.random() * 9) + 1;
        
        if (randomNum >= 1 && randomNum <= 3) {
            return ("rock");
        } else if (randomNum >= 4 && randomNum <= 6) {
            return ("paper");
        } else {
            return ("scissors");
        }
    }
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    function getPlayerChoice() {
        let playerInput = prompt("Rock, Paper or Scissors?");
        playerInput = playerInput.toLowerCase();
    
        if (playerInput === "rock") {
            return ("rock");
        } else if (playerInput === "paper") {
            return ("paper");
        } else if (playerInput === "scissors") {
            return ("scissors");
        } else {
            alert("That's not RPS! Please reload the page");
        }        
    }
    let playerSelection = getPlayerChoice();
    console.log(playerSelection);
   
    let rpsValue = computerSelection.concat(playerSelection);

    if (rpsValue === "rockrock") {
        return 0, alert("Draw");
    } else if (rpsValue === "rockpaper") {
        return -1, alert("You win! Paper beats rock");
    } else if (rpsValue === "rockscissors") {
        return 1, alert("You lose! Rock beats scissors");
    } else if (rpsValue === "paperpaper") {
        return 0, alert("Draw");
    } else if (rpsValue === "paperscissors") {
        return -1, alert("You win! Scissors beats paper");
    } else if (rpsValue === "papperrock") {
        return 1, alert("You lose! Paper beats rock");
    } else if (rpsValue === "scissorsscissors") {
        return 0, alert("Draw");
    } else if (rpsValue === "scissorsrock") {
        return -1, alert("You win! Rock beats scissors");
    } else { 
        return 1, alert("You lose! Scissors beats paper");
    }
}

function game() {
        for (let i = 0; i < 5; i++) {
            getComputerChoice();
            getPlayerChoice();
            rpsRound();
    }    
}
