
Page({
  onReady: function () {
    var ctx = wx.createCanvasContext('myCanvas')

    // begin path
    ctx.rect(10, 10, 100, 30)
    ctx.setFillStyle('yellow')
    ctx.fill()

    // begin another path
    ctx.beginPath()
    ctx.rect(10, 40, 100, 30)

    ctx.setFillStyle('blue')
    ctx.fillRect(10, 70, 100, 30)//左上角   宽  高
    ctx.rect(10, 100, 100, 30)

    ctx.setFillStyle('red')

    //fill() 填充的的路径是从 beginPath() 开始计算，但是不会将 fillRect() 包含进去
    ctx.fill()
    ctx.closePath()
 

    // begin another path
    ctx.beginPath()
    ctx.setStrokeStyle('red')
    ctx.strokeRect(10, 150, 100, 30)//左上角   宽  高

    ctx.setLineWidth(5)
    ctx.moveTo(10, 200)
    ctx.lineTo(100, 200)
    ctx.setStrokeStyle('blue')
    //stroke() 描绘的的路径是从 beginPath() 开始计算，但是不会将 strokeRect() 包含进去
    ctx.stroke()
    ctx.closePath()

    // begin another path
    ctx.beginPath()
    ctx.setLineWidth(1)
    ctx.arc(200, 75, 50, 0, 1.5 * Math.PI)
    ctx.setStrokeStyle('#333333')
    ctx.stroke()
    ctx.closePath()

    // begin another path
    ctx.beginPath()
    ctx.setFontSize(20)
    //ctx.setFillStyle('green')
    ctx.fillText('Hello', 200, 200)//为什么是红色??
    ctx.fillText('MINA', 200, 250)
    ctx.closePath()


    ctx.beginPath()
    ctx.setFillStyle('red')
    ctx.fillRect(10, 220, 50, 50)
    //设置全局画笔透明度。
    ctx.setGlobalAlpha(0.5)
    ctx.setFillStyle('blue')
    ctx.fillRect(30, 250, 50, 50)
    ctx.setFillStyle('yellow')
    ctx.fillRect(50, 280, 50, 50)

    //将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
    ctx.draw()
  }

})
