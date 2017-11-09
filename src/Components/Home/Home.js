import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import FollowList from "./FollowList";
import FansList from "./FansList";
import MyLookList from "./MyLookList";
import LookMeList from "./LookMeList";


// {"head":{"reqName":"UserC/baiduPush"},"body":{"33":"b954b9a8-2021-4918-81da-ec1c532fef72","05":"86293703103091","59":"4004011598876977349","02":"b769bd27d99349a4abcdbfa1b8ea7907","60":"Android"}}
const RouteConfigs = {
  FollowScreen: {
    screen: FollowList,
    navigationOptions: {
      title: '关注'
    }
  },
  FansScreen: {
    screen: FansList,
    navigationOptions: {
      title: '粉丝'
    }
  },
  LookMeList: {
    screen: LookMeList,
    navigationOptions: {
      title: '谁看过我'
    }
  },
  MyLookList: {
    screen: MyLookList,
    navigationOptions: {
      title: '我看过谁'
    }
  }
};

const TabNavigatorConfig = {
  tabBarPosition: 'top',
  tabBarOptions: {
    upperCaseLabel: false,
    activeTintColor: '#1a1a1a',
    inactiveTintColor: '#1a1a1a',
    activeTabStyle: {
      fontSize: 20
    },
    indicatorStyle: {
      width: 20,
      height: 3,
      borderRadius: 2,
      backgroundColor: '#6c19f6',
      left: 33,
      bottom: 3
    },
    labelStyle: {
      margin: 0,
      marginBottom: 5,
      overflow: 'hidden',
      fontSize: 15
    },
    tabStyle: {
      height: 33,
      padding: 0,
      overflow: 'hidden'
    },
    style: {
      backgroundColor: '#ffffff',
      height: 33,
      padding: 0,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0
    }
  },
  initialRouteName: "MyLookList"
}

const TabNavigatorScreen = TabNavigator(RouteConfigs, TabNavigatorConfig);

// export default HomeScreen;
export default class HomeScreen extends Component {

  render() {
    return (
      <TabNavigatorScreen screenProps={{ ...this.props.screenProps }} />
    );
  }
}