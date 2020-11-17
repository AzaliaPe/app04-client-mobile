import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import Routes from './components/Routes';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

export default class App extends Component {

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    }
  });

  render() {
    return (
      <ApolloProvider client={client}>
        <View style={this.styles.container}>
          <Routes/>
          <StatusBar style="auto"/>
        </View>    
      </ApolloProvider>
    );
  }
}