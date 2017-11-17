
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, PixelRatio, Image
} from 'react-native';

const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const ItemLineCount = 3
const Interval = 5.0 / 375.0 * ScreenWidth
const ItemHeight = (ScreenWidth - (ItemLineCount + 1) * Interval) / ItemLineCount / 0.77
const ItemWidth = (ScreenWidth - (ItemLineCount + 1) * Interval) / ItemLineCount
const AgeViewHeight = ItemHeight * 0.078
const AgeViewWidth = AgeViewHeight * 2

export const obj = {
  Interval,
  ItemHeight,
  ItemWidth,
  ItemLineCount,
}

export function EncounterItem(props) {
  const { userInfo } = props
  console.log(userInfo)
  return (
    <TouchableOpacity style={[EncounterItemStyle.container, EncounterItemStyle.justifyCenter]}>
      <Image 
      style={[EncounterItemStyle.headImage]}
      source={{url: userInfo.phUrl}}
      ></Image>

      <View style={[EncounterItemStyle.InfoView, EncounterItemStyle.alignItemsCenter]}>

        <Text
          style={[EncounterItemStyle.nameFont, EncounterItemStyle.TextLimit]}
          numberOfLines={1}>{userInfo.nicName}</Text>

        <Text style={[EncounterItemStyle.distanceFont]}>{userInfo.distance}</Text>

      </View>

      <View style={[EncounterItemStyle.sexAndLevelView]}>
        <View style={[EncounterItemStyle.sex]}></View>
        <View style={[EncounterItemStyle.level]}></View>
      </View>

    </TouchableOpacity>
  )
}



const EncounterItemStyle = StyleSheet.create({

  container: {
    flexDirection: "column",
    width: ItemWidth,
    height: ItemHeight,
    marginLeft: Interval,
  },

  justifyCenter: {
    justifyContent: "center",
  },

  alignItemsCenter: {
    alignItems: "center",
  },

  headImage: {
    marginLeft: 0,
    marginRight: 0,
    height: ItemWidth,
    borderRadius: Interval,
  },

  InfoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 0,
    height: ItemHeight * 0.15,
  },

  sexAndLevelView: {
    flexDirection: "row",
    marginLeft: 0,
    marginRight: 0,
    height: AgeViewHeight,
  },

  sex: {
    marginLeft: 0,
    height: AgeViewHeight,
    width: AgeViewWidth,
    backgroundColor: "#59c5ff",
  },

  level: {
    marginLeft: Interval,
    height: AgeViewHeight,
    width: AgeViewWidth,
    backgroundColor: "#ff5b4c",
  },

  nameFont: {
    color: "#1a1a1a",
    fontSize: 12.0 / 375.0 * ScreenWidth,
  },

  distanceFont: {
    color: "#999999",
    fontSize: 10.0 / 375.0 * ScreenWidth,
    textAlign: "right",
  },

  TextLimit: {
    maxWidth: ItemWidth * 0.7,
    overflow: "hidden",
  }

})