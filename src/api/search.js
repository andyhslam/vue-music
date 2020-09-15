import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

export function search(query) {
  const url = 'http://tingapi.ting.baidu.com/v1/restserver/ting'

  const data = {
    method: 'baidu.ting.search.common',
    query
  }

  return jsonp(url, data)
}
