var app = getApp()
var util = require('../../util/util.js')
var dataUrl = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'

Page({
  onLoad: function () {
    var that = this
    this._enableInterval()

    if (app.globalData.backgroundAudioPlaying) {
      this.setData({
        playing: true
      })
    }
  },
  data: {
    playing:false,
    playTime: 0,//代表滑动选择器的值
    formatedPlayTime: '00:00:00'//音乐播放时间显示
  },
  play: function (res) {
    var that = this
    app.globalData.backgroundAudioPlaying = true
    wx.playBackgroundAudio({
      dataUrl: dataUrl,
      title: '此时此刻',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      complete: function (res) {
        that.setData({
          playing: true
        })
      }
    })
    this._enableInterval()
  },
  seek: function (e) {
    //暂时清除播放时间显示的定时器
    clearInterval(this.updateInterval)
    var that = this
    //控制音乐播放进度
    wx.seekBackgroundAudio({
      position: e.detail.value,//音乐位置
      complete: function () {
        setTimeout(function () {
          that._enableInterval()
        }, 1)
      }
    })
  },
  pause: function () {
    var that = this
    app.globalData.backgroundAudioPlaying = false
    wx.pauseBackgroundAudio({
      dataUrl: dataUrl,
      success: function () {
        that.setData({
          playing: false
        })
      }
    })
  },
  stop: function () {
    var that = this
    wx.stopBackgroundAudio({
      dataUrl: dataUrl,
      success: function (res) {
        that.setData({
          playing: false,
          playTime: 0,
          formatedPlayTime: util.formatTime(0)
        })
      }
    })
    app.globalData.backgroundAudioPlaying = false
  },

  //控制已经播放的时间的显示
  _enableInterval: function () {
    var that = this
    this.updateInterval = setInterval(update, 500)

    function update() {
      //获取后台音乐播放状态 音乐播放时间决定显示的播放时间
      wx.getBackgroundAudioPlayerState({
        success: function (res) {
          //console.log(res)
          that.setData({
            playTime: res.currentPosition,//选定音频的播放位置
            formatedPlayTime: util.formatTime(res.currentPosition + 1)
          })
        }
      })
    }
  },
  onUnload: function () {
    clearInterval(this.updateInterval)
  }
})
