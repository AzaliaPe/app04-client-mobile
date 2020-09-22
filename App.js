import { StatusBar } from 'expo-status-bar';
import React, { Component, Fragment } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import axios from 'axios';

export default class App extends Component {

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
      
    },
    itemListContainer: {
      marginLeft: 5
    },
    title:{
      fontWeight: 'bold'
    },
    viewGrid: {
      marginBottom: 30,
      borderWidth: 1,
      borderRadius: 3,
      borderColor: 'lightgray',
      borderBottomColor: 'white'
    },
    scroll: {
      width: '95%'
    },
    viewTitle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: 20
    }
  });

  state = {
    tacos: []
  }

  componentDidMount(){
    axios.get('http://192.168.2.147:5000')
    .then(res => res.data)
    .then(data => {
      this.setState({tacos: data})
      console.log(this.state.tacos);
    });
  }

  callOrder = ()=> {
    console.log('taco ordenado')
  }

  renderTacoItem = taco =>{
    return <View style={this.styles.viewGrid}>
      <View style={this.styles.itemListContainer}>
        <Text style={this.styles.title}>Nombre del taco</Text>
        <Text>{taco.name}</Text>
        <Text style={this.styles.title}>Cantidad de la orden</Text>
        <Text>{taco.quantity} tacos</Text>
        <Text style={this.styles.title}>¿Es picante?</Text>
        <Text>{taco.pica}</Text>
      </View>
      <Button title='Ordenar' onPress={this.callOrder}/>
    </View>;
  } 

  getTacosList = ()=> <FlatList style={this.styles.list} data={this.state.tacos} renderItem={({item}) => this.renderTacoItem(item)}/>;
 
  render() {
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.viewTitle}>Menú</Text>
        <ScrollView style={this.styles.scroll}> 
          {this.getTacosList()}
        </ScrollView>
        <StatusBar style="auto"/>
      </View>    
    );
  }
}


