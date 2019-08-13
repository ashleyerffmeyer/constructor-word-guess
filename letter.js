// Defining Letter constructor
var Letter = function (letter) {

    // String value to store letter
    this.letter = letter;

    // Boolean value that stores whether letter has been guessed or not
    this.guessedLetter = false;

    // Function that returns character if letter has been guessed or placeholder if the letter hasn't been guessed
    this.toString = function () {

        // If letter has been guessed, update guessLetter to true and return blank
        if (this.letter === " ") {
            this.guessedLetter = true;
            return " ";

            // Else do the following
        } else {

            // If guessed letter is false, return a placeholder
            if (this.guessedLetter === false) {
                return "_";

                // Else return the guessed letter
            } else {
                return this.letter;
            }
        }
    };

    // Function that takes in the letter 
    this.guess = function (guess) {
        // If guess is part of word, update guessedLetter to true
        if (guess === this.letter) {
            this.guessedLetter = true;
        }
    }
};

// Exports Letter
module.exports = Letter;
