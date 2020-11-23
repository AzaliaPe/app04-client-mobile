import React, { Component, Fragment } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TacosMenu from './TacosMenu';
import HomeView from './HomeView';
import ProductView from './ProductView';

const Stack = createStackNavigator();

export default class Routes extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeView} />
                    <Stack.Screen name="Menu" component={TacosMenu} />
                    <Stack.Screen name="Product" component={ProductView} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}