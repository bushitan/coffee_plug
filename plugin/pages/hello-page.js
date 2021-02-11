// plugin/pages/hello-page.js

Page({
    data: {
     
    },
    onLoad(options) {
      console.log('This is a plugin page!')
      console.log(options)

    //   console.log(getApp())


      // var a = wx.setStorageSync('number',123)
      // console.log(a)
      
      var a = wx.getStorageSync('say')
      console.log(a)
      // var a = wx.getStorageSync('number')
      // console.log(a)


      // wx.getAccountInfoSync({
      //   success:res=>{
      //     console.log(res)
      //   },
      //   fail:res=>{
      //     console.log(res)
      //   }
      // })
      
      const accountInfo = wx.getAccountInfoSync();
console.log(accountInfo.miniProgram.appId) // 小程序 appId
console.log(accountInfo.plugin.appId) // 插件 appId
console.log(accountInfo.plugin.version) // 插件版本号， 'a.b.c' 这样的形式
      // .then(res=>{
      //   console.log(res)
      // })
    }
})
