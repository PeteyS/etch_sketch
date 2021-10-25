let numberOfSquares = 64; //just to test the grid make
//need to make a way for user to choose how many grid squares then 
//change this to an event listener that sets the variable
let current = 'darken';
let ready = false;

const grid = document.querySelector('.grid');
const restart = document.querySelector('.restart');
const erase = document.querySelector('.erase');
const rainbow = document.querySelector('.rainbow');
const big = document.querySelector('.big');
const medium = document.querySelector('.medium');
const small = document.querySelector('.small');
const shade = document.querySelector('.shader');
const changeColor = document.querySelector('.change');
const colorPicker = document.querySelector('#color')

restart.addEventListener('click',restartGrid);

big.addEventListener('click', ()=> {
    numberOfSquares = 100;
    setGrid();
    big.style.background = 'rgb(197, 146, 18)';
    big.style.color = 'brown';
    medium.style.background = 'brown';
    medium.style.color = 'black';
    small.style.background = 'brown';
    small.style.color = 'black';
})

medium.addEventListener('click', () =>{
    numberOfSquares = 50;
    setGrid();
    big.style.background = 'brown';
    big.style.color = 'black';
    medium.style.background = 'rgb(197, 146, 18)';
    medium.style.color = 'brown';
    small.style.background = 'brown';
    small.style.color = 'black';
})

small.addEventListener('click',()=>{
    numberOfSquares = 32;
    setGrid();
    big.style.background = 'brown';
    big.style.color = 'black';
    medium.style.background = 'brown';
    medium.style.color = 'black';
    small.style.background = 'rgb(197, 146, 18)';
    small.style.color = 'brown';
})

shade.addEventListener('click', ()=>{
    current = 'darken';
    shade.style.background = 'rgb(197, 146, 18)';
    erase.style.background = 'transparent';
    rainbow.style.background = 'transparent';
    restart.style.background = 'transparent';
    changeColor.style.background = 'transparent';
}
)

erase.addEventListener('click', () => {
    current = 'erase';
    erase.style.background = 'rgb(197, 146, 18)';
    restart.style.background = 'transparent';
    rainbow.style.background = 'transparent';
    shade.style.background = 'transparent';
    changeColor.style.background = 'transparent';
});

rainbow.addEventListener('click', ()=>{
    current = 'rainbow';
    rainbow.style.background = 'rgb(197, 146, 18)';
    erase.style.background = 'transparent';
    restart.style.background = 'transparent';
    shade.style.background = 'transparent';
    changeColor.style.background = 'transparent';
})

changeColor.addEventListener('click', ()=>{
    current = 'colour';
    changeColor.style.background = 'rgb(197, 146, 18)';
    erase.style.background = 'transparent';
    rainbow.style.background = 'transparent';
    shade.style.background = 'transparent';
    restart.style.background = 'transparent';
})

function change(e){
    return document.getElementById('color').value;
}

function eraseIt (e){
    e.target.background = 'white';
}

function setGrid (squares){
    squares=numberOfSquares;
    resetGrid();

    grid.style.gridTemplateColumns = `repeat(${squares},1fr)`;
    grid.style.gridTemplateRows = `repeat(${squares},1fr)`;

    for(let i=0;i<squares*squares;i++){
        const box = document.createElement('div');
        box.style.background = 'white';
        box.dataset.count = 0;
        box.addEventListener('mouseover', draw);
        grid.appendChild(box);
    }
}
 
function resetGrid(){
    grid.innerHTML = '';
}

function restartGrid(){
    grid.innerHTML = '';
    setGrid(numberOfSquares);
}

function draw(e){
    if (current == 'darken'){
        if (e.target.dataset.count == '0'){
            e.target.className = 'first';
            e.target.dataset.count +=1;
        }
        else if (e.target.dataset.count == '01'){
            e.target.className = 'second'
            e.target.dataset.count +=1;
        }
        else if (e.target.dataset.count == '011'){
            e.target.className = 'third';
            e.target.dataset.count +=1;
        }
        else if (e.target.dataset.count == '0111'){
            e.target.className = 'fourth';
            e.target.dataset.count +=1;
        }
        else if (e.target.dataset.count == '01111'){
            e.target.className = 'fifth';
            e.target.dataset.count +=1;
        }
        else if (e.target.dataset.count == '011111'){
            e.target.className = 'sixth';
            e.target.dataset.count +=1;
        }
        else if (e.target.dataset.count == '0111111'){
            e.target.className = 'seventh';
        }
        else if (e.target.dataset.count = '01111111'){
            e.target.className = 'eighth';
        }
        else if (e.target.dataset.count = '011111111'){
            e.target.className = 'ninth';
        }
        else if (e.target.dataset.count = '0111111111'){
            e.target.className = 'tenth';
        }
    }
    else if (current == 'erase') {
        e.target.className = 'eraser';
    }  
    else if (current == 'rainbow'){
        e.target.className ='';
        e.target.style.background = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 256)})`;
    }
    else if (current == 'colour'){
        e.target.className = '';
        e.target.style.background = change();
    }   
}

window.onload = () => {
    setGrid (numberOfSquares);
    big.style.background = 'rgb(197, 146, 18)';
    shade.style.background = 'rgb(197, 146, 18)';
}