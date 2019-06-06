// page/test/test.js

Page({
    data: {
        items: [
        { name: '男', checked: true },
        { name: '女', checked: false }
        ],
        ages:[
        { name: '0~20岁', checked: true},
        { name: '20~30岁', checked: false},
        { name: '30~50岁', checked: false },
        { name: '50岁以上', checked: false }
        ],
        time: [
        { name: '少于6小时', checked: true },
        { name: '6~7小时', checked: false },
        { name: '7~8小时', checked: false },
        { name: '8小时以上', checked: false }
        ],
        impact: [
        { name: '经常', checked: true },
        { name: '偶尔', checked: false },
        { name: '没有', checked: false }
        ],
        environment:[
        { name: '温度', checked: true },
        { name: '光线', checked: false },
        { name: '舒适度', checked: false },
        { name: '声音', checked: false }
        ],
        way: [
        { name: '听音乐', checked: true },
        { name: '看书', checked: false },
        { name: '记单词', checked: false }
        ]
    },


    /**
     * 页面的初始数据
     */
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})