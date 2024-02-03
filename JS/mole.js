let popMoleGrid;
let popBombGrid;
let gameOver;
let timer;
let score;
let timerDisplay;
let scoreDisplay;
let gameTimer;
let moleTimer;
let bombTimer;

window.onload = () => {
    gameOver = true;

    timerDisplay = document.getElementById('timer');
    scoreDisplay = document.getElementById('score');
    document.getElementById('startButton').addEventListener("click", setGame);
}

function getRandomGrid() {
    let randomNum = Math.floor(Math.random() * 9);
    console.log(randomNum);
    return randomNum.toString();
}

function popMole() {
    if (gameOver) {
        return;
    }

    if (popMoleGrid && popMoleGrid.firstChild) {
        popMoleGrid.removeChild(popMoleGrid.firstChild);
    }

    let mole = document.createElement("img");
    mole.src = './Assets/mole.png';

    let num = getRandomGrid();
    if (popBombGrid && popBombGrid.id === num) {
        return;
    }
    popMoleGrid = document.getElementById(num);
    popMoleGrid.appendChild(mole);
}

function popBomb() {
    if (gameOver) {
        return;
    }

    if (popBombGrid && popBombGrid.firstChild) {
        popBombGrid.removeChild(popBombGrid.firstChild);
    }

    let bomb = document.createElement("img");
    bomb.src = './Assets/bomb.png';

    let num = getRandomGrid();
    if (popMoleGrid && popMoleGrid.id === num) {
        return;
    }
    popBombGrid = document.getElementById(num);
    popBombGrid.appendChild(bomb);
}

function selectGrid() {
    if (gameOver) {
        return;
    }

    if (this == popMoleGrid) {
        score += 1;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    if (this == popBombGrid) {
        alert(`Game over! Your score is ${score}`);
        clearInterval(gameTimer);
        clearInterval(moleTimer);
        clearInterval(bombTimer);
        gameOver = true;
    }
}

function setGame() {
    gameOver = false;

    for (let i=0; i<9; i++) {
        let grid = document.getElementById(i)
        grid.addEventListener("click", selectGrid);
    }
    
    timer = 30;
    timerDisplay.textContent = `Timer: ${timer}`;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;

    gameTimer = setInterval(() => {

        timer--;
        timerDisplay.textContent = `Timer: ${timer}`;

        if (timer <= 0) {
            gameOver = true;
            clearInterval(gameTimer);
            clearInterval(moleTimer);
            clearInterval(bombTimer);
            alert(`Game over! Your score is ${score}`);
        }
    }, 1000);

    moleTimer = setInterval(popMole, 1000);
    bombTimer = setInterval(popBomb, 1300);
}
