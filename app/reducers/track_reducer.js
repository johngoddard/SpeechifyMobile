import { TrackConstants } from '../actions/track_actions.js';
import { arrayToObject } from '../util/array_utils.js';

const _default = {
  tracks: {}
};

const TrackReducer = (state = _default, action) => {
  switch (action.type) {
    case TrackConstants.RECEIVE_ALL_TRACKS:
      const newState = arrayToObject(action.tracks);
      break;
    default:
      return state;
  }
};

export default TrackReducer;
