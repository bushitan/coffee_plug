// const app = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    bgColor: {
      type: String,
      default: ''
    }, 
    isCustom: {
      type: [Boolean, String],
      default: false
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    },

    TopCustomBar: {
        type: String,
        default: '0'
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    // StatusBar: app.globalData.StatusBar,
    // CustomBar: app.globalData.CustomBar,
    //   Custom: app.globalData.Custom
    // StatusBar: app.globalData.StatusBar,
    //   CustomBar: app.globalData.CustomBar,
    //   Custom: app.globalData.Custom
  },
  ready(){
      var that = this
      wx.getSystemInfo({
          success: e => {
              var StatusBar, CustomBar, Custom
              StatusBar = e.statusBarHeight;
              let capsule = wx.getMenuButtonBoundingClientRect();
              if (capsule) {
                  Custom = capsule;
                  CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
              } else {
                  CustomBar = e.statusBarHeight + 50;
              }

              this.setData({
                  StatusBar: StatusBar,
                  CustomBar: CustomBar,
                  Custom: Custom
              })
          }
      })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    BackPage() {
      wx.navigateBack({
        delta: 1
      });
    },
    toHome(){
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  }
})