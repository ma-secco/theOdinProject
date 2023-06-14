function getComputerChoice (){
  let random =  rando(["rock", "paper", "scissors"]); // extension from rando that allows you to receive random values automatically

  let number = Object.values(random)

  console.log(number[1])
}
getComputerChoice()

