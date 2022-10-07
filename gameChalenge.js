let statusGame = document.querySelector('#status');
var score = document.getElementById('got_score');
let scoreChance = document.getElementById('score');

const playAgain = () => {
    // scoreChance.textContent = 20
    // statusGame.textContent = "Start Guessing..."
    // score.textContent = 0;
    // checkInputValue = 0;
    window.location.reload()
}

var expectedValue = Math.ceil(20 * Math.random(20))
console.log(expectedValue)
const checkAns = () => {
    const checkInputValue = document.getElementById('checkNumber').value;
    if (checkInputValue > expectedValue) {
        scoreChance.textContent -= 1;
        statusGame.textContent = "Value is greater"
    } else if(checkInputValue < expectedValue) {
        statusGame.textContent = "Values is smaller"
        scoreChance.textContent -= 1;
    }
    else{
        statusGame.textContent = "Congratulations you find the correct number🎉🎉"
        score.textContent = scoreChance.textContent 
        return
    }
}

