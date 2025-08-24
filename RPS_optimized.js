const choices = ["rock", "paper", "scissors"]; 

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let resultFromGetRndInteger = getRndInteger(0, choices.length);

let playerChoice = "scissors";
console.log("you: " + playerChoice)

let computerChoice = choices[resultFromGetRndInteger];
console.log("computer: " + computerChoice);


function determineResult(player, computer){ 
    
    let gameResult = "draw";
    if(computer === "rock" && player === "paper" ||
        computer === "scissors" && player === "rock" ||
        computer === "paper" && player === "scissors"
    ){
        gameResult = "you win";
    }else if(computer === "scissors" && player === "paper"||
        computer === "paper" && player === "rock"||
        computer === "rock" && player === "scissors"
    ){
        gameResult = "you lose";
    }
    
    return gameResult;
}
    
console.log(determineResult(playerChoice, computerChoice));


