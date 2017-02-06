var app = getApp()

Page({
  data: {
    hasUserInfo: false
  },
  getMenu: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      itemColor:"#f00",  //默认为黑色 #000
      success: function (res) {
        console.log(res)
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })
  }
})
