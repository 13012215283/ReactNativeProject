import React, { Component } from 'react'
import { View, Text, Image, StyleSheet ,PixelRatio, TouchableOpacity} from 'react-native'

export default function Test4Item (props) {
    const {userData} = props

    const {
        age,
        nickName,
    } = userData
    return (

        <TouchableOpacity
            style={[test4ItemStyle.container, test4ItemStyle.flex]}
            onPress={() => { props.click(userData)}}
        >
            <View style={[test4ItemStyle.center, test4ItemStyle.flex, test4ItemStyle.lineRight, test4ItemStyle.padding5]}>
                <Text style={test4ItemStyle.font}>
                    Name: {nickName}
                </Text>
            </View>

            <View style={[test4ItemStyle.center, test4ItemStyle.flex, test4ItemStyle.padding5]}>
                <Text style={test4ItemStyle.font}>
                    Age: {age}
                </Text>
            </View>

        </TouchableOpacity>



    )

}

const test4ItemStyle = StyleSheet.create({

    container: {
        flexDirection: 'row',
        height: 44,
        backgroundColor: '#59c5ff',
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    font: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },

    flex: {
        flex: 1,
    },

    lineRight: {
        borderRightWidth: 1/PixelRatio.get(),
        borderColor: '#fff',
    },

    padding5: {
        marginTop: 5,
        marginBottom: 5,
    }

})