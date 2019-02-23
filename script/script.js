const grid = document.querySelector('.grid');
const resetButton = document.querySelector('#reset')

createGrid(16);

// fill in cell when hovered
grid.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('grid') == false){
    e.target.classList.add("fill");
  }
})

resetButton.addEventListener('click', (e) => {
  reset();
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
  while(userGrid <= 0 || userGrid >= 100) {
    userGrid = prompt("Select a number between 1-100 to create a new grid.");
  }
  createGrid(userGrid);
}
