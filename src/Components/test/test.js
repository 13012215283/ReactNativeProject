/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <View></View>
                {/*<View style={[boxStyes.square500, boxStyes.boxLayout]} >*/}

                {/*{*/}
                {/**/}
                {/*[...Array(9).fill(0).map((item, index) => {*/}
                {/*return (*/}
                {/*<Text style={boxStyes.square50} >*/}
                {/*{index}*/}
                {/*</Text>*/}
                {/*)*/}
                {/*})]*/}
                {/*}*/}


                {/*</View>*/}
                )

                }

                }

                var boxStyes = StyleSheet.create({
                "square500": {
                top: 100,
                height: 500,
                width:300,
                backgroundColor: "#59C5FF"
            },
                "square50": {
                height: 50,
                width:50,
                borderColor: "#999999",
                backgroundColor: "#1A1A1A",
                marginLeft:10,
                marginTop: 10,
                color: "#ffffff",
            },
                "boxLayout": {

                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center"
            }

            })
