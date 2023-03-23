import { BASE_URL, fetchJson } from './base';

const CONTACTS_URL = `${BASE_URL}contacts/`;

async function requestContacts(token) {
  const params = {
    headers: {
      Authorization: token,
    },
  };
  return fetchJson(CONTACTS_URL, params);
}

async function deleteContact(id, token) {
  const url = `${CONTACTS_URL}${id}`;
  const params = {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  };
  return fetchJson(url, params);
}

async function createContact(name, number, token) {
  const requestData = {
    name,
    number,
  };
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(requestData),
  };
  return fetchJson(CONTACTS_URL, params);
}

export { requestContacts, deleteContact, createContact };
