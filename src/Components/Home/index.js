import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from '../Login/Login';
import HomeScreen from './Home';
import BlackList from '../BlackList';

const userInfo = {
  deviceId: '86293703103091',
  token: '375fa9bf-d5e4-4d2a-9f5d-3b278372e152',
  uId: '375fa9bf-d5e4-4d2a-9f5d-3b278372e152',
  abc: 'comecho519'
}

const StackScreen = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: '',
          headerStyle: {
            height: 44,
            shadowOpacity: 0,
            shadowOffset: {
              height: 0,
            },
            shadowRadius: 0,
            elevation: 0
          },
          headerLeft: (
            <Text style={styles.back}>&#xe908;</Text>
          ),
          headerRight: (
            <TouchableWithoutFeedback
              onPress={() => { navigation.navigate('BlackList') }}
            >
              <View
                style={styles.blacklistButton}
              >
                <Text style={styles.button}>黑名单13311</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        }
      }
    },
    BlackList: {
      screen: BlackList
    }
  },
  {
    initialRouteName: 'Home'
  });

const styles = StyleSheet.create({
  back: {
    // fontFamily: 'icomoon',
    // color: '#6c19f6',
    // fontSize: 22,
    // marginLeft: 10
  },
  blacklistButton: {
    marginRight: 12,
  },
  button: {
    fontSize: 15,
    color: '#6c19f6'
  }
});

export default class App extends Component {

  render() {
    return (
      <StackScreen screenProps={{ ...userInfo }} />
    );
  }
}