const app= getApp();

Page({
  data: {
    activeKey: 0,
    imageURL: "../../image/logo.png",
    StatusBar:app.globalData.StatusBar,
    show: false,
    cm:''
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  }
});
