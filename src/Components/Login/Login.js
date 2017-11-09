import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import axios from "axios";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''
    }
    this.onChangeUserName = this.onChangeUserName.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  onChangeUserName(userName) {
    this.setState({
      userName
    })
  }
  onChangePassword(password) {
    this.setState({
      password
    })
  }
  onLogin() {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View>
        <Text>用户名：</Text>
        <TextInput
          value={this.state.userName}
          onChangeText={this.onChangeUserName}
        />
        <Text>密码：</Text>
        <TextInput
          value={this.state.password}
          onChangeText={this.onChangePassword}
        />
        <Button
          onPress={this.onLogin}
          title="登录"
        />
      </View>
    );
  }
}