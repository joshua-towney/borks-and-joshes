var button = document.querySelectorAll('.token-placement');
var playAgain = document.querySelector('.play-again');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var btn5 = document.querySelector('#btn5');
var btn6 = document.querySelector('#btn6');
var btn7 = document.querySelector('#btn7');
var btn8 = document.querySelector('#btn8');
var btn9 = document.querySelector('#btn9');
var playerOneTurn = true;
var turnWinsToggle = document.querySelector('#turn-wins-toggle');
var playerNoToggle = document.querySelector('#player-no-toggle');

function togglePlayerTurn() {
    playerOneTurn = !playerOneTurn;
}

function buttonHoverColor(event) {
    let theOneHoveredOn = event.target;
    theOneHoveredOn.style.backgroundColor = "lightblue"
}

function buttonNoHoverColor(event) {
    let theOneHoveredOn = event.target;
    theOneHoveredOn.style.backgroundColor = "white"
}
function selectedSquare(event) {
    let theOneClickedOn = event.target;
    let togOne = document.querySelector('#toggle-one');
    let togTwo = document.querySelector('#toggle-two');
    // let playerNoToggle = document.querySelector('#player-no-toggle');
    theOneClickedOn.disabled = true;
    theOneClickedOn.style.backgroundColor = "grey";
    if (playerOneTurn === true) {
        theOneClickedOn.style.background = 'url("jimmy.jpeg")';
    } else {
        theOneClickedOn.style.background = 'url("josh.jpeg")';
    }
    //set style.background to an image

    if (playerOneTurn === true) {
        theOneClickedOn.textContent = "X";
        togOne.id = "toggle-two";
        togOne.textContent = "TWO";

        if ((btn1.disabled === true) && (btn2.disabled === true) && (btn3.disabled === true) && (btn1.textContent === "X") && (btn2.textContent === "X") && (btn3.textContent === "X")){
            console.log('line 1 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togOne.textContent = "ONE";

        } else if ((btn4.disabled === true) && (btn5.disabled === true) && (btn6.disabled === true) && (btn4.textContent === "X") && (btn5.textContent === "X") && (btn6.textContent === "X")) {
            console.log('line 2 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togOne.textContent = "ONE";
        } else if ((btn7.disabled === true) && (btn8.disabled === true) && (btn9.disabled === true) && (btn7.textContent === "X") && (btn8.textContent === "X") && (btn9.textContent === "X")) {
            console.log('line 3 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togOne.textContent = "ONE";
        } else if ((btn1.disabled === true) && (btn4.disabled === true) && (btn7.disabled === true) && (btn1.textContent === "X") && (btn4.textContent === "X") && (btn7.textContent === "X")) {
            console.log('line 4 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togOne.textContent = "ONE";
        } else if ((btn2.disabled === true) && (btn5.disabled === true) && (btn8.disabled === true) && (btn2.textContent === "X") && (btn5.textContent === "X") && (btn8.textContent === "X")) {
            console.log('line 5 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togOne.textContent = "ONE";
        } else if ((btn3.disabled === true) && (btn6.disabled === true) && (btn9.disabled === true) && (btn3.textContent === "X") && (btn6.textContent === "X") && (btn9.textContent === "X")) {
            console.log('line 6 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togOne.textContent = "ONE";
        } else if ((btn1.disabled === true) && (btn5.disabled === true) && (btn9.disabled === true) && (btn1.textContent === "X") && (btn5.textContent === "X") && (btn9.textContent === "X")) {
            console.log('line 7 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togOne.textContent = "ONE";
        } else if ((btn3.disabled === true) && (btn5.disabled === true) && (btn7.disabled === true) && (btn3.textContent === "X") && (btn5.textContent === "X") && (btn7.textContent === "X")) {
            console.log('line 8 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togOne.textContent = "ONE";
        } else if ((btn1.disabled === true) && (btn2.disabled === true) && (btn3.disabled === true) && (btn4.disabled === true) && (btn5.disabled === true) && (btn6.disabled === true) && (btn7.disabled === true) && (btn8.disabled === true) && (btn9.disabled === true)) {
                console.log('Its a draw');
                playerNoToggle.textContent = "NO";
                turnWinsToggle.textContent = "WINS";
                togOne.textContent = "ONE";
        } else {
            console.log('yippy ki yay');
        }
    } else {
        theOneClickedOn.textContent = "O";
        togTwo.id = "toggle-one";
        togTwo.textContent = "ONE";

        if ((btn1.disabled === true) && (btn2.disabled === true) && (btn3.disabled === true) && (btn1.textContent === "O") && (btn2.textContent === "O") && (btn3.textContent === "O")){
            console.log('line 1 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togTwo.textContent = "TWO";
            togTwo.textContent = "TWO";
        } else if ((btn4.disabled === true) && (btn5.disabled === true) && (btn6.disabled === true) && (btn4.textContent === "O") && (btn5.textContent === "O") && (btn6.textContent === "O")) {
            console.log('line 2 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togTwo.textContent = "TWO";
        } else if ((btn7.disabled === true) && (btn8.disabled === true) && (btn9.disabled === true) && (btn7.textContent === "O") && (btn8.textContent === "O") && (btn9.textContent === "O")) {
            console.log('line 3 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togTwo.textContent = "TWO";
        } else if ((btn1.disabled === true) && (btn4.disabled === true) && (btn7.disabled === true) && (btn1.textContent === "O") && (btn4.textContent === "O") && (btn7.textContent === "O")) {
            console.log('line 4 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togTwo.textContent = "TWO";
        } else if ((btn2.disabled === true) && (btn5.disabled === true) && (btn8.disabled === true) && (btn2.textContent === "O") && (btn5.textContent === "O") && (btn8.textContent === "O")) {
            console.log('line 5 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togTwo.textContent = "TWO";
        } else if ((btn3.disabled === true) && (btn6.disabled === true) && (btn9.disabled === true) && (btn3.textContent === "O") && (btn6.textContent === "O") && (btn9.textContent === "O")) {
            console.log('line 6 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togTwo.textContent = "TWO";
        } else if ((btn1.disabled === true) && (btn5.disabled === true) && (btn9.disabled === true) && (btn1.textContent === "O") && (btn5.textContent === "O") && (btn9.textContent === "O")) {
            console.log('line 7 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togTwo.textContent = "TWO";
        } else if ((btn3.disabled === true) && (btn5.disabled === true) && (btn7.disabled === true) && (btn3.textContent === "O") && (btn5.textContent === "O") && (btn7.textContent === "O")) {
            console.log('line 8 game over');
            gameOver();
            turnWinsToggle.textContent = "WINS";
            togTwo.textContent = "TWO";
        } else if ((btn1.disabled === true) && (btn2.disabled === true) && (btn3.disabled === true) && (btn4.disabled === true) && (btn5.disabled === true) && (btn6.disabled === true) && (btn7.disabled === true) && (btn8.disabled === true) && (btn9.disabled === true)) {
            console.log('Its a draw');
            playerNoToggle.textContent = "NO";
            turnWinsToggle.textContent = "WINS";
            togTwo.textContent = "TWO";
        } else {
            console.log('yippy ki yay');
        }
    } togglePlayerTurn();
}
function startGameAgain() {
    
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    btn9.disabled = false;

    btn1.style.background = "white";
    btn2.style.background = "white";
    btn3.style.background = "white";
    btn4.style.background = "white";
    btn5.style.background = "white";
    btn6.style.background = "white";
    btn7.style.background = "white";
    btn8.style.background = "white";
    btn9.style.background = "white";

    btn1.textContent = "";
    btn2.textContent = "";
    btn3.textContent = "";
    btn4.textContent = "";
    btn5.textContent = "";
    btn6.textContent = "";
    btn7.textContent = "";
    btn8.textContent = "";
    btn9.textContent = "";
    turnWinsToggle.textContent = "TURN";
    playerNoToggle.textContent = "PLAYER";

}

function gameOver() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
}


button.forEach(function(scrollOver) {
    scrollOver.addEventListener('mouseover', buttonHoverColor)
});
button.forEach(function(scrollOver) {
    scrollOver.addEventListener('mouseout', buttonNoHoverColor)
});
button.forEach(function(buttonClicked){
    buttonClicked.addEventListener('click', selectedSquare)
});
playAgain.addEventListener('click', startGameAgain);