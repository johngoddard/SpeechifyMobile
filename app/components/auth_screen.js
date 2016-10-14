import React, { Component } from 'react';
import { Text, View, TextInput} from 'react-native';

export default class AuthScene extends Component{
  render(){
    return(
      <View>
        <View stle={styles.headerCont}>
          <Text style={styles.header}>Hi Andrea!</Text>
        </View>
        <TextInput
          style={{height: 40, margin: 20}}
          placeholder="Username"
        />
        <TextInput
          style={{height: 40, marginLeft: 20, marginRight: 20 }}
          placeholder="Password"
        />
      </View>
    )
  }
}

const styles = {
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  headerCont: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 30,
  }
}
