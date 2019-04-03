function rollDice(times){
  var numbers = [];
  for (i = 0; i < times; i++){
     numbers.push(Math.floor(Math.random() * 6) + 1);
  }
  return "Rolled " + times + " dice: " + numbers.join();
}

console.log(rollDice(1));
