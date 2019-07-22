<template>
  <div class="bodys">
    <span>body</span>
    <div>
      <p>我的名字是：{{ name }}</p>
      <p>我的年龄是：{{ age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bodys',
  data () {
    return {
      msg: 'bodys11!!!!'
    }
  },
  props: {
    name: String,
    age: [Number, String]
  }
}
</script>

<style scoped>
  .bodys {
    float: right;
    width: 80%;
    height: 800px;
    background-color:cadetblue
  }
</style>
