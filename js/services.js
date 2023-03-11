
// Get the slider wrapper and slide elements
const technologySlider = document.querySelector('.technology_slider');
const sliderSlides = document.querySelectorAll('.technology');

// Set the initial slide index and slide width
let slideIndex = 0;
const slideWidth = sliderSlides[0].clientWidth;

// Slide the slider to the next set of slides
function slideNext() {
  // Increment the slide index
  slideIndex++;
  if (slideIndex > sliderSlides.length - 3) {
    slideIndex = 0;
  }
  // Set the translateX value of the slider wrapper to slide to the next set of slides
  technologySlider.style.transform = `translateX(-${slideWidth * slideIndex + (32*slideIndex) }px)`;
}

// Set an interval to slide every few seconds
setInterval(slideNext, 3000);