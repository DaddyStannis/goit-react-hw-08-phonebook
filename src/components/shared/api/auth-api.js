import { BASE_URL, fetchJson } from './base';

const USERS_URL = `${BASE_URL}users/`;

async function requestSignup({ name, email, password }) {
  const url = `${USERS_URL}signup/`;

  const params = {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetchJson(url, params);
}

async function requestLogin({ email, password }) {
  const url = `${USERS_URL}login/`;

  const params = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetchJson(url, params);
}

async function requestLogout(token) {
  const url = `${USERS_URL}logout/`;

  const params = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetchJson(url, params);
}

async function requestRefresh(token) {
  const url = `${USERS_URL}current/`;

  const params = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetchJson(url, params);
}

export { requestSignup, requestLogin, requestLogout, requestRefresh };
