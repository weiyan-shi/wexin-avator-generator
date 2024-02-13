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
    chooseBorder: function (borderStyle: string) {
      type BorderData = {
        [key: string]: string[];
      };
      const jsonData: BorderData = {
        "border/1": [
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/1/garrisonchloen5973_empty_center_1157246d-1001-4ef3-b8bd-4ea5fb4ac6cc_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/1/garrisonchloen5973_golden_full_of_circle_red_full_of_circle_a_C_dd63f604-519b-4940-821f-a76520454834_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/1/garrisonchloen5973_red_full_of_circle_a_Chinese_dragon_frame_no_0b42305c-3b34-45f6-994b-8b4751f1899b_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/1/garrisonchloen5973_red_full_of_dragon_body_2ef23f27-6604-433a-a8bb-b5025fd064a6_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/1/garrisonchloen5973_troditional_dragon_frame_same_size_avarta_bo_631bc897-7628-4e2e-8347-440de9a2c6f0_no_background.png"
        ],
        "border/2": [
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/27ff51ae-7375-402c-ae75-e84948a8180a_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/garrisonchloen5973_cartoon_Chinese_dragon_frame_083138c8-2303-4b04-9207-dc8839ad9b4e_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/garrisonchloen5973_cartoon_Chinese_dragon_frame_12077d30-1f44-4164-b1d0-5e35578e42e9_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/garrisonchloen5973_cartoon_Chinese_dragon_frame_652fe9bb-fb6b-491b-bb1e-96d1f18135d7_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/garrisonchloen5973_cartoon_Chinese_dragon_frame_76909f78-e0ca-43f7-8f86-f9f9ffd350bf_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/garrisonchloen5973_cartoon_Chinese_dragon_frame_76909f78-e0ca-43f7-8f86-f9f9ffd350bf_no_background_no_background_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/garrisonchloen5973_cartoon_Chinese_dragon_frame_c251e082-6725-4784-a55d-544b52d2e013_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/garrisonchloen5973_cartoon_Chinese_dragon_frame_e8196b2e-f21e-4c29-973f-21dff9dd4de6_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/garrisonchloen5973_cartoon_dragon_frame_c8972fcf-5615-4ae3-8244-c4ff66610184_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/2/garrisonchloen5973_no_buildings_no_design_in_circle_no_green_84e62bf1-67d8-4282-873b-4889320fa074_no_background.png"
        ],
        "border/3": [
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/3/garrisonchloen5973_add_some_red_1a7c4e7a-a141-4a5c-83ab-7ccca14667b3_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5003243-1324122215/border/3/garrisonchloen5973_add_some_red_2ef732d5-efd0-4e4d-a520-e183c39aa085_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/3/garrisonchloen5973_add_some_red_7a5f8967-8ba3-49b6-ae55-78cc840a6530_no_background_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/3/garrisonchloen5973_add_some_red_9d9710c2-9f04-4066-8143-51a49386767c_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/3/garrisonchloen5973_add_some_red_a20998c3-140b-4d10-bda3-7ac44eb14fb1_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/3/garrisonchloen5973_add_some_red_a4376b98-7ff8-474a-9399-0412406e20bc_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/3/garrisonchloen5973_add_some_red_b741582a-fd3c-448a-9058-b459523a91ba_no_background_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/3/garrisonchloen5973_add_some_red_d3f1148f-a8a5-41cc-a31c-bdaf2ee4a098_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/3/garrisonchloen5973_add_some_red_d3f1148f-a8a5-41cc-a31c-bdaf2ee4a098_no_background_no_background_no_background.png",
          "cloud://cloud1-2ge2tu77e5063243.636c-cloud1-2ge2tu77e5063243-1324122215/border/3/garrisonchloen5973_add_some_red_ec14a766-1a13-479f-a57b-f03b6c289911_no_background.png"
        ]
      }; // 使用上面定义的 JSON 数据替换此处
      const borderPath = 'border/' + borderStyle; // 或 'border/2', 'border/3'
      const files = jsonData[borderPath];
      if (!files || files.length === 0) {
        console.error('No files found for the given path.');
        return;
      }
      const randomIndex = Math.floor(Math.random() * files.length);
      const randomFileId = files[randomIndex];
      return randomFileId
    },

    addBorder: function () {
      let that = this;
      wx.showLoading({
        icon: 'loading',
        title: '加载中，请稍后',
      })

      const borderStyle = this.data.selectedBorder; // 边框样式
      const fileId = this.chooseBorder(borderStyle) || '';
      wx.cloud.getTempFileURL({
        fileList: [
          fileId
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
      this.addBorder();
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
      this.addBorder();
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