function getRandomColor() {//随机颜色的生成
  let rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
  onReady: function () {
    this.animation = wx.createAnimation()

  },
  //创建一个动画实例animation。调用实例的方法来描述动画。

  //最后通过动画实例的export方法导出动画数据传递给组件的animation属性。

  //export 方法每次调用后会清掉之前的动画操作

  opacity: function () {
    this.animation.opacity(Math.random()).step()
    this.setData({ animation: this.animation.export() })
  },
  backgroundColor: function () {
    this.animation.backgroundColor(getRandomColor()).step()
    this.setData({ animation: this.animation.export() })
  },
  width: function () {
    this.animation.width(Math.random() * 300).step()
    this.setData({ animation: this.animation.export() })
  },
  height: function () {
    this.animation.height(Math.random() * 300).step()
    this.setData({ animation: this.animation.export() })
  },
  top: function () {
    this.animation.top(Math.random() * 300).step()
    this.setData({ animation: this.animation.export() })
  },
  bottom: function () {
    this.animation.bottom(Math.random() * 300).step()
    this.setData({ animation: this.animation.export() })
  },
  left: function () {
    this.animation.left(Math.random() * 300).step()
    this.setData({ animation: this.animation.export() })
  },
  right: function () {
    this.animation.right(Math.random() * 300).step()
    this.setData({ animation: this.animation.export() })
  },
  reset: function () {
    this.animation.opacity(1)
      .backgroundColor("#1AAD19")
      .width("200rpx")
      .height("200rpx")
      .step({ duration: 100 })
    this.setData({ animation: this.animation.export() })
  }
})
