var resourceContainer = document.getElementById('resource');

let roll=1;

function printResource() {
  var resource= document.createElement("p");
  let diceOne = Math.floor(Math.random() * 6) + 1;
  let diceTwo = Math.floor(Math.random() * 6) + 1;
  let sum= diceOne+diceTwo
  if(sum%3===0&&sum%4===0){
    resource.textContent = 'RollNo:'+roll+ '- Dice1:'+diceOne +'- Dice2:'+diceTwo +'- Total:'+sum+' Extra: Ore Sheep';
  }else if(sum%3===0){
    resource.textContent = 'RollNo:'+roll+ '- Dice1:'+diceOne +'- Dice2:'+diceTwo +'- Total:'+sum+' Extra: Ore';
  }
  else if(sum%4===0){
    resource.textContent = 'RollNo:'+roll+ '- Dice1:'+diceOne +'- Dice2:'+diceTwo +'- Total:'+sum+' Extra: Sheep';
  }else{
    resource.textContent = 'RollNo:'+roll+ '- Dice1:'+diceOne +'- Dice2:'+diceTwo +'- Total:'+sum;
  }
  resourceContainer.append(resource);
  console.log("check");
  console.log(diceOne,diceTwo,sum);
}

var button = document.getElementById('button');

button.addEventListener("click", function(){
  while(roll<101){
    printResource();
    roll++
  }
});

