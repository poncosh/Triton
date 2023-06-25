import { renderAllMovies } from "../../views/main.js";

const getMovies = () => {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=e2923bb091eb5f1665ef35e297887675&language=en-US&page=1', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjkyM2JiMDkxZWI1ZjE2NjVlZjM1ZTI5Nzg4NzY3NSIsInN1YiI6IjY0OTA3MmMwNTU5ZDIyMDBhZDgzNmJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3RNHAlq_1fQm9_FWFZvLxDsSpihLAX4n4tJnog4sQAM'
    }
  }).then(response => {
    return response.json()
  }).then(responseJson => {
    if (responseJson.error) {
      showResponseMessage(responseJson.message);
    } else {
      renderAllMovies(responseJson["results"]);
    }
  }).catch(error => {
    showResponseMessage(error)
  })
}

const showResponseMessage = (errMes) => {
  console.log(errMes)
}

const boundaries = [];
const offset = {
  x: -160,
  y: -560
}

class Movable {
  constructor({position}) {
    this.position = position;
  }
}

const background = new Movable({
  position: {
    x: offset.x,
    y: offset.y
  }
})

const moving = [background, ...boundaries];

document.addEventListener('DOMContentLoaded', () => {
  const rightButton = document.querySelector('#right-button');
  const leftButton = document.querySelector('#left-button');
  const slider = document.querySelector('#slider');
  let animationHandler;

  const sliding = () => {
    slider.scrollLeft += 200;
    sliding()
  }
  rightButton.addEventListener('click', (e) => {
    e.preventDefault()
    slider.scrollLeft += 100
  });
  rightButton.addEventListener('mousedown', (e) => {
    e.preventDefault()
    animationHandler = window.setInterval(sliding, 100)
  });
  rightButton.addEventListener('mouseup', (e) => {
    e.preventDefault()
    window.clearInterval(animationHandler)
  });
  leftButton.addEventListener('click', () => {
    slider.scrollLeft -= 100
  })
})

getMovies()