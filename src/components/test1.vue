<template>
  <div id='test1_div'>
    <p>{{ msg }}</p>
    <span v-bind:title='msg1'>鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
    <p v-if="true">{{ msg4 }}</p>
    <p v-if="false">{{ msg4 }}</p>
    <p>{{ msg6}}</p>
    <p>{{ msg7}}</p>
    <p>msg7内容：{{ msg7.message}},编码：{{ msg7.code}}</p>
    <a v-bind:href='url'>百度</a>
    <a :href="url">百度1</a>
    <p>正序：{{ msg }}</p>
    <p>倒叙：{{ reverseMsg }}</p>
    <p>{{ msg2 }} + {{ msg3 }} = {{ add }}</p>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
    return {
      msg: '你好啊',
      msg1: '页面加载于 ' + new Date().toLocaleString(),
      msg2: 32423,
      msg3: 11111,
      msg4: true,
      msg5: [],
      msg6: [1, 3, 5, 'aaa'],
      msg7: {
        code: 200,
        message: 'success'
      },
      url: 'https://www.baidu.com'
    }
  },
  computed: {
    reverseMsg: function () {
      return this.msg.split('').reverse().join('')
    },
    add () {
      return this.msg2 + this.msg3
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 20px;
    color:rebeccapurple;
    text-align: center
  }
</style>
