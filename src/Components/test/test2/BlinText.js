import React, {Component} from 'react'
import {

    AppRegistry,
    Text,
    View,
    StyleSheet,

} from 'react-native'

export default class BlinText extends Component {

    constructor(props) {
        super(props)
        this.state = {showText: true}

        setInterval(()=>{
            this.setState(previousState=> {
                return {showText:!previousState.showText}
            });
        },1000)
    }

    render() {
        let disPlay = this.state.showText ? this.props.text : ''
        return (
            <Text style={[blinkTextStyle.font]}>{disPlay}</Text>
        )
    }

}


const blinkTextStyle = StyleSheet.create({

    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

})
