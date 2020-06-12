// pages/main/main.js
Page({

  data: {
    active:1,
    show:false
  },

  onChange(e){
    console.log(e);
    
  },
  onShow() {
		this.getTabBar().init();
  },
  showPopup(){
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  }
})