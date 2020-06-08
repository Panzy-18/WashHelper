// pages/login/login.js
Page({

  data: {

  },

  handleUserInfo(e){
    //console.log(e);
    const {userInfo}=e.detail;
    wx.setStorageSync("userinfo", userInfo);
    wx.navigateTo({
      url: '../main/main'
    });

  }
})