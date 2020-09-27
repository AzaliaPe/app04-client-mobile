import React, {Component, Fragment} from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeView extends Component
{
    styles = StyleSheet.create({
        title: {
            fontWeight: 'bold',
            fontSize: 45,
            color: '#AE0000'
        },
        buttonMenu: {
            alignItems: "center",
            backgroundColor: "#D76F00",
            padding: 10,
            color: 'white',
            fontWeight: 'bold',
            marginTop: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 6
        },
        buttonTitleM:{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
        }
    });

    menuHandle = ()=> console.log('ver menu');

    render() {
        return (
            <Fragment>
            <Text style={this.styles.title}>El Taquito Feliz</Text>
            <TouchableOpacity style={this.styles.buttonMenu} onPress={this.menuHandle}>
                <Text style={this.styles.buttonTitleM}>Ver menú</Text>
            </TouchableOpacity>
            </Fragment>
        );
    }
}