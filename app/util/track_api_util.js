export const fetchAllTracks = (filter, success, error) => {
  fetch('http://speechify.stream/api/tracks', {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  })
  .then(response => response.json())
  .then( resData => resData)
  .then(data => success(data))
  .catch(err => {
    error(err);
  });
};
