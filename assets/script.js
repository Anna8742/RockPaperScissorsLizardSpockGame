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
// Variable to store the 
var result_of_choice;

// Function to apply time interval to timerInterval variable
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}



