
var count = 0;
Page({
  data: {
    xianshi: "你好"
  },
  //生命周期函数

  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '事件页面'
    })
  },
  //事件处理函数
  tapName: function (event) {
    console.log(event)
    count++
    this.data.xianshi = "你吃了吗"
    this.setData({ xianshi: "你好吗" + count })
  },
  handleTap1: function (event) {
    console.log("outter")
    console.log(event)
    count++
    this.setData({ xianshi: "你好吗" + count })
  },
  handleTap2: function (event) {
    console.log("middle")
    console.log(event)
    count++
    this.setData({ xianshi: "你好吗" + count })
  },
  handleTap3: function (event) {
    console.log("inner")
    console.log(event)
    count++
    this.setData({ xianshi: "你好吗" + count })
  }
})
