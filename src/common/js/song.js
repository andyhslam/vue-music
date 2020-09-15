import jsonp from 'common/js/jsonp'
import axios from 'axios'

export default class Song {
  constructor({id, singer, name, album, duration, image, lrclink, url}) {
    this.id = id
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
    this.lrclink = lrclink
  }

  getLyric() {
    return axios.get(this.lrclink).then((res) => {
      return Promise.resolve(res.data)
    })
  }
}

export function getSongLink(songId) {
  const url = 'http://tingapi.ting.baidu.com/v1/restserver/ting'

  const data = {
    method: 'baidu.ting.song.playAAC',
    songid: songId
  }

  return jsonp(url, data)
}

export function createSong(musicData, url) {
  return new Song({
    id: musicData.song_id,
    singer: filterSinger(musicData.author),
    name: musicData.title,
    album: musicData.album_title,
    duration: musicData.file_duration,
    image: musicData.pic_radio,
    lrclink: musicData.lrclink,
    url: url
  })
}

function filterSinger(singer) {
  if (!singer) {
    return ''
  }
  let ret = singer.split(',')
  return ret.join(' / ')
}