<template>
  <div>
    <div class="face-rep">
      <div class="face-rep-font">
        <span class="face-rep-title">系统菜单</span>
      </div>
      <div class="various_libs">
        <ul>
          <li v-for="(menu,index) in systemMenus" :key="index">
            {{ menu.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      systemMenus: [
        { title: "测试库" },
        { title: "黑名单" },
        { title: "领导人员库" },
        { title: "普通员工" }
      ]
    };
  }
};
</script>
