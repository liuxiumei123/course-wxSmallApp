Page({
    data: {
        context: "返回数据"
    },
    connectWeb: function () {
        var that = this
        wx.connectSocket({
            url: "ws://localhost/websocket.php",
            data: {
                ename: "admin"
            },
            header: {
                'content-type': 'application/json'
            },
            // header: {}, // 设置请求的 header
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            success: function (res) {
                console.log("成功")
                // success
                that.setData({
                    context: res
                })
            },
            fail: function () {
                // fail
                console.log("错误")
            },
            complete: function () {
                // complete
            }
        })

        wx.onSocketOpen(function (res) {
            console.log('WebSocket连接已打开！')
        })

        wx.onSocketError(function (res) {
            console.log(res)
            console.log('WebSocket连接打开失败，请检查！')
        })
    }


})
