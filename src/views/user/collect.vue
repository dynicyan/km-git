<template lang="pug">
#km-collect
  h2 我的收藏
  .collect-wrap
    .menuBar
      span.menuItem(v-for='menu, index in mentList' @click='changeNoticeTab(index)' v-bind:class="activeIndex === index ? 'menu_active' : ''") {{menu}}
    .collect-list(v-if='data')
      p 暂无数据
    ul.collect-list(v-if='activeIndex === 0')
      li(v-for='item in 3')
        el-button.ci-cancel 取消收藏
        p.imgWrap
          img(src='../../assets/userAdpic.jpg')
        .collect-info
          p.ci-title New Peruvian Spot Ekeko Closes Abruptly文章
          p.ci-date 
            span 2018/04/29
          p.ci-detail After barely four months of operation, Peruvian restaurant Ekeko has closed. The announcement was made by chef Carlos Sotomayor on…
    ul.collect-list(v-if='activeIndex === 1')
      li(v-for='item in 3')
        el-button.ci-cancel 取消收藏
        p.imgWrap
          img(src='../../assets/userAdpic.jpg')
        .collect-info
          p.ci-title New Peruvian Spot Ekeko Closes Abruptly活动uvian Spot EkekEkeko Closes Abruptly活动uvian Spot Ekeko C
          p.ci-date 
            span 2018/04/29
          p.ci-detail After barely four months of operation, Peruvian restaurant Ekeko has closed. The announcement was made by chef Carlos Sotomayor on…ter barely four months of operation, Peruvian restaurant Ekeko has closed. The announcement was made by chef Carlos Sotomayor
    ul.collect-list(v-if='activeIndex === 2')
      li(v-for='item in 3')
        el-button.ci-cancel 取消收藏
        p.imgWrap
          img(src='../../assets/userAdpic.jpg')
        .collect-info
          p.ci-title New Peruvianbruptly商品
          p.ci-date 
            span 2018/04/29
          p.ci-detail After barely four months of operation
</template>

<script>
  export default {
    name: 'km-collect',
    data() {
      return {
        data: '',
        mentList: ['文章', '活动', '商品'],
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
#km-collect
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
  .collect-wrap
    position relative
    padding 10px
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
    .collect-list
      clear both
      display flex
      li
        flex 1
        padding 10px
        margin 20px
        width 33.3%
        float left
        box-shadow #E5E5EA 0 2px 5px
        border 1px solid #dcdcdc
        position relative
        .ci-cancel
          width 100px
          height 36px
          line-height 36px
          border-radius 0
          border 0 none
          position absolute
          top 10px
          right 0
          cursor pointer
          padding 0
          background rgba(#929292, 0.9)
          line-height 36px
          color #fff
          &:hover
            color #409EFF
            border 0 none
            background-color #ecf5ff
          &:focus
            border 0 none
        .imgWrap
          width 100%
          height 315px
          border 1px solid #979797
          img
            width 100%
            height 100%
        .collect-info
          width 100%
          .ci-title
            margin-top 10px
            height 60px
            line-height 30px
            font-size 20px
            color #000
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
          .ci-date
            margin 10px 0
            line-height 30px
            font-size 16px
            font-weight 500
            color #BFBFBF
            span
              position relative
              display inline-block
              &:after
                content ''
                height 30px
                width 30px
                position absolute
                top 0
                right -45px
                background url(../../assets/km-food.svg)
                background-size cover
          .ci-detail
            height 88px
            line-height 22px
            font-size 16px
            color #8c8c8c
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 4
            -webkit-box-orient vertical
</style>
