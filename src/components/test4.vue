<template>
  <div>
    <p>{{ msg }}</p>
    <div>
      <button v-on:click="counter += 1">点我点我</button>
      <p >countter ===> {{ counter }}</p>
    </div>
    <div>
      <input type="text" name="name" id="name" v-model="username" placeholder="用户名">
      <input type="password" name="pwd" id="wd" v-model="passwd" placeholder="密码">
      <input type="text" name="address" id="address" v-model="address" placeholder="地址" >
      <input type="button" value="提交" v-on:click="add('message')">
    </div>
    <table border="10px">
      <thead>
        <tr>
          <th>id</th>
          <th>姓名</th>
          <th>密码</th>
          <th>地址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data,index) in table_data" :key="index">
          <td>{{ index }}</td>
          <td>{{ data.username }}</td>
          <td>{{ data.paswd }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'test4',
  data () {
    return {
      msg: 'This is test4 !',
      counter: 1,
      username: null,
      passwd: null,
      address: null,
      table_data: [],
      add_data: null
    }
  },
  methods: {
    add (message) {
      console.log(message)
      if (this.username !== null && this.username !== '') {
        this.add_data = {
          username: this.username,
          passwd: this.passwd,
          address: this.address
        }
        this.table_data.push(this.add_data)
      }
      console.log(this.add_data)
      this.username = null
      this.passwd = null
      this.address = null
    }
  }
}
</script>

<style scoped>

</style>
