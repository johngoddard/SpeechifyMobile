export const fetchAllTracks = (filter, success, error) => {
  fetch('https://speechify.stream/tracks', {
    method: 'GET'
  })
  .then(response => success(response))
  .catch(err => error(err));
};
