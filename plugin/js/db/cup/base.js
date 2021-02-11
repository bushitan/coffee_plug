/**
 * admin 管理体系的API汇总
 *  
 * 主机地址 ： host = "https://shop.51zfgx.com"
 * 测试地址 ： 暂无
 *  
 */


var app

class AdminBase {


    host = "https://shop.51zfgx.com"
    
    constructor(appId, userToken) {
        this.appId = appId
        this.userToken = userToken
     }

    base(options) {
        return new Promise((resolve, reject) => {
            var data = options.data || {}            
            //优化url的空白字符串
            var url = this.host + options.url
            var _org = encodeURIComponent(url)
            var _temp = _org.replace(/%E2%80%8B/g, "")
            var _url = decodeURIComponent(_temp)


            data.appId = this.appId
            data.userToken = this.userToken
            

            var startTime = new Date().getTime();
            wx.request({
                url: _url,
                method: options.method || "POST",
                header: {
                    // 'content-type': 'application/x-www-form-urlencoded' // 默认值
                    'content-type': 'application/json'
                },
                data: data,
                success : res => {

                    var completeTime = new Date().getTime();
                    console.warn(this.host + options.url , ":", completeTime - startTime)
                    resolve(res.data)
                },
                fail: res => {
                    // console.log("请求错误：" + this.host + options.url, res)
                    console.error(options.url, ":", completeTime - startTime)
                    reject(res)
                },
            })
        })
    }



            // data.AppId = "wx3e0f68d227f05241"
            // data['Session'] = wx.getStorageSync(this.KEY_SHARE_SESSION)
            // data["AppId"] = this.APP_ID
            // app = app || getApp()
            // data.AppId = wx.getStorageSync(app.KEY.APPID)
            // data.Session = wx.getStorageSync(app.KEY.SESSION_MANAGER)





    // // 登陆  插件无登陆
    // login() {
    //     return new Promise((reslove, reject) => {
    //         wx.login({
    //             success: res => {
    //                 this.base({
    //                     url: "/Api/V5/OrgWxShoper/JsCode2Session",
    //                     data: {
    //                         "userToken": "",
    //                         "code": res.code
    //                     }
    //                 }).then(res => {
    //                     if (res.code == 0) {
    //                         wx.setStorageSync(app.KEY.SESSION_MANAGER, res.data.session)
    //                     }
    //                     wx.hideLoading();
    //                     reslove(res)
    //                 }).catch(res => reject(res))
    //             }
    //         })

    //     })
    // }

}
module.exports = AdminBase