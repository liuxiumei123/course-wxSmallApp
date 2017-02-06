//smile.js
Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg);
  },
  onReady: function (e) {
    //使用wx.createCanvasContext获取绘图上下文context
    var context = wx.createCanvasContext('clock');
    drawClock()
    setInterval(drawClock, 1000);

    function drawClock() {

      var now = new Date();
      var sec = now.getSeconds();
      var min = now.getMinutes();
      var hour = now.getHours();
      //小时必须获取浮点类型(小时+分数转化成的小时)
      hour = hour + min / 60;
      //将24小时进制转换为12小时
      hour = hour > 12 ? hour - 12 : hour;
      //表盘
      context.setLineWidth(8)
      context.setStrokeStyle("#045db7")
      context.arc(150, 150, 100, 0, 2 * Math.PI, true);
      context.stroke();
      //时刻度
      for (let i = 0; i < 12; i++) {
        context.save()
        //设置时针的粗细
        context.setLineWidth(4)
        //设置时针的颜色
        context.setStrokeStyle("#000000")
        //先设置0,0点
        context.translate(150, 150);
        //再设置旋转角度
        context.rotate(i * 30 * Math.PI / 180);//角度*Math.PI/180=弧度
        context.beginPath();
        context.moveTo(0, -84);
        context.lineTo(0, -93);
        context.closePath();
        context.stroke();
        context.restore()
      }
      //分刻度
      for (let i = 0; i < 60; i++) {
        context.save();
        //设置分刻度的粗细
        context.setLineWidth(3)
        //设置颜色(使用时刻度的颜色)
        context.setStrokeStyle("#000000")
        //设置或者重置画布的0，0点
        context.translate(150, 150);
        //设置旋转角度
        context.rotate(i * 6 * Math.PI / 180);
        //画分针刻度
        context.beginPath();
        context.moveTo(0, -88);
        context.lineTo(0, -93);
        context.closePath();
        context.stroke();
        context.restore();
      }

      //时针
      context.save();
      //设置时针风格
      context.setLineWidth(4)
      //设置时针的颜色
      context.setStrokeStyle("#000000")
      //设置异次元空间的0，0点
      context.translate(150, 150);
      //设置旋转角度
      context.rotate(hour * 30 * Math.PI / 180);
      context.beginPath();
      context.moveTo(0, -70);
      context.lineTo(0, 5);
      context.closePath();
      context.stroke();
      context.restore();

      //分针
      context.save();
      //设置时针风格
      context.setLineWidth(3)
      //设置时针的颜色
      context.setStrokeStyle("#000000")
      //设置异次元空间的0，0点
      context.translate(150, 150);
      //设置旋转角度
      context.rotate(min * 6 * Math.PI / 180);
      context.beginPath();
      context.moveTo(0, -80);
      context.lineTo(0, 10);
      context.closePath();
      context.stroke();
      context.restore();

      //秒针
      context.save();
      context.setStrokeStyle("#ff0000")
      context.setLineWidth(2)
      context.translate(150, 150);
      context.rotate(sec * 6 * Math.PI / 180);
      context.beginPath();
      context.moveTo(0, -85);
      context.lineTo(0, 20);
      context.closePath();
      context.stroke();
      //画出时针、分针、秒针的交叉点、
      context.beginPath();
      context.arc(0, 0, 3, 0, 360, false);
      context.closePath();
      //设置填充样式
      context.setFillStyle("#c0c0bf");
      context.fill();
      //设置笔触样式(秒针已设置)
      context.stroke();
      //设置秒针前段的小圆点
      context.beginPath();
      context.arc(0, -65, 3, 0, 360, false);
      context.closePath();
      //设置填充样式
      context.setFillStyle("#c0c0bf");
      context.fill();
      //设置笔触样式(秒针已设置)
      context.stroke();
      context.restore();

      context.draw()
    }
  }
});