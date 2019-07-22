<template>
  <div class="main">
    <headers></headers>
    <menus></menus>
    <bodys v-bind:name="name" v-bind:age="age"></bodys>
  </div>
</template>

<script>
import headers from './header.vue'
import bodys from './bodys'
import menus from './menu'

export default {
  name: 'mains',
  components: {
    headers,
    bodys,
    menus
  },
  data () {
    return {
      name: '张三',
      age: '18'
    }
  }
}
</script>

<style scoped>
</style>
