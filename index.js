var randomNumber1= Math.floor(Math.random()*6)+1;
var diceNumber= ("dice" +randomNumber1+ ".png");
var diceImage= ("images/" +diceNumber);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImage);

var randomNumber2= Math.floor(Math.random()*6)+1;
var diceNumber2= ("dice" +randomNumber2+ ".png");
var diceImage2= ("images/" +diceNumber2);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImage2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
    
} else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
    
}
