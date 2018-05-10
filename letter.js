// Letter.js: Contains a constructor, Letter. This constructor should be able to either 
//display an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. 
//That means the constructor should define:
var inquirer = require('inquirer');

var Letter = function(guessedLetter){
    var charstring = guessedLetter;
    // A string value to store the underlying character for the letter
    this.CharString = charstring
    // A boolean value that stores whether that letter has been guessed yet
    this.Guessed = false
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.returnChar = function(inputLetter){
        if (charstring !== inputLetter) {
            console.log("_")
        }  
        else{
            console.log(inputLetter)
        }      
    }
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.guessEval = function (){
    }
}
var word = "test"
var letters = []; 
//loops through words
for (let i = 0; i < word.length; i++) {
    
    var char = word.charAt(i);
    var bob = new Letter(char); 
    bob.returnChar(); 
    letters.push(bob);
    console.log(letters); 
}
inquirer.prompt([{
    name: "letter",
    message: "What's your guess? "   
}]).then(answers => {
var input = answers.letter
for (let i = 0; i<letters.length; i++){
letters[i].returnChar(input)
}


});

