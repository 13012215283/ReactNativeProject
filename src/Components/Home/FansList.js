import React, { Component } from 'react';
import {
  SectionList,
  Text,
  View,
  ListView,
  ActivityIndicator,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import { request } from "../../utils/request";
import FriendListItem from './ListItem';
export default class FansList extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      fansList: [],
      dataSource: dataSource.cloneWithRows({}),
      isLoading: true,
      hasMore: true,
      currentLength: 0,
      rowID: '',
      finished: false,
    };

    this.fansList = [];
    this.NUM_ROWS = 20;
    this.pageIndex = 0;

  }
  componentDidMount() {
    console.log(this.pageIndex);
    this.getServerData(`${this.pageIndex}`, `${this.NUM_ROWS}`);
  }

  async getServerData(start, num) {
    try {
      console.log(start, num);
      const { deviceId, token, uId, abc } = this.props.screenProps;
      const reqBody = {
        '02': token,
        '05': deviceId,
        33: uId,
        35: start,
        '03': num,
      }
      const response = await request('FriendC/fansList', reqBody, abc);
      const { list, newLookMe } = response;
      this.fansList = this.fansList.concat(list);
      this.setState({
        fansList: list,
        dataSource: this.state.dataSource.cloneWithRows(this.fansList),
        hasMore: list.length !== 0,
        isLoading: false,
        currentLength: list.length,
        finished: true,
      });
      ToastAndroid.show('请求成功', ToastAndroid.SHORT)
    } catch (error) {
      console.log(error)
    }
  }

  renderItem(rowData) {
    return (
      <FriendListItem userData={rowData} key={rowData.uId} />
    )
  }
  render() {
    if (!this.state.finished) {
      return <ActivityIndicator />
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        pageSize={this.NUM_ROWS}
        style={fansStyles.screen}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const fansStyles = StyleSheet.create({
  screen: {
    backgroundColor: '#f2f2f2'
  }
})