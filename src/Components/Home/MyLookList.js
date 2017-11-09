import React, { Component, PureComponent } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListView,
  PanResponder,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from 'react-native';
import { request } from "../../utils/request";
import FriendListItem from './ListItem';
export default class MyLookList extends PureComponent {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource: dataSource.cloneWithRows({}),
      isLoading: true,
      hasMore: true,
      currentLength: 0,
      rowID: '',
      finished: false,
      bg: '#ffffff'
    };

    this.myLookList = [];
    this.NUM_ROWS = 20;
    this.pageIndex = 0;

    this.onEndReached = this.onEndReached.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this._onRefresh = this._onRefresh.bind(this)
  }


  componentDidMount() {
    this.getServerData(
      `${this.pageIndex}`,
      `${this.NUM_ROWS}`,
      (response) => {
        const { list, newLookMe } = response;
        this.myLookList = this.myLookList.concat(list);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.myLookList),
          hasMore: list.length !== 0,
          isLoading: false,
          currentLength: list.length,
          finished: true,
        });
        ToastAndroid.show('请求成功', ToastAndroid.SHORT)
      }
    );
  }

  _onScrollBeginDrag(e) {
    console.log(e)
  }

  async getServerData(start, num, cb) {
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
      const response = await request('FriendC/myLookList', reqBody, abc);
      cb(response)
    } catch (error) {
      console.log(error)
    }
  }

  renderItem({ item }) {
    return (
      <FriendListItem userData={item} />
    )
  }

  onEndReached() {
    console.log(this.state.isLoading, this.state.hasMore);
    if (this.state.isLoading || !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    if (this.state.hasMore) {
      this.getServerData(
        `${this.pageIndex += this.NUM_ROWS}`,
        `${this.NUM_ROWS}`,
        (response) => {
          const { list, newLookMe } = response;
          this.myLookList = this.myLookList.concat(list);
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.myLookList),
            hasMore: list.length !== 0,
            isLoading: false,
            currentLength: list.length,
            finished: true,
          });
          ToastAndroid.show('请求成功', ToastAndroid.SHORT)
        }
      );
    } else {
      this.setState({ isLoading: false });
    }
  }

  _onRefresh() {

    this.getServerData(
      0,
      20,
      (response) => {
        const { list, newLookMe } = response;
        this.myLookList = list;
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.setState({
          dataSource: dataSource.cloneWithRows(this.myLookList),
          hasMore: list.length !== 0,
          isLoading: false,
          currentLength: list.length,
          finished: true,
        }, () => {
          ToastAndroid.show('请求成功', ToastAndroid.SHORT)
        });

      }
    )
  }

  renderFooter() {
    return (
      <View>
        <Text>上拉刷新</Text>
      </View>
    )
  }

  render() {
    if (!this.state.finished) {
      return <ActivityIndicator />
    }
    return (
      <View>
        {<FlatList
          data={this.myLookList}
          renderItem={this.renderItem}
          initialNumToRender={this.NUM_ROWS}
          style={myLookStyles.screen}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0}
          onRefresh={this._onRefresh}
          refreshing={false}
          ListFooterComponent={this.renderFooter}
          keyExtractor={(item, index) => index}
          /* onScrollBeginDrag={this._onScrollBeginDrag} */
        />}
      </View>
    );
  }
}

const myLookStyles = StyleSheet.create({
  screen: {
    backgroundColor: '#f2f2f2'
  }
})