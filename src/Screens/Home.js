import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'ssWelcomessss'
  }

  constructor(){
    super();
    this.goToProfile = this.goToProfile.bind(this);
  }

  goToProfile(){
    this.props.navigation.navigate('Profile',{name:'Lufy'})
  }

  render() {
    return (
      <View>
        <Text>Hello, Navigat11ssion! gagdd</Text>
        <Button
          onPress={this.goToProfile}
          title="Go to Lufy's profile"
        />
      </View>
    );
  }
}

export default HomeScreen;