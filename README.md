# Word Guess Game with Constructors

Command line interface (CLI) word guess game using constructor functions and Node.js  

[Link to Constructor Word Guess Game Demo!](https://drive.google.com/file/d/1iQY7eqmP2IergPcwja7xSmvU6dcaHx5b/view?usp=sharing) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Jenny Dean (TA)
* Eli Vargas (TA)
* Seth Willis (TA)

## Tools Used
* JavaScript
* Node.js
* [Inquirer](https://www.npmjs.com/package/inquirer)

## Prerequisites & Installations

In order to run this command line node app, first install node.js and npm. To install the app, clone this repository and use 'npm install' to gather dependencies specified in the package.json file (inquirer and prompt. 

## Application Overview

The completed constructor word guess game receives user input using the `inquirer` npm packages.

This Application has three files:
* letter.js
* word.js
* index.js

## Instructions

### Letter.js

This file contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

 `Letter.js` *should not* `require` any other files.

### Word.js

This file contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

`Word.js` *should only* require `Letter.js`


### index.js

This file contains the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses