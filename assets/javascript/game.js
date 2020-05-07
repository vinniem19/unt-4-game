// JavaScript function that wraps everything
//$(document).ready(function() {


    
    // These are the crystal variables
    
    var crystal = {
        blue: 
        { 
            name : "blue",
            value : 0
        },
        green: 
        { 
            name : "green",
            value : 0
        },
        yellow: 
        { 
            name : "yellow",
            value : 0
        },
        red: 
        { 
            name : "red",
            value : 0
        }
        
        
    };
    //this is my target variable
    var numberToGet = 0; 
    //and the current total 
    var total = 0;
    
    //these are my variables for total wins and losses
    var wins = 0;
    var losses = 0;






// This is a function to reset the game.
var gameReset = function() {
    total = 0;
    numberToGet = Math.floor((Math.random() * 101) + 19);
    $("#find-number").text(numberToGet);
    // and created a css font-size for it
    $("#find-number").css("font-size", "36px");
    
    $("#your-score-points").text(total);
    
    // I am setting a value for each crystal
    crystal.blue.value = Math.floor(Math.random() * 10) + 1; 
    crystal.green.value = Math.floor(Math.random() * 10) + 1; 
    crystal.yellow.value = Math.floor(Math.random() * 10) + 1; 
    crystal.red.value = Math.floor(Math.random() * 10) + 1; 
    
    // testing to the console
    console.log(" Magic Number :" + numberToGet);
    console.log("Blue Crystal: " + crystal.blue.value);
    console.log("Yellow Crystal: " + crystal.yellow.value);
    console.log("Green Crystal: " + crystal.green.value);
    console.log("Red Crystal: " + crystal.red.value);
    
}



/* Where do I put these lines of code
//$("#goodwins").text( + wins);
//$("#badlosses").text( + losses );

// Display the total at 0
//$("#your-score-points").text(total);
*/
// Check to see if win
var checkWin = function() {
    if (total > numberToGet) {
        losses++;
        // but update the div class
        // with tally of wins/losses.
        $("#badlosses").text(losses);
        //alert("You lost!  Keep Trying.  You will get it.  A new game will start now.");
     gameReset();
    } else if(total === numberToGet) {
        wins++;
        $("#goodwins").text(wins);
        alert("You win!  Great job!  You can continue with a new game now.")
        gameReset();
        
    }
}

// This function will add the value to the total.
var addValue = function(clickedCrystal) {
    total += clickedCrystal.value;
    
    // Total is refreshed after every crystal clicked;
    $("#your-score-points").text(total);
    console.log("Current score: " + total);
    
    checkWin();
};



// Start Game
gameReset();

$("#blue").click(function() {
    addValue(crystal.blue);
});
$("#pink").click(function() {
  addValue(crystal.red);
});
$("#green").click(function() {
    addValue(crystal.green);
});
$("#yellow").click(function() {
    addValue(crystal.yellow);
});

    



