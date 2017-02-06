var formatLocation = require('./format-location.js')

Page({
  data: {
    hasLocation: false,
  },
  getLocation: function () {
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
      },
      fail:function(){
        console.log("失败")
      }
    })
  },
  clear: function () {
    this.setData({
      hasLocation: false
    })
  }
})
