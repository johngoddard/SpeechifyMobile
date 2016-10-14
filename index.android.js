import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './app/store/store.js';
import AppContainer from './app/container/app_container.js';

let store = configureStore();

class SpeechifyMobileApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ title: 'My Initial Scene', index: 0 }}
          renderScene={(route, navigator) =>
            <AppContainer />
          }
        />
    </Provider>
    );
  }
}

import { connect } from 'react-redux';
import * as ACTIONS from './app/actions/track_actions.js';

AppRegistry.registerComponent('SpeechifyMobile', () => SpeechifyMobileApp);
