<template lang="pug">
  #km-header
    .imgHeader
      img(src='../../../assets/exp.png')
      .seeAdInfo
        a 
          i.el-icon-arrow-down
          | 查看广告详情
    .searchArea
      .searchInput
        el-input(placeholder="请输入内容" v-model="input" class="input-with-select")
          el-select(v-model="select" slot="prepend" placeholder="请选择")
            el-option(label="活动" value="1")
            el-option(label="文章" value="2")
            el-option(label="店铺" value="3")
            el-option(label="商品" value="4")
          el-button(slot="append" icon="el-icon-search")
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      input: '',
      select: '1'
    }
  },
  computed: {
    message() {
      return '网管说这个页面你不能进......'
    }
  }
}
</script>

<style lang="stylus">
#km-header
  margin 0 auto
  background #014266
  .imgHeader
    position relative
    img
      width 100%
      height auto
      max-width 1920px
    &:after
        content: ''
        display block
        top -5px
        position relative
        height 30px
        background rgba(0,0,0,0.5)
        z-index 10
    .seeAdInfo
      max-width 1200px
      width 100%
      height 30px
      position absolute
      bottom 4px
      left 0
      right 0
      margin 0 auto
      z-index 11
      a
        i
          width 22px
          height 22px
          line-height 22px
          margin 4px 5px
          float left
          border-radius 100%
          border 1px solid #e0e0e0
        float right
        color #e0e0e0
        font-size 14px
        line-height 30px
  .searchArea
    position relative
    top -5px
    background rgba(0,0,0,0.65)
    .searchInput
      width 1200px
      margin 0 auto
      position relative
      &:before
      &:after
        content: ''
        position absolute
        z-index 0
      &:before
        left 0
        width 273px
        height 92px
        background url('../../../assets/icon_search.png')
        background-size contain
      &:after
        right 0
        width 201px
        height 86px
        background url('../../../assets/worldCup_logo.png')
        background-size contain
      .input-with-select
        width 735px
        height 50px
        border-radius 5px
        margin 25px auto
        .el-input-group__prepend
          width 100px
          text-align center
          background #fff
        .el-select
          width 73px
          height 34px
          background-image linear-gradient(45deg, #eee, #d8d8d8)
          border-radius 3px
          .el-input__suffix
            width 25px
            color #595959
            .el-select__caret
              position absolute
              top 2px 
              left 0
              color #595959
              transition width .1s
              &.is-reverse
                top -4px
            .el-icon-arrow-up:before
              content: "\E60C"
        .el-input__inner
          height 50px
          line-height 50px
        .el-input-group__append
          width 63px
          background #29ABE2
          color #fff
          font-size 18px
          border 0 none
      .el-input-group__prepend div.el-select .el-input__inner
        width 80px
        height 34px
        line-height 34px
        color #595959
        font-weight 500
        padding-left 8px
</style>
