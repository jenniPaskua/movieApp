const API_KEY = "b1abc7c7e5978de88700bb4fc535fafc";
const BASE_URL = "https://api.themoviedb.org/3";

const trending = () =>
  fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((res) =>
    res.json()
  );
const upcoming = () =>
  fetch(`${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`).then(
    (res) => res.json()
  );
const nowPlaying = () =>
  fetch(
    `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

export const moviesApi = { trending, upcoming, nowPlaying };
