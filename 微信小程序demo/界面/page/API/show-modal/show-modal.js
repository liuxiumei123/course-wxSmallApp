
Page({
  data: {
    hasUserInfo: false
  },
  showmodal: function () {
    wx.showModal({
      title: "标题",
      content: "内容",
      showCancel: true,          //默认为true
      cancelText: "",     //默认为”取消“,最多 4 个字符
      cancelColor: "",           //默认颜色为黑色  #000
      confirmText: "",      //默认为”确定“,最多 4 个字符
      confirmColor: "",          //默认颜色为绿色  #3CC51F
      success: function (res) {
        console.log(res)
      }
    })
  }
})
