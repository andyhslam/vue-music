import jsonp from 'common/js/jsonp'

export function getSingerList() {
  const url = 'http://tingapi.ting.baidu.com/v1/restserver/ting'

  const data = {
    method: 'baidu.ting.artist.get72HotArtist',
    format: 'json',
    order: 1,
    offset: 0,
    limit: 100
  }

  return jsonp(url, data)
}

export function getSingerDetail(singerId) {
  const url = 'http://tingapi.ting.baidu.com/v1/restserver/ting'

  const data = {
    method: 'baidu.ting.artist.getSongList',
    format: 'json',
    tinguid: singerId,
    order: 1,
    offset: 0,
    limit: 100
  }

  return jsonp(url, data)
}