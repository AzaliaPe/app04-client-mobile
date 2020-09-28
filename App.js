import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import Routes from './components/Routes';

export default class App extends Component 
{
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    }
  });

  render() {
    return (
      <View style={this.styles.container}>
        <Routes/>
        <StatusBar style="auto"/>
      </View>    
    );
  }
}