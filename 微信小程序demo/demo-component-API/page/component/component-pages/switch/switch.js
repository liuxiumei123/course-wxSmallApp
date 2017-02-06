Page({
  data: {
    show: '关',
    show1:'关'
  },
  switch1Change: function (e) {
    console.log(e)
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)

  },
  switch2Change: function (e) {
    console.log(e)
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },
  switch3Change: function (e) {
    console.log('switch3 发生 change 事件，携带值为', e.detail.value)
      this.setData({ show:this.data.show==='关' ? '开' : '关' })
   
  },
  switch4Change: function (e) {
    console.log('switch4 发生 change 事件，携带值为', e.detail.value)
    this.setData({ show1:this.data.show1==='关' ? '开' : '关' })
   
  }
})
