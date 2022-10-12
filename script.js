function rpsRound(getComputerSelection, getPlayerSelection) {
   
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
    
        //if (playerInput === undefined) {
        //    alert("Don't be bitch, play game!");
        //}
        playerInput = playerInput.toLowerCase();
        if (playerInput === "rock") {
            return ("rock");
        } else if (playerInput === "paper") {
            return ("paper");
        } else if (playerInput === "scissors") {
            return ("scissors");
        } else {
            alert("That's not Rock Paper Scissors! Please reload the page");
        }        
    }
    let playerSelection = getPlayerChoice();
    console.log(playerSelection);
   
    let rpsValue = computerSelection.concat(playerSelection);

    if (rpsValue === "rockrock") {
        return (score = 0), alert("Draw");
    } else if (rpsValue === "rockpaper") {
        return (score = 1), alert("You win! Paper beats rock");
    } else if (rpsValue === "rockscissors") {
        return (score = -1), alert("You lose! Rock beats scissors");
    } else if (rpsValue === "paperpaper") {
        return (score = 0), alert("Draw");
    } else if (rpsValue === "paperscissors") {
        return (score = 1), alert("You win! Scissors beats paper");
    } else if (rpsValue === "paperrock") {
        return (score = -1), alert("You lose! Paper beats rock");
    } else if (rpsValue === "scissorsscissors") {
        return (score = 0), alert("Draw");
    } else if (rpsValue === "scissorsrock") {
        return (score = 1), alert("You win! Rock beats scissors");
    } else { 
        return(score = -1), alert("You lose! Scissors beats paper");
    }
}
let score;

function game() {
    let finalScore = 0;

    for (let i = 0; i < 5; i++) {
        rpsRound();
        finalScore += score;
    }
    if (finalScore > 0) {
        alert("You win the game! Good job old boy!");
    } else if (finalScore < 0) {
        alert("Sorry, you lost the match old bean");
    } else {
        alert("Wow, it was a draw!");
    }
  
}

if (confirm("Wanna play Rock Paper Scissors?")) {
    game();
  } else {
    alert("Fine, do whatever you want!");
  }