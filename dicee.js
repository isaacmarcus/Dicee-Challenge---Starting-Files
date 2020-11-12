var dice1 = document.getElementsByClassName("dice-img")[0];
var dice2 = document.getElementsByClassName("dice-img")[1];
var title = document.querySelector("h1");

var dicee = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];


window.onload = function refFunc() {
  var reloading = sessionStorage.getItem("reloading");
  dice1Index = Math.floor(Math.random()*6);
  dice2Index = Math.floor(Math.random()*6);
  dice1.src = "images/" + dicee[dice1Index].toString();
  dice2.src = "images/" + dicee[dice2Index].toString();

  if (reloading) {
    title.innerHTML = "Refresheddddd";
  }

  sessionStorage.setItem("reloading", "true");
}
