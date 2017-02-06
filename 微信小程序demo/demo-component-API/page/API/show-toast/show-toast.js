var app = getApp()

Page({
  data: {
    hasUserInfo: false
  },
  onShareAppMessage: function () {
    return {
      title: '我来分享啦',
      desc: '分享的消息提示框',
      path: '/page/API/scanCode/scanCode'
    }
  },
  getToastLoading: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask:true,
      duration: 10000,
      success:function(res){
        console.log(res)
      }
    })
    setTimeout(function () {
      wx.hideToast()
    }, 5000)
  },
   getToastSuccess: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 10000
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  }
})
