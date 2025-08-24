//rock paper scissors

const choices = ["rock", "paper", "scissors","lizard", "spock"] 

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let resultFromGetRndInteger = getRndInteger(0, choices.length);

let computerChoice = choices[resultFromGetRndInteger];
console.log("computer: " + computerChoice);

let playerChoice = "scissors";
console.log("you: " + playerChoice)

if (computerChoice === playerChoice){
    console.log("it's a draw") 

}else if (computerChoice === "scissors" && playerChoice === "paper"){
    console.log("you lose")

}else if (computerChoice === "rock" && playerChoice === "paper"){
    console.log("you win")

}else if (computerChoice === "scissors" && playerChoice === "rock"){
    console.log("you win")

}else if (computerChoice === "paper" && playerChoice === "rock"){
    console.log("you lose")

}else if (computerChoice === "rock" && playerChoice === "scissors"){
    console.log("you lose")
    
}else if (computerChoice === "paper" && playerChoice === "scissors"){
    console.log("you win")
//Extended mode:    
}else if (computerChoice === "lizard" && playerChoice === "scissors"){
    console.log("you win because scissors decapitates lizard")
}else if (computerChoice === "lizard" && playerChoice === "paper"){
    console.log("you lose")
}else if (computerChoice === "lizard" && playerChoice === "rock"){
    console.log("you win because rock crushes lizsard")
}else if (computerChoice === "lizard" && playerChoice === "spock"){
    console.log("you lose because lizard poisons Spock")
}else if (computerChoice === "spock" && playerChoice === "scissors"){
    console.log("you lose because Spock invalidates scissors")
}else if (computerChoice === "spock" && playerChoice === "paper"){
    console.log("you win because paper disproves Spock")
}else if (computerChoice === "spock" && playerChoice === "rock"){
    console.log("you lose, Spock vaporizes rock")
}

