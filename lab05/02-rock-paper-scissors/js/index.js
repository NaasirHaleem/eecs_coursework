const choices = ["rock", "paper", "scissors"];

/*
// Optional Enhancement:
const rockIcon = "<i class='fa fa-hand-rock-o'></i>";
const paperIcon = "<i class='fa fa-hand-paper-o'></i>";
const scissorsIcon = "<i class='fa fa-hand-scissors-o'></i>";
*/

const getComputerChoice = () => {
    const index = parseInt(Math.random() * 3); // picks a number between 0 and 2.
    console.log("the computer picked: " + index); // writes the number to the console

    // gets the choice stored in the "choices"
    // array at the corresponding index:
    return choices[index];

};

const playGame = () => {
    const computerChoice = getComputerChoice();
    const userChoice = document.getElementById("user_choice").value;
    console.log(computerChoice, userChoice);
    document.querySelector('.computer-choice').innerHTML = 'Computer Choice: ' + computerChoice;
    document.querySelector('.user-choice').innerHTML = 'User Choice: ' + userChoice;

    if(userChoice === 'rock' && computerChoice === 'scissors') {
      document.querySelector('.results').innerHTML = 'User Wins';}

    else if(userChoice === 'rock' && computerChoice === 'paper') {
        document.querySelector('.results').innerHTML = 'Computer Wins';
    }

    else if(userChoice === 'rock' && computerChoice === 'rock') {
        document.querySelector('.results').innerHTML = 'tie';
    }


    else if(userChoice === 'scissors' && computerChoice === 'paper') {
            document.querySelector('.results').innerHTML = 'User wins';
        }
    else if(userChoice === 'scissors' && computerChoice === 'rock') {
                document.querySelector('.results').innerHTML = 'Computer wins';}
    else if(userChoice === 'scissors' && computerChoice === 'scissors') {
        document.querySelector('.results').innerHTML = 'Tie';
     }
    else if(userChoice === 'paper' && computerChoice === 'rock') {
                 document.querySelector('.results').innerHTML = 'User wins';
            }
    else if(userChoice === 'paper' && computerChoice === 'scissors') {
                 document.querySelector('.results').innerHTML = 'Computer wins';
            }
    else if(userChoice === 'paper' && computerChoice === 'paper') {
                  document.querySelector('.results').innerHTML = 'Tie';
            }

    // YOUR CODE BELOW:
    // write logic to determine who wins and then output a message to
    // the #output element, using if / else statements here....


};

document.querySelector('button').onclick = playGame;
