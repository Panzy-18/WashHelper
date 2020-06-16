const app= getApp();

Page({
  data: {
    activeKey: 0,
    imageURL: "../../image/logo.png",
    StatusBar:app.globalData.StatusBar,
    show: false,
    cm:'',
    pageClass:'ans'
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onLoad(options){
    this.setData({
      pageClass:options.pageClass
    });
  },

  handleShowNextAns(){
    console.log(1);
  }
});
