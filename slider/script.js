'use strict'

const container = document.querySelector('.container');
const listOfSlides = document.querySelectorAll('.slide');


const removeClassActive = function() {
  for (const slide of listOfSlides) {
    if(slide.classList.contains('active')) {
      slide.classList.remove('active');
    }
  }
}

container.addEventListener('click', (event) => {
  const {target} = event;
  const slide = target.closest('.slide');
  if(slide) {
    removeClassActive();
    slide.classList.add('active');
  }
});
