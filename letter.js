// Letter.js: Contains a constructor, Letter. This constructor should be able to either 
//display an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. 
//That means the constructor should define:

var guessed = [];

var Letter = function (letter) {
    // A string value to store the underlying character for the letter
    this.CharString = letter
    // A boolean value that stores whether that letter has been guessed yet
    this.Guessed = false
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.toString = function (inputLetter) {
        if (this.Guessed) {
            return inputLetter;
            // return the placeholder
        }
        else {
            return ("_")
            //return the character
        }
    }
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkLetter = function (inputLetter) {
        if (this.CharString === inputLetter) {
            this.Guessed = true;
            guessed.push(inputLetter)
            console.log("That's a letter in our word! Letters Guessed So Far: " + guessed);
            return this.Guessed, guessed;
        }
        else {
            console.log("That's not a letter in our word! Letters Guessed So Far: " + guessed);
            return this.Guessed, guessed;
        }
    }
}
module.exports = Letter;
