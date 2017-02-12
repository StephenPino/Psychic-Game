var wins = 0;
var losses = 0;
var lives = 9
var letters = [
	"a","b","c",
	"d","e","f",
	"g","h","i",
	"j","k","l",
	"m","n","o",
	"p","q","r",
	"s","t","u",
	"v","w","x",
	"y","z"
]
var attempts = [];

// Chooses a random letter from our letters array
function chooseLetter(){
	var key = Math.floor(Math.random()*letters.length);
	var letter = letters[key];
	return letter;
};

// Resets the game back to its default state
function reset(){
	attempts = [];
	lives = 9
	letter = chooseLetter();
	return attempts;
}

// Refreshes the UI with current attempts, wins, losses, and lives
function updateDisplay(){
	document.getElementById("letters-guessed-div").innerHTML = attempts;
	document.getElementById("wins-div").innerHTML = wins;
	document.getElementById("losses-div").innerHTML = losses;
	document.getElementById("lives-div").innerHTML = lives;
}

//App entry point
window.onload = function(){

	// Load the initial UI
	updateDisplay();
	// Computer picks a random letter and stores it in letter variable
	letter = chooseLetter();

	// On user key press...
	document.onkeyup = function(e){

		// Stores the user's key press as a variable
		var userGuess = e.key;

		// If the key the user presses has already been pressed...
		if(attempts.includes(userGuess)){
			alert("The letter " + "'" + userGuess + "' " + "has already been chosen. Select another letter to continue playing." )
			return false; //stops the game from proceeding
		}

		if(letter === userGuess){
			alert("You've guessed the letter! The letter I was thinking of was: " + letter) //alert win message
			wins++; //increment wins
			reset(); //reset the game parameters
		}
		else{
			lives--; //decrement lives
			attempts.push(userGuess); //push the user's guess to attempts array
			updateDisplay(); //refresh the UI
		};

		updateDisplay();

		// If player runs our of lives...
		if(lives === 0){
			losses++; //increment the losses tally
			alert("You lose! The letter I was thinking of was: " + letter); //alert lose message
			reset(); //reset game parameters
			updateDisplay(); //refresh the UI
		};
	};
};