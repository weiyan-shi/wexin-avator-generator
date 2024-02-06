// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    // 输入参数：头像的URL和边框的URL
    const { avatarUrl, borderUrl } = event;

    try {
      // 加载头像图片
      const avatarBuffer = avatarUrl;
      // 加载边框图片
      const borderBuffer = borderUrl;
  
      // 使用sharp合成图片
      const combinedImage = await sharp(avatarBuffer)
        .composite([{ input: borderBuffer, gravity: 'centre' }])
        .toBuffer();

      // 返回合成图片的Buffer
      // 注意：实际操作中可能需要将合成后的图片上传到云存储，并返回URL
      return {
        success: true,
        buffer: combinedImage,
      };
    } catch (error) {
      console.error('Error combining images:', error);
      return { success: false, error: error.message };
    }
}