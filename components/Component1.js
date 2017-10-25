
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
} from 'react-native';

export default class Component1 extends Component{
  constructor(){
    super();
    this.state = {
      textValue: 'Hello, please enter your name',
      switchValue: false
    };
  }

  changeSwitch(value){
    this.setState({
      switchValue: value
    })
  }

  render(){
    return(
      <View>
        <TextInput
          placeholder='Enter Text'
          style={{padding: 40}}
          onChangeText={(textValue) => this.setState({textValue})}
        />
        <Text>{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={(value) => this.changeSwitch(value)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);
