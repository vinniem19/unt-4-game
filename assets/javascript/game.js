// JavaScript function that wraps everything
//$(document).ready(function() {

//Here is a counter
var counter = 0;
//this is my target variable
var numberToGet = Math.floor((Math.random() * 120) + 1);
//this is a variable for total
var total = 0;
var wins = 0;
var losses = 0;
// I attached the target number to the DOM
// and created a css font-size for it
$("#find-number").text(numberToGet);
$("#find-number").css("font-size", "36px");


//this is my images array of 4 different crystals
var images = ["./assets/images/BlueCrystal.jpg",
    "./assets/images/GreenCrystal.png",
    "./assets/images/PinkCrystal.jpg",
    "./assets/images/YellowCrystal.jpg"];
//I will use this array to set number values
//to each crystal.
var numberOptions = [];
//this adds the images to the DOM dynamically.
for (var i = 0; i < 4; i++) {
    console.log(images[i]);
    addCrystalNum();
    var imageCrystalBlue = $("<img>");
    imageCrystalBlue.addClass("crystal-image");
    imageCrystalBlue.attr("src", images[i]);
    imageCrystalBlue.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystalBlue);
    console.log(numberOptions);
}
//this function sets up the values for the previous 
//for loop.

function addCrystalNum() {
    var newNum = Math.floor(Math.random() * 12) + 1;
    if (numberOptions.includes(newNum)) {
        var notUsedNum = newNum + 1;
        numberOptions.push(notUsedNum);
    } else {
        numberOptions.push(newNum)
    }
}
// The display of total, which will need to be 
// refreshed after every crystal clicked;

/* I moved this down after the onclick to be 
   displayed instead of an alert.
   $("#your-score-points").text(total);
   */

$("#goodwins").text( + wins);
$("#badlosses").text( + losses );



//and a for loop to have each crystal add one
//of those numbers to the total after it is clicked
//blue crystal







/*
//blue crystal
var imageCrystalBlue = $("<img>");
imageCrystalBlue.addClass("crystal-image");
imageCrystalBlue.attr("src", "./assets/images/BlueCrystal.jpg");
imageCrystalBlue.attr("data-crystalvalue", numberOptions[0]);
$("#crystals").append(imageCrystalBlue);
  //green crystal
var imageCrystalBlue = $("<img>");
imageCrystalBlue.addClass("crystal-image");
imageCrystalBlue.attr("src", "./assets/images/GreenCrystal.png");
imageCrystalBlue.attr("data-crystalvalue", numberOptions[1]);
$("#crystals").append(imageCrystalBlue);

//pink crystal
var imageCrystalBlue = $("<img>");
imageCrystalBlue.addClass("crystal-image");
imageCrystalBlue.attr("src", "./assets/images/PinkCrystal.jpg");
imageCrystalBlue.attr("data-crystalvalue", numberOptions[2]);
$("#crystals").append(imageCrystalBlue);

//yellow crystal
var imageCrystalBlue = $("<img>");
imageCrystalBlue.addClass("crystal-image");
imageCrystalBlue.attr("src", "./assets/images/YellowCrystal.jpg");
imageCrystalBlue.attr("data-crystalvalue", numberOptions[3]);
$("#crystals").append(imageCrystalBlue);
*/

// Display the total at 0
$("#your-score-points").text(total);

//I will use an onclick event here to make the images clickable.
$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    $("#your-score-points").text(total + counter);

    if (counter === numberToGet) {
        //not an alert, but update the div class
        // with tally of wins/losses.
        alert("You win!");
    } else if (counter > numberToGet) {
        alert("You lose!");
    }

});


   //The player will be shown a random number at the start of 
   //the game.




// When the player clicks on a crystal, it will add a specific
// amount of points to the player's total score. 