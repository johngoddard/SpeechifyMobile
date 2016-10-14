import { View, Text, StyleSheet, ToolbarAndroid } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  componentWillMount(){
    this.props.fetchTracks();
  }
  render(){
    return (
      <View>
        <ToolbarAndroid
          title="Speechify"
          titleColor="#33ccff"
          navIcon={require('../static/bars.png')}
          style={styles.toolbar}/>
        <Text>Tracks</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 54,
    backgroundColor: '#222222',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1
  }
})

export default App;
