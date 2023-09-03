function playGame(playerSelection, computerSelection) {
  let playerWon = false;
  
  if (playerSelection === computerSelection) {
    return 'Tie Game!';
  }

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Scissors') {
      playerWon = true;
    } else if (computerSelection === 'Paper') {
      playerWon = false;
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Paper') {
      playerWon = true;
    } else if (computerSelection === 'Rock') {
      playerWon = false;
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      playerWon = true;
    } else if (computerSelection === 'Scissors') {
      playerWon = false;
    }
  }
  
  if (playerWon) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
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