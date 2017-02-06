
Page({
  onReady: function () {
    var ctx = wx.createCanvasContext('myCanvas')

    // Create linear gradient

    const grd = ctx.createLinearGradient(0, 0, 100, 0)//起点x 起点y 终点x 终点y
    //小于最小 stop 的部分会按最小 stop 的 color 来渲染，
    //大于最大 stop 的部分会按最大 stop 的 color 来渲染。
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'yellow')

    // Fill with gradient
    ctx.setFillStyle(grd)
    ctx.fillRect(10, 10, 200, 100)

    //将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
    ctx.draw()
  }

})
