var Letter = require("./Letter");
var letters = [];
var string = "";



// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is attempting 
// to guess. That means the constructor should define:

var Word = function (word) {

    this.Letters = letters;     // An array of new Letter objects representing the letters of the underlying word

    this.LoadChar = function () {

        for (let i = 0; i < word.length; i++) {
            var char = word.charAt(i);
            var bob = new Letter(char);
            letters.push(bob);
            console.log("GATO", letters);
        }
    }

    // A function that returns a string representing the word. 
    // This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

    this.DisplayLetters = function () {

        var string = "";

        for (let i = 0; i < word.length; i++) {

            char = word.charAt(i);

            string += this.Letters[i].toString(char);
            console.log(string);

        }


    };
    // A function that takes a character as an argument and calls the guess function 
    // on each letter object (the second function defined in Letter.js)
    this.evalGuess = function (char) {
        for (let i = 0; i < word.length; i++) {
            if (!this.Letters[i].checkLetter(char)) {
                // do something if not true --> return a boolean for each checked letter constructor inside word constructor?
            }

        }
        //do stuff here


    }
}

// var wordObject = new Word (word); 
// wordObject.WordChoice(); 
// wordObject.DisplayLetters(); 
// wordObject.evalGuess("t");

// console.log("Line38: "+wordObject.Letters[0].CharString);
module.exports = Word;



