
Page({
  onReady: function () {
    var ctx = wx.createCanvasContext('myCanvas')
//在调用scale方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。
    ctx.beginPath()
    ctx.strokeRect(10, 10, 25, 15)
    ctx.scale(2, 2)
    ctx.setStrokeStyle('red')
    ctx.strokeRect(10, 10, 25, 15)
    ctx.scale(2, 2)
    ctx.setStrokeStyle('blue')
    ctx.strokeRect(10, 10, 25, 15)

    //将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
    ctx.draw()
  }

})
