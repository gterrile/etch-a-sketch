const gridSize = 700;
var totalElements = 256;
var divSize = 50;
const containerGrid = document.getElementById('containerGrid');
const create = document.getElementById('create');

let divs = [];

var slider = document.getElementById('slider');
var output = document.getElementById('slider-value');
output.textContent = slider.value;

// Slider changes
slider.oninput = function () {
  
  output.textContent = this.value; 
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
    // divElement.textContent = i;
    containerGrid.appendChild(divElement);

    // get random values for rgb
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    divElement.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; background-color: rgb(${r},${g},${b}); opacity: 0.05`); 
  }
  
  containerGrid.onmousedown = function () {
    divs = document.querySelectorAll('.divElement');
    divs.forEach(item => {
      item.addEventListener ('mouseover', (e) => {
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;
    
        item.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; background-color: rgb(${r},${g},${b}); opacity: 1`);
      })
    })
  }

  containerGrid.onmouseup = function () {
    divs = document.querySelectorAll('.divElement');
    divs.forEach(item => {
      item.addEventListener ('mouseover', (e) => {
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;
    
        item.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; background-color: rgb(${r},${g},${b}); opacity: 0.05`);
      })
    })
  }

}

// Create default new child elements inside the grid
// divSize = (gridSize / 16);
// for (i = 1; i <= totalElements; i++) {
//   const divElement = document.createElement('div');
//   divElement.classList.add('divElement');
//   // divElement.textContent = i;
//   containerGrid.appendChild(divElement);

//   // get random values for rgb
//   const r = Math.random() * 255;
//   const g = Math.random() * 255;
//   const b = Math.random() * 255;

//   divElement.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; background-color: rgb(${r},${g},${b}); opacity: 0.05`);
// }


// divs.forEach(item => {
//   item.addEventListener ('mouseover', (e) => {
//     const r = Math.random() * 255;
//     const g = Math.random() * 255;
//     const b = Math.random() * 255;

//     item.setAttribute('style', `height:${divSize}px; min-width:${divSize}px; background-color: rgb(${r},${g},${b}); opacity: 1`);
//   })
// })
