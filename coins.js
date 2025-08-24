const winsOver = new Set([
  "scissors:paper",
  "paper:rock",
  "rock:scissors",
  "rock:lizard",
  "lizard:spock",
  "spock:scissors",
  "scissors:lizard",
  "lizard:paper",
  "paper:spock",
  "spock:rock"
]);

function decide(playerRaw, cpuRaw) {
  const player = String(playerRaw).trim().toLowerCase(); //TODO: LEARN TRIM
  const cpu    = String(cpuRaw).trim().toLowerCase(); //TODO: LEARN LOWERCASE

  if (player === cpu) return "tie";

  const key = `${player}:${cpu}`;
  return winsOver.has(key) ? "win" : "loss";
}

// примери:
console.log(decide("rock", "paper"));    // loss
console.log(decide("paper", "rock"));    // win
console.log(decide("rock", "rock"));
