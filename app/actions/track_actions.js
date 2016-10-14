export const TrackConstants = {
  FETCH_ALL_TRACKS: "FETCH_ALL_TRACKS",
  RECEIVE_ALL_TRACKS: "RECEIVE_ALL_TRACKS"
};

export const fetchAllTracks = filter => ({
  type: TrackConstants.FETCH_ALL_TRACKS,
  filter
});

export const receiveAllTracks = tracks => ({
  type: TrackConstants.RECEIVE_ALL_TRACKS,
  tracks
});
