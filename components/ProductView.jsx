import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Container from './Container';
import { gql, getApolloContext } from '@apollo/client';
import { TextInput } from 'react-native-gesture-handler';

const GET_ONE_PRODUCT = gql`
    query($id: ID!){
      product(id: $id){
        name
        price
        productGroup{
          name
        }
      }
  }
`;

export default class ProductView extends Component {

    static contextType = getApolloContext();

    state = {
        currentPrice: 0,
        number: 0,
        quantity: 0
    }

    styles = StyleSheet.create({
        numberInput: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
        }
    });

    showCart = () => console.log(this.state.quantity);

    handleQuantity = quantity => this.setState({ quantity });

    render = () => {
        const { currentPrice, number } = this.state;
        return (
            <Container>
                <View>
                    <Text>Nombre de mi taco</Text>
                    <Text>precio: ${currentPrice}</Text>
                    <TextInput
                        keyboardType='numeric'
                        keyboardAppearance='dark'
                        style={this.styles.numberInput}
                        onChangeText={this.handleQuantity}
                    />
                </View>
                <Button title='Agregar al carrito' onPress={this.showCart} />
            </Container>
        );
    }
}