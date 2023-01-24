function rpsRound(getComputerSelection, PlayerSelection) {
   
    function getComputerChoice () {
        randomNum = Math.floor(Math.random() * 9) + 1;
        
        return(randomNum >= 1 && randomNum <= 3) ? ("rock") :
            (randomNum >= 4 && randomNum <= 6) ? ("paper") :
            ("scissors");
    }
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    //function getPlayerChoice() {
    //    let playerInput = prompt("Rock, Paper or Scissors?");
    //    
    //    //need to input a empty input catcher if player enters nothing and clicks OK
    //    //or the players makes a typo, currently it just runs to the last case in rpsValue

    //    return (playerInput === "rock") ? ("rock") :
    //        (playerInput === "paper") ? ("paper") :
    //        (playerInput === "scissors") ? ("scissors") :
    //        (playerInput === "") ? ("blank") :
    //        alert("That's not Rock Paper Scissors!, You made a typo");  
    //}
    //let playerSelection = getPlayerChoice();
    //console.log(playerSelection);
   

    let rpsValue = computerSelection.concat(playerSelection);

    //maybe I can use backticks to improve readability and make code less verbose
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
        case "scissorspaper":
            return(score = -1), alert("You lose! Scissors beats paper");
            break;
        default :
            alert("Are you OK?");        
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

//if (confirm("Wanna play Rock Paper Scissors?")) {
//    game();
//  } else {
//    alert("Fine, do whatever you want!");
//  }

const buttons = document.querySelectorAll ('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        console.log(playerSelection);
        rpsRound();
    });
});

const bodyClass = document.querySelector('body');

const playDiv = document.createElement('div');
playDiv.classList.add('playDiv');
bodyClass.appendChild(playDiv);

const playButton = document.createElement('button',);
playButton.classList.add('playButton');
playButton.textContent = 'Play';
playButton.style.marginTop = "10px";
playDiv.appendChild(playButton); 
playButton.onclick = () => game();









    
