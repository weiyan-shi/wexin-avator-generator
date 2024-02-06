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
    // 上传媒体文件
    uploadMedia: function () {
      wx.chooseMedia({
        count: 1, // 允许选择的最大数量
        mediaType: ['image'], // 可以选择的媒体类型
        sourceType: ['album', 'camera'], // 选择图片的来源
        camera: 'back', // 默认使用后置摄像头
        success(res) {
          // 输出选择的文件的临时路径和大小
          console.log(res.tempFiles.map(file => file.tempFilePath));
          console.log(res.tempFiles.map(file => file.size));

          // 这里可以添加上传到服务器的代码

          // let cloudPath = "userPhoto/" + app.userInfo._openid + Date.now() + ".jpg";
          // wx.cloud.uploadFile({
          //   cloudPath,
          //   filePath: this.data.userPhoto
          // })
        }
      });
    },
    drawAvatarWithBorder: function () {
      const ctx = wx.createCanvasContext('avatarCanvas', this);
      const avatarUrl = this.data.avatarUrl; // 头像URL
      const borderStyle = this.data.selectedBorder; // 边框样式

      ctx.drawImage(avatarUrl, 0, 0, 300, 300); // 绘制头像
      // 根据borderStyle添加边框的绘制逻辑
      // 例如：
      if (borderStyle === 'avatar-border-1') {
        ctx.setStrokeStyle('red');
        ctx.setLineWidth(10);
        ctx.strokeRect(0, 0, 300, 300);
      }
      // ... 其他边框样式的处理

      ctx.draw(false, () => {
        // 绘制完成后的回调
        this.saveCanvasImage();
      });
    },

    saveCanvasImage: function () {
      wx.canvasToTempFilePath({
        canvasId: 'avatarCanvas',
        success: (res) => {
          this.saveImageToAlbum(res.tempFilePath);
        },
        fail: (err) => {
          console.error('Canvas转图片失败', err);
        }
      }, this);
    },

    saveImageToAlbum: function (tempFilePath: any) {
      wx.saveImageToPhotosAlbum({
        filePath: tempFilePath,
        success: () => {
          wx.showToast({
            title: '图片保存成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: (err) => {
          console.error('图片保存失败', err);
        }
      });
    },

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