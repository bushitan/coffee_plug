var  liteCupPlugin
var app = getApp()
Page({
    data: {
      items: [],
      currentItem: 0,
      userToken:"sdhfjks212312"
    },
    onLoad() {
        
        app.db.org.SearchOrgWxClientInfos().then(res => {
            console.log(res)
        }).catch(res=>{
            console.log(res)
        })


      // plugin.sayHello()
      // const world = plugin.answer

        // liteCupPlugin = requirePlugin('liteCupPlugin')

        // console.log(liteCupPlugin.admin.org.AddShopBranch)
        

        // liteCupPlugin.admin.org.AddShopBranch().then(res => {
        //     console.log(res)

        // }).catch(res=>{
        //     console.log(res)
        // })

        // var res = await liteCupPlugin.admin.org.login() 
        // console.log(res)
        // liteCupPlugin.sayHello()

      
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
