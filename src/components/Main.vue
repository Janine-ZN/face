<template>
  <div>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content">
              <img src="" alt="">
            </div>
          </el-col>
          <el-col :span="8">
            <el-menu
              :default-active="activeIndex"
              mode="horizontal"
              class="el-menu-ul"
              @select="handleSelect"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="video-preview">
                <router-link :to="{ name: 'video-preview'}">视频预览</router-link>
              </el-menu-item>
              <el-menu-item index="face-capture">
                <router-link :to="{ name: 'face-capture'}">人脸抓拍</router-link>
              </el-menu-item>
              <el-menu-item index="face-libs-configs">
                <router-link :to="{ name: 'face-libs-configs'}">人脸库配置</router-link>
              </el-menu-item>
              <el-menu-item index="system-setting">
                <router-link :to="{ name: 'system-setting'}">系统配置</router-link>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-input></el-input>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!-- 路由插槽 -->
        <router-view></router-view>
      </el-main>
      <el-footer>©2017 VRVIEW 版权所有 寰景信息技术有限公司 皖ICP备14001780号
        <br>电话: +86-551-65319388; +86-551-65370504; 传真: +86-551-65359164; 地址:安徽省合肥市黄山路616号(230088)
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "video-preview",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 导入基本样式
@import "@/common/style/base.scss";

// 容器
.el-container {
  height: 100%;
  min-height: 100%;
  position: relative; // 子绝父相
}

// 头部
.el-header {
  background: linear-gradient(to right, $main_color, $secondary_color);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-menu-ul {
  background-color: transparent
}

// 主体
.el-main {
  height: 100%;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding-bottom: 60px;
}

// 底部
.el-footer {
  // 1. 宽高
  width: 100%;
  height: 60px; /* footer的高度一定要是固定值*/
  position: absolute;
  left: 0;
  bottom: 0;
  // 3. 边距
  padding: 16px 0; // 使文字上下垂直居中
  // 4. 字体样式
  font-size: $font_size_12;
  text-align: center; // 使文字水平居中
  color: $font_secondary_color;
  // 5.背景
  background-color: #b3c0d1;
}
</style>
