// pages/main/main.js
Page({

  data: {
    active:1
  },

  onChange(e){
    console.log(e);
    
  },
  onShow() {
		this.getTabBar().init();
	},
})