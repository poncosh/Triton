class Factory {
  static renderPopularMovies(movies) {
    const sliderPop = document.querySelector('#slider-popular');
    movies.map((el, i) => {
      let buttonPop = document.createElement('button');
      buttonPop.style.backgroundImage = `url(http://image.tmdb.org/t/p/w200${el.poster_path})`;
      buttonPop.classList.add('movies');
      buttonPop.setAttribute('id', `${el.id}`)
      buttonPop.setAttribute('data-toggle', `modal`);
      buttonPop.setAttribute('data-target', `#trailerModal${el.id}`)
      sliderPop.appendChild(buttonPop);
      sliderPop.insertAdjacentHTML('beforeend', `
      <div
        class="modal fade"
        data-modal-color="background"
        id="trailerModal${el.id}"
        tabindex="${i + 1}"
        aria-labelledby="trailerModalLabel"
        aria-hidden="true"
        role="dialog"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${el.original_title}</h5>
            </div>
            <div class="modal-body">
              <img src="http://image.tmdb.org/t/p/w200${el.poster_path}">
              <div class="movies-desc">
                <p id="overview">${el.overview}</p>
                <p><span>Release Date :</span> ${new Date(el.release_date).toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p><span>Rating :</span> ${el.vote_average}</p>
                <p><span>Vote Count :</span> ${el.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `)
    })
  }

  static renderLatestMovies(movies) {
    const sliderPop = document.querySelector('#slider-latest');
    movies.map((el, i) => {
      let buttonPop = document.createElement('button');
      buttonPop.style.backgroundImage = `url(http://image.tmdb.org/t/p/w200${el.poster_path})`;
      buttonPop.classList.add('movies');
      buttonPop.setAttribute('id', `${el.id}`)
      buttonPop.setAttribute('data-toggle', `modal`);
      buttonPop.setAttribute('data-target', `#descriptionModal${el.id}`)
      sliderPop.appendChild(buttonPop);
      sliderPop.insertAdjacentHTML('beforeend', `
      <div
        class="modal fade"
        data-modal-color="background"
        id="descriptionModal${el.id}"
        tabindex="${i + 1}"
        aria-labelledby="trailerModalLabel"
        aria-hidden="true"
        role="dialog"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${el.original_title}</h5>
            </div>
            <div class="modal-body">
              <img src="http://image.tmdb.org/t/p/w200${el.poster_path}">
              <div class="movies-desc">
                <p id="overview">${el.overview}</p>
                <p><span>Release Date :</span> ${new Date(el.release_date).toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p><span>Rating :</span> ${el.vote_average}</p>
                <p><span>Vote Count :</span> ${el.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `)
    })
  }

  static renderUpcomingMovies(movies) {
    const sliderPop = document.querySelector('#slider-upcoming');
    movies.map((el, i) => {
      let buttonPop = document.createElement('button');
      buttonPop.style.backgroundImage = `url(http://image.tmdb.org/t/p/w200${el.poster_path})`;
      buttonPop.classList.add('movies');
      buttonPop.setAttribute('id', `${el.id}`)
      buttonPop.setAttribute('data-toggle', `modal`);
      buttonPop.setAttribute('data-target', `#trailerModal${el.id}`)
      sliderPop.appendChild(buttonPop);
      sliderPop.insertAdjacentHTML('beforeend', `
      <div
        class="modal fade"
        data-modal-color="background"
        id="trailerModal${el.id}"
        tabindex="${i + 1}"
        aria-labelledby="trailerModalLabel"
        aria-hidden="true"
        role="dialog"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${el.original_title}</h5>
            </div>
            <div class="modal-body">
              <img src="http://image.tmdb.org/t/p/w200${el.poster_path}">
              <div class="movies-desc">
                <p id="overview">${el.overview}</p>
                <p><span>Release Date :</span> ${new Date(el.release_date).toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p><span>Rating :</span> ${el.vote_average}</p>
                <p><span>Vote Count :</span> ${el.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `)
    })
  }
}

// const renderPopularMovies = (movies) => {
//   const sliderPop = document.querySelector('#slider-popular');
//   movies.map((el, i) => {
//     let buttonPop = document.createElement('button');
//     buttonPop.style.backgroundImage = `url(http://image.tmdb.org/t/p/w200${el.poster_path})`;
//     buttonPop.classList.add('movies');
//     buttonPop.setAttribute('id', `${el.id}`)
//     buttonPop.setAttribute('data-bs-toggle', `modal`);
//     buttonPop.setAttribute('data-bs-target', `#trailerModal${el.id}`)
//     sliderPop.appendChild(buttonPop);
//     sliderPop.insertAdjacentHTML('beforeend', `
//     <div
//       class="modal fade"
//       data-modal-color="background"
//       id="trailerModal${el.id}"
//       tabindex="${i + 1}"
//       aria-labelledby="trailerModalLabel"
//       aria-hidden="true"
//       role="dialog"
//     >
//       <div class="modal-dialog modal-lg" role="document">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title">${el.original_title}</h5>
//           </div>
//           <div class="modal-body">
//             <img src="http://image.tmdb.org/t/p/w200${el.poster_path}">
//             <div class="movies-desc">
//               <p id="overview">${el.overview}</p>
//               <p>Release date : ${new Date(el.release_date).toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
//               <p>Rating : ${el.vote_average}</p>
//               <p>Vote count : ${el.vote_count}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     `)
//   })
// }

// const renderLatestMovies = (movies) => {
//   const sliderPop = document.querySelector('#slider-latest');
//   movies.map((el, i) => {
//     let buttonPop = document.createElement('button');
//     buttonPop.style.backgroundImage = `url(http://image.tmdb.org/t/p/w200${el.poster_path})`;
//     buttonPop.classList.add('movies');
//     buttonPop.setAttribute('id', `${el.id}`)
//     buttonPop.setAttribute('data-bs-toggle', `modal`);
//     buttonPop.setAttribute('data-bs-target', `#trailerModal${el.id}`)
//     sliderPop.appendChild(buttonPop);
//     sliderPop.insertAdjacentHTML('beforeend', `
//     <div
//       class="modal fade"
//       data-modal-color="background"
//       id="trailerModal${el.id}"
//       tabindex="${i + 1}"
//       aria-labelledby="trailerModalLabel"
//       aria-hidden="true"
//       role="dialog"
//     >
//       <div class="modal-dialog modal-lg" role="document">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title">${el.original_title}</h5>
//           </div>
//           <div class="modal-body">
//             <img src="http://image.tmdb.org/t/p/w200${el.poster_path}">
//             <div class="movies-desc">
//               <p id="overview">${el.overview}</p>
//               <p>Release date : ${new Date(el.release_date).toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
//               <p>Rating : ${el.vote_average}</p>
//               <p>Vote count : ${el.vote_count}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     `)
//   })
// }

export { Factory }