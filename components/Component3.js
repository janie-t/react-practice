
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class Component3 extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds,
    };
  }

  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response)
        });
      });
  }

  renderRow(user, sectionId, rowId, highlightRow){
    return(
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}: {user.email}</Text>
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
    backgroundColor: 'yellow',
    marginBottom: 5
  },
  rowText: {
    flex: 1,
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('Component3', () => Component3);
