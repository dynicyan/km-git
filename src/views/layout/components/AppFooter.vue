<template lang="pug">
  #km-footer
    ul.cplist
      li 
        router-link(to='/home') 关于Orient KM
      li 
        router-link(to='/home') 联系我们
      li 
        router-link(to='/home') 愿望清单
      li 
        router-link(to='/home') 常见问题
      li 
        router-link(to='/home') 隐私
</template>

<script>
import img_404 from '@/assets/404_images/404.png'
import img_404_cloud from '@/assets/404_images/404_cloud.png'
export default {
  name: 'AppFooter',
  data() {
    return {
      img_404,
      img_404_cloud
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
#km-footer
  min-height 200px
  background-image linear-gradient(to right, rgba(9, 9, 9, 1), rgba(10, 10, 10, 0.95) 53%, rgba(15, 15, 15, 0.9))
  .cplist
    width 600px
    margin 0 auto
    padding-top 90px
    li
      float left
      height 20px
      line-height 20px
      padding 0 30px
      font-size 14px
      color #fff
</style>
