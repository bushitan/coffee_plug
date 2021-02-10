// const plugin = requirePlugin('hello-plugin')
Page({
    data: {
      items: [],
      currentItem: 0,
      userToken:"sdhfjks212312"
    },
    onLoad() {
      // plugin.sayHello()
      // const world = plugin.answer


      
      // var a = wx.setStorageSync('say',457834)
      // console.log(a)


      
      var a = wx.getStorageSync('say')
      console.log(a)
    },
    addItem() {
      this.data.items.push(this.data.currentItem++)
      this.setData({
        items: this.data.items,
        currentItem: this.data.currentItem
      })
    }
})
