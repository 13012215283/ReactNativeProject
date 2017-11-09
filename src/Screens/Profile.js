import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions= ({navigation}) => {
    console.log(navigation);
    return {
      title: `${navigation.state.params.name}'s Profile`
    }
  }
  render() {
    // console.log(this.props.navigation.navigate())
    return (
      <View>
        <Text>
          Lufy's profile
        </Text>
      </View>
    );
  }
}