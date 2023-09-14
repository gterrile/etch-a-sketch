const gridSize = 700;
var totalElements = 256;
var divSize = (gridSize / 16);
const containerGrid = document.getElementById('containerGrid');
var slider = document.getElementById('slider');

const style = document.getElementById('style');

// Get mouse click status
var mouseStatus = 0;
window.onmousedown = function () {
  mouseStatus = 1;
}
window.onmouseup = function () {
  mouseStatus = 0;
}

// Create default new child elements inside the grid
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

var divs = document.querySelectorAll('.divElement');

// Slider changes
slider.oninput = function () {  
  
  // Update grid values
  totalElements = this.value * this.value;
  divSize = (gridSize / this.value);

  // Remove all child nodes of the grid
  while (containerGrid.firstChild) {
    containerGrid.removeChild(containerGrid.firstChild);
  }

  // Create new child elements inside the grid
  for (i = 1; i <= totalElements; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('divElement');
    containerGrid.appendChild(divElement);

    // get random values for rgb
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    // Style the elements with random colors
    divElement.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; 
    background-color: rgb(${r},${g},${b}); opacity: 0.1`); 
  }

  // update nodeList of divElement class elements.
  divs = document.querySelectorAll('.divElement');
  
  // Paint elements in the grid
  divs.forEach(item => {
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

// Paint elements in the grid
divs.forEach(item => {
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

var switchMode = document.getElementById('switchMode');

console.log(switchMode);