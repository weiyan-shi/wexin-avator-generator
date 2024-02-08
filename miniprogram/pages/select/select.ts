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

    combineImages: function (borderUrl: any, avatarUrl: any) {
      let that = this;
      const query = wx.createSelectorQuery();
      console.log('000000')
      query.select('#avatarCanvas')
        .fields({ node: true, size: true })
        .exec((res) => {
          if (res && res[0]) {
            const canvas = res[0].node;
            const ctx = canvas.getContext('2d');
            const dpr = wx.getSystemInfoSync().pixelRatio;
            canvas.width = res[0].width * dpr;
            canvas.height = res[0].height * dpr;
            ctx.scale(dpr, dpr);

            // 加载头像图片
            const avatarImage = canvas.createImage();
            avatarImage.onload = () => {
              ctx.drawImage(avatarImage, 0, 0, 128, 128);

              // 加载边框图片
              const borderImage = canvas.createImage();
              borderImage.onload = () => {
                ctx.drawImage(borderImage, 0, 0, 128, 128);
                // 使用新的方法来保存图片
                wx.canvasToTempFilePath({
                  canvas: canvas,
                  success: function (res) {
                    // 得到合成图片的临时路径
                    let tempFilePath = res.tempFilePath;
                    that.setData({
                      combinedImage: tempFilePath
                    });
                    wx.hideLoading();
                  },
                  fail: function (err) {
                    console.error(err);
                    wx.hideLoading();
                  }
                }, this);
              };
              borderImage.src = borderUrl;
            };
            avatarImage.src = avatarUrl;
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

    saveImageToAlbum: function () {
      const query = wx.createSelectorQuery();
      query.select('#avatarCanvas').fields({ node: true, size: true }).exec((res) => {
        const canvas = res[0].node;
        // 使用 canvas 实例的方法来导出画布内容
        wx.canvasToTempFilePath({
          canvas: canvas,
          fileType: 'png',
          success(res: any) {
            const tempFilePath = res.tempFilePath;
            // 下一步: 请求用户授权并保存图片
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
          fail(err: any) {
            console.error('导出画布失败', err);
          }
        });
      });
      // 假设你已经完成了画布的绘制
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