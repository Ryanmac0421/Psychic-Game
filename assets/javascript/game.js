var win = 0; //variable for wins
var loses = 0; //variable for loses
var guesses = 10; //variable for guesses
var previous = []; //variable for previous guesses
var computerChoices =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //varriable for what the computer can guess


var psychicGame =
"<p>" + "Wins: " + win + "</p>" +  
"<p>" + "Losses: " + loses + "</p>" +
"<p>" + "Guesses Left: " + guesses + 
"<p>" + "Your Guesses so far: " + previous + "</p>" 
// "<img src='http://www.clydefitchreport.com/wp-content/uploads/2018/01/Crystal-ball-696x462.jpg'>"

function reset() {
    
    loses++;
     guesses = 10; //variable for guesses
     previous = []; //variable for previous guesses
    
}
    
 function drawScreen() {
     
 psychicGame =
"<p>" + "Wins: " + win + "</p>" + 
"<p>" + "Losses: " + loses + "</p>" +
"<p>" + "Guesses Left: " + guesses + "</p>" +
"<p>" + "Your Guesses so far: " + previous + "</p>" 

document.getElementById("game").innerHTML = psychicGame;
 }
    

 drawScreen ()
document.onkeyup = function(event) {
    var yourGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];    
    
    if (guesses == 0) {
        //  alert("Better luck next time!")
        reset()
    }
    
    if (computerGuess === yourGuess) {
        win++;
        //Program.restart();       //Was hoping this would restart my program. loop it.

    } else {
        guesses--; 
        
        previous.push(yourGuess);
    }

   

    drawScreen ()
   

    
    console.log(computerGuess) 
    console.log(yourGuess)


}





//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).



