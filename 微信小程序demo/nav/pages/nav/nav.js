//nav.js
Page({
  data: {
    navTab: ["首页", "产品", "联系", "收藏"],
    currentNavtab: "0"
  },
  onLoad: function () {
    console.log('onLoad')
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    })
  }
})
