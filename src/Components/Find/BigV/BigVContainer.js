import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, View, Image, Text, PixelRatio } from 'react-native';
import {BigVItem} from "./BigVItem"
import { constData } from "../const"
import { request } from "../../../utils/request"
export default class BigVContainer extends Component {

  constructor() {
    super()
    this.state = {
        myData: [],
    }
}

componentDidMount(){
  this.getServerData(0,20)

}

async getServerData(start, num) {
  try {
      const { deviceId, token, uId, abc } = constData.userInfo
      const reqBody = {
          '02': token,
          '05': deviceId,
          33: uId,
          35: start,
          '03': num,
      }
      const response = await request('TrendC/columns', reqBody, abc)
      console.log(response)
      this.setState({
          myData: response,
      })

  } catch (error) {
      console.log(error)
  }
}

  render() {

    return (
      <View style={BigVStyles.container}>
        <FlatList
          style={[BigVStyles.backgroundColorWhite]}

          data={this.state.myData}

          onRefresh={() => {
              this.getServerData(0, 20)
          }}

          refreshing={false}

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
