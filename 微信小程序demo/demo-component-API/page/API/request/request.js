Page({
    baidu: function () {
        wx.request({
            url: 'https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                'content-type': 'application/json',
               // "Referer":"" 来源于哪个网站  小程序不需要设置
            },
            success: function (res) {
                console.log(res)// success
            },
            fail: function () {
                console.log("fail")// fail
            },
            complete: function () {
               console.log("接口调用结束") // complete
            }
        })
    }
})
