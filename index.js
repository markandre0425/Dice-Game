var randomNumber1 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");



var playerOne = prompt("Enter your name");
playerOne = playerOne.charAt(0).toUpperCase() + playerOne.slice(1).toLowerCase();

var playerTwo = prompt("Enter your name");
playerTwo = playerTwo.charAt(0).toUpperCase() + playerTwo.slice(1).toLowerCase();

playerOne = document.querySelectorAll(".dice p ")[0].textContent = playerOne;
playerTwo = document.querySelectorAll(".dice p ")[1].textContent = playerTwo;



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = playerOne + " Wins!";
    
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = playerTwo + " Wins!";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}