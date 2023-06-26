import "regenerator-runtime";
import "../src/components/header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";
import "jquery";
import "@popperjs/core/dist/umd/popper-lite.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.js";
import { main } from "../src/models/apis/fetch.js";

document.addEventListener('DOMContentLoaded', () => {
  main();

  const popularSlider = document.querySelector('#slider-popular');
  const latestSlider = document.querySelector('#slider-latest');
  const upcomingSlider = document.querySelector('#slider-upcoming');

  const rightButtonPop = document.querySelector('#right-button-pop');
  const leftButtonPop = document.querySelector('#left-button-pop');
  const rightButtonLate = document.querySelector('#right-button-late');
  const leftButtonLate = document.querySelector('#left-button-late');
  const rightButtonUp = document.querySelector('#right-button-up');
  const leftButtonUp = document.querySelector('#left-button-up');

  const sliders = [ popularSlider, latestSlider, upcomingSlider ]
  let animationHandler;
  const buttonsRight = [ rightButtonPop, rightButtonLate, rightButtonUp ]
  const buttonsLeft = [ leftButtonPop, leftButtonLate, leftButtonUp ]
  

  for (let i = 0; i < buttonsRight.length; i++) {
    buttonsRight[i].addEventListener('click', (e) => {
      e.preventDefault();
      sliders[i].scrollLeft += 100
    })
  }

  for (let i = 0; i < buttonsLeft.length; i++) {
    buttonsLeft[i].addEventListener('click', (e) => {
      e.preventDefault();
      sliders[i].scrollLeft -= 100
    })
  }
  
  const slidingPopRight = () => {
    popularSlider.scrollLeft += 100;
    slidingPopRight();
  }
  const slidingPopLeft = () => {
    popularSlider.scrollLeft -= 100;
    slidingPopLeft();
  }
  const slidingLatestRight = () => {
    latestSlider.scrollLeft += 100;
    slidingLatestRight();
  }
  const slidingLatestLeft = () => {
    latestSlider.scrollLeft -= 100;
    slidingLatestLeft();
  }
  const slidingUpcomingRight = () => {
    upcomingSlider.scrollLeft += 100;
    slidingUpcomingRight();
  }
  const slidingUpcomingLeft = () => {
    upcomingSlider.scrollLeft -= 100;
    slidingUpcomingLeft();
  }

  rightButtonPop.addEventListener('mousedown', (e) => {
    e.preventDefault()
    animationHandler = window.setInterval(slidingPopRight, 150)
  });
  rightButtonPop.addEventListener('mouseup', (e) => {
    e.preventDefault()
    window.clearInterval(animationHandler)
  });
  leftButtonPop.addEventListener('mousedown', (e) => {
    e.preventDefault()
    animationHandler = window.setInterval(slidingPopLeft, 150)
  });
  leftButtonPop.addEventListener('mouseup', (e) => {
    e.preventDefault()
    window.clearInterval(animationHandler)
  });
  rightButtonLate.addEventListener('mousedown', (e) => {
    e.preventDefault()
    animationHandler = window.setInterval(slidingLatestRight, 150)
  });
  rightButtonLate.addEventListener('mouseup', (e) => {
    e.preventDefault()
    window.clearInterval(animationHandler)
  });
  leftButtonLate.addEventListener('mousedown', (e) => {
    e.preventDefault()
    animationHandler = window.setInterval(slidingLatestLeft, 150)
  });
  leftButtonLate.addEventListener('mouseup', (e) => {
    e.preventDefault()
    window.clearInterval(animationHandler)
  });
  rightButtonUp.addEventListener('mousedown', (e) => {
    e.preventDefault()
    animationHandler = window.setInterval(slidingUpcomingRight, 150)
  });
  rightButtonUp.addEventListener('mouseup', (e) => {
    e.preventDefault()
    window.clearInterval(animationHandler)
  });
  leftButtonUp.addEventListener('mousedown', (e) => {
    e.preventDefault()
    animationHandler = window.setInterval(slidingUpcomingLeft, 150)
  });
  leftButtonUp.addEventListener('mouseup', (e) => {
    e.preventDefault()
    window.clearInterval(animationHandler)
  });
})