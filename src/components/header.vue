<template>
  <div class="header">
    <span>这个一个header头部</span>
    <span class="logout">退出登录</span>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
  .header {
    margin-top: 0px;
    height: 80px;
    top: 0px;
    background-color: bisque
  }
  .logout {
    float: right;
    padding-right: 20px;
    padding-top: 20px
  }
</style>
