<template>
  <div class="hero-add">
    <legend>编辑英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" class="form-control" v-model="heroObj.heroName"/>
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input name="gender" type="radio" value="男" v-model="heroObj.gender"> 男
        <input name="gender" type="radio" value="女" v-model="heroObj.gender"> 女
      </div>
    </div>
    <button @click="edit" class="btn btn-primary">编辑</button>
  </div>
</template>

<script>
// 编辑页:
// 1. 需要先发送ajax请求, 拿到当前id英雄的原始数据 get
//    将原始数据渲染到页面
// 2. 注册点击事件, 完成修改
export default {
  created () {
    const id = this.$route.params.id
    this.$axios.get(`/heroes/${id}`).then(res => {
      // console.log(res.data)
      this.heroObj = res.data
      console.log(this.heroObj)
    })
  },
  data () {
    return {
      heroObj: {
        id: '',
        heroName: '',
        gender: '男',
        cTime: ''
      }
    }
  },
  methods: {
    edit () {
      if (this.heroObj.heroName === '') return
      // 获取id
      const id = this.$route.params.id
      // 发送修改的请求, put
      this.$axios.put(`/heroes/${id}`, this.heroObj).then(res => {
        // console.log(res.data)
        // 跳转路由, 跳转列表页
        this.$router.push('/hero')
      })
    }
  }
}
</script>
