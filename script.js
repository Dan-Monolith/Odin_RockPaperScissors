function rpsRound(getComputerSelection, getPlayerSelection) {
   
    function getComputerChoice () {
        randomNum = Math.floor(Math.random() * 9) + 1;
        
        return(randomNum >= 1 && randomNum <= 3) ? ("rock") :
            (randomNum >= 4 && randomNum <= 6) ? ("paper") :
            ("scissors");
    }
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    function getPlayerChoice() {
        let playerInput = prompt("Rock, Paper or Scissors?");
        
        return (playerInput === "rock") ? ("rock") :
            (playerInput === "paper") ? ("paper") :
            (playerInput === "scissors") ? ("scissors") :
            alert("That's not Rock Paper Scissors!, You made a typo");  
    }
    let playerSelection = getPlayerChoice();
    console.log(playerSelection);
   
    let rpsValue = computerSelection.concat(playerSelection);

    switch (rpsValue) {
        case "rockrock":
            return (score = 0), alert("Draw");
            break;
        case "rockpaper":
            return (score = 1), alert("You win! Paper beats rock");
            break;
        case "rockscissors":
            return (score = -1), alert("You lose! Rock beats scissors");
            break;
        case "paperpaper":
            return (score = 0), alert("Draw");
            break;
        case "paperscissors":
            return (score = 1), alert("You win! Scissors beats paper");
            break;
        case "paperrock":
            return (score = -1), alert("You lose! Paper beats rock");
            break;
        case "scissorsscissors":
            return (score = 0), alert("Draw");
            break;
        case "scissorsrock":
            return (score = 1), alert("You win! Rock beats scissors");
            break;
        default:
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

    let message = (finalScore > 0) ? alert("You win the game! Good job old boy!"):
        (finalScore < 0) ? alert("Sorry, you lost the match old bean") :
        alert("Wow, it was a draw!");  
}

if (confirm("Wanna play Rock Paper Scissors?")) {
    game();
  } else {
    alert("Fine, do whatever you want!");
  }