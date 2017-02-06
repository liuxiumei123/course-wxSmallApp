Page({
  data: {
    height: 20,
    focus: false
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e)
    console.log(e.detail.value)
  },
  bindLineChange: function (e) {
    console.log(e)
    console.log(e.detail.height)
  },
  bindFocus: function (e) {
    console.log(e)
    console.log(e.detail.value)
  },
  bindinput: function (e) {
    console.log(e)
    console.log(e.detail.value)
  },
  bindconfirm: function (e) {
    console.log(e)
    console.log(e.detail.value)
  }
})
