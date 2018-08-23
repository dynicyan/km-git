<template lang="pug">
  #shopDetail-box
    .shopDetai-left
      .title
        | Theahda ahudha
        img(src="../../assets/canting.svg")
      .share
        span 分享到
        img.icon-twitter(src="../../assets/detail1.svg")
        img.icon-facebook(src="../../assets/detail2.svg")
        img.icon-weibo(src="../../assets/detail3.svg")
        img.icon-weixin(src="../../assets/detail4.svg")
    .shopDetai-right
</template>


<script>
</script>

<style lang="stylus">
  #shopDetail-box
    display flex
    .shopDetai-left
      margin-top 20px
      width 915px
      margin-right 20px
      background-color #ffffff
      box-shadow 0 2px 9px 0 rgba(0, 0, 0, 0.14)
      padding 39px 33px 48px
      .title
        font-family Oswald
        font-size 36px
        font-weight bold
        line-height 48px
        letter-spacing 1px
        text-align left
        color #000000
    .shopDetail-right
      flex 1
</style>