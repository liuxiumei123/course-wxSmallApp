Page({
  data: {
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    },
  
    current1: {
      poster: 'http://img4.cache.netease.com/house/2014/1/18/20140118111914fd8d8.jpg',
      name: '死了都要爱',
      author: '邓紫棋',
      src: ''
    }
  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx1 = wx.createAudioContext('myAudio1')
    this.audioCtx1.setSrc('http://win.web.re01.sycdn.kuwo.cn/resource/n3/1/42/2689555428.mp3')
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  
  audioPlay1: function () {
    this.audioCtx1.play()
  },
  audioPause1: function () {
    this.audioCtx1.pause()
  },
  audioStart1: function () {
    this.audioCtx1.seek(0)
  },
  audio35: function () {
    this.audioCtx1.seek(35)
  },
  playOn:function(e){
    console.log(e)
    console.log("开始播放")
  },
  pauseOn:function(e){
    console.log(e)
    console.log("暂停播放")
  },
  endOn:function(e){
    console.log(e)
    console.log("结束播放")
  },
  updateOn:function(e){
    console.log(e)
    console.log("更新播放")
  },
})
