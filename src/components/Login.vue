<template>
  <!-- 登录：路由守卫 -->
  <div class="test">
    <button @click="HandleLogin">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    HandleLogin: function() {
      console.log("safdsfds");
      // 编导式路由
      this.$router.push({ name: "video-preview" });
    }
  }
};
</script>
<style lang="scss" scoped>
// 导入基本样式
// @import "@/common/style/base.scss";
$w200: 200px;
$height: 100px;
.test {
  width: $w200;
  // height:$height;
  color: $main_color;
}
</style>

