Page({
  data: {
    key: '',
    data: '',
    dialog: {
      title: '',
      content: '',
      hidden: true
    }
  },
  keyChange: function (e) {
    this.data.key = e.detail.value
  },
  dataChange: function (e) {
    this.data.data = e.detail.value
  },
   setStorage: function () {
    var key = this.data.key
    var data = this.data.data
    if (key.length === 0) {
      this.setData({
        'dialog.hidden': false,
        'dialog.title': '保存数据失败',
        'dialog.content': 'key 不能为空'
      })
    } else {
      wx.setStorageSync(key, data)
      this.setData({
        'dialog.hidden': false,
        'dialog.title': '存储数据成功'
      })
    }
  },
  getStorage: function () {
    var key = this.data.key
    var storageData = wx.getStorageSync(key)
    //console.log(storageData)
    if (storageData === 0) {
      this.setData({
        'dialog.hidden': false,
        'dialog.title': '读取数据失败',
        'dialog.content': 'key 为空'
      })
    } else {
      this.setData({
        'dialog.hidden': false,
        'dialog.title': '读取数据成功',
        'dialog.content': "data: '" + storageData + "'"
      })
    }
  },

  removeStorage: function () {
    var key = this.data.key
    var storageData = wx.getStorageSync(key)
    if (storageData === 0) {
      this.setData({
        'dialog.hidden': false,
        'dialog.title': '移除数据失败',
        'dialog.content': 'key 不存在'
      })
    } else {
      wx.removeStorageSync(key)
      this.setData({
        'dialog.hidden': false,
        'dialog.title': '移除数据成功',
        'dialog.content': ""
      })
    }
  },
  getInfo: function () {
    var res = wx.getStorageInfoSync()
    console.log(res)
    this.setData({
        'dialog.hidden': false,
        'dialog.title': '获取keys成功',
        'dialog.content':"keys为："+ res.keys
      })
  },
  clearStorage: function () {
    wx.clearStorageSync()
    this.setData({
      key: '',
      data: '',
      'dialog.hidden': false,
      'dialog.title': '清除数据成功',
      'dialog.content': ''
    })
  },
  confirm: function () {
    this.setData({
      'dialog.hidden': true,
      'dialog.title': '',
      'dialog.content': ''
    })
  }
})
