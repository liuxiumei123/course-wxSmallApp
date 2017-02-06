Page({
  navigateTo: function () {
    wx.navigateTo({ url: "../set-navigation-bar-title/set-navigation-bar-title" })
  },
  navigateBack: function () {
    wx.navigateBack()
  },
  redirectTo: function () {
    wx.redirectTo({ url: "../navigation-bar-loading/navigation-bar-loading" })
  },
  switchTab: function () {
    wx.switchTab({
      url: "../switchBar/switchBar"
    })
  }
})
