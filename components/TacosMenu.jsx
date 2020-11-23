import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import Container from './Container';
import { gql, getApolloContext } from '@apollo/client'

const GET_All_PRODUCTS = gql`
  {
    products{
      id
      name
      price
      productGroup{
        name
      }
    }
  }
`;

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

export default class TacosMenu extends Component {

    static contextType = getApolloContext();

    styles = StyleSheet.create({
        itemListContainer: {
            marginLeft: 5
        },
        title: {
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
        },
        space: {
            paddingTop: 10
        },
        numberInput: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
        }
    });

    state = {
        tacos: []
    }

    componentDidMount = async () => {
        const { client } = this.context;
        const response = await client.query({ query: GET_All_PRODUCTS });
        this.setState({ tacos: response.data.products.filter(product => product.productGroup.name === 'Taco') });
        console.log(this.state.tacos);
    }

    seeProduct = () => {
        /*const {client} = this.context;
        client.query({query: GET_ONE_PRODUCT, variables: {id}})
        .then(res => {
          const {name, price} = res.data.product;
          console.log({name, price, quantity});
        });*/
        //console.log({tacoId: id, tacoQuantity: quantity});
        this.props.navigation.push('Product');
    }

    renderTacoItem = taco => {
        const { viewGrid, title, numberInput, itemListContainer } = this.styles;
        const { id, name, price } = taco;
        let quantity = 0;
        return <View key={id} style={viewGrid}>
            <View style={itemListContainer}>
                <Text style={title}>Nombre del taco</Text>
                <Text>{name}</Text>
                <Text style={title}>Precio</Text>
                <Text>{price}</Text>
            </View>
            <Button title='Ver producto' onPress={this.seeProduct} />
        </View>;
    }

    getTacosList = () => this.state.tacos.map(taco => this.renderTacoItem(taco));

    render() {
        return (
            <Container>
                <ScrollView style={this.styles.scroll}>
                    <View style={this.styles.space}></View>
                    {this.getTacosList()}
                </ScrollView>
            </Container>
        );
    }
}