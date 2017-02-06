
Page({
  onReady: function () {
    var ctx = wx.createCanvasContext('myCanvas')

    //保存当前的绘图上下文。
    ctx.save()
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 100)

    // 恢复之前保存的绘图上下文。
    ctx.restore()
    ctx.fillRect(50, 50, 150, 100)

    //将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
    ctx.draw()
  }

})
