createGrid(16);

function createGrid(rowsCols){
  for (let i = 0; i < rowsCols*rowsCols; i++) {
    const grid = document.querySelector('.container');
    const cell = document.createElement('div');
    grid.appendChild(cell);
  }
}
