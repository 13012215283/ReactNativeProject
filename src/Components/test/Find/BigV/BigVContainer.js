import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, View, Image, Text, PixelRatio } from 'react-native';
import {BigVItem} from "./BigVItem"
import { constData } from "../const"
export default class BigVContainer extends Component {

  constructor() {
    super()
    this.state = {
        myData: [
          {name:"sss"},
          {name:"sss"},
          {name:"sss"},
          {name:"sss"},
          {name:"sss"},
        ]
    }
}

  render() {

    return (
      <View style={BigVStyles.container}>
        <FlatList
          style={[BigVStyles.backgroundColorWhite]}

          data={this.state.myData}

          renderItem={({ item, index, separator }) => {
            console.log(index)
            return (<BigVItem userInfo={item}/>)
          }}
          
        />
      </View>
    )
  }

}


const BigVStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  separate: {
    height: 10 / PixelRatio.get(),
  },

  istHeaderView: {
    backgroundColor: "#e6e6e6",
    height: 20 / PixelRatio.get(),
  },

  backgroundColorWhite: {
    backgroundColor: "#fff",
  },
})
