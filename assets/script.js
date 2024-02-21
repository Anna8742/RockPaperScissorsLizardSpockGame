// function to prompt user to enter name

function enterName() {
    let text;
    let user = prompt("Please enter your name:");
    if (user == null || user == "") {
        text = user;
    }
    document.getElementById("userName").innerHTML = text;
}