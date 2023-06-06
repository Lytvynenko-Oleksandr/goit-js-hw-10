const API_KEY =
  'live_ouQCQsSXEwC09SKX0Bqr6r3LXMM0TOWoW5kCXF6Gdx5OODj1pLJL1A61CTWxMPOP';
const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('No data');
      }
      return response.json();
    })
    .catch(error => {
      Notiflix.Notify.failure(error.textContent);
    });
}
function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('No data');
      }
      return response.json();
    })
    .catch(error => {
      Notiflix.Notify.failure(error.textContent);
    });
}

export { fetchBreeds, fetchCatByBreed };