import React, {Component} from 'react'
import {
    AppRegistry,
    Text,
    TextInput,
    View,
    StyleSheet,
    PixelRatio,
} from 'react-native'


export default class WordTranslator extends Component {

    constructor(props) {
        super(props)
        this.state = {text: ''}

    }

    render() {

        return(
            <View style={[wordTranslatorStyles.container]}>
                <View style={[wordTranslatorStyles.item, wordTranslatorStyles.lineRight]}>
                    <TextInput
                        style={[wordTranslatorStyles.font, wordTranslatorStyles.flex]}
                        placeholder = "Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>

                <View style={[wordTranslatorStyles.item, wordTranslatorStyles.lineRight]}>
                    <Text style={[wordTranslatorStyles.font]}>
                        {this.state.text.split(' ').map((word)=> word && '$$').join(' ')}
                    </Text>
                </View>

            </View>
        )
    }
}

const  wordTranslatorStyles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 84,
        backgroundColor: '#59c5ff',
        justifyContent: 'center',
        paddingTop: 2,
        paddingBottom: 2,
    },

    item: {
        flex: 1,
        height: 80,
        justifyContent:'center'
    },

    flex: {
        flex: 1,
    },

    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center',
    },

    lineRight: {
        borderRightWidth: 1/PixelRatio.get(),
        borderRightColor: '#fff'
    }

})