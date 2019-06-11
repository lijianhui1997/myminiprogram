Component({
  data: {
    color: "#7A7E83",
    selectedColor: "#B0C4DE",
    selected:0,
    list: [{
      // selected:0,
      pagePath: "/index/index/index",
      iconPath: "/image/music.png",
      selectedIconPath: "/image/music1.png",
      text: "音乐"
    }, {
      pagePath: "/index/index2/index2",
      iconPath: "/image/text.png",
      selectedIconPath: "/image/text1.png",
      text: "助眠"
    }, {
        pagePath: "/index/index4/index4",
        iconPath: "/image/shop.png",
        selectedIconPath: "/image/shop1.png",
        text: "推荐"
    },{
    pagePath: "/index/index3/index3",
    iconPath: "/image/my.png",
    selectedIconPath: "/image/my1.png",
    text: "我的"
}]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
      // console.log(this.data.selected);

    }
  }
})