import { API_URL } from './config';
import { toJSON } from './util';

export const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`)
    .then(toJSON);

export const searchArtists = query =>
  search(query, 'artist');

export const searchAlbums = query =>
  search(query, 'albums');

export const searchTrack = query =>
  search(query, 'track');

export const searchPlaylist = query =>
  search(query, 'playlist');
