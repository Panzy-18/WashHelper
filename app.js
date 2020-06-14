//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function (options) {
    wx.getSystemInfo({
      success: e => {
        console.log(e);
        this.globalData.scrollh = e.safeArea.height - 182;
        this.globalData.x_btm_height = e.statusBarHeight;
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })

    wx.login({
      success: (res) => {
        if (res.code) {
          console.log(res.code)
          wx.getUserInfo({
            success (res2) {
              var userInfo = res2.userInfo
              wx.request({
                method: 'POST',
                url: 'http://49.235.39.41:80/api/v1/user/login?code=' + res.code,
                data: userInfo,
                success (res3) {
                  console.log(res3)
                }
              })
            }
          })
        }
      }
    })
  },
  onShow: function (options) {

  },
  onHide: function () {

  },
  onError: function (msg) {

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function (options) {

  },
  globalData: {
    scrollh: 0,
    x_btm_height: 0
  },

  getWeatherData: function (adcode) {

  }
});