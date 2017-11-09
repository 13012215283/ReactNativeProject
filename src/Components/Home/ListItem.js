import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function FriendListItem(props) {
  const { userData } = props;
  const {
    uphUrl,
    nicName,
    signature
  } = userData;
  return (
    <View
      style={itemStyles.item}
    >
      
      <View
        style={itemStyles.userIntro}
      >
        <View
          style={itemStyles.nicNameWrap}
        >
          <Text style={itemStyles.nicName}>{nicName}</Text>
        </View>
        <Text
          style={itemStyles.signature}
          numberOfLines={1}
        > {signature}</Text>
      </View>
    </View>
  )
}

const itemStyles = StyleSheet.create({
  item: {
    paddingTop: 13,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    flex: 1
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5
  },
  userIntro: {
    paddingLeft: 12,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    flex: 1
  },
  nicNameWrap: {
    maxWidth: 300
  },
  nicName: {
    marginBottom: 17,
    fontSize: 15,
    lineHeight: 15
  },
  signature: {
    marginBottom: 12,
    fontSize: 15,
    lineHeight: 15
  }
})