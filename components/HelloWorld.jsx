import React, {Component, Fragment} from 'react';
import { Button, Text, TextInput } from 'react-native';


export default class HelloWorld extends Component
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
            <Fragment>
                <Text>Hello {this.state.displayName}!</Text>
                <TextInput placeholder='name' onChangeText={this.catchName}/>
                <Button title='send name' onPress={this.sendName}/>
            </Fragment>
        );
    }
}