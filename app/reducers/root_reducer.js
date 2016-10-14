import { combineReducers } from 'redux';
import TrackReducer from './track_reducer.js';

const RootReducer = combineReducers({
  tracks: TrackReducer
});

export default RootReducer;
