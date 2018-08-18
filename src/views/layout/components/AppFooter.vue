<template lang="pug">
  #km-footer
    .footerWrap
      ul.cplist
        i.icon-footerIcon
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
      p.copyright 2018 | 本网站发布的所有材料均为Orient KM .com的版权，未经许可，不得以任何形式复制，转载或复制。谢谢阅读。
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
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
  background-image linear-gradient(to right, #262626, #333 53%, rgba(15, 15, 15, 0.9))
  .copyright
    padding-left 80px
    text-align left
    line-height 24px
    margin-top 20px
    color #BFBFBF
    font-size 12px
  .footerWrap
    width 800px
    margin 0 auto
  .cplist
    width 700px
    margin 0 auto
    padding-top 55px
    overflow: hidden
    .icon-footerIcon
      float left
      width 48px
      height 48px
      background url('../../../assets/footerIcon.svg') no-repeat left center
      background-size contain
    li
      float left
      position relative
      height 48px
      line-height 48px
      padding 0 35px
      font-size 14px
      color #fff
      &:last-child
        &:after
          display none
      &:after
        content: ''
        position absolute
        height 20px
        width 1px
        background #8a8a8a
        top 50%
        margin-top -10px
        right 0
</style>
