var app = getApp()
Page({
    data: {
        
    },
    onLoad: function(options) {

        var that = this
        
        wx.request({
            url: 'http://www.huanqiuxiaozhen.com/wemall/venues/getBrandAndType?id=' + options.id,
            method: 'GET',//必须大写
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                console.log(2222022222)
                console.log(res.data.data)
                that.setData({
                    brandList: res.data.data
                });
            }
        })
    }

})