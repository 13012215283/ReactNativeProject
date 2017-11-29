import React, { Component } from 'react';
import { FlatList, View, StyleSheet, PixelRatio, ScrollView, } from 'react-native';

const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default class PageScrollContrainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childView: props.screenProps ? props.screenProps.childView : props.childView,
      names: props.screenProps ? props.screenProps.names : props.names,
    }
  }

  render() {
    return (
      <View style={PageScrollContrainerSyles.flex}>
        <ScrollView
          style={[PageScrollContrainerSyles.flex, PageScrollContrainer.scrollViewContent]}
          contentContainerStyle={[{width: ScreenWidth * this.state.childView.length}]}
          horizontal={true}
          pagingEnabled={true}
        >

          {this.state.childView.map((Item, index) => {
            return (
               <Item style={[PageScrollContrainerSyles.item]}/>
            )
          })}

        </ScrollView>
      </View>
    )
  }

}

const PageScrollContrainerSyles = StyleSheet.create({

  container: {

  },

  item: {
    width:ScreenWidth,
    height: ScreenHeight,
  },

  flex: {
    flex: 1,
  },

})
