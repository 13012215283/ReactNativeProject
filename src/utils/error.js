const errorMessageList = {
  PARAM_INCOM: '参数不全',
  TASK_NO_FINISH: '任务未完成',
  ALREADY_REWARD: '您已领取过奖励了',
  SYNTAX_JSON: 'JSON解析异常，请稍后重试',
  ECONNABORTED: '网络异常，请稍后重试',
  MQ_ERROR: '消息队列异常，请稍后重试',
  NETWORK_ERROR: '网络异常，请稍后重试',
  UNKNOW_ERROR: '系统错误，请稍后重试',
  Empty_ERROR: '请选择',
  HAS_ORDER: '您已订餐，请先取消我的订餐；再取消约会',
  RECEIVE_OVER: '主播已扫码，不能取消约会啦',
  ORDER_OVER: '请再等一下，此时不可取消约会；如果主播最终未能到达，红包将自动退回您的余额',
  HAS_NO_PAY: '您有未支付的订单，请前去确认订单',
  SWEEP_ORDER_CANNOT_REFUND: '主播已扫码，不能取消约会啦',
  LIGHT_ORDER_CANNOT_REFUND: '主播已到达，不能取消约会啦',
  NATIONALDAY_TIMEOUT: '不在活动期间',
  RECEIVED_REWARD: '已领取奖励',
  NO_THIS_CARD: '您没有这张卡片哦',
  OVER_SENDCARD_LIMIT: '已经超过赠送次数限制',
  CARD_NOT_EXIST: '系统不存在这张卡片',
};

function getErrorByCode(code) {
  return errorMessageList[code] || '网络异常，请稍后重试';
}

/**
 * 网络请求异常
 */
class NetworkError extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'NetworkError';
    this.textMessage = this.message.split(':')[1];
  }
}

/**
 * API 请求后端接口返回错误码
 */
class APIError extends Error {
  constructor(code = 'UNKNOW_ERROR') {
    super(getErrorByCode(code));
    this.code = code;
    this.name = 'APIError';
    this.textMessage = this.message.split(':')[1];
  }
}

/**
 * 消息队列异常
 */
class MessageQueueError extends APIError {
  constructor() {
    super('MQ_ERROR');
    this.name = 'MessageQueueError';
  }
}

class UnknowError extends APIError {
  constructor() {
    super('UNKNOW_ERROR');
    this.name = 'UnknowError';
  }
}

/**
 * API 请求后端接口返回msg
 */
class ShowmsgError extends Error {
  constructor(msg) {
    super(msg);
    this.msg = msg;
    this.name = 'ShowmsgError';
    this.textMessage = this.message.split(':')[1];
  }
}


class EmptyError extends APIError {
  constructor() {
    super('Empty_ERROR');
    this.name = 'EmptyError';
  }
}
export { MessageQueueError, UnknowError, APIError, NetworkError, EmptyError, ShowmsgError };
