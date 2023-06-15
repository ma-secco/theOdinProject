const btRock = document.querySelector(".rock")
const btPaper = document.querySelector(".paper")
const btScissors = document.querySelector(".scissors")

let value;

function getComputerChoice (){
  let random =  rando(["rock", "paper", "scissors"]); // extension from rando that allows you to receive random values automatically

  let number = Object.values(random)
  value = number[1]

}
getComputerChoice()

