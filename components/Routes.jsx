import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TacosMenu from './TacosMenu';
import HomeView from './HomeView';

const Stack = createStackNavigator();
export default class Routes extends Component
{
    render() {
        return (
             <NavigationContainer>
                 <Stack.Navigator>
                    <Stack.Screen name= 'home' component = {HomeView}/>
                    <Stack.Screen name= 'menu' component = {TacosMenu}/>
                 </Stack.Navigator>
             </NavigationContainer>
        );
    }
}
