import React, {Component} from 'react'
import {

    AppRegistry,
    Text,
    View,
    FlatList,
    StyleSheet,
    PixelRatio,

} from 'react-native'

import Test4Item from './Text4Item'

export default class App extends Component {



    static myData = [
        {nickName:'aa',age:'16'},
        {nickName:'bb',age:'14'},
        {nickName:'cc',age:'16'},
        {nickName:'dd',age:'16'},
        {nickName:'ss',age:'14'},
        {nickName:'xx',age:'16'},
        {nickName:'aa',age:'16'},
        {nickName:'cc',age:'14'},
        {nickName:'vv',age:'16'},
        {nickName:'jj',age:'16'},
        {nickName:'bj',age:'14'},
        {nickName:'cj',age:'16'},
        {nickName:'aa',age:'16'},
        {nickName:'bb',age:'14'},
        {nickName:'cc',age:'16'},
        {nickName:'dd',age:'16'},
        {nickName:'ss',age:'14'},
        {nickName:'xx',age:'16'},
        {nickName:'aa',age:'16'},
        {nickName:'cc',age:'14'},
        {nickName:'vv',age:'16'},
        {nickName:'jj',age:'16'},
        {nickName:'bj',age:'14'},
        {nickName:'cj',age:'16'},
        ]

    constructor(){
        super();
        this.click = this.click.bind(this)
    }

    click(userData){
        console.log(userData)
        // this.props.navigation.navigate()
    }


    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data = {App.myData}

                    renderItem = {({item,index,separator})=> {
                        return (<Test4Item userData={item} click={this.click}/>)
                    }}

                    ItemSeparatorComponent = {()=>{
                       return (
                           <View style={[styles.separate]}>

                           </View>
                       )
                    }}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    item: {
        flex:1,
        height: 44,
        padding: 10,
        backgroundColor: '#59c5ff',
    },

    font: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#fff',
    },

    lineBottom: {
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#fff',
    },

    lineTopBotton: {
        borderTopWidth: 1/PixelRatio.get(),
        borderBottomWidth: 1/PixelRatio.get(),
        borderColor: '#1a1a1a',
    },

    separate: {
        backgroundColor: "#f2f2f2",
        height: 5/PixelRatio.get(),
    }

})