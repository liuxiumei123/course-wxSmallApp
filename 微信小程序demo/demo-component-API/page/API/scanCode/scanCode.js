Page({
  data: {
    systemInfo: {}
  },
  getSystemInfo: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          systemInfo: res
        })
        that.update()
      }
    })
  },
  scanCode: function () {

    wx.scanCode({
      success: function (res) {
        console.log(res)
      }
    })
  }

})
