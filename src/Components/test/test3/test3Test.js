import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    AppRegistry,
    PixelRatio,
} from 'react-native'

export default class Test3 extends Component {

    static navigationOptions = {
        title: 'Test3'
    }

    render() {

        return (
            <View style={test3Styles.flex}>

            </View>
        )

    }

}

const test3Styles = StyleSheet.create({

    flex: {
        flex: 1,
    }

})