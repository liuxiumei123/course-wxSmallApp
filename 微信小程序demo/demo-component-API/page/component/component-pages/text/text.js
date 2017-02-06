var initText = 'this is first line   \n   this is second line'

Page({
  data: {
    text: initText
  },
  extraLine: [],
  add: function(e) {
    this.extraLine.push('other line')
    //console.log(this.extraLine);
   // console.log(this.extraLine.join('\n'))
    this.setData({
      text: initText + '\n' + this.extraLine.join('\n')
    })
   // console.log(this.data.text)
  },
  remove: function(e) {
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: initText + '\n' + this.extraLine.join('\n')
      })
    }
  }
})
