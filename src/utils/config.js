export function getUrl() {
  if (process.env.NODE_ENV !== 'production') {
    return 'http://106.75.87.149:8080/queue'; // 测试
  }

  return 'http://mq.echoesnet.com:8080/queue'; // 正式
}

export default { getUrl };
