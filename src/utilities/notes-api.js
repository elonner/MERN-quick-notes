import sendRequest from "./send-request";

const BASE_URL = '/api/notes';

export function addNote(note) {
  return sendRequest(BASE_URL, 'POST', note);
}

export function getNotes() {
    return sendRequest(BASE_URL);
}