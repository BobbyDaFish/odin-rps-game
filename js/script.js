let playing = true;
let ready = true;
let userPlay;
let compPlay;
let result;
let userScore = parseInt(0);
let compScore = parseInt(0);

const mainCont = document.querySelector('#main-cont');
const gameCont = document.querySelector('#game-cont');
const startBtn = document.querySelector('#start-btn');

const rockBtnCont = document.createElement('div'); 
const papBtnCont = document.createElement('div');
const sciBtnCont = document.createElement('div');
const playBtnCont = document.createElement('div');
const infoCont = document.createElement('div');
const userScoreCont = document.createElement('div');
const compScoreCont = document.createElement('div');
const roundResultCont = document.createElement('div');

const rockBtn = document.createElement('button');
const sciBtn = document.createElement('button');
const papBtn = document.createElement('button');
const playBtn = document.createElement('button');

rockBtnCont.setAttribute("class", "play-btn-cont");
sciBtnCont.setAttribute("class", "play-btn-cont");
papBtnCont.setAttribute("class", "play-btn-cont");
playBtnCont.setAttribute("class", "start-btn-cont")
infoCont.setAttribute('id', 'info-cont');
userScoreCont.setAttribute("class", "score-cont");
compScoreCont.setAttribute("class", "score-cont");
roundResultCont.setAttribute('class', "result-cont");

rockBtn.setAttribute("class", "play-btn");
sciBtn.setAttribute("class", "play-btn");
papBtn.setAttribute("class", "play-btn");
playBtn.setAttribute("class", "play-btn");

rockBtn.setAttribute("id", "rock");
sciBtn.setAttribute("id", "scissors");
papBtn.setAttribute("id", "paper");
playBtn.setAttribute("id", "play");

rockBtn.textContent = "\u{1FAA8}";
sciBtn.textContent = "\u{2702}";
papBtn.textContent = "\u{1F4DC}";
playBtn.textContent = `Play`;
userScoreCont.textContent = `Your Score: ${userScore}`;
compScoreCont.textContent = `Computer Score: ${compScore}`;
roundResultCont.textContent= "Let's play!";

startBtn.addEventListener('click', startGame);

function startGame(){ //Replace start button with play buttons

    this.parentNode.remove();

    gameCont.appendChild(rockBtnCont);
    gameCont.appendChild(papBtnCont);
    gameCont.appendChild(sciBtnCont);
    
    rockBtnCont.appendChild(rockBtn);
    papBtnCont.appendChild(papBtn);
    sciBtnCont.appendChild(sciBtn);

    document.getElementById('rock').addEventListener('click', function(){
        userPlay = rockBtn.id;
        playButton();
        //function to start round
    });
    document.getElementById('paper').addEventListener('click', function(){
        userPlay = papBtn.id;
        playButton();
        //function to start round
    });
    document.getElementById('scissors').addEventListener('click', function(){
        userPlay = sciBtn.id;
        playButton();
        //function to start round
    });
    
    scoreTracker();
}

function playButton(){ // generate play button, display user's choice
    if (ready) {
        mainCont.insertBefore(playBtnCont, infoCont);
        playBtnCont.appendChild(playBtn);
        ready = false;

        roundResultCont.textContent = `You chose ${userPlay}. Click Play to go!`;
        
        playBtn.addEventListener('click', function() {
            this.parentNode.remove();
            ready = true;
            compPlay = createComputerChoice();
            result = getWinner(compPlay, userPlay);
            if (result == "Draw"){
                roundResultCont.textContent = `You chose ${userPlay}/nComputer chose ${compPlay}/nDraw!`;
            }
            else if (result == "Computer"){
                roundResultCont.textContent = `You chose ${userPlay}/nComputer chose ${compPlay}/nComputer wins!`;
                compScore++;
                compScoreCont.textContent = `Computer Score: ${compScore}`;
            }
            else{
                roundResultCont.textContent = `You chose ${userPlay}/nComputer chose ${compPlay}/nYou win!`;
                userScore++;
                userScoreCont.textContent = `Your Score: ${userScore}`;
            }

        })
    }
    else{
        roundResultCont.textContent= `You chose ${userPlay}. Click Play to go!`;
    }
}

function scoreTracker(){ // Create score tracker containers
    mainCont.appendChild(infoCont);
    infoCont.appendChild(userScoreCont);
    infoCont.appendChild(roundResultCont);
    infoCont.appendChild(compScoreCont);
}

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
                    outcome = "Computer";
                }
                else{
                    outcome = "You";
                }
                    break;
    
            case "paper":
                if(compPlay === "scissors"){
                    outcome = "Computer";
                }
                else{
                    outcome = "You";
                }
                
                break;
            case "scissors":
            if(compPlay === "rock"){
                outcome = "Computer";
            }
            else{
                outcome = "You";
            }
                break;
    }
    
    }
    return outcome;
}


/* function getUserPlay(){ //Prompt user to chose which they want to play
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
*/