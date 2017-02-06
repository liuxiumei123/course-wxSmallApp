Page({
  data: {
    focus: false,
    inputValue: ''
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function (e) {
    console.log(e)
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor   //value 的长度

    if (pos != -1) {
          // 操作字符串
      var left = e.detail.value.slice(0, pos) //slice() 方法不会改变原始数组
         // 变换之后字符串的长度 也是光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    //处理函数可以直接 return 一个字符串，将替换输入框的内容。
    //但是只能在下次变化时才能看出来
    return {
      value:  value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === "123") {
      //收起键盘  光标消失
      wx.hideKeyboard()
    }
  },
  bindconfirm:function(e){
    console.log(e)
     console.log("我是 bindconfirm触发")
  }
})
