<template>
  <div class="main">
    <headers></headers>
    <menus></menus>
    <bodys></bodys>
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
  }
}
</script>

<style scoped>
</style>
