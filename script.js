'use strict';

// Calling the container in html.
const container = document.querySelector('.container');
const reset = document.querySelector('.reset');

// TOuchScreen 
// container.addEventListener('touchstart', f);
// container.addEventListener('touchend', f);
// // container.addEventListener('touchmove', f);

//   function f(ev) {
//     console.log(ev.touches);

//   }

const starting = function() {
  // Setting the background color of the grid
  container.style.backgroundColor = 'white';

  // Making the grid base
  container.style.setProperty('grid-template-columns', `repeat(16, 1fr)`);
  container.style.setProperty('grid-template-rows', `repeat(16, 1fr)`);

  // Making the items 
  for (let i = 0; i <= 10000; i++) {
    const item = document.createElement('div'); // Here we are creating div(items).
    container.appendChild(item); // Here we are append the item to the div!!!
    item.classList.add('divColor');

    document.querySelectorAll('.divColor')[i].addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.style.backgroundColor = "black";
    });
  };
};

function erase() {
  const gridItems = document.querySelectorAll('.divColor');

  gridItems.forEach((item) => {
    item.style.backgroundColor = 'white';
    item.style.opacity = '1';
  });
}

const resetting = function() {
  // Reset button. We should be capable to choose the size of the grid just typing a number
  reset.addEventListener('click', function() {
    const sizeGrid = Number(prompt('Choose how many squares per side to make the new grid'));

    erase();
    
    if (sizeGrid <= 100) {
        container.style.setProperty('grid-template-columns', `repeat(${sizeGrid}, 1fr)`);
        container.style.setProperty('grid-template-rows', `repeat(${sizeGrid}, 1fr)`);  
    } else if (sizeGrid > 100) {
      alert('It should be no more than 100 😉')
    } else {
      alert ('Choose some number')
    }
  });
};


starting();
resetting();