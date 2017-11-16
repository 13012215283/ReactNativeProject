import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
    PixelRatio,
} from "react-native"
import { EncounterItem, obj } from "./EncounterItem"
import { request } from "../../../../utils/request";

const userInfo = {
    deviceId: '0d4a40ac21168e93a15586b6769270892ef086c7',
    token: 'bb44051c21ce4995a17ba98afeeab31c',
    uId: '03a8b383-e641-487e-89a3-2e689df0ef96',
    abc: 'comecho519',
    longitude: "+117.21085943",
    latitude: "+39.13841926",
    city: "天津",
}

export default class Encounter extends Component {


    static navigationOptions = {
        title: "Encounter"
    }

    constructor() {
        super()
        this.state = {
            myData: []
        }
    }

    async getServerData(start, num) {
        try {
            const { deviceId, token, uId, abc } = userInfo;
            const reqBody = {
                '02': token,
                '05': deviceId,
                33: uId,
                35: start,
                '03': num,
            }
            const response = await request('IndexC/encounter_v402', reqBody, abc);
            console.log(response)
            this.setState({
                myData: response.users
            })

        } catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <View style={EncounterSyles.container}>
                <FlatList
                    style={[EncounterSyles.backgroundColorWhite]}
                    data={this.state.myData}
                    onRefresh={() => {
                        this.getServerData(0, 20)
                    }}
                    refreshing={false}
                    numColumns={obj.ItemLineCount}
                    ListHeaderComponent={() => {
                        return (<View style={[EncounterSyles.listHeaderView]}></View>)
                    }}
                    renderItem={({ item, index, separator }) => {
                        return (<EncounterItem userInfo={item} />)
                    }}

                    ItemSeparatorComponent={() => {
                        return (
                            <View style={[EncounterSyles.separate]}>

                            </View>
                        )
                    }}

                />
            </View>
        )
    }
}


const EncounterSyles = StyleSheet.create({

    container: {
        flex: 1,
    },

    lineBottom: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#fff',
    },

    lineTopBotton: {
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#1a1a1a',
    },

    separate: {
        height: 10 / PixelRatio.get(),
    },

    listHeaderView: {
        backgroundColor: "#e6e6e6",
        height: 20 / PixelRatio.get()
    },

    backgroundColorWhite: {
        backgroundColor: "#fff",
    },
})