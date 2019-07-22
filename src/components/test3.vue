<template>
  <div>
    <p>{{ msg }}</p>
    <p v-bind:class="{active: isactive,hasError: isError}">{{ msg }}</p>
    <span v-bind:class="[active,hasError]">aaaa</span>
    <p v-bind:style="{fontSize:fontSize+'px'} ">修改style</p>
    <input type="text" name='names' id="names" v-model="inputvalue" placeholder='姓名'><br>
    <textarea name="areas" id="areas" cols="30" rows="3" v-model="textareaValue" placeholder="备注："></textarea>
    <table border="10px">
       <thead>
         <tr>
           <th>input内容</th>
           <th>textarea内容</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td v-if="inputvalue != null && inputvalue !== '' ">{{ inputvalue }}</td>
           <td v-else>暂无数据</td>
           <td v-if="textareaValue != null && textareaValue !== ''">{{ textareaValue }}</td>
           <td v-else>暂无数据</td>
         </tr>
       </tbody>
    </table>
    <br>
    <br>
    <label for="checkbox">去哪里旅游呢？</label>
    <input type="checkbox" name="insy" id="checkbox" value='1' v-model="boxvalue">北京
    <input type="checkbox" name="insy" id="checkbox" value='2' v-model="boxvalue">上海
    <input type="checkbox" name="insy" id="checkbox" value='3' v-model="boxvalue">海口
    <p>去 {{ boxvalue}} 旅游挺好的</p>
    <br>
    <br>
    <label for="sex">性别</label>
    <input type="radio" name="sex" id="sex" value='man' checked v-model="radiovalue">男
    <input type="radio" name="sex" id="sex" value='woman' v-model="radiovalue">女
    <p>性别： {{ radiovalue }}</p>
    <br>
    <br>
    <select name="course" id="course" v-model="selectValue" placeholder="请选择">
      <option value="数学">数学</option>
      <option value="英语">英语</option>
      <option value="语文">语文</option>
    </select>
    <p>我选择了以下课程</p>
    <ul>
      <li v-for="course in selectValue" :key="course">{{ course }}</li>
    </ul>
    <input type="button" value="这是一个按钮">
    <br>
    <div v-for="(list,index) in listData" :key="index">
      {{ index }}
      <test4></test4>
    </div>
  </div>
</template>

<script>
import test4 from './test4'
export default {
  name: 'test3',
  components: {
    test4
  },
  data () {
    return {
      msg: 'test3',
      isactive: true,
      isError: true,
      active: 'active',
      hasError: 'hasError',
      activeColor: 'blue',
      fontSize: 10,
      inputvalue: null,
      textareaValue: null,
      boxvalue: [],
      radiovalue: null,
      selectValue: [],
      listData: [
        1,
        2,
        3,
        4
      ]
    }
  }
}
</script>

<style scoped>
  .active {
    color:red;
  }
  .hasError {
    font-size: 20px;
  }
  .active1 {
    font-size: 20px;
  }
  .active2 {
    font-size: 20px;
  }
  .margin {
    margin: 20px;
  }
</style>
