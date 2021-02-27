// app.js
var config =  require("behaviors/config.js")

App({
    db:"",
    
    behaviors:{
        config:config,
    },
    onLaunch() {
        //TODO login

        // 获取appId和userToken
        var appId = "wx3e0f68d227f05241"
        var userToken = "87btl+b3BAey7b1QZYsKUNnX0APHyTQHOW4NukEMz1anhB9VXIamm8XTvrFE//CM7m6JanIxZ47en28FwTIJ7nBB+ja3Kp6LkZuXQ9W3OxD4dE06IDVgWEq0yKErNNUCAxYVGI01QPZBhnLdXuf21iUCMDZJ8tsFJImHRzOF8g7FGHwYYl5j37qubiX2UMDDFlGT2QdRjqdRuEFWU7C4puuUvU628uB/JiNo5W8rNpMAq8t6Cd5sBw=="
        // 初始化DB
        var liteCupPlugin = requirePlugin('liteCupPlugin')
        this.db = liteCupPlugin.db
        // this.db.initV5Admin(appId, userToken)
        this.db.init("mall", appId, userToken)
        this.db.init("scan", appId, userToken)
        this.db.init("score", appId, userToken)
        this.db.init("cash", appId, userToken)
        this.db.init("org", appId, userToken)
        this.db.init("wxshop", appId, userToken)
        this.db.init("wxlite", appId, userToken)


        wx.getSystemInfo({
            success: e => {
                this.globalData.StatusBar = e.statusBarHeight;
                let capsule = wx.getMenuButtonBoundingClientRect();
                if (capsule) {
                    this.globalData.Custom = capsule;
                    this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
                } else {
                    this.globalData.CustomBar = e.statusBarHeight + 50;
                }
            }
        })

    },

    globalData: {
        userInfo: null,
    },

})
