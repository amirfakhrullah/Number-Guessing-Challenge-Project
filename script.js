let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 9 + 1);

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  if (Math.abs(humanGuess - secretNumber) < Math.abs(computerGuess - secretNumber)) {
    return true;
  } else {
    return false;
  };
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  };
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
