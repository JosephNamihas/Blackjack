
// Function for initial roll ( 4- 21 )
function randomDeal(){
  let randomNum = Math.floor(Math.random() * 21) + 4; 
  return randomNum;
}

// Function for hit rolls ( 2 - 11 )
function randomHit(){
  let randomHit = Math.floor(Math.random() * 11) + 2;
  return randomHit;
}

function playerWin(param1){
  if (param1 === 21) {
    alert("Blackjack! You rolled 21. You win");
  }
}

// Returned values assigned to variables below
 var playerRoll = randomDeal();
 var playerHit = randomHit();
 var totalRoll = 0;

 var dealerRoll = 

playerWin(playerRoll);

 while (totalRoll < 21){
  var dealAgain = confirm("You rolled: " + playerRoll,"\nWould you like to deal?");
    if (dealAgain === true) {
    randomHit();
    alert("You rolled " + playerHit);
    totalRoll = playerRoll + playerHit;
    alert("Your total roll is " + totalRoll);
    playerWin(totalRoll);

    // Dealer


  }
 }









/*if (returnedNumber != 21) {
  
  console.log("You rolled",returnedNumber);
  console.log("Your rolled total is",totalRoll += returnedNumber);
  returnedNumber = randomNumber();
  while (totalRoll < 21 ){
    
    console.log("You rolled", returnedNumber)
    console.log("Your rolled total is", totalRoll += returnedNumber)
  }
}

if (totalRoll > 21) {
    console.log("Bust! Your roll total is",totalRoll);
  }

if (returnedNumber === 21 || totalRoll === 21) {
    console.log("You rolled 21. You win!")
  
}*/