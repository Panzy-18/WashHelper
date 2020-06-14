const app= getApp();

Page({
  data: {
    activeKey: 0,
    imageURL: "../../image/logo.png",
    StatusBar:app.globalData.StatusBar,
    show: false,
    cm:'',
    pageClass:"ans"
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  handleShowNextAns(){
    console.log(1);
  }
});
