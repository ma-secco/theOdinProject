const btRock = document.querySelector(".rock")
const btPaper = document.querySelector(".paper")
const btScissors = document.querySelector(".scissors")

let valueComputer;
let valuePlayer = () => {
  if (btRock.addEventListener("click")) {
    valuePlayer = "Rock";
  }
  else if (btPaper.addEventListener("click")) {
    valuePlayer = "Paper";
  }
  else {
    btScissors.addEventListener("click", () =>{
      valuePlayer = "Scissors"
    })
  }
}

console.log(valuePlayer)

function getComputerChoice (){
  let random =  rando(["rock", "paper", "scissors"]); // extension from rando that allows you to receive random values automatically

  let number = Object.values(random)
  valueComputer = number[1]

}

function playRound(playerSelection, computerSelection) {
  
}