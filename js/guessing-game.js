const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");

var answer = Math.floor(Math.random()*100) + 1;
var numberOfGuesses = 0;
var guessedNums = [];
var resetBut;
function game(){
    var user_entries = document.getElementById("guess").value

    if(user_entries < 1 || user_entries > 100) {
        alert("Read The Directions");
    } else {
        guessedNums.push(user_entries);
        numberOfGuesses += 1;

    } if(user_entries < answer){
        msg1.textContent = "too low";
        msg2.textContent = "Number of Guesses " + numberOfGuesses;
        msg3.textContent = "Guessed Numbers " + guessedNums;


    } else if (user_entries > answer){
        msg1.textContent = "too high"
        msg2.textContent = "Number of Guesses " + numberOfGuesses;
        msg3.textContent = "Guessed Numbers " + guessedNums;


    } else if (user_entries === answer){
        msg1.textContent = "YOU GOT IT";
        msg2.textContent = "YOU GOT IT IN " + numberOfGuesses
}
// user_entries.addEventListener('click',game);

// function endGame(){
//     user_entries.disabled=true; 
//     guess.disabled=true;
//     resetBut = document.createElement('button'); resetBut.textContent = 'Play Again!?';
//  document.body.appendChild(resetBut);
// resetBut.addEventListener('click',redoGame);
// }
// function redoGame (){
//      numberOfGuesses = 1;
//      var resetGo = document.querySelector('.resultParas');
//      for (var i = 0; i < redoGame.length; i++){
//         resetGo[i].textContent = "";
        
//      }
//      resetBut.parentNode.removeChild(resetBut);
//      guess.disabled = false;
//      user_entries.disabled = false;
//      guess.value = '';
//      guess.focus();

     
// }


}