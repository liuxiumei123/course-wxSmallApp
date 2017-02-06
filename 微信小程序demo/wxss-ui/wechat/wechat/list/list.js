
Page({
    data: {
        array1: [
            { left: "头像", right: "",url:"" },
            { left: "名字", right: "bear" },
            { left: "微信号", right: "bear" },
            { left: "我的二维码", right: "" },
            { left: "我的地址", right: "" },

        ],
        array2: [
            { left: "性别", right: "男" },
            { left: "地区", right: "奥地利 维也纳" },
            { left: "个性签名", right: "未填写" }
        ],
        array3: [
            { left: "LinkedIn帐号", right: "未设置" }
        ]
    },

    onLoad: function () {

    },
    pickphoto:function(){
         wx.showActionSheet({
            itemList: ['拍照', '从手机相册选择', '保存图片'],
            success: function(res) {
                if (!res.cancel) {
                    console.log(res.tapIndex)
                }
            }
        })
    }
})