const grid = document.querySelector('.grid');
const resetButton = document.querySelector('#reset')
const colorModeButton = document.querySelector('#color')
const bwModeButton = document.querySelector('#black')

createGrid(16);
blackFill();

resetButton.addEventListener('click', (e) => {
  reset();
})

colorModeButton.addEventListener('click', (e) => {
  reset();
  randomFill();
})

bwModeButton.addEventListener('click', (e) => {
  reset();
  blackFill();
})

// create square grid based on number provided
function createGrid(rowsCols){
  for (let i = 0; i < rowsCols*rowsCols; i++) {
    const grid = document.querySelector('.grid');
    grid.setAttribute('style', 'grid-template-columns: repeat(auto-fit, minmax(' + 100/rowsCols + '%, 1fr))');
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
  }
}

// reset grid and ask for user grid size
function reset(){
  grid.innerHTML = '';
  let userGrid = 0;
  while(userGrid <= 0 || userGrid >= 100 || isNaN(userGrid)) {
    userGrid = prompt("Select a number between 1-100 to create a new grid.");
  }
  createGrid(userGrid);
}



// event listener for black color fill
function blackFill(){
  grid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid') == false){
      if (e.target.classList.contains('blackFill')) { // if already filled, make fill 10% darker
        let opacity = parseFloat(e.target.style.opacity) + 0.1;
        e.target.style.opacity = opacity;
      } else { // if not filled, fill with 10% opacity black
        e.target.classList.add('blackFill');
        e.target.style.opacity = 0.1;
      }
    }
  })
}

// generate a random rgb color
function randomColor(){
  let r = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);

  let rgb = 'rgb(' + r + ',' + b + ',' + g + ')';
  return rgb;
}

// event listener for random color fill
function randomFill(){
  grid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid') == false){
      if (e.target.style.backgroundColor) { // if already filled, make fill 10% darker
        let opacity = parseFloat(e.target.style.opacity) + 0.1;
        e.target.style.opacity = opacity;
      } else { // if not filled, fill with random color at 10% opacity
        e.target.style.background = randomColor();
        e.target.style.opacity = 0.1;
      }
    }
  })
}
