
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

const users = [
  {name: 'John Smith'},
  {name: 'Jane Doe'},
  {name: 'Dwayne Johnson'},
  {name: 'Brad Pitt'}
]

export default class Component2 extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users)
    };
  }

  renderRow(user, sectionId, rowId, highlightRow){
    return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    )
  }

  render(){
    return(
      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'grey',
    marginBottom: 5
  },
  rowText: {
    flex: 1,
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('Component2', () => Component2);
