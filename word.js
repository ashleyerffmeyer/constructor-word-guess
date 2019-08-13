// Require letter.js file
var Letter = require("./letter");

// Defining Word constructor with answer pushed thru
var Word = function (answer) {

    //Letter array
    this.lettersArray = [];

    // For 
    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.lettersArray.push(letter);
    }

    // Function to log answer
    this.log = function () {

        // answer log string
        answerLog = "";

        // For length of lettersArray
        for (var i = 0; i < this.lettersArray.length; i++) {

            // Add indices of lettersArray to answer log
            answerLog += this.lettersArray[i] + " ";
        }

        // Console.log answer log
        console.log(answerLog + "\n");
    }

    // Function to input guess from user
    this.userGuess = function (input) {

        // For lenght of lettersArray
        for (var i = 0; i < this.lettersArray.length; i++) {

            // Pass user input thru guess function for each index of lettersArray
            this.lettersArray[i].guess(input);
        }
    }
}

// Exports Word
module.exports = Word;