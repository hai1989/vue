<template>
  <div>
    <p>{{ msg }}</p>
    <div>
      <div>
        <label for="userNamevalue">用户名：</label>
        <input type="text" name="userNamevalue" id="userNamevalue" placeholder="用户名" v-model="usernameV">
      </div>
      <div>
        <label for="passwordvalue">密    码：</label>
        <input type="password" name="passwordvalue" id="passwordvalue" placeholder="密码" v-model="passwordV">
      </div>
      <div>
        <!-- <input type="button" value="登录"  v-on:click="getLogin()"> -->
        <input type="button" value="登录"  v-on:click="postFormLogin()">
        <!-- <input type="button" value="登录"  v-on:click="postJsonGetAllByPage()"> -->
        <span>{{ loginTip }}</span>
      </div>
    </div>
     <div>
    <table border="20px">
      <thead>
        <th>序号</th>
        <th>姓名</th>
        <th>密码</th>
        <th>创建时间</th>
      </thead>
      <tbody>
        <tr v-for="(data,index) in table_data" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ data.userName }}</td>
          <td>{{ data.password }}</td>
          <td>{{ data.createTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  name: 'test5',
  data () {
    return {
      msg: '用户登录',
      usernameV: null,
      passwordV: null,
      loginTip: null,
      table_data: []
    }
  },
  created () {
    // this.getLogin()
    this.postJsonGetAllByPage()
    // this.postFormLogin()
  },
  methods: {
    getLogin () {
      // console.log(this.msg1)
      axios.get('http://localhost:8083/user/login', {
        params: {
          userName: this.usernameV,
          password: this.passwordV
        }
      })
        .then(function (response) {
          console.log(response)
          console.log('data----')
          console.log(response.data)
          console.log('status----')
          console.log(response.status)
          console.log('statusText----')
          console.log(response.statusText)
          console.log('data+data----')
          console.log(response.data.data)
          console.log('config----')
          console.log(response.config)
          console.log('header----')
          console.log(response.headers)
          console.log('login tip::::')
          console.log(response.data.message)
          if (response.data.message === 'success') {
            console.log('登录成功了')
          } else {
            console.log('登录失败了')
          }
        })
    },
    postFormLogin () {
      let data = {
        'userName': this.usernameV,
        'password': this.passwordV
      }
      axios.post('http://localhost:8083/user/login', Qs.stringify(data),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
      )
        .then(function (response) {
          console.log(response)
          console.log('data----')
          console.log(response.data)
          console.log('status----')
          console.log(response.status)
          console.log('statusText----')
          console.log(response.statusText)
          console.log('data+data----')
          console.log(response.data.data)
          console.log('config----')
          console.log(response.config)
          console.log('header----')
          console.log(response.headers)
          console.log('login tip::::')
          console.log(response.data.message)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    postJsonGetAllByPage () {
      const table = this.table_data
      console.log(table)
      axios.post('http://localhost:8083/user/getAllByPage', {
        // params: {
        order: 1,
        offset: 0,
        limit: 10,
        size: 20,
        current: 2
        // }
      })
        .then(function (response) {
          console.log('data----')
          console.log(response.data)
          const data = response.data.rows
          data.forEach(element => {
            table.push(element)
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  input {
    margin:  20px;
  }
  table {
    margin-left: 40%;
  }
</style>
