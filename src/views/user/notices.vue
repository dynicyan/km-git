<template lang="pug">
#km-notices
  h2 我的消息
  .notice-wrap
    .menuBar
      span.menuItem(v-for='menu, index in mentList' @click='changeNoticeTab(index)' :class="activeIndex === index ? 'menu_active' : ''") {{menu}}
    .notice-list(v-if='data')
      p 暂无数据
    ul.notice-list(v-if='activeIndex === 0')
      li(v-for='item in 6')
        .notice-top
          span.notice-avator
            img(src="../../assets/picTx.png")
          .notice-message
            span.nickName Kill'le
            span.pubtime 2018/04/01  14:00
            p.comments China Social Club's bringing two young Korean stars in Seoul's fast-rising underground
        .notice-bottom 回复您的评论： young Korean stars in Seoul's fast-rising underground  
    ul.notice-list(v-if='activeIndex === 1')
      li(v-for='item in 6')
        .notice-top
          span.notice-avator
            img(src="../../assets/picTx.png")
          .notice-message
            span.nickName Kill'le
            span.pubtime 2018/04/01  14:00
            p.comments China Social Club's bringing two young Korean stars in Seoul's fast-rising underground
</template>

<script>
  export default {
    name: 'km-user',
    data() {
      return {
        data: '',
        mentList: ['回复我的', '私信'],
        activeIndex: 0
      }
    },
    methods: {
      changeNoticeTab(index) {
        console.log(index)
        this.activeIndex = index
      }
    }
  }
</script>

<style lang='stylus'>
#km-notices
  background #fff
  box-shadow 0 2px 9px rgba(0, 0, 0, .15)
  width 99%
  margin 0 auto
  border-radius 5px
  overflow hidden
  text-align left
  h2
    line-height 110px
    font-size 36px
    padding-left 30px
    border-bottom 1px solid #d9d9d9
  .notice-wrap
    position relative
    padding 30px
    .menuBar
      position absolute
      left 0
      right 0
      margin 0 auto
      top -33px
      text-align center
      span.menuItem
        display inline-block
        width 150px
        height 33px
        line-height 33px
        margin 0 80px
        text-align center
        cursor pointer
        position relative
        &:first-child
          &:after
            content ''
            position absolute
            height 9px
            width 1px
            background #979797
            top 9px
            right -80px
        &.menu_active
          color #29ABE2
          border-bottom 3px solid #29ABE2
    .notice-list
      clear both
      li
        width 100%
        float left
        margin-bottom 20px
        box-shadow #E5E5EA 0 2px 5px
        border 1px solid #e0e0e0
        min-height 10px
        .notice-top
          padding 20px 35px
          position relative
          display flex
          .notice-avator
            height 35px
            width 35px
            border-radius 100%
            img
              width 100%
              height 100%
          .notice-message
            flex 1
            margin-left 10px
            .nickName
              float left
              margin-top 8px
              line-height 20px
              font-size 18px
              color #595959
            .pubtime
              float right
              height 22px
              font-size 16px
              color #8C8C8C
            .comments
              float left
              width 100%
              line-height 20px
              font-size 16px
              margin-top 20px
              color #171B31
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
        .notice-bottom
          border-top 1px solid #e0e0e0
          line-height 25px
          min-height 50px
          padding 10px 20px 10px 80px
          font-size 16px
          color #8c8c8c
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 2
          -webkit-box-orient vertical
</style>
