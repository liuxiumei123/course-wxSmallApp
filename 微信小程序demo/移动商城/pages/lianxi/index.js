//获取应用实例
var app = getApp()
var pagg = getCurrentPages()

Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false  // loading
    },

    //事件处理函数
    swiperchange: function (e) {
        console.log(e)

    },
    onShow: function () {
        console.log(2222222222222222222222222)
        console.log(pagg)
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //sliderList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function (res) {
                that.setData({
                    images: res.data
                })
            }
        })

    }
})
