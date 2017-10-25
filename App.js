
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';


export default class myapp extends Component{
  render(){
    return(
      <View>
        <Component1 />
        <Component2 />
        <Component3 />

      </View>
    );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);
