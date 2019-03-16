// JavaScript function that wraps everything
//$(document).ready(function() {

    //Here is a counter
    var counter = 0;

    var numberToGet = Math.floor((Math.random() * 120) + 1);

    $("#find-number").text(numberToGet);
    $("#find-number").css("font-size" , "36px");

    //Here I am making an array for number to add
    //each time the player selects a crystal

    var images = [ "./assets/images/BlueCrystal.jpg" , 
                   "./assets/images/GreenCrystal.png" , 
                   "./assets/images/PinkCrystal.jpg" , 
                   "./assets/images/YellowCrystal.jpg"];
    
    var numberOptions = [];

        for(var i = 0; i < 4; i++) {
            console.log(images[i]);
            addCrystalNum();
            var imageCrystalBlue = $("<img>");
            imageCrystalBlue.addClass("crystal-image");
            imageCrystalBlue.attr("src", images[i]);
            imageCrystalBlue.attr("data-crystalvalue", numberOptions[i]);
            $("#crystals").append(imageCrystalBlue);
            console.log(numberOptions);
        }
        
            function addCrystalNum() {
                var newNum = Math.floor(Math.random() * 12) + 1;
                if(numberOptions.includes(newNum)) {
                    var notUsedNum = newNum + 1;
                    numberOptions.push(notUsedNum);
                    } else {
                        numberOptions.push(newNum)
                    }
                }
    
    
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
    
        
    //I will use an onclick event here to make the images clickable.
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;

        alert("Your new score is: " + counter);

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