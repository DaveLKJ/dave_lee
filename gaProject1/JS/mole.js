let popMoleGrid;
let popBombGrid;
let gameOver;
let timer;
let score;
let timerDisplay;
let scoreDisplay;

window.onload = () => {
    gameOver = true;

    timerDisplay = document.getElementById('timer');
    scoreDisplay = document.getElementById('score');
    document.getElementById('startButton').addEventListener("click", setGame);
}

function getRandomGrid() {
    let randomNum = Math.floor(Math.random() * 9);
    return randomNum.toString();
}

function popMole() {
    if (popMoleGrid) {
        popMoleGrid.removeChild(popMoleGrid.firstChild);
    }

    let mole = document.createElement("img");
    mole.src = './Assets/mole.png';

    let num = getRandomGrid();
    popMoleGrid = document.getElementById(num);
    popMoleGrid.appendChild(mole);
}

function popBomb() {
    if (popBombGrid) {
        popBombGrid.removeChild(popBombGrid.firstChild);
    }

    let bomb = document.createElement("img");
    bomb.src = './Assets/bomb.png';

    let num = getRandomGrid();
    // if (popMoleGrid.id = num) {
    //     return;
    // }
    popBombGrid = document.getElementById(num);
    popBombGrid.appendChild(bomb);
}

function selectGrid() {
    if (this == popMoleGrid) {
        score += 1;
        scoreDisplay.textContent = `Score: ${score}`;
    }
}

function setGame() {
    for (let i=0; i<9; i++) {
        let grid = document.getElementById(i)
        grid.addEventListener("click", selectGrid);
    }

    gameOver = false;
    timer = 30;
    timerDisplay.textContent = `Timer: ${timer}`;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;

    gameTimer = setInterval(() => {
        moleTimer = setInterval(popMole, 1000);
        bombTimer = setInterval(popBomb, 1200);
        timer--;
        timerDisplay.textContent = `Timer: ${timer}`;

        if (timer === 0) {
            gameOver = true;
            clearInterval(gameTimer);
            clearInterval(moleTimer);
            alert(`Game over! Your score is ${score}`);
        }
    }, 1000);
}
