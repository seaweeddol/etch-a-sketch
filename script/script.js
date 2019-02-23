const grid = document.querySelector('.container');

createGrid(16);

function createGrid(rowsCols){
  for (let i = 0; i < rowsCols*rowsCols; i++) {
    const grid = document.querySelector('.container');
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
  }
}

// fill in cell when hovered
grid.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('container') == false){
    e.target.classList.add("fill");
  }
})
