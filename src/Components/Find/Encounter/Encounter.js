import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
    PixelRatio,
    ScrollView,
} from "react-native"
import { EncounterItem, obj } from "./EncounterItem"
import { request } from "../../../utils/request";
import { constData } from "../const"

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

    componentDidMount() {
        this.getServerData(0, 20)

    }

    async getServerData(start, num) {
        try {
            const { deviceId, token, uId, abc } = constData.userInfo;
            const reqBody = {
                '02': token,
                '05': deviceId,
                33: uId,
                35: start,
                '03': num,
            }
            const response = await request('IndexC/encounter_v402', reqBody, abc)
            this.setState({
                myData: response.users
            })

        } catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <View style={[EncounterSyles.container]}>
                <ScrollView>

                    <View style={[EncounterSyles.headerView]}></View>

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

                </ScrollView>

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
        height: 5.0 / 375.0 * constData.ScreenWidth,
    },

    listHeaderView: {
        backgroundColor: "#f2f2f2",
        height: 10.0 / 375.0 * constData.ScreenWidth
    },

    backgroundColorWhite: {
        backgroundColor: "#fff",
    },

    borderRadius: {
        borderRadius: 10.0 / 375.0 * constData.ScreenWidth,
    },

    headerView: {
        backgroundColor: "#59c5ff",
        height: 100,
    },

})