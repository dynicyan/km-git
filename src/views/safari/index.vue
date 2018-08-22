<template lang="pug">
#km-safari
  .menuBar
    span.menuItem(v-for='menu, index in menuList' @click='changeSafariTab(index)' v-bind:class="activeIndex === index ? 'menu_active' : ''") {{menu}}
  ul.safari-list(v-if='activeIndex === 0')
    li(v-for='i in 8')
      .safariImg
        img(src='../../assets/userAdpic.jpg')
      .safariInfo
        p.safariTitle 推荐Alter. continues it's summer daze with a DJ lineup
        p.safariComments
          i.icon-good 11
          i.icon-commentsNum 22
          span.safariTime 2018/04/29 14:00
      p.safariAvator
        span.savator
          img(src='../../assets/404_images/404.png')
        span.snick asdhasd
  ul.safari-list(v-if='activeIndex === 1')
    li(v-for='i in 8')
      .safariImg
        img(src='../../assets/userAdpic.jpg')
      .safariInfo
        p.safariTitle 最新Alter. continues it's summer daze with a DJ lineup最新Alter. continues it's summer daze with a DJ lineup最新Alter. continues it's summer daze with a DJ lineup最新Alter. continues it's summer daze with a DJ lineup
        p.safariComments
          i.icon-good 11
          i.icon-commentsNum 22
          span.safariTime 2018/04/29 14:00
      p.safariAvator
        span.savator
          img(src='../../assets/404_images/404.png')
        span.snick asdhasd
  el-button.moreData 加载更多
    i.el-icon-arrow-down
  router-link(to='/safari/public') 发布safari
</template>

<script>
  export default {
    name: 'km-safari',
    data() {
      return {
        menuList: ['推荐', '最新'],
        activeIndex: 0
      }
    },
    methods: {
      changeSafariTab(index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang='stylus'>
#km-safari
  padding 25px 14px
  background #fff
  text-align left
  .menuBar
      text-align center
      span.menuItem
        display inline-block
        height 40px
        line-height 40px
        width 100px
        text-align center
        cursor pointer
        position relative
        font-size 20px
        color #000
        font-weight 500
        &:first-child
          &:before
            content ''
            position absolute
            height 10px
            width 2px
            background #000
            top 50%
            transform translateY(-50%)
            right 0
        &.menu_active
          line-height 36px
          font-size 28px
          color #29ABE2
  .safari-list
    clear both
    display flex
    flex-direction row
    flex-wrap wrap
    li
      float left
      width 270px
      margin 11px
      border 1px solid #c6c6c6
      &:hover
        border-color #29ABE2
        box-shadow rgba(#29ABE2, 0.5) 0 1px 6px
      .safariImg
        position relative
        width 100%
        height 210px
        img
          position absolute
          top 50%
          left 50%
          max-width 100%
          max-height 100%
          transform translate(-50%, -50%)
          width auto
          height auto
      .safariInfo
        padding 5px 15px 10px
        overflow hidden
      .safariTitle
        display block
        height 50px
        line-height 25px
        color #000
        font-size 16px
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
      .safariComments
          float left
          width 100%
          margin-top 10px
          line-height 14px
          i
            float left
            line-height 14px
            margin-right 25px
            padding-left 18px
            color #8E8E93
            font-size 12px
          .icon-good
            background url('../../assets/gestureGood.svg') no-repeat left center
            background-size 12px 12x
          .icon-commentsNum
            background url('../../assets/icon_comment.svg') no-repeat left center
            background-size 12px 12x
          .safariTime
            float right
            font-size 12px
            color #8E8E93
      .safariAvator
          float left
          width 100%
          padding 10px 15px
          border-top 1px solid #e8e8e8
          span
            float left
          .savator
            width 34px
            height 34px
            border-radius 100%
            border 1px solid #979797
            position relative
            img
              max-width: 100%
              max-height: 100%
              width auto
              height auto
              position absolute
              top 50%
              left 0
              right 0
              transform translateY(-50%)
              margin 0 auto
          .snick
            margin-left 15px
            line-height 34px
            font-size 18px
            color #171B31
  .moreData
    width 100%
    line-height 60px
    padding 0
    margin-top 5px
    background-image linear-gradient(45deg, #29ABE2, #53D5F3)
    font-size 18px
    font-weight bold
    border 0 none
    color #fff
    &:active
      border 0 none
</style>
