const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';
const API_KEY = '4554dcf40305b27fe66f81befbdfccaa';
// Render tracks by name
export const getTrackSearch = async query => {
  const url = `${BASE_URL}?method=track.search&track=${query}&api_key=${API_KEY}&format=json`;

  const response = await fetch(`${url}`);
  const { results } = await response.json();

  return results;
};

export const Api = async (page) => {
  const url = `${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&page=${page}&limit=4&format=json`;

  const response = await fetch(`${url}`);
  const { tracks } = await response.json();

  const { track } = tracks;

  return track;
};
