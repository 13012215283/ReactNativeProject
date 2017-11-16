import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {

    Platform,
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image,
    PixelRatio,
    ScrollView,
    Button,
    TouchableOpacity,
} from 'react-native'


import Blink from './BlinText'
import TransLatorView from './WordTranslator'

class TextView extends Component {

    render() {
        return (

            <View style={[styles.item, styles.center]}>
                <Text style={[styles.font]}>{this.props.name}!</Text>
            </View>

        )
    }
}

export default class App extends Component {

    static navigationOptions = {
        title: 'Test2'
    }

    constructor(){
        super()

    }


    render() {
        console.log(this.props)
       return (
           <ScrollView style={[styles.flex]}>
               {/*First Section*/}
               <View style= {[styles.container]}>

                   {/*first row*/}
                   <TextView name='111' />

                   {/*second row*/}
                   <View style= {[styles.item, styles.lineLeftRight]}>

                       <View style={[styles.center, styles.flex, styles.lineBottom]}>
                           <Blink text='blink' />
                       </View>

                       <View style={[styles.center, styles.flex]}>
                           <Text style={styles.font}>33</Text>
                       </View>

                   </View>

                   {/*third row*/}
                   <View style = {styles.item}>

                       <View style={[styles.center, styles.flex, styles.lineBottom]}>
                           <TouchableOpacity
                               style={[styles.center, styles.flex]}
                               onPress={() => {this.props.navigation.navigate('Test4')}}
                           >
                               <Text style={styles.font}>Click Go Next!</Text>
                           </TouchableOpacity>
                       </View>

                       <View style={[styles.center, styles.flex]}>
                           <Text style={styles.font}>55</Text>
                       </View>

                   </View>
               </View>

               {/*Second Section*/}
               {[...Array(20).fill(0).map((item, index) => {
               return (
                   <TransLatorView/>
               )
           })]}

           </ScrollView>
       )

    }

}


const styles = StyleSheet.create({

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
        paddingRight: 2,
    },

    item: {
        flex: 1,
        height: 80,
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    flex: {
        flex: 1
    },

    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    lineLeftRight: {
        borderLeftWidth: 1/PixelRatio.get(),
        borderRightWidth: 1/PixelRatio.get(),
        borderColor: '#fff'
    },

    lineBottom: {
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#fff',
    },

})