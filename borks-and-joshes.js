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
var oneTwoToggle = document.querySelector('.player-one');
var oneTwoToggleText = document.querySelector('#toggle-one-two');
var jimmyToken = document.querySelectorAll('.jimmy-token');
var joshToken = document.querySelectorAll('.josh-token');
var p1Token = 'url("jimmy.jpeg")';
var p2Token = 'url("josh.jpeg")';

var p1Score = document.querySelector('#p1-score');
var p2Score = document.querySelector('#p2-score');
var drawScore = document.querySelector('#draw-score');
var p1ScoreNum = 0;
var p2ScoreNum = 0;
var drawScoreNum = 0;

var jimmy1 = document.querySelector('#jimmy');
var jimmy2 = document.querySelector('#jimmy2');
var jimmy4 = document.querySelector('#jimmy4');
var josh3 = document.querySelector('#josh3');
var josh4 = document.querySelector('#josh4');
var josh1 = document.querySelector('#josh');

var arrow1 = document.querySelector('.arrow1');
var arrow2 = document.querySelector('.arrow2');

var p1NameSelectButton = document.querySelector('#p1-name-choose');
var p2NameSelectButton = document.querySelector('#p2-name-choose');
var playerOneName = document.querySelector('.player-one-name');
var playerTwoName = document.querySelector('.player-two-name');

function togglePlayerTurn() {
    playerOneTurn = !playerOneTurn;
}
function buttonHoverColor(event) {
    let theOneHoveredOn = event.target;
    theOneHoveredOn.style.backgroundColor = "lightblue"
}
function buttonNoHoverColor(event) {
    let theOneHoveredOn = event.target;
    theOneHoveredOn.style.backgroundColor = "maroon";
}
function selectedSquare(event) {
    let theOneClickedOn = event.target;
    
    theOneClickedOn.disabled = true;
    theOneClickedOn.style.backgroundColor = "grey";
    if (playerOneTurn === true) {
        theOneClickedOn.style.background = p1Token;
    } else {
        theOneClickedOn.style.background = p2Token;
    }
    if (playerOneTurn === true) {
        theOneClickedOn.textContent = "X";

        if ((btn1.disabled === true) && (btn2.disabled === true) && (btn3.disabled === true) && (btn1.textContent === "X") && (btn2.textContent === "X") && (btn3.textContent === "X")){
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p1ScoreNum++;
            p1Score.textContent = p1ScoreNum;
            gameOver();
        } else if ((btn4.disabled === true) && (btn5.disabled === true) && (btn6.disabled === true) && (btn4.textContent === "X") && (btn5.textContent === "X") && (btn6.textContent === "X")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p1ScoreNum++;
            p1Score.textContent = p1ScoreNum;
            gameOver();
        } else if ((btn7.disabled === true) && (btn8.disabled === true) && (btn9.disabled === true) && (btn7.textContent === "X") && (btn8.textContent === "X") && (btn9.textContent === "X")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p1ScoreNum++;
            p1Score.textContent = p1ScoreNum;
            gameOver();
        } else if ((btn1.disabled === true) && (btn4.disabled === true) && (btn7.disabled === true) && (btn1.textContent === "X") && (btn4.textContent === "X") && (btn7.textContent === "X")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p1ScoreNum++;
            p1Score.textContent = p1ScoreNum;
            gameOver();
        } else if ((btn2.disabled === true) && (btn5.disabled === true) && (btn8.disabled === true) && (btn2.textContent === "X") && (btn5.textContent === "X") && (btn8.textContent === "X")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p1ScoreNum++;
            p1Score.textContent = p1ScoreNum;
            gameOver();
        } else if ((btn3.disabled === true) && (btn6.disabled === true) && (btn9.disabled === true) && (btn3.textContent === "X") && (btn6.textContent === "X") && (btn9.textContent === "X")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p1ScoreNum++;
            p1Score.textContent = p1ScoreNum;
            gameOver();
        } else if ((btn1.disabled === true) && (btn5.disabled === true) && (btn9.disabled === true) && (btn1.textContent === "X") && (btn5.textContent === "X") && (btn9.textContent === "X")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p1ScoreNum++;
            p1Score.textContent = p1ScoreNum;
            gameOver();
        } else if ((btn3.disabled === true) && (btn5.disabled === true) && (btn7.disabled === true) && (btn3.textContent === "X") && (btn5.textContent === "X") && (btn7.textContent === "X")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p1ScoreNum++;
            p1Score.textContent = p1ScoreNum;
            gameOver();
        } else if ((btn1.disabled === true) && (btn2.disabled === true) && (btn3.disabled === true) && (btn4.disabled === true) && (btn5.disabled === true) && (btn6.disabled === true) && (btn7.disabled === true) && (btn8.disabled === true) && (btn9.disabled === true)) {
                playerNoToggle.textContent = "NO";
                turnWinsToggle.textContent = "WINS";
                playerNoToggle.className = "draw";
                turnWinsToggle.className = "draw";
                oneTwoToggle.className = "draw";
                drawScoreNum++;
                drawScore.textContent = drawScoreNum;
                gameOver();
        } else {
            oneTwoToggleText.textContent = "TWO";
            oneTwoToggle.className = "player-two";
            arrow1.style.color = "grey";
            arrow2.style.color = "pink";
            togglePlayerTurn();
        }
    } else {
        theOneClickedOn.textContent = "O";

        if ((btn1.disabled === true) && (btn2.disabled === true) && (btn3.disabled === true) && (btn1.textContent === "O") && (btn2.textContent === "O") && (btn3.textContent === "O")){
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p2ScoreNum++;
            p2ScoreNum++;
            p2Score.textContent = p2ScoreNum;
            gameOver();
        } else if ((btn4.disabled === true) && (btn5.disabled === true) && (btn6.disabled === true) && (btn4.textContent === "O") && (btn5.textContent === "O") && (btn6.textContent === "O")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p2ScoreNum++;
            p2Score.textContent = p2ScoreNum;
            gameOver();
        } else if ((btn7.disabled === true) && (btn8.disabled === true) && (btn9.disabled === true) && (btn7.textContent === "O") && (btn8.textContent === "O") && (btn9.textContent === "O")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p2ScoreNum++;
            p2Score.textContent = p2ScoreNum;
            gameOver();
        } else if ((btn1.disabled === true) && (btn4.disabled === true) && (btn7.disabled === true) && (btn1.textContent === "O") && (btn4.textContent === "O") && (btn7.textContent === "O")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p2ScoreNum++;
            p2Score.textContent = p2ScoreNum;
            gameOver();
        } else if ((btn2.disabled === true) && (btn5.disabled === true) && (btn8.disabled === true) && (btn2.textContent === "O") && (btn5.textContent === "O") && (btn8.textContent === "O")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p2ScoreNum++;
            p2Score.textContent = p2ScoreNum;
            gameOver();
        } else if ((btn3.disabled === true) && (btn6.disabled === true) && (btn9.disabled === true) && (btn3.textContent === "O") && (btn6.textContent === "O") && (btn9.textContent === "O")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p2ScoreNum++;
            p2Score.textContent = p2ScoreNum;
            gameOver();
        } else if ((btn1.disabled === true) && (btn5.disabled === true) && (btn9.disabled === true) && (btn1.textContent === "O") && (btn5.textContent === "O") && (btn9.textContent === "O")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p2ScoreNum++;
            p2Score.textContent = p2ScoreNum;
            gameOver();
        } else if ((btn3.disabled === true) && (btn5.disabled === true) && (btn7.disabled === true) && (btn3.textContent === "O") && (btn5.textContent === "O") && (btn7.textContent === "O")) {
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "endgame";
            turnWinsToggle.className = "endgame";
            p2ScoreNum++;
            p2Score.textContent = p2ScoreNum;
            gameOver();
        } else if ((btn1.disabled === true) && (btn2.disabled === true) && (btn3.disabled === true) && (btn4.disabled === true) && (btn5.disabled === true) && (btn6.disabled === true) && (btn7.disabled === true) && (btn8.disabled === true) && (btn9.disabled === true)) {
            playerNoToggle.textContent = "NO";
            turnWinsToggle.textContent = "WINS";
            playerNoToggle.className = "draw";
            turnWinsToggle.className = "draw";
            oneTwoToggle.className = "draw";
            drawScoreNum++;
            drawScore.textContent = drawScoreNum;
            gameOver();
        } else {
            oneTwoToggleText.textContent = "ONE";
            oneTwoToggle.className = "player-one";
            arrow1.style.color = "indigo";
            arrow2.style.color = "grey";
            togglePlayerTurn();
        }
    }
}
function startGameAgain() {
    playerOneTurn = true;

    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    btn9.disabled = false;

    btn1.style.background = "maroon";
    btn2.style.background = "maroon";
    btn3.style.background = "maroon";
    btn4.style.background = "maroon";
    btn5.style.background = "maroon";
    btn6.style.background = "maroon";
    btn7.style.background = "maroon";
    btn8.style.background = "maroon";
    btn9.style.background = "maroon";

    btn1.textContent = "";
    btn2.textContent = "";
    btn3.textContent = "";
    btn4.textContent = "";
    btn5.textContent = "";
    btn6.textContent = "";
    btn7.textContent = "";
    btn8.textContent = "";
    btn9.textContent = "";
    playerNoToggle.textContent = "PLAYER";
    oneTwoToggle.textContent = "ONE";
    turnWinsToggle.textContent = "TURN";
    oneTwoToggle.className = "player-one";
    playerNoToggle.className = "start-game";
    turnWinsToggle.className = "start-game";
    playAgain.style.backgroundColor = "grey";
    arrow1.style.color = "indigo";
    arrow2.style.color = "grey";
    playAgain.disabled = true;
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
    playAgain.style.backgroundColor = "orange";
    playAgain.disabled = false;
}
function playerOneNameChange() {
    playerOneName.textContent = prompt("Hi friend. What is your name?");
    p1ScoreNum = 0;
    p2ScoreNum = 0;
    drawScoreNum = 0;
    p1Score.textContent = p1ScoreNum;
    p2Score.textContent = p2ScoreNum;
    drawScore.textContent = drawScoreNum;
}
function playerTwoNameChange() {
    playerTwoName.textContent = prompt("NAME! GIVE!");
    p1ScoreNum = 0;
    p2ScoreNum = 0;
    drawScoreNum = 0;
    p1Score.textContent = p1ScoreNum;
    p2Score.textContent = p2ScoreNum;
    drawScore.textContent = drawScoreNum;
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

jimmy1.addEventListener('click', function() {
    p1Token = 'url("jimmy.jpeg")';
    jimmy1.className = 'opaque';
    jimmy2.className = 'transparent';
    jimmy4.className = 'transparent';
})
jimmy2.addEventListener('click', function() {
    p1Token = 'url("jimmy2.jpeg")';
    jimmy1.className = 'transparent';
    jimmy2.className = 'opaque';
    jimmy4.className = 'transparent';
})
jimmy4.addEventListener('click', function() {
    p1Token = 'url("jimmy4.jpeg")';
    jimmy1.className = 'transparent';
    jimmy2.className = 'transparent';
    jimmy4.className = 'opaque';
})
josh3.addEventListener('click', function() {
    p2Token = 'url("josh3.jpeg")';
    josh1.className = 'transparent';
    josh3.className = 'opaque';
    josh4.className = 'transparent';
})
josh4.addEventListener('click', function() {
    p2Token = 'url("josh4.jpeg")';
    josh1.className = 'transparent';
    josh3.className = 'transparent';
    josh4.className = 'opaque';
})
josh1.addEventListener('click', function() {
    p2Token = 'url("josh.jpeg")';
    josh1.className = 'opaque';
    josh3.className = 'transparent';
    josh4.className = 'transparent';
})

p1NameSelectButton.addEventListener('click', playerOneNameChange);
p2NameSelectButton.addEventListener('click', playerTwoNameChange);