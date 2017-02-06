//logs.js
var util = require('../../utils/util.js')
//console.log(util)
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function () {
    console.log(' logs show')
  },
  onReady: function () {
    console.log(' logs onReady 渲染完成')
    //代表页面已经准备妥当，可以和视图层进行交互
  },
  onHide: function () {
    console.log(' logs hide')
    //当navigateTo或底部tab切换时调用
  },
  onUnload: function () {
    console.log(' logs onunload')
    //当redirectTo或navigateBack的时候调用
  },
  onPullDownRefresh: function () {
    console.log(' logs onPullDownRefresh')
  },
  onReachBottom: function () {
    console.log(' logs  onReachBottom')
  },
  onShareAppMessage: function () {
    return {
      title: '标题',
      desc: '描述',
      path: '/../logs/logs'
    }
  }
})
