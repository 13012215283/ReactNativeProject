import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasic extends Component {

  render() {
    return (
      <FlatList
        data={[
          { key: "A" },
          { key: "B" },
          { key: "C" },
          { key: "D" },
          { key: "E" },
          { key: "F" },
          { key: "G" },
          { key: "H" },
        ]}
        renderItem={(item) => <Text>{JSON.stringify(item)}</Text>}
      />
    );
  }
}