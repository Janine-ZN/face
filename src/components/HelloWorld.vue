<template>
  <div class="hello">
    <router-link to="/HelloWorld/nav1">去第一个页面</router-link>
    <router-link to="/HelloWorld/nav2">去第二个页面</router-link>
    <router-link to="/HelloWorld/nav3">去第三个页面</router-link>
    <!-- 路由插槽 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  float: left;
  width: 100px;
}
</style>
