import { Factory } from "../models.js";

function main() {
  const url = 'https://api.themoviedb.org/3/movie/'
  const popular = 'popular?api_key=e2923bb091eb5f1665ef35e297887675&language=en-US&page=1'
  const latestRelease = 'now_playing?api_key=e2923bb091eb5f1665ef35e297887675&language=en-US&page=1'
  const upcoming = 'upcoming?api_key=e2923bb091eb5f1665ef35e297887675&language=en-US&page=1'

  const popularMovies = () => {
    fetch(`${url}${popular}`, {
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
        Factory.renderPopularMovies(responseJson["results"]);
      }
    }).catch(error => {
      showResponseMessage(error)
    })
  }

  const latestMovies = () => {
    fetch(`${url}${latestRelease}`, {
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
        Factory.renderLatestMovies(responseJson["results"]);
      }
    }).catch(error => {
      showResponseMessage(error)
    })
  }

  const upcomingMovies = () => {
    fetch(`${url}${upcoming}`, {
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
        Factory.renderUpcomingMovies(responseJson["results"]);
      }
    }).catch(error => {
      showResponseMessage(error)
    })
  }

  const showResponseMessage = (errMes) => {
    console.log(errMes)
  }

  popularMovies();
  latestMovies();
  upcomingMovies()
}


export { main };