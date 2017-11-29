import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, PixelRatio, Image
} from 'react-native';
import { constData } from "../const"

const BigVItemHeight = constData.ScreenWidth * 0.778
const BigVItemWidth = constData.ScreenWidth

const ImageViewWidth = 327.0 / 375.0 * constData.ScreenWidth
const ImageViewHeight = ImageViewWidth * 0.55

export function BigVItem(props) {
  const { userInfo } = props
  return (
    <View style={[BigVItemStyles.container]}>
      <TouchableOpacity style={[BigVItemStyles.content]}>
        <Text style={[BigVItemStyles.titleText]}>{userInfo.ext.title}</Text>
        <Image
          style={[BigVItemStyles.imageView]}
          source={{ url: userInfo.ext.imgUrl }}
        ></Image>

        <TouchableOpacity style={[BigVItemStyles.userInfoView]}>

          <Image
            style={[BigVItemStyles.headImage]}
            source={{ url: userInfo.phurl }}
          ></Image>

          <View style={[BigVItemStyles.nameAndDateContainer]}>

            <Text style={[BigVItemStyles.nameText]}>{userInfo.nicName}</Text>

            <Text style={[BigVItemStyles.dateText]}>{userInfo.ext.fuckDate}</Text>

          </View>

          <TouchableOpacity style={[BigVItemStyles.focuesButton]}></TouchableOpacity>

        </TouchableOpacity>

      </TouchableOpacity>
    </View>
  )
}



const BigVItemStyles = StyleSheet.create({

  flex: {
    flex: 1,
  },

  container: {
    backgroundColor: "#f2f2f2",
    height: BigVItemHeight,
    width: BigVItemWidth,
  },

  content: {
    marginTop: 10.0 / 375.0 * constData.ScreenWidth,
    marginLeft: 12.0 / 375.0 * constData.ScreenWidth,
    marginRight: 12.0 / 375.0 * constData.ScreenWidth,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 10.0 / 375.0 * constData.ScreenWidth,
  },

  titleText: {
    marginTop: 14.0 / 375.0 * constData.ScreenWidth,
    marginBottom: 14.0 / 375.0 * constData.ScreenWidth,
    marginLeft: 12.0 / 375.0 * constData.ScreenWidth,
    marginRight: 12.0 / 375.0 * constData.ScreenWidth,
    maxHeight: BigVItemHeight * 0.162,
    fontSize: 18.0 / 375.0 * constData.ScreenWidth,
    color: "#1a1a1a",
    fontWeight: "bold",
  },

  imageView: {
    marginLeft: 12.0 / 375.0 * constData.ScreenWidth,
    marginRight: 12.0 / 375.0 * constData.ScreenWidth,
    width: ImageViewWidth,
    height: ImageViewHeight,
    borderRadius: 2.0 / 375.0 * constData.ScreenWidth,

  },

  userInfoView: {
    marginLeft: 12.0 / 375.0 * constData.ScreenWidth,
    marginRight: 12.0 / 375.0 * constData.ScreenWidth,
    height: BigVItemHeight * 0.18,
    flexDirection: "row",
    alignItems: "center",
  },

  headImage: {
    height: 30.0 / 375.0 * constData.ScreenWidth,
    width: 30.0 / 375.0 * constData.ScreenWidth,
  },

  nameAndDateContainer: {
    height: 30.0 / 375.0 * constData.ScreenWidth,
    flex: 1,
  },

  focuesButton: {
    width: 60.0 / 375.0 * constData.ScreenWidth,
    height: 24.0 / 375.0 * constData.ScreenWidth,
    backgroundColor: "#666",
  },

  nameText: {
    height: 15.0 / 375.0 * constData.ScreenWidth,
    fontSize: 12.0 / 375.0 * constData.ScreenWidth,
    marginLeft: 12.0 / 375.0 * constData.ScreenWidth,
    color: "#ff3657",
  },

  dateText: {
    height: 15.0 / 375.0 * constData.ScreenWidth,
    fontSize: 11.0 / 375.0 * constData.ScreenWidth,
    marginLeft: 12.0 / 375.0 * constData.ScreenWidth,
    color: "#999999",
  }



})