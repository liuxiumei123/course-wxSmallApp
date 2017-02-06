
Page({
  onReady: function () {
    var ctx = wx.createCanvasContext('myCanvas')
    // Create circular gradient
    const grd = ctx.createCircularGradient(75, 50, 50)// 起点在圆心，终点在圆环。
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'white')

    // Fill with gradient
    ctx.setFillStyle(grd)
    ctx.arc(75,50,50,0,2*Math.PI)
    ctx.fill()

    //将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
    ctx.draw()
  }

})
