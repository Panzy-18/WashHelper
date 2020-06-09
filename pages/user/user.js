// pages/user/user.js
import { getSetting, chooseAddress, openSetting } from "../../utils/asyncHCA.js"

Page({
  data: {

  },
  async handleChooseAddress() {
    try {
      const res1 = await getSetting();
      const scopeAddress = res1.authSetting["scope.address"];
      if (scopeAddress === false) {
        await openSetting();
      }
      const address = await chooseAddress();
      wx.setStorageSync("address", address);
    } catch (error) {
      console.log(error);
    }
  }

})