var inquirer = require('inquirer');
var Word = require("./Word");

function chooseWord(){
    var wordBank = ["Rum", "Whiskey", "Vodka", "Mezcal", "Cachaca", "Aquavit"]
    var total = wordBank.length
    var choice = Math.floor(Math.random()*total)
    var chosenWord = wordBank[choice]
    var wordObject = new Word (chosenWord); 

    console.log(chosenWord); 
return wordObject
}

function startGame (){
    var game = chooseWord();

    game.WordChoice(); 
    game.DisplayLetters(); 

    var score = 0; 
    var turns = 9; 
    var input = "";
    while (turns >0) {
        inquirer.prompt([{
            name: "letter",
            message: "What's your guess?"   
        }]).then(answers => {
        input = answers.letter
        });
        turns--; 
        game.evalGuess(input);
    
    }      

        //input from user
        //evaluate guesses 
        // if successful, display it for user
        // if miss, reduce number of turns, loop through prompt once again - likely using recursion
    }

startGame(); 