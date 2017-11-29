
import React, { Component } from 'react';
import { constData } from "../const"
import { LevelView } from "../../CommonClass/LevelView"
import {
  View, Text, StyleSheet, TouchableOpacity, PixelRatio, Image
} from 'react-native';


const ItemLineCount = 3
const Interval = 5.0 / 375.0 * constData.ScreenWidth
const ItemHeight = (constData.ScreenWidth - (ItemLineCount + 1) * Interval) / ItemLineCount / 0.77
const ItemWidth = (constData.ScreenWidth - (ItemLineCount + 1) * Interval) / ItemLineCount
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
  return (
    <TouchableOpacity style={[EncounterItemStyle.container, EncounterItemStyle.justifyCenter]}>
      <Image
        style={[EncounterItemStyle.headImage]}
        source={{ uri: userInfo.phUrl }}
      >

        <View style={[EncounterItemStyle.borderRadius]}>
          <Text style={[EncounterItemStyle.see]}>20分钟前看过你</Text>
        </View>

      </Image>

      <View style={[EncounterItemStyle.InfoView, EncounterItemStyle.alignItemsCenter]}>

        <Text
          style={[EncounterItemStyle.nameFont, EncounterItemStyle.TextLimit]}
          numberOfLines={1}>{userInfo.nicName}</Text>

        <Text style={[EncounterItemStyle.distanceFont]}>{userInfo.distance}</Text>

      </View>

      <View style={[EncounterItemStyle.sexAndLevelView]}>
        <View style={[EncounterItemStyle.sex]}></View>

        <LevelView
          style={[EncounterItemStyle.level, EncounterItemStyle.flex]}
          level={userInfo.level}
        >
        </LevelView>

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
    justifyContent: "flex-end",
    alignItems: "center",
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
  },

  see: {
    fontSize: 10.0 / 375.0 * constData.ScreenWidth,
    backgroundColor: "rgba(26,26,26,0.5)",
    color: "#fff",
    lineHeight: ItemHeight * 0.1694,
    paddingLeft: 2*Interval,
    paddingRight:2* Interval,
  },

  nameFont: {
    color: "#1a1a1a",
    fontSize: 12.0 / 375.0 * constData.ScreenWidth,
  },

  distanceFont: {
    color: "#999999",
    fontSize: 10.0 / 375.0 * constData.ScreenWidth,
    textAlign: "right",
  },

  TextLimit: {
    maxWidth: ItemWidth * 0.7,
    overflow: "hidden",
  },

  flex: {
    flex: 1
  },

  borderRadius: {
    overflow: 'hidden',
    height: ItemHeight * 0.1694,
    borderRadius: ItemHeight * 0.1694 / 2,
    marginBottom: Interval,
  },
})