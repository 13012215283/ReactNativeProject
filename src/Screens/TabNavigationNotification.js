import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class TabNavigationNotificationScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications'
  }
  constructor(){
    super();
    this.goBack = this.goBack.bind(this)
  }

  goBack(){
    this.props.navigation.goBack()
  }
  render() {
    return (
      <Button 
        onPress={this.goBack}
        title="Go Back Home"
      />
    );
  }
}