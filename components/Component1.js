
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  ListView
} from 'react-native';

const users = [
  {name: 'John Smith'},
  {name: 'Jane Doe'},
  {name: 'Dwayne Johnson'},
  {name: 'Brad Pitt'}
]

export default class Component1 extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users),
      textValue: 'Hello, please enter your name',
      switchValue: false
    };
  }

  changeSwitch(value){
    this.setState({
      switchValue: value
    })
  }

  renderRow(user, sectionId, rowId, highlightRow){
    return(
      <View>
        <Text>{user.name}</Text>
      </View>
    )
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
        <ListView
          dataSource={this.state.userDataSource}
          renderRow={this.renderRow.bind(this)}
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);
