const btRock = document.querySelector("#rock")
const btPaper = document.querySelector("#paper")
const btScissors = document.querySelector("#scissors")

let valueComputer;
let valuePlayer;

btRock.addEventListener("click", (e) =>{
  e.preventDefault()
  valuePlayer = "Rock"
})
btPaper.addEventListener("click", (e) =>{
  e.preventDefault()
  valuePlayer = "Paper"
})
  btScissors.addEventListener("click", (e) =>{
    e.preventDefault()
    valuePlayer = "Scissors"
  })



console.log(valuePlayer)

function getComputerChoice (){
  let random =  rando(["rock", "paper", "scissors"]); // extension from rando that allows you to receive random values automatically

  let number = Object.values(random)
  valueComputer = number[1]

}

function playRound(playerSelection, computerSelection) {
  
}