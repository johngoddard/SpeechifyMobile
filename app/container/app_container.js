import { connect } from 'react-redux';
import * as ACTIONS from '../actions/track_actions.js';
import App from './app.js';

const mapStateToProps = state => ({
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(ACTIONS.fetchAllTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
