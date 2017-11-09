import { Platform } from 'react-native';
import md5 from 'md5';
import qs from 'qs';
import axios from 'axios';
import Promise from 'es6-promise';

import { getUrl } from './config';
import { MessageQueueError, APIError, NetworkError, ShowmsgError } from './error';

Promise.polyfill();

/**
 * 构建请求数据
 *
 * @param reqName string 接口名
 * @param body Object 请求对象
 * @param md5key string 密钥
 * @param syncFlag integer 同步/异步标识，默认为同步
 *
 * @return string
 */
export function buildMQRequest(reqName, body, md5Key, syncFlag = 1) {
  let appKey;
  const head = { reqName };

  let businessName = reqName.replace('/', '_');
  const messageJson = JSON.stringify({ head, body });

  if (Platform.OS === 'ios') {
    appKey = '1002HGJJD5HVJ6Y3';
    businessName = `Ios_${businessName}`;
  } else {
    appKey = '100148SHY3FH4PPA';
    businessName = `And_${businessName}`;
  }

  const obj = {
    businessName,
    syncFlag,
    appKey,
    md5: md5(messageJson + md5Key),
    messageJson,
  };

  const param = qs.stringify(obj);
  return param;
}

/**
 * 向后端发送请求
 *
 * @param reqName string 接口名
 * @param body Object 请求对象
 * @param md5key string 密钥
 * @param syncFlag integer 同步/异步标识，默认为同步
 *
 * @return Promise
 */
export function request(reqName, body, md5Key, syncFlag = 1) {
  return axios
    .post(getUrl(), buildMQRequest(reqName, body, md5Key, syncFlag))
    .then((response) => {
      // 如果没有 messageJson 字段，消息队列出现错误
      if (response.data.messageJson === undefined) {
        throw new MessageQueueError();
      }

      return JSON.parse(response.data.messageJson);
    })
    .then((messageJson) => {
      // status 为 1 时，表示请求失败
      if (messageJson.status === '1') {
        throw new APIError(messageJson.code);
      }

      return JSON.parse(messageJson.body || '{}');
    })
    .catch((error) => {
      if (error instanceof SyntaxError) {
        throw new APIError('SYNTAX_JSON');
      }

      if (error instanceof APIError) {
        throw error;
      }

      // 超时
      if (error.code === 'ECONNABORTED') {
        throw new APIError('ECONNABORTED');
      }

      throw new NetworkError(error);
    });
}

export function wishRequest(reqName, body, md5Key, syncFlag = 1) {
  return axios
    .post(getUrl(), buildMQRequest(reqName, body, md5Key, syncFlag))
    .then((response) => {
      if (response.data.messageJson === undefined) {
        throw new MessageQueueError();
      }

      return JSON.parse(response.data.messageJson);
    })
    .then((messageJson) => {
      // status 为 1 时，msg不为空
      if (messageJson.status === '1') {
        const { msg } = JSON.parse(messageJson.body);
        throw new ShowmsgError(msg);
      }

      return JSON.parse(messageJson.body || '{}');
    })
    .catch((error) => {
      if (error instanceof SyntaxError) {
        throw new APIError('SYNTAX_JSON');
      }

      if (error instanceof ShowmsgError) {
        throw error;
      }

      // 超时
      if (error.code === 'ECONNABORTED') {
        throw new APIError('ECONNABORTED');
      }

      throw new NetworkError(error);
    });
}
