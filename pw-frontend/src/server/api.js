const API_KEY = "51fd99d5677ddd16b1fe835873e08731";
const API_BASE = "https://api.themoviedb.org/3";

const basicFecth = async (endpoint) => {
  return (await fetch(`${API_BASE}${endpoint}`)).json();
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originali di Netflix",
        items: await basicFecth(
          `/discover/tv/?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Raccomandati per te",
        items: await basicFecth(
          `/trending/all/week?language=it&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Più votati",
        items: await basicFecth(
          `/movie/top_rated?&language=it&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Azione",
        items: await basicFecth(
          `/discover/movie?with_genres=28&language=it&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Commedie",
        items: await basicFecth(
          `/discover/movie?with_genres=35&language=it&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFecth(
          `/discover/movie?with_genres=27&language=it&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romantici",
        items: await basicFecth(
          `/discover/movie?with_genres=10749&language=en&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentari",
        items: await basicFecth(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movei":
          info = await basicFecth(
            `/movie/${movieId}?language=it&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFecth(
            `/tv/${movieId}?language=it&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
