export const BASE_URL = 'https://connections-api.herokuapp.com/';

export async function fetchJson(url, params) {
  return fetch(url, params).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  });
}
