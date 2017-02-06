
Page({
  onReady: function () {
    var ctx = wx.createCanvasContext('myCanvas')


    //对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。累加移动
    ctx.strokeRect(10, 10, 150, 100)

    ctx.translate(20, 20)
    //ctx.setStrokeStyle('red')
    ctx.strokeRect(10, 10, 150, 100)

    ctx.translate(20, 20)
    //ctx.setStrokeStyle('blue')
    ctx.strokeRect(10, 10, 150, 100)

    //将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
    ctx.draw()
  }

})
