// pages/select/select.ts
const defaultAvatarUrl_2 = wx.getStorageSync('avatarUrl')

Component({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl_2,
    selectedBorder: '1', // 默认选中第一个边框
    border: ''
  },
  methods: {
    addBorder: function () {
      let that = this;
      wx.showLoading({
        icon: 'loading',
        title: '加载中，请稍后',
      })

      const borderStyle = this.data.selectedBorder; // 边框样式

      wx.cloud.getTempFileURL({
        fileList: [
          'cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/' + borderStyle + '.png'
        ]
      }).then(res => {
        // get temp file URL
        // console.log(res.fileList)
        that.setData({
          border: res.fileList[0].tempFileURL
        })

        that.combineImages(that.data.border, that.data.avatarUrl);
      }).catch(error => {
        console.error(error);
      })
    },

    combineImages: function(borderUrl: string, avatarUrl: string) {
      let that = this;
      const ctx = wx.createCanvasContext('avatarCanvas');
    
      // 确保两个图片都加载完成
      wx.getImageInfo({
        src: avatarUrl,
        success: function(avatarInfo) {
          console.log(avatarInfo.width, avatarInfo.height)
          // 首先绘制头像
          ctx.drawImage(avatarUrl, 0, 0, 128, 128);
    
          wx.getImageInfo({
            src: borderUrl,
            success: function(borderInfo) {
              console.log(borderInfo.width, borderInfo.height)
              // 然后在头像上绘制边框
              ctx.drawImage(borderUrl, 0, 0, 128, 128);
    
              // 执行绘制操
              ctx.draw(false, () => {
                // 绘制完成后的回调，可在此处添加后续操作，如保存图片等
                // 将canvas保存为图片
                wx.canvasToTempFilePath({
                  canvasId: 'avatarCanvas',
                  success: function(res) {
                    // 得到合成图片的临时路径
                    let tempFilePath = res.tempFilePath;
                    that.setData({
                      combinedImage: tempFilePath
                    });
                    wx.hideLoading();
                  },
                  fail: function(err) {
                    console.error(err);
                    wx.hideLoading();
                  }
                });
              });
            },
            fail: function(err) {
              console.error('加载边框图片失败', err);
              wx.hideLoading();
            }
          });
        },
        fail: function(err) {
          console.error('加载头像图片失败', err);
          wx.hideLoading();
        }
      });
    },

    // 上传媒体文件
    uploadMedia: function () {
      wx.chooseMedia({
        count: 1, // 允许选择的最大数量
        mediaType: ['image'], // 可以选择的媒体类型
        sourceType: ['album', 'camera'], // 选择图片的来源
        camera: 'back', // 默认使用后置摄像头
        success(res) {
          console.log(res);
          const filePath = res.tempFiles[0].tempFilePath; // 获取文件路径
          const cloudPath = 'test/' + Math.floor(Math.random() * 1000000); // 构造云存储路径，并保留文件扩展名

          wx.cloud.uploadFile({
            cloudPath: cloudPath,
            filePath: filePath, // 使用文件路径
            success: res => {
              // 输出上传后的文件ID
              console.log('111111', res.fileID);
            },
            fail: err => {
              // 处理上传失败
              console.error(err);
            }
          })
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