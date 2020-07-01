<template>
  <div>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content">
              <img src="../assets/imgs/vr.png" alt height="30%" />
              <img src="../assets/imgs/view.png" alt height="25%" />
            </div>
          </el-col>
          <el-col :span="16">
            <el-menu
              :default-active="activeIndex"
              mode="horizontal"
              class="el-menu-ul"
              active-text-color="#fff"
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
          <el-col :span="4">
            <div class="logout"></div>
            <span class="logout-content">
              <span class="logout-admin">
                <img src="../assets/imgs/user.png" alt />
                <span>admin</span>
              </span>
              <img src="../assets/imgs/exit.png" alt />
            </span>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!-- 路由插槽 -->
        <router-view></router-view>
      </el-main>
      <el-footer>
        ©2017 VRVIEW 版权所有 寰景信息技术有限公司 皖ICP备14001780号
        <br />电话: +86-551-65319388; +86-551-65370504; 传真: +86-551-65359164; 地址:安徽省合肥市黄山路616号(230088)
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "video-preview"
    };
  }
};
</script>

<style lang="scss" scoped>
// 容器
.el-container {
  height: 100%;
  min-height: 100%;
  position: relative; // 子绝父相
}

// 头部
.el-header {
  background: linear-gradient(to right, $main_color, $secondary_color);
  text-align: center;
  line-height: 60px;
  .grid-content {
    height: 60px;
    line-height: 60px;
    display: -webkit-flex; /* Safari */
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.el-menu-ul {
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  border: none;
  li {
    color: #eee;
    padding: 0px 0px;
    &:hover {
      color: $my_main_color !important;
      background-color: transparent !important;
    }
  }
  a {
    display: inline-block;
    padding: 0px 20px;
    text-decoration: none;
  }
}

.is-active {
  background-color: transparent !important;
  // 选中的时候有下划线，但是从 A 菜单到 B 菜单这个下划线有一个动画效果（从 A 过渡到 B）Question
}

// 主体
.el-main {
  height: 100%;
  /*text-align: center;
  line-height: 160px;
  padding-bottom: 60px; */
  min-height: 600px;
  background: url("../assets/imgs/bg.png") no-repeat;
}

// 底部
.el-footer {
  // 1. 宽高
  width: 100%;
  height: 60px; /* footer的高度一定要是固定值*/
  // 3. 边距
  padding: 16px 0; // 使文字上下垂直居中
  // 4. 字体样式
  font-size: 12px;
  text-align: center; // 使文字水平居中
  color: $font_secondary_color;
  // 5.背景
  background-color: #b3c0d1;
}
</style>
