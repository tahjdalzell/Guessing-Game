
// Create a randomly generated # between 1-100 that will be the answer //
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");

var answer = Math.floor(Math.random()*100) + 1;
var numberOfGuesses = 0;
var guessedNums = [];

function play (){
    var user_entries = document.getElementById("guess").value 

    if (user_entries <1 || user_entries > 100){
        alert('Read the Directions -_-')
    }
}



function randomGenNum () {

}



// 



/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/