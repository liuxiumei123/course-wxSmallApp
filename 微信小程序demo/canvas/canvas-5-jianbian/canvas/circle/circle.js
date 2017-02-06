//smile.js
Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg);
  },
  onReady: function () {
   
    var context = wx.createCanvasContext('circle');
    context.beginPath();
    const g1 = context.createCircularGradient(50, 50, 50);
    g1.addColorStop(0, 'rgb(255,0,0)');
    g1.addColorStop(1, 'rgb(80,0,0)');
    context.setFillStyle(g1)
    
    context.arc(50, 50, 50, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    context.draw()
    }


  
});