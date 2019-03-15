// JavaScript function that wraps everything
//$(document).ready(function() {

    //Here is a counter
    var counter = 0;

    var numberToGet = 72;

    $("#find-number").text(numberToGet);

    //Here I am making an array for number to add
    //each time the player selects a crystal
    
    var numberOptions = [5,8,13,2];

    //and a for loop to have each crystal add one
    //of those numbers to the total after it is clicked
    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "./assets/images/BlueCrystal.jpg");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
        
    }
        

//There will be four crystals displayed as buttons on the page.

    //I will use an onclick event here to make the images clickable.
    $(".crystal-image").on("click", function() {
        
        

        

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;

        alert("Your new score is: " + counter);

        if (counter === numberToGet) {
            alert("You win!");
        } else if (counter > numberToGet) {
            alert("You lose!");
        }
    });
   //The player will be shown a random number at the start of 
   //the game.
   



// When the player clicks on a crystal, it will add a specific
// amount of points to the player's total score. 





//}