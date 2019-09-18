const BASE_API = 'https://rubytify.herokuapp.com/api/v1/artists';

class Api {
  async getArtist(){
    const query = await fetch(`${BASE_API}`)
    const { data } = await query.json();
    console.log(data)
    return data.artists
  }
}

export default new Api();




// const BASE_API = 'https://yts.am/api/v2/';

// class Api {
//   async getSuggestion(id) {
//     const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
//     const { data } = await query.json();
//     return data.movies
//   }
//   async getMovies() {
//     const query = await fetch(`${BASE_API}list_movies.json?`);
//     const { data } = await query.json();
//     return data.movies
//   }
// }

// export default new Api();