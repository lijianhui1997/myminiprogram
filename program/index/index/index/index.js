var formatTime= require('../../../utils/util.js').formatTime;
Page({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    },
   
  },
    data: {
        //date: ""
        newTime: ''
    },
    onLoad: function (options) {

        wx.getBatteryInfo({
            success: res => {
                this.setData({
                    batteryInfo: res.level
                });
            }
        });
        wx.getSystemInfo({
            success: res => {
                this.setData({
                    sys: res
                });
            },
        });
        /*
      var TIME = util.formatTime(new Date());
  
      this.setData({
  
        time: TIME,
  
      });
      */
        var that = this;
        //获取实时时间
        setInterval(function () {
            var nowTime = new Date();
            var hour = nowTime.getHours();
            var minutes = nowTime.getMinutes();
            var seconds = nowTime.getSeconds();
            if (hour < 10) {
                hour = "0" + hour;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            //console.log("nowTime:",nowTime)
            that.setData({
                newData: nowTime.getFullYear() + '年' + (nowTime.getMonth() + 1) + '月' + nowTime.getDate() + "日",
                newTime: hour + ':' + minutes + ':' + seconds
            })
        }, 200)


    },
    onReady: function () {

        //在挂载的生命周期里运行 回调时间函数

        let now = new Date();

        let nowdate = formatTime(now);

        this.setData({

            date: nowdate

        })

    },
      btncud: function () {

        let Arr = this.data.date.split("-");

        // 需要先转换为Wed Jul 05 2017 13:50:11 GMT+0800 (中国标准时间)这种型式

        let now = new Date(Number(Arr['0']), (Number(Arr['1']) - 1), Number(Arr['2']))

        now.setDate(now.getDate() - 1)

        now = this.formatTime(now)

        this.setData({

            date: now

        })

    },

    getTime: function () {
        var time = util.formatTime(new Date())
        //为页面中time赋值
        this.setData({
            time: time
        })
        //打印
        console.log(time)
    },

    next_goupiao: function () {

        wx.navigateTo({

            url: '../ticket_msg/ticket_msg',

        })

    },

    goIndex: function () {
        wx.navigateTo({
            url: '/page/quiet/quiet',
        })
    },
    goSmooth: function () {
        wx.navigateTo({
            url: '/page/smooth/smooth',
        })
    },
    goCure: function () {
        wx.navigateTo({
            url: '/page/cure/cure',
        })
    },
    goHappiness: function () {
        wx.navigateTo({
            url: '/page/happiness/happiness',
        })
    },
    goFresh: function () {
        wx.navigateTo({
            url: '/page/fresh/fresh',
        })
    },
    goRelax: function () {
        wx.navigateTo({
            url: '/page/relax/relax',
        })
    },
})

   

