import { TrackConstants } from '../actions/track_actions.js';
import * as UTIL from '../util/track_api_util.js';
import * as ACTIONS from '../actions/track_actions.js';

const TrackMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error;

  switch (action.type) {
    case TrackConstants.FETCH_ALL_TRACKS:
      success = tracks => {
        dispatch(ACTIONS.receiveAllTracks(tracks));
      };
      const filter = '';
      UTIL.fetchAllTracks(action.filter, success, error);
      break;
    default:
      next(action);
  }
};

export default TrackMiddleware;
