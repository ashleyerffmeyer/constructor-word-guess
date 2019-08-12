// Require letter.js file
var Letter = require("./letter");

// Defining Word constructor with answer pushed thru
var Word = function (answer) {

    //Letter array
    this.lettersArray = [];

    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.lettersArray.push(letter);
    }

    this.log = function () {
        answerLog = "";
        for (var i = 0; i < this.lettersArray.length; i++) {
            answerLog += this.lettersArray[i] + " ";
        }
        console.log(answerLog + "\n");
    }

    this.userGuess = function (input) {
        for (var i = 0; i < this.lettersArray.length; i++) {
            this.lettersArray[i].guess(input);
        }
    }
}

Word(answer);

// Exports Word
module.exports = Word;