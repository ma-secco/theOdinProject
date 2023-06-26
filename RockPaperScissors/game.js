//naming variables
const btRock = document.querySelector("#rock")
const btPaper = document.querySelector("#paper")
const btScissors = document.querySelector("#scissors")
const resp = document.querySelector("h3")
const score = document.querySelector("pre")

let valueComputer;
let valuePlayer;
let playerScore = 0;
let computerScore = 0;



// event listener in the buttons
btRock.addEventListener("click", (e) =>{
  e.preventDefault()
  valuePlayer = "Rock"
  game()
})
btPaper.addEventListener("click", (e) =>{
  e.preventDefault()
  valuePlayer = "Paper"
  game()
})
btScissors.addEventListener("click", (e) =>{
  e.preventDefault()
  valuePlayer = "Scissors"
  game()
})  


function game(){
  getComputerChoice();
  playRound(valuePlayer, valueComputer);
}

// getting the computer selection for the round
function getComputerChoice (){
  let random =  rando(["Rock", "Paper", "Scissors"]); // extension from rando that allows you to receive random values automatically

  let number = Object.values(random)
  valueComputer = number[1]
}


//changing the resp inner text for each situation
function tie (){
  resp.innerText = `It's a tie!`
}
function playerWin (){
  resp.innerText = `You Win! ${valuePlayer} beats ${valueComputer}`
  playerScore++;
  score.innerText = `Player score: ${playerScore}\nComputer score: ${computerScore}`  
}
function computerWin (){
  resp.innerText = `You Lose! ${valueComputer} beats ${valuePlayer}`
  computerScore++;
  score.innerText = `Player score: ${playerScore}\nComputer score: ${computerScore}`  
}


// function display the results
function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    tie ()
  }
  if(computerSelection === "Rock"){
    if (playerSelection == "Paper"){
      playerWin ()
    }
    else {
      computerWin()
    }
  }
  if(computerSelection === "Paper"){
    if (playerSelection == "Scissors"){
      playerWin ()
    }
    else {
      computerWin()
    }
  }
  if(computerSelection === "Scissors"){
   if (playerSelection == "Rock"){
    playerWin ()
    }
    else {
      computerWin()
    }
  }
}

