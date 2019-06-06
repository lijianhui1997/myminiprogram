// page/article/article.js
Page({

    /**
     * 页面的初始数据
     */
    data: {  
      array:[],
      index:0,
      selectedIconPath: '/image/star1.png',
      iconPath: '/image/star.png'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      //插入文章id和用户昵称到收藏表
      // var flag = this.data.array[e.currentTarget.dataset.id]
      var that=this;
      var userinfo = wx.getStorageSync('userinfo');
      console.log(userinfo);
      //发送请求将用户昵称发送到后台，已成功
      wx.request({
        url: 'https://www.ldnfqq.xyz/article',    
        success: function (re) {
          console.log(re.data)
          wx.request({
            url: 'https://www.ldnfqq.xyz/shoucang/article',
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              nick: userinfo.nickName,
            },
            success: function (res) {
                  for(var i=0;i<re.data.length;i++){
                    for(var j=0;j<res.data.length;j++){
                      if(re.data[i].article_id===res.data[j].article_id){
                        re.data[i].flag=true;
                      }
                    }       
                  }  
              console.log(res.data);
              that.setData({
                array: re.data
              })               
            }
          })
        }
      })

    },
    shoucang:function(e){
      var that=this;
      let flag = this.data.array[e.currentTarget.dataset.id].flag;
      
      if(!flag){
        flag=false;
      }
      console.log(flag);
      // let array = this.data.array[e.currentTarget.dataset.id]
      // that.setData({
      //   array: this.data.array
      // }) 
      if (!flag) {
        var userinfo = wx.getStorageSync('userinfo');
        var that = this;
        wx.request({
          url: 'https://www.ldnfqq.xyz/shoucang/insert',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            nick: userinfo.nickName,//获取昵称
            num: flag,//控制收藏是否取消
            id: e.currentTarget.dataset.id
          },
          success: function (res) {
            console.log(res.data);
          },    
        })
        this.data.array[e.currentTarget.dataset.id].flag = !flag;
        that.setData({
          array: this.data.array,
        }) 
        console.log(this.data.array);
        
      } else {
        var that=this;
        
        var userinfo = wx.getStorageSync('userinfo');
        wx.request({
          url: 'https://www.ldnfqq.xyz/shoucang/insert',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            nick: userinfo.nickName,
            num: flag,
            id: e.currentTarget.dataset.id
          },
          success: function (res) {
            console.log(res.data);
            
          }
        });
      }
       this.data.array[e.currentTarget.dataset.id].flag=!flag;
      that.setData({
        array: this.data.array,
      }) 
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