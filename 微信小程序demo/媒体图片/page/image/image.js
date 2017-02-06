var sourceType = [['camera'], ['album'], ['camera', 'album']]
var sizeType = [['compressed'], ['original'], ['compressed', 'original']]

Page({
  data: {
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    })
  },
  //选择图片
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],// album 从相册选图，camera 使用相机，默认二者都有
      sizeType: sizeType[this.data.sizeTypeIndex], // original 原图，compressed 压缩图，默认二者都有
      count: this.data.count[this.data.countIndex], // 最多可以选择的图片张数，默认9
      success: function (res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    }
    )
  },
  //  预览图片并获取图片的信息
  previewImage: function (e) {
    var current = e.target.dataset.src

    wx.getImageInfo({
      src: current,
      success: function (res) {
        console.log(res.width)//实际宽度
        console.log(res.height)//实际高度
      },
      fail: function () {
        console.log('失败')
      }
    })
    //开发者工具里面不可以   手机上面可以
    wx.previewImage({
      current: current,//当前显示图片的链接，不填则默认为 urls 的第一张
      urls: this.data.imageList//需要预览的图片链接列表
    })
  }
})
