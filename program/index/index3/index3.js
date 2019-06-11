// index/index3/index3.js
const app = getApp()
Page({
    
        onShow:function() {
            if (typeof this.getTabBar === 'function' &&
                this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 3
                })
            }
        },

  data: {
    motto: wx.getStorageSync('nick'),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    gain:function(){
      wx.navigateTo({
        url: '/index/index1/index1',
      })
    },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo:function(e){
    
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
    console.log(this.data.userInfo);
  }
   
})