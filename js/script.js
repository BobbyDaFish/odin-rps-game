let playing = true;
let userPlay;
let compPlay;
let result;

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  

function createComputerChoice() { //Computer player random choice of rock, paper, or scissors
    let compChoice = getRandomIntInclusive(1,3);
    switch (compChoice) {
        case 1:
            compChoice = "rock";
            return compChoice;
            break;

        case 2:
            compChoice = "scissors";
            return compChoice;
            break;

        case 3:
            compChoice = "paper";
            return compChoice;
            break;
    }
}

function getWinner(compPlay, userPlay){ //Compare user input and random computer choice to determine winner
    let outcome;
    if(compPlay === userPlay){
        outcome = "draw";
    }
    else{
        switch (userPlay){
            case "rock":
                if(compPlay === "paper"){
                    outcome = "lose";
                }
                else{
                    outcome = "win";
                }
                    break;
    
            case "paper":
                if(compPlay === "scissors"){
                    outcome = "lose";
                }
                else{
                    outcome = "win";
                }
                
                break;
            case "scissors":
            if(compPlay === "rock"){
                outcome = "lose";
            }
            else{
                outcome = "win";
            }
                break;
    }
    
    }
    return outcome;
}

function getUserPlay(){ //Prompt user to chose which they want to play
    let chosing = true;
    while (chosing === true){

    let userChoice = prompt("Rock, Paper, or Scissors?");
    userChoice = userChoice.toLowerCase();

    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors"){
        chosing = false;
        return userChoice;
    }
    else{
        console.log("Invalid entry, please try again");
    }
    }
}

while (playing === true){
    if(confirm("Let's play Rock Paper Scissors!") == true) {
        userPlay = getUserPlay();
        console.log("You chose " + userPlay);
        compPlay = createComputerChoice();
        console.log("The computer chose " + compPlay);
        result = getWinner(compPlay, userPlay);
        console.log("You " + result + "!");
    }
    else {
    console.log("OK, maybe next time! Refresh the page to play again.");
    playing = false;
    }
    }
