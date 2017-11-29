import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import leftPad from "left-pad"



export function LevelView(props) {
  const { level, style } = props
  const levelObj = leftPad(level, 2, "0")
  const img = require(`../../Images/Level/lv01.png`);

  const imgUrl = `../../Images/Level/lv${levelObj}.png`
  console.log(imgUrl);
  
  return (
    <View style={style}>
      <Image
        source={require('../../Images/Level/lv01.png') }
      >

      </Image>
    </View >
  )
}


