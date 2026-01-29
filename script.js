function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  const computerWeapon = ["paper", "rock", "scissors"];

  return computerWeapon[choice];
}

function getHumanChoice() {
  return prompt("Choose your weapon").toLocaleLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(
    `human Choice ${humanChoice} e computer Choice ${computerChoice}`,
  );

  if (humanChoice === computerChoice) {
    console.log("Its a tie!");
    return;
  }

  const humanWins = {
    paper: "rock",
    rock: "scissors",
    scissors: "paper",
  };

  if (humanWins[humanChoice] === computerChoice) {
    humanScore += 1;
    console.log(`Human win: Score ${humanScore} vs ${computerScore}`);
  } else {
    computerScore += 1;
    console.log(`Computer win: Score ${computerScore} vs ${humanScore}`);
  }
}

function playGame() {
  for (let c = 0; c < 5; c++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a tie!");
  }
}

playGame();
