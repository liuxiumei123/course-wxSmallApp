Page({
  onReady: function () {
    var context = wx.createCanvasContext('canvas')
    //context.setGlobalAlpha(0.5)
    var dx = 100;//圆心坐标
    var dy = 100;
    var s = 50;//半径

    context.beginPath();
    context.setFillStyle('rgba(255,0,0,0.5)')
    context.setShadow(10, 10, 1.5, 'rgba(150,150,150,0.5)')//offsetX offsetY blur color
    var dig = Math.PI / 5 * 4;

    for (let i = 0; i < 5; i++) {
      var x = Math.sin(i * dig);
      var y = Math.cos(i * dig);
      context.lineTo(dx + x * s, dy + y * s);
    }
    context.closePath();
    context.fill();
    context.draw()
  }

})







