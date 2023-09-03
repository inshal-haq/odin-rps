game();

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt('Please input your Move (rock, paper, scissors):');
    if (!playerChoice) break;
    
    playerChoice = playerChoice.toLowerCase();
    console.log(playRound(playerChoice, getComputerChoice()));
  }
}

function playRound(playerMove, computerMove) {
  let playerWon = false;

  if (playerMove === computerMove) {
    return 'Tie Game!';
  }

  if (playerMove === 'rock') {
    if (computerMove === 'scissors') {
      playerWon = true;
    } else if (computerMove === 'paper') {
      playerWon = false;
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'paper') {
      playerWon = true;
    } else if (computerMove === 'rock') {
      playerWon = false;
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      playerWon = true;
    } else if (computerMove === 'scissors') {
      playerWon = false;
    }
  }
  
  return (playerMove) ?
    `You Win! ${capitalize(playerMove)} beats ${capitalize(computerMove)}` :
    `You Lose! ${capitalize(computerMove)} beats ${capitalize(playerMove)}`;
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