<template lang="pug">
#km-orderlist
  h2 我的清单
  .orderlist-wrap
    .menuBar
      span.menuItem(v-for='menu, index in mentList' @click='changelistTab(index)' v-bind:class="activeIndex === index ? 'menu_active' : ''") {{menu}}
    .address-list(v-if='data')
      p 暂无数据
    ul.address-list(v-if='activeIndex === 0')
      li(v-for='i in 3')
        .orderlist-top
          .ol-left
            p.comments China Social Club's bringing hina Social Club's bringing two young Koreatwo young Koreahina Social Club's bringing two young Koreahina Social Club's bringing two young Korean stars in Seoul's fast-rising underground
          .ol-right
            dl.piclists
              dt
              dd(v-for='item in 5')
                img(src='../../assets/goodsExp.png')
        .orderlist-bottom 官方已收到您的活动建议，敬请期待
    ul.address-list(v-if='activeIndex === 1')
      li(v-for='i in 3')
        .orderlist-top
          .ol-left
            span.order-title Kill'le
            p.comments China Social Club's bringing hina Social Club's bringing two young Koreatwo young Koreahina Social Club's bringing two young Koreahina Social Club's bringing two young Korean stars in Seoul's fast-rising underground
          .ol-right
            span.dateTime 2018/04/01  14:00
            dl.piclists
              dt
              dd(v-for='item in 5')
                img(src='../../assets/goodsExp.png')
        .orderlist-bottom 官方已上架您想要的商品，可进入
          a 查看购买
            i.el-icon-arrow-right
</template>

<script>
  export default {
    name: 'km-orderlist',
    data() {
      return {
        data: '',
        mentList: ['我想参加的活动', '我想买的东西'],
        activeIndex: 0
      }
    },
    methods: {
      changelistTab(index) {
        console.log(index)
        this.activeIndex = index
      }
    }
  }
</script>

<style lang='stylus'>
#km-orderlist
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
  .orderlist-wrap
    position relative
    float left
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
        &:after
          content ''
          position absolute
          height 9px
          width 1px
          background #979797
          top 9px
          right -80px
        &:last-child
          &:after
            content ''
            display none
        &.menu_active
          color #29ABE2
          border-bottom 3px solid #29ABE2
    .address-list
      clear both
      li
        width 100%
        float left
        margin-bottom 20px
        box-shadow #E5E5EA 0 2px 5px
        border 1px solid #e0e0e0
        position relative
        &:before
          content ''
          position absolute
          top -1px
          left -1px
          bottom 0
          border-left 4px solid #000
        .orderlist-bottom
          border-top 1px solid #e0e0e0
          line-height 28px
          padding 15px 20px
          font-size 16px
          color #595959
          overflow hidden
          a
            margin-left 10px
            font-weight bold
        .orderlist-top
          position relative
          left -1px
          padding 25px 20px
          overflow hidden
          display flex
          .ol-left
            flex 1
          .ol-right
            width 415px
          .order-title
            float left
            line-height 28px
            font-size 20px
            color #000
          .dateTime
            float right
            line-height 28px
            font-size 20px
            color #000
          .comments
            float left
            width 100%
            max-height 40px
            line-height 20px
            font-size 16px
            margin-top 20px
            color #8E8E93
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
          .piclists
            float left
            margin-top 20px
            dd
              float left
              width 68px
              height 68px
              border-radius 5px
              margin-left 15px
              img
                width 100%
                height 100%
</style>
