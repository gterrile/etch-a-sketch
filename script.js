// Elements consts
const containerGrid = document.getElementById('containerGrid');
const style = document.getElementById('style');
const slider = document.getElementById('slider');

// Grid variables
const gridSize = 700;
let totalElements = slider.value * slider.value;
let divSize = (gridSize / slider.value);
// var divs = document.querySelectorAll('.divElement');


// Get mouse click status
var mouseStatus = 0;
window.onmousedown = function () { 
  mouseStatus = 1;
  console.log(mouseStatus);
}
window.onmouseup = function () { 
  mouseStatus = 0; 
  console.log(mouseStatus);
}

// Colored grid
function createColoredGrid () {
  
  let totalElements = slider.value * slider.value;
  let divSize = gridSize / slider.value;

  // Remove all child nodes of the grid
  while (containerGrid.firstChild) {
    containerGrid.removeChild(containerGrid.firstChild);
  }
  
  for (i = 1; i <= totalElements; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('divElement');
    containerGrid.appendChild(divElement);

    // get random values for rgb
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    divElement.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; 
    background-color: rgb(${r},${g},${b}); opacity: 0.1`);
  }
  
  let divs = document.querySelectorAll('.divElement');
  paintColor(divs)
  return divs;
}

// Grayscale grid
function createGrayscaleGrid () {
  
  let totalElements = slider.value * slider.value;
  let divSize = gridSize / slider.value;
  
  // Remove all child nodes of the grid
  while (containerGrid.firstChild) {
    containerGrid.removeChild(containerGrid.firstChild);
  }

  for (i = 1; i <= totalElements; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('divElement');
    containerGrid.appendChild(divElement);

    // get random values for rgb
    const x = Math.random() * 255;

    divElement.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; 
    background-color: rgb(${x},${x},${x}); opacity: 0.1`);
  }
  let divs = document.querySelectorAll('.divElement');
  paintBlack(divs);
  return divs;
}

let lala = createColoredGrid();
paintColor(lala, slider.value);

function paintColor(nodes) {
  
  let totalElements = slider.value * slider.value;
  let divSize = gridSize / slider.value;
  
  nodes.forEach(item => {
  item.addEventListener ('mouseover', (e) => {
        if (mouseStatus) {
          const r = Math.random() * 255;
          const g = Math.random() * 255;
          const b = Math.random() * 255;
          item.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; 
          background-color: rgb(${r},${g},${b})`);
          item.classList.add('colored');
        }
    })
  })
}

function paintBlack(nodes) {
  
  let totalElements = slider.value * slider.value;
  let divSize = gridSize / slider.value;
  
  nodes.forEach(item => {
  item.addEventListener ('mouseover', (e) => {
        if (mouseStatus) {
          item.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; 
          background-color: rgb(0,0,0)`);
          item.classList.add('colored');
        }
    })
  })
}


// Slider changes
slider.oninput = function () {  
  if (style.value == 1) {
    createColoredGrid();
  }

  if (style.value == 2) {
    createGrayscaleGrid();
  }
}

// Style changes
style.onchange = function () {
  if (this.value == 1) {
    createColoredGrid();
  }

  if (this.value == 2) {
    createGrayscaleGrid();
  }
}

// if (mouseStatus) {
//   paintColor();
// }


// var divs = document.querySelectorAll('.divElement');




