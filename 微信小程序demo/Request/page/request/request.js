Page({
    data: {
        imgList: ''
    },
    request: function () {
        var that = this
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                'content-type': 'application/json',
                // "Referer":"" 来源于哪个网站  小程序不需要设置
            },
            success: function (res) {
                console.log(res)
                that.setData({
                    imgList: res.data
                })
                console.log(imgList)
            },
            fail: function () {
                console.log("fail")
            },
            complete: function () {
                console.log("接口调用结束")
            }
        })
    }
})
