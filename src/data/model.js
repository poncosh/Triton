function main() {
  const apiKey = 'e2923bb091eb5f1665ef35e297887675';
  const baseUrl = 'https://api.themoviedb.org/3';

  const popularMovie = () => {
    fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjkyM2JiMDkxZWI1ZjE2NjVlZjM1ZTI5Nzg4NzY3NSIsInN1YiI6IjY0OTA3MmMwNTU5ZDIyMDBhZDgzNmJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3RNHAlq_1fQm9_FWFZvLxDsSpihLAX4n4tJnog4sQAM'
      }
    }).then(response => {
      return response.json()
    }).then(json => {
      if(json.error) {
        showResponseMessage(json.message);
      } else {
        renderPopularMovie(json["results"]);
      }
    }).catch(err => {
      showResponseMessage(err)
    })
  }

  // ==============================
  const renderPopularMovie = (movies) => {
    const listofMovies = document.getElementById('listMovies');
    listofMovies.innerHTML = '';

    movies.forEach(movie => {
      listofMovies.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
        <div class="card">
          <div class="card-body">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" width="500" height="600">
            <h5>${movie.title}</h5>
            <p>${movie.overview}</p>
            <button type="button" class="btn btn-danger button-delete" id="${movie.id}">Hapus</button>
          </div>
        </div>
      </div>
      `
    })
  }

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };
  
  popularMovie()
}

export default main;