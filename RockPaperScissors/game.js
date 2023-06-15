//naming variables
const btRock = document.querySelector("#rock")
const btPaper = document.querySelector("#paper")
const btScissors = document.querySelector("#scissors")
const resp = document.querySelector("h3")

let valueComputer;
let valuePlayer;

// event listener in the buttons
btRock.addEventListener("click", (e) =>{
  e.preventDefault()
  valuePlayer = "Rock"
  getComputerChoice();
  playRound(valuePlayer, valueComputer);
})
btPaper.addEventListener("click", (e) =>{
  e.preventDefault()
  valuePlayer = "Paper"
  getComputerChoice();
  playRound(valuePlayer, valueComputer);
})
btScissors.addEventListener("click", (e) =>{
  e.preventDefault()
  valuePlayer = "Scissors"
  getComputerChoice();
playRound(valuePlayer, valueComputer);
})

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
}
function computerWinWin (){
  resp.innerText = `You Lose! ${valueComputer} beats ${valuePlayer}`
}


// creating the function for each round
function playRound(playerSelection, computerSelection) {
  if(computerSelection === "Rock"){
    if (playerSelection == "Rock"){
      tie ()
    }
    else if (playerSelection == "Paper"){
      playerWin ()
    }
    else {
      computerWin()
    }
  }
  if(computerSelection === "Paper"){
    if (playerSelection == "Paper"){
      tie ()
    }
    else if (playerSelection == "Scissors"){
      playerWin ()
    }
    else {
      computerWin()
    }
  }
  if(computerSelection === "Scissors"){
    if (playerSelection == "Scissors"){
      tie ()
    }
    else if (playerSelection == "Rock"){
      playerWin ()
    }
    else {
      computerWin()
    }
  }
}

playRound(valuePlayer,valueComputer)