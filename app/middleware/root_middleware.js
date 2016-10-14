import { applyMiddleware } from 'redux';
import TrackMiddleware from './track_middleware.js';

const RootMiddleware = applyMiddleware(
  TrackMiddleware
);

export default RootMiddleware;
