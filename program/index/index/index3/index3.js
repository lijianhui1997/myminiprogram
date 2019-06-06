// index/index3/index3.js

Page({
    pageLifetimes: {
        show() {
            if (typeof this.getTabBar === 'function' &&
                this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 2
                })
            }
        },

    },
    goIndex1: function () {
        wx.navigateTo({
            url: '/page/collectessay/collectessay',
        })
    },
    goIndex3: function () {
        wx.navigateTo({
            url: '/page/aboutus/aboutus',
        })
    },

   
})