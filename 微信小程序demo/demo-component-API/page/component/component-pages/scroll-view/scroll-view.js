var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({
  data: {
    toView: 'green'
  },
  upper: function(e) {
    console.log("到达顶部/左边")
  },
  lower: function(e) {
   console.log("到达底部/右边")
  },
  scroll: function(e) {
    console.log("我在滚动")
  },
  scrollToTop: function(e) {
    this.setData({
      scrollTop: 0
    })
  },
  tap: function(e) {
    for (var i = 0; i < order.length; i++) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10  //手触摸移动一次往上面滑动10的距离
    })
  }
})
