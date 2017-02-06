var example = require('./example.js')

Page({
  onLoad: function () {
    this.context = wx.createContext()

    var methods = Object.keys(example)//什么意思啊  把对象中的所有属性以字符串的形式存在数组中

   // console.log(methods)

    this.setData({
      methods: methods
    })

    var that = this

    methods.forEach(function (method) {//遍历数组

      that[method] = function () {  //添加方法

        example[method](that.context)//调用 example 中的方法

        wx.drawCanvas({ 
          canvasId: 'canvas',
          actions: that.context.getActions()
        })
      }
    })
  },
  toTempFilePath: function () {
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      success: function (res) {
        console.log(111)
        console.log(res)
      },
      fail: function (res) {
         console.log(222)
        console.log(res)
      }
    })
  }
})
