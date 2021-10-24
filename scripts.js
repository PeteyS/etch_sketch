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
})

medium.addEventListener('click', () =>{
    numberOfSquares = 50;
    setGrid();
})

small.addEventListener('click',()=>{
    numberOfSquares = 32;
    setGrid();
})

shade.addEventListener('click', ()=>{
    current = 'darken';
}
)

erase.addEventListener('click', () => {
    current = 'erase';
});

rainbow.addEventListener('click', ()=>{
    current = 'rainbow';
})

changeColor.addEventListener('click', ()=>{
    current = 'colour';
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
        box.style.borderRadius = '1px 1px 1px 1px';
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
}