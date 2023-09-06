const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset');

const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
const winnerDiv = document.querySelector('#winner');

let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();
game();

function game() {
  rockBtn.addEventListener('click', () => {
    resultDiv.textContent = playRound('Rock', getComputerChoice());
  });
  
  paperBtn.addEventListener('click', () => {
    resultDiv.textContent = playRound('Paper', getComputerChoice());
  });
  
  scissorsBtn.addEventListener('click', () => {
    resultDiv.textContent = playRound('Scissors', getComputerChoice());
  });

  resetBtn.addEventListener('click', () => {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScore();
    winnerDiv.textContent = '';
  });
}

function playRound(playerMove, computerMove) {
  let playerWon = false;

  if (playerMove === computerMove) {
    score.ties++;
    updateScore();
    return 'Tie Game!';
  }

  if (playerMove === 'Rock') {
    if (computerMove === 'Scissors') {
      playerWon = true;
    } else if (computerMove === 'Paper') {
      playerWon = false;
    }

  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Paper') {
      playerWon = true;
    } else if (computerMove === 'Rock') {
      playerWon = false;
    }

  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      playerWon = true;
    } else if (computerMove === 'Scissors') {
      playerWon = false;
    }
  }

  if (playerWon) {
    score.wins++;
  } else {
    score.losses++;
  }

  updateScore();
  
  if (score.wins === 5) {
    winnerDiv.textContent = 'You Win!';
  } else if (score.losses === 5) {
    winnerDiv.textContent = 'Computer Wins';
  }
  
  return (playerWon) ?
    `You Win! ${playerMove} beats ${computerMove}` :
    `You Lose! ${computerMove} beats ${playerMove}`;
}

function getComputerChoice() {
  const choice = Math.floor((Math.random() * 3) + 1);

  switch (choice) {
    case 1: 
      return 'Rock';
    case 2: 
      return 'Paper';
    case 3: 
      return 'Scissors';
  }
}

function updateScore() {
  scoreDiv.textContent = 
    `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}