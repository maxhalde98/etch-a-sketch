

const container = document.querySelector('#container');

function initGrid(num) {
    for (i=0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        for(j=0; j < num; j++) {
            const divBox = document.createElement('div');
            divBox.classList.add('divBox');
            divBox.style.width = 100/num + '%';
            divBox.addEventListener('mouseenter', () => {
                divBox.style.backgroundColor = randomColor();
            });
            row.appendChild(divBox);
        }
        container.appendChild(row);
    }
}

initGrid(16);

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = `rgb(${x},${y},${z})`;
    return color;
}

const startOver = document.querySelector('#start-over');
startOver.addEventListener('click', () => {

    const container = document.getElementById('container');
    
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    let numSquares = prompt('Enter the number of squares per row: ');

    while (numSquares > 100 || numSquares < 1) {
        alert('You must enter a number between 1 and 100 inclusively');
        numSquares = prompt('Enter the number of squares per row: ');
    }
    
    initGrid(numSquares);
    
})