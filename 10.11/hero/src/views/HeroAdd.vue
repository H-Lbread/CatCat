<template>
  <div class="hero-add">
    <legend>添加英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input v-model.trim="heroName" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input name="gender" value="男" v-model="gender" type="radio"> 男
        <input name="gender" value="女" v-model="gender" type="radio"> 女
      </div>
    </div>
    <button @click="add" class="btn btn-primary">添加</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      heroName: '',
      gender: '男'
    }
  },
  methods: {
    add () {
      if (this.heroName === '') return
      this.$axios.post('/heroes', {
        heroName: this.heroName,
        gender: this.gender,
        cTime: +new Date()
      }).then(res => {
        this.$router.push('/hero')
      })
    }
  }
}
</script>

<style>

</style>
