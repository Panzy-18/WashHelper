const app = getApp();
Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'home-o',
				text: '快速',
				url: '/pages/main/main'
			},
			{
				icon: 'search',
				text: '探索',
				url: '/pages/explore/explore'
			},
			{
				icon: 'friends-o',
				text: '个人中心',
				url: '/pages/user/user'
			},
		],
		StatusBar: app.globalData.StatusBar
	},

	methods: {
		onChange(event) {
			console.log(event)
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
