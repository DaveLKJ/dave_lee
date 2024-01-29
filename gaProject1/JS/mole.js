let popUpGrid;

let timer = 60;
let score = 0;

window.onload = () => {
    setGame();
}

function getRandomGrid() {
    let randomNum = Math.floor(Math.random() * 9);
    return randomNum.toString();
}

function popMole() {

    if (popUpGrid) {
        popUpGrid.removeChild(popUpGrid.firstChild);
    }

    let mole = document.createElement("img");
    mole.src = './Assets/mole.png';

    let num = getRandomGrid();
    popUpGrid = document.getElementById(num);
    popUpGrid.appendChild(mole);
}

function setGame() {
    
    setInterval(popMole, 2000);
}
