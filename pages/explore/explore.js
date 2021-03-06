// pages/explore/explore.js
Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    scrollh:0
  },

  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },

  onShow() {
		this.getTabBar().init();
	},

  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: (result)=>{
        let scrollh = result.safeArea.height - 182;
        that.setData({
          scrollh
        })
      },
    });   
    
  },

  handleAddQues(){
    wx.navigateTo({
      url: '/pages/addq/addq',
      success: (result)=>{
        
      }
    });
  }

})