const renderAllMovies = (movies) => {
  const slider = document.querySelector('#slider');
  movies.map((el) => {
    let img = document.createElement('img');
    img.src = `http://image.tmdb.org/t/p/w200/${el.poster_path}`;
    slider.appendChild(img)
  })
}

export { renderAllMovies }