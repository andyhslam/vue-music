<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list'
import {mapGetters} from 'vuex'
import {getSongLink, createSong} from 'common/js/song'

export default {
  components: {
    MusicList
  },
  data() {
    return {
      songs: []
    }
  },
  computed: {
    title() {
      return this.disc.billboard.name
    },
    bgImage() {
      return this.disc.billboard.pic_s640
    },
    ...mapGetters([
      'disc'
    ])
  },
  created() {
    this._getSongList()
  },
  methods: {
    _getSongList() {
      if (!this.disc.song_list) {
        this.$router.push('/recommend')
        return
      }
      this.songs = this._normalizeSongs(this.disc.song_list)
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((musicData) => {
        if (musicData.song_id) {
          getSongLink(musicData.song_id).then((res) => {
            let songLink = res.bitrate.file_link
            ret.push(createSong(musicData, songLink))
          }).catch(() => {})
        }
      })
      return ret
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>