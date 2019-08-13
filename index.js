// Requirments 
var Word = require("./word");
var inquirer = require("inquirer");

// Letters to choose from
var alphaArray = "abcdefghijklmnopqrstuvwxyz";

// List of dog breeds to choose from
var dogBreeds = ["dachshund", "bulldog", "yorkie", "dalmatian", "pomeranian", "husky", "corgi", "poodle", "beagle", "chihuahua", "pug", "frenchie", "greyhound", "boxer", "bloodhound"];

// Pick Random index from dogBreeds array
var randomDogIndex = Math.floor(Math.random() * dogBreeds.length);
var randomDog = dogBreeds[randomDogIndex];

// Pass random word through Word constructor
renderWord = new Word(randomDog);

// Create varable requireNewWord
var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Create variable guessesLeft and setting number of guesses left to 10
var guessesLeft = 10;

// Function to start game/create a new word/randomDog
function initGame() {

    // Generates new word for Word constructor 
    if (requireNewWord) {

        // Selects random dog from dogBreeds array
        var randomDogIndex = Math.floor(Math.random() * dogBreeds.length);
        var randomDog = dogBreeds[randomDogIndex];

        // Passes random word through the Word constructor
        renderWord = new Word(randomDog);

        // requireNewWord is still false
        requireNewWord = false;
    }

    // Checks to see if a guessed letter is correct
    var wordComplete = [];
    renderWord.lettersArray.forEach(completeCheck);

    // If wordComplete is false, inquire
    if (wordComplete.includes(false)) {
        inquirer

            // With these prompts
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter between A and Z!",
                    name: "userinput"
                }
            ])

            // The run the following function
            .then(function (input) {

                // If the alphaArray does not include the userinput or length of userinput is greater than 1 , console.log the message and run initGame function
                if (!alphaArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log("\nPlease try again!\n");
                    initGame();

                    // Else do the following
                } else {

                    // If incorrectLetters array includes userinput, correctLetters array includes userinput, or userinput is blank, console.log the message and run initGame function
                    if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                        console.log("\nThat letter was already guessed or no letter was entered.\n");
                        initGame();

                        // Else do the following
                    } else {

                        // Creates wordCheckArray 
                        var wordCheckArray = [];

                        // Adds userinput to userGuess for renderWord (new Word)
                        renderWord.userGuess(input.userinput);

                        // Checks if guess is correct
                        renderWord.lettersArray.forEach(wordCheck);

                        // If wordCheckArray equals wordComplete, console.log
                        if (wordCheckArray.join('') === wordComplete.join('')) {
                            console.log("\nIncorrect\n");

                            // Pushes userinput to incorrectLetters array
                            incorrectLetters.push(input.userinput);

                            // Reduces the amount of guesses the user has left
                            guessesLeft--;

                            // Else do the following
                        } else {

                            // Console.log correct
                            console.log("\nCorrect!\n");

                            // Pushes userinput to correctLetters array
                            correctLetters.push(input.userinput);
                        }

                        // log renderWord
                        renderWord.log();

                        // Print number of guesses left
                        console.log("Guesses Left: " + guessesLeft + "\n");

                        // Print letters guessed already
                        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                        // If guessesLeft is greater than 0
                        if (guessesLeft > 0) {

                            // Call initGame function 
                            initGame();

                            // Else console.log message
                        } else {
                            console.log("Sorry, you lose!\n");

                            // Run restartGame function
                            restartGame();
                        }

                        // wordCheck function with key passed thru
                        function wordCheck(key) {

                            // Push guessedLetter to wordCheckArray
                            wordCheckArray.push(key.guessedLetter);
                        }
                    }
                }
            })

        // Else do the following        
    } else {

        // console.log winning message
        console.log("YOU WIN!\n");

        // Call restartGame function
        restartGame();
    }

    // completeCheck function with key passed thru
    function completeCheck(key) {

        // Push guessedLetter to wordComplete array
        wordComplete.push(key.guessedLetter);
    }
}

// function to restart the game
function restartGame() {

    // Inquire info with the following prompt
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to play again?",
                choices: ["Yes", "No"],
                name: "restart"
            }
        ])

        // then return the following information
        .then(function (input) {
            if (input.restart === "Yes") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                initGame();
            } else {
                return
            }
        })
}

// Call initGame function
initGame();