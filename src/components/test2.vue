<template>
  <div>
    <p>{{ msg }}</p>
    <p v-if="result">这是一个服务器的正确返回</p>
    <p v-else>这是一个服务器的错误返回</p>

    <p v-if="num === 0">num等于0</p>
    <p v-else-if="num >1 && num < 10">num 大于1 小于 10</p>
    <p v-else>num  大于等于10</p>

    <p v-show="result">是否展示</p>

    <ul>
      <li v-for="li in li_data" :key="li">{{ li }}</li>
    </ul>

    <p v-for="(tr,index) in table_data" :key="index">{{ tr }}</p>

    <table border="10px">
      <thead>
        <tr>
          <th>序号：</th>
          <th>姓名：</th>
          <th>年龄：</th>
          <th>是否是学生：</th>
          <th>个人链接：</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tr,index) in table_data" :key="index">
           <td>{{ index + 1 }}</td>
           <td>{{ tr.names }}</td>
           <td>{{ tr.age }}</td>
           <td v-if="tr.isstu">是学生</td>
           <td v-else>不是学生</td>
           <td><a v-bind:href="tr.url">{{ tr.url }}</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data () {
    return {
      msg: 'test2',
      result: false,
      name2: 12432,
      num: 0,
      li_data: [
        1,
        3,
        4,
        'afds',
        true
      ],
      table_data: [
        {names: '张三', age: 18, isstu: true, url: 'http://www.baidu.com'},
        {names: '李四', age: 28, isstu: false, url: 'http://www.163.com'},
        {names: '王五', age: 38, isstu: true, url: 'http://www.sina.com'},
        {names: '张红1', age: 48, isstu: false, url: 'http://www.sohu.com'},
        {names: '小明', age: 58, isstu: true, url: 'http://www.baidu.com'}
      ]
    }
  }
}
</script>

<style scoped>
  table {
    margin-left: 35%;
    margin-top: 3%;
  }
</style>
