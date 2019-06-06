Page({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
    goIndex1: function () {
        wx.navigateTo({
            url: '/page/press/press',
        })
    },
    goIndex2: function () {
        wx.navigateTo({
            url: '/page/bad/bad',
        })
    },
    goIndex3: function () {
        wx.navigateTo({
            url: '/page/anxiety/anxiety',
        })
    },
    goIndex4: function () {
        wx.navigateTo({
            url: '/page/depressed/depressed',
        })
    },
    goIndex5: function () {
        wx.navigateTo({
            url: '/page/article/article',
        })
    }
})
