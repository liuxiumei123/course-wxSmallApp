
Page({
  data: {
    hasUserInfo: false
  },
  getToastLoading: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask:true,//实际效果就是当mask为true的时候页面无法滑动无法进行任何操作。

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
