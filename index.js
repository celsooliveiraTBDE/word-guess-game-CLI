var inquirer = require('inquirer');
var Word = require("./Word");



function chooseWord() {

    var wordBank = ["Rum", "Whiskey", "Vodka", "Mezcal", "Cachaca", "Aquavit"]
    var total = wordBank.length
    var choice = Math.floor(Math.random() * total)
    var chosenWord = wordBank[choice]
    var wordObject = new Word(chosenWord);

    console.log(chosenWord);
    return wordObject
}


function startGame() {

    var game = chooseWord();

    //init game by running the chooseWord object then returning a word object into "game"
    game.LoadChar();
    // runs the method WordChoice from the constructor Word - loading the constructor with the chars objects 
    var display = game.DisplayLetters();

    var score = 0;
    var turns = 9;

    var inputUser = function(){

    inquirer.prompt([{
        name: "letterChosen",
        message: "What's your guess?"
    
    }]).then(answers => {
        if (turns >0){
        
        turns--;
        game.evalGuess(answers.letterChosen)
        }
    });

    //input from user
    //evaluate guesses 
    // if successful, display it for user
    // if miss, reduce number of turns, loop through prompt once again - likely using recursion
}

startGame(); 