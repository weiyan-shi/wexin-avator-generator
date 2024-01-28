// pages/select/select.ts
const defaultAvatarUrl_2 = wx.getStorageSync('avatarUrl')
Component({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl_2,
    selectedBorder: 'avatar-border-1' // 默认选中第一个边框
  },
  methods: {
    onSelectBorder: function (e: WechatMiniprogram.CustomEvent) {
      this.setData({
        selectedBorder: e.detail.value
      });
    },

    navigateToSelect() {
      wx.navigateTo({
        url: '../index/index',
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
  }
})