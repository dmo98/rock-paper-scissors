function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    }
    else if (randomNumber == 1) {
        return "paper";
    }
    else if (randomNumber == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Enter one of the following: rock, paper or scissors: ');
    if (humanChoice.toLowerCase() == 'rock' || humanChoice.toLowerCase() == 'paper' || humanChoice.toLowerCase() == 'scissors') {
        return humanChoice.toLowerCase();
    }
    else {
        console.log('invalid option selected: ' + humanChoice + '. Select either rock, paper or scissors!')
        return null;
    }
}


function playGame() {
    // initialize player scores
    let humanScore = 0;
    let computerScore = 0;
    let ties_or_noresult = 0;

    function playRound(humanChoice, computerChoice) {
        // invalid option entered by the user
        if (humanChoice === null) {
            ties_or_noresult += 1;
            return;
        }
        // scenarios where human wins
        else if (
            (humanChoice == 'rock' && computerChoice == 'scissors') || 
            (humanChoice == 'paper' && computerChoice == 'rock') ||
            (humanChoice == 'scissors' && computerChoice == 'paper')
        ) {
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
        // tie
        else if (humanChoice == computerChoice) {
            ties_or_noresult += 1;
            console.log(`Tie! You both chose ${humanChoice}`);
        }
        // scenarios where computer wins
        else {
            computerScore += 1;
            console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        }
    
    }

    // play 5 rounds
    let numRounds = 5;
    for (let i = 0; i < numRounds; i++) {
        // get player choices
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log('\n' + 'Summary of the game: ');
    // output the result of the game
    if (humanScore > computerScore) {
        console.log(`You won! Human: ${humanScore}, Computer: ${computerScore}, Tie / No Result: ${ties_or_noresult}` + '\n');
    }
    else if (humanScore == computerScore) {
        console.log(`Tie game! Human: ${humanScore}, Computer: ${computerScore}, Tie / No Result: ${ties_or_noresult}` + '\n');
    }
    else {
        console.log(`You lost. Human: ${humanScore}, Computer: ${computerScore}, Tie / No Result: ${ties_or_noresult}` + '\n');
    }
}

playGame();