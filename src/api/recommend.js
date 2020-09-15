import jsonp from 'common/js/jsonp'

export function getRecommend() {
  const url = 'http://tingapi.ting.baidu.com/v1/restserver/ting'

  const data = {
    method: 'baidu.ting.plaza.getFocusPic',
    format: 'json',
    limit: 111
  }

  return jsonp(url, data)
}

export function getDiscList(type) {
  const url = 'http://tingapi.ting.baidu.com/v1/restserver/ting'

  const data = {
    type,
    method: 'baidu.ting.billboard.billList',
    offset: 0,
    size: 50
  }

  return jsonp(url, data)
}