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



// fill in cell when hovered
function blackFill(){
  grid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid') == false){
      if (e.target.classList.contains('blackFill')) {
        let opacity = parseFloat(e.target.style.opacity) + 0.1;
        e.target.style.opacity = opacity;
      } else {
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

// add event listener for random color fill
function randomFill(){
  grid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid') == false){
      if (e.target.style.backgroundColor) {
        let opacity = parseFloat(e.target.style.opacity) + 0.1;
        e.target.style.opacity = opacity;
      } else {
        e.target.style.background = randomColor();
        e.target.style.opacity = 0.1;
      }
    }
  })
}

// function darkenColor(currentColor){
//   let rgb = currentColor;
//
//   var rStart = rgb.indexOf('(') + 1;
//   var rEnd = rgb.indexOf(',',rStart);
//   var r = rgb.substring(rStart,rEnd);
//
//   var gStart = rgb.indexOf(',') + 2;
//   var gEnd = rgb.indexOf(',',gStart);
//   var g = rgb.substring(gStart,gEnd);
//
//   var bStart = rgb.lastIndexOf(',') + 2;
//   var bEnd = rgb.indexOf(')',bStart);
//   var b = rgb.substring(bStart,bEnd);
//
//   console.log(r);
//   console.log(g);
//   console.log(b);
// }
