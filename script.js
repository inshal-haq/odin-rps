function playGame(playerSelection, computerSelection) {
  let playerWon = false;
  
  if (playerSelection === computerSelection) {
    return 'Tie Game!';
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      playerWon = true;
    } else if (computerSelection === 'paper') {
      playerWon = false;
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      playerWon = true;
    } else if (computerSelection === 'rock') {
      playerWon = false;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerWon = true;
    } else if (computerSelection === 'scissors') {
      playerWon = false;
    }
  }
  
  if (playerWon) {
    return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
  } else {
    return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
  }
}

function getComputerChoice() {
  const choice = Math.floor((Math.random() * 3) + 1);

  switch (choice) {
    case 1: 
      return 'rock';
    case 2: 
      return 'paper';
    case 3: 
      return 'scissors';
  }
}

function capitalize(text) {
  const firstLetter = text.substr(0,1).toUpperCase();
  const rest = text.substr(1).toLowerCase();
  return firstLetter + rest;
}