import React, { Component } from 'react';
import {StackNavigator } from 'react-navigation';
import Encounter from '../Components/Find/Encounter/Encounter';
import BigVContainer from "../Components/Find/BigV/BigVContainer"
import PageScrollContainer from "../Components/Find/ScrollPage/PageScrollContainer"

const FindRootNavigation = StackNavigator({
  PageScrollContainer:{
    screen: PageScrollContainer,
  }
})

export default class App extends Component {

  render() {
    return <FindRootNavigation screenProps={{names: ["Encounter", "BigV"], childView: [Encounter, BigVContainer]}}/>
  }

}