//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (info) {
    var apps = this
    if(this.globalData.userInfo)
    {
      typeof info == "function" && info(this.globalData.userInfo)
    }else
    {
      wx.login({
        success: function () {
          wx.getUserInfo({
            //接受服务器的json数据
            success: function (res) {
              apps.globalData.userInfo = res.userInfo
              typeof info == "function" && info(apps.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})