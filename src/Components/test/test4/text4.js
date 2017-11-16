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
import MyList from './FlatListView'

export default class Test4 extends Component {

    static navigationOptions = {
        title: "Test4"
    }

    render() {

        return (
            <MyList/>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'blue',
    }
})