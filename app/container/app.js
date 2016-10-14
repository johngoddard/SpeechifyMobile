import { View, Text } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  componentWillMount(){
    this.props.fetchTracks();
  }
  render(){
    return (
      <View><Text>Tracks</Text></View>
    );
  }
}

export default App;
