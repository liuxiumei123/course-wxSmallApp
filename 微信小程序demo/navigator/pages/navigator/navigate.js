Page({
  onLoad: function (options) {

    //console.log(options)
    this.setData({
      options: options
    })
  },
  click: function () {
    this.setData({
      title: this.data.options.title,
      name: this.data.options.name
    })
  }
})
