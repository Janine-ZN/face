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
$w200: 200px;
$height: 100px;
.test {
  width: $w200;
  color: $main_color;
}
</style>

