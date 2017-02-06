
Page({
  onReady: function () {
    var ctx = wx.createCanvasContext('myCanvas')
    ctx.beginPath()
    ctx.arc(0, 0, 100, 0, 90)
    ctx.setStrokeStyle('red')
    ctx.stroke()
    ctx.closePath()

    ctx.setStrokeStyle('black')

    //以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
    ctx.strokeRect(100, 0, 150, 100)

    ctx.rotate(20 * Math.PI / 180)
    ctx.strokeRect(100, 0, 150, 100)

    ctx.rotate(20 * Math.PI / 180)
    ctx.strokeRect(100, 0, 150, 100)
    
    ctx.rotate(45 * Math.PI / 180)
    ctx.strokeRect(100, 0, 150, 100)



    //将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
    ctx.draw()
  }

})
