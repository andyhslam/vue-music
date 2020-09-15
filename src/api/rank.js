import jsonp from 'common/js/jsonp'

export function getTopList(type) {
  const url = 'http://tingapi.ting.baidu.com/v1/restserver/ting'

  const data = {
    type,
    method: 'baidu.ting.billboard.billList',
    offset: 0,
    size: 100
  }

  return jsonp(url, data)
}