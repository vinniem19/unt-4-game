// JavaScript function that wraps everything
//$(document).ready(function() {

    //Here is a counter
    var counter = 0;

    var numberToGet = Math.floor((Math.random() * 50) + 1);

    $("#find-number").text(numberToGet);

    //Here I am making an array for number to add
    //each time the player selects a crystal
    
    var numberOptions = [5,8,13,2];

    //this array will be an array of the images I will set up
    
    
    //and a for loop to have each crystal add one
    //of those numbers to the total after it is clicked
    //blue crystal
    
    /*this was an attempt to create 2 for loops 
    that generated the images and assigned a value
    to them 

    var images = [ "./assets/images/BlueCrystal.jpg" , 
                   "./assets/images/GreenCrystal.png" , 
                   "./assets/images/PinkCrystal.jpg" , 
                   "./assets/images/YellowCrystal.jpg"];

    for(var a = 0; a < images.length; a++){
        
            var imageCrystalBlue = $("<img>");
            imageCrystalBlue.addClass("crystal-image");
            imageCrystalBlue.attr("src", images[a]);
            $("#crystals").append(imageCrystalBlue);
        

        //give each crystal their separate number value
        for(var i = 0; i < numberOptions.length; i++){
        imageCrystalBlue.attr("data-crystalvalue", numberOptions[i]);
        }}
        */
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