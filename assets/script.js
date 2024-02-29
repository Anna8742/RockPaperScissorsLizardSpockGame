//Prompt user to enter name when the page loads
var text;
    var user = prompt("Please enter your name to start the game:");
    if (user == null || user == "") {
        alert("Wrong input. Cancelled the game.");
        location.reload();
    } else {
        text = user;
    }
document.getElementById("userName").innerHTML = text.toUpperCase();
document.getElementById("player").innerHTML = text.toUpperCase();

// Time limit in seconds
var timer = 15; 
// Variable to store 1 second time interval 
var timerInterval;
// Array of possible choices
var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
// Variable to store computer's score
var computerScore = 0;
// Variable to store player's score
var playerScore = 0;
// Variable to store left rounds to play
var roundsLeft = 10;
// Variable to store the result of user's choice: winner, tie, looser
var result_of_choice;
// Variable to store players choice
var playerChoice;
 

// Function to apply time interval to timerInterval variable
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}
// Function to update Timer by subtracting seconds
function updateTimer() {
    timer--;
    document.getElementById('time').innerText = timer;
    if (timer <= 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
        endGame();
    }
}
// Function to play game
function play(playerChoice) {
    // clearing timerInterval variable
    clearInterval(timerInterval);
    // Randomly select computer's choice and assign to variable
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Print compute'r choice to HTML document
    document.getElementById('comp-choice').innerHTML = `${computerChoice}`.toUpperCase();
    // Print user's choice to HTML document
    document.getElementById('result').innerHTML = `${playerChoice}`.toUpperCase();
    // Determine the result based on player's and computer's choice
    if (playerChoice === computerChoice) {
        result_of_choice= "YOU CHOSE: " + playerChoice.toUpperCase()+ ", COMPUTER CHOSE: " 
        + computerChoice.toUpperCase() +  ". IT'S A TIE!";
    } else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
        result_of_choice=  "YOU CHOSE: " + playerChoice.toUpperCase()+ ", COMPUTER CHOSE: " 
        + computerChoice.toUpperCase() + ". YOU WON THIS ROUND! :-D ";
        // Adding player's score
        playerScore++;
    } else {
        result_of_choice= "YOU CHOSE: " + playerChoice.toUpperCase()+ ", COMPUTER CHOSE: " 
        + computerChoice.toUpperCase() + ". YOU LOST THIS ROUND! :-( ";
        // Adding computer's score
        computerScore++;
    }
    // Print to the html document result of user's choice, computer's and user's points 
    document.getElementById('result_of_choice').innerText = result_of_choice;
    document.getElementById('computer-score').innerHTML = `${computerScore}`;
    document.getElementById('user-points').innerHTML = `${playerScore}`;
    // Decrease rounds left and check if game is over
    roundsLeft--;
    document.getElementById('gameCounter').innerText = `ROUNDS LEFT: ${roundsLeft}`;
    // Determining if game needs to stop if no more rounds are left or if needs to start again
    if (roundsLeft === 0) {
        endGame();
    } else {
        startTimer();
    }
}
// Function to end game
function endGame() {
    // Reset the timer and display time
    timer = 15;
    roundsLeft = 10;
    document.getElementById('time').innerText = timer;
    clearInterval(timerInterval);
    // Message to be displayed when the game is finished based on the conditions
    var message;
    if (playerScore > computerScore) {
        message = "Game Over! You win the game! Final Scores:\nComputer: " + 
        computerScore + " " +text +": " + playerScore;
    } else if (playerScore < computerScore) {
        message = "Game Over! Computer wins the game! Final Scores:\nComputer: " + 
        computerScore + " " +text +": " + playerScore;
    } else {
        message = "It's a tie!";
    }
    alert(message);
}
// Function to restart the game
function restartGame() {
        clearInterval(timerInterval);
        // Inform user that game is restarted
        alert("Game restarted. Choose an option. ");
        // Reset the previous results, timer and rounds left
        computerScore = 0;
        playerScore = 0;
        timer = 15;
        roundsLeft = 11;
        play(playerChoice);
        startTimer();
}
startTimer();
// Add event listener to restart game button
document.getElementById('restartButton').addEventListener('click', restartGame);
        
    

   







