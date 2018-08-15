<template lang="pug">
  #km-header
    .searchArea
      el-input(placeholder="请输入内容" v-model="input" class="input-with-select")
        el-select(v-model="select" slot="prepend" placeholder="请选择")
          el-option(label="餐厅名" value="1")
          el-option(label="订单号" value="2")
          el-option(label="用户电话" value="3")
        el-button(slot="append" icon="el-icon-search")
</template>

<script>
import img_404 from '@/assets/404_images/404.png'
import img_404_cloud from '@/assets/404_images/404_cloud.png'

export default {
  name: 'AppHeader',
  data() {
    return {
      img_404,
      img_404_cloud,
      input: '',
      select: '餐厅名'
    }
  },
  computed: {
    message() {
      return '网管说这个页面你不能进......'
    }
  }
}
</script>

<style lang="stylus" scoped>
#km-header
  height 218px
  background #384e69
  .searchArea
    width 1200px
    margin 0 auto
    padding-top 100px
    .el-input-group__prepend div.el-select .el-input__inner
      width 100px
</style>
