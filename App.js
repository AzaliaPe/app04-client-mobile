import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component 
{
  state = 
  {
    userName: 'world',
    displayName: 'world'
  }

  checkEmpty = name => name.length > 0 ? name : 'world';

  catchName = name => this.setState({userName: this.checkEmpty(name)});

  sendName = ()=> this.setState({displayName: this.state.userName});

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.state.displayName}!</Text>
        <TextInput placeholder='name' onChangeText={this.catchName}/>
        <Button title='send name' onPress={this.sendName}/>
        <StatusBar style="auto"/>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
