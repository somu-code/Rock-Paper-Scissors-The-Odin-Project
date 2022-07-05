let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection !== 'rock') && (playerSelection !== 'paper' && (playerSelection !== 'scissors'))) {
        return `Wrong input from the player ${playerSelection}`;
    }

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore = computerScore + 1;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === 'rock') {
        playerScore = playerScore + 1;
        return "You Won! Paper beats Rock";
    }

    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore = computerScore + 1;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore = playerScore + 1;
        return "You Won! Scissors beats Paper";
    }

    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore = computerScore + 1;
        return "You Lose! Rock beats Sissors";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore = playerScore + 1;
        return "You Won! Rock beats Sissors";
    }
    if (playerSelection === computerSelection) {
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
        return "It's a Tie."
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter you choice: ").toString().toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`The player Won! Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
    if (computerScore > playerScore) {
        console.log(`The computer Won! Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
    if (playerScore === computerScore) {
        console.log(`It's a Tie. Both scores are same Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
}

game();