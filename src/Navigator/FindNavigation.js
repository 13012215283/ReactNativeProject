import React, { Component } from 'react';
import {StackNavigator } from 'react-navigation';
import Encounter from '../Components/test/Find/Encounter/Encounter';

const FindRootNavigation = StackNavigator({
  Encounter:{
    screen: Encounter,
  }
})

export default class App extends Component {

  render() {
    return <FindRootNavigation/>
  }

}