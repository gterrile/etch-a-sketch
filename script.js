// Elements consts
const containerGrid = document.getElementById('containerGrid');
const style = document.getElementById('style');
const slider = document.getElementById('slider');
const pen = document.getElementById('pen');
const body = document.getElementById('body');
const snapshot = document.getElementById('snapshot');
const canvaContainer = document.getElementById('canvaContainer');
const shutter = document.getElementById('shutter');

// Grid variables
const gridSize = 700;
let totalElements = slider.value * slider.value;
let divSize = (gridSize / slider.value);
// var divs = document.querySelectorAll('.divElement');


// Get mouse click status
var mouseStatus = 0;
window.onmousedown = function () { 
  mouseStatus = 1;
  //console.log(mouseStatus);
}
window.onmouseup = function () { 
  mouseStatus = 0; 
  //console.log(mouseStatus);
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
    background-color: rgb(${r},${g},${b}); opacity: 0.05`);
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
    background-color: rgb(${x},${x},${x}); opacity: 0.05`);
  }
  let divs = document.querySelectorAll('.divElement');
  paintBlack(divs);
  return divs;
}

// Initialize grid with colors
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
        if (mouseStatus && pen.value == 2) {
          const r = Math.random() * 255;
          const g = Math.random() * 255;
          const b = Math.random() * 255;
          item.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; 
          background-color: rgb(${r},${g},${b}); opacity: 0.05`);
          item.classList.remove('colored');
        }
  });
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
        if (mouseStatus && pen.value == 2) {
          const x = Math.random() * 255;
          item.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; 
          background-color: rgb(${x},${x},${x}); opacity: 0.05`);
          item.classList.remove('colored');
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

// Erase mode

pen.addEventListener('change', (e) => {
  console.log(pen.value);
  if (pen.value == 2) {
    containerGrid.setAttribute('style', 'border: 5px solid tomato');
    // containerGrid.setAttribute('style', 'box-shadow: 6px 6px 10px 2px rgb(50, 50, 50)');
  }
  else {
    containerGrid.setAttribute('style', 'border: none');
    // containerGrid.setAttribute('style', 'box-shadow: 6px 6px 10px 2px rgb(200, 200, 200)');
  }
} )

snapshot.onclick = function () {
  html2canvas(document.querySelector("#containerGrid")).then(canvas => {
    shutter.currentTime = 0;
    shutter.play();
    canvaContainer.appendChild(canvas)
    canvas.setAttribute('style', 'height: 200px; width: 200px');
  });
}

