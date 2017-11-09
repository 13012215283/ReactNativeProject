import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';

export default class TabNavigationHomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home'
  }

  constructor() {
    super();
    this.goToNotification = this.goToNotification.bind(this);
  }

  goToNotification() {
    console.log(this.props)
    this.props.navigation.navigate('Notifications')
  }
  render() {
    return (
      <Button
        onPress={this.goToNotification}
        title="Home Buttossn"
      />
    );
  }
}