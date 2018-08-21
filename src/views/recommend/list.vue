<template lang="pug">
  #recommend-box
    .km-swiper
      el-carousel(:autoplay = 'false' height='504px' arrow="never")
        el-carousel-item(v-for="item in slideItems" :key="item")
          h3 this is {{ item }}
    .recommend-content
      .content-left
        .nav-top.clearfix
          el-tabs(type="border-card" v-model="activeTab")
            el-tab-pane(name="1")
              span(slot="label") 
                img(src="../../assets/commend.svg")
                span.text 综合排序
            el-tab-pane(name="2")
              span(slot="label") 
                img(src="../../assets/commend1.svg")
                span.text 餐厅
            el-tab-pane(name="3")
              span(slot="label") 
                img(src="../../assets/commend2.svg")
                span.text 酒吧
            el-tab-pane(name="4")
              span(slot="label") 
                img.yedian(src="../../assets/commend3.svg")
                span.text 夜店
        .content-bottom
          .commend-list(v-for="item in 9")
            .list-header
              img.img-content(src="../../assets/footerAd.jpg")
              img.imgs-top(src="../../assets/footerAd.jpg")
              .imgs-bottom
                //- img(src="../../assets/commend4.svg")
                .cil3
                .cil2
                .cil1
                span 合集
            .list-title New Peruvian Spot Ekeko Closes Abruptly Overnight
            .list-desc
              .date
                span 2018/04/29
                img(src="../../assets/canting.svg")
              .desc After barely four months of operation, Peruvian restaurant Ekeko has closed. The announcement was made by chef Carlos Sotomayor on…
      .content-right
</template>

<script>
  export default {
    data() {
      return {
        slideItems: [1, 2, 3, 4],
        activeTab: '1'
      }
    }
  }
</script>

<style lang="stylus">
  #recommend-box
    text-align left
    .el-carousel__container
      overflow hidden
      background orange
      h3
        color #000
    .el-carousel__indicators
      left auto
      right 0
      .el-carousel__indicator
        button
          width 10px
          height 10px
          border-radius 100%
          background rgba(0,0,0,0.5)
      .is-active 
        button
          background #29ABE2
    .recommend-content
      display flex
      .content-left
        width 861px
        margin 13px 13px 20px 0
        .nav-top
          text-align center
          height 90px
          background #fff
          .tablist
            height 90px
          .el-tabs--border-card
            box-shadow none
          .el-tabs__item
            text-align center
            color #000
            padding 0 37px
            border-right none
          span.text
            display block
            margin 0 auto
            line-height 20px
            height 20px
          img
            display block
            margin 20px auto 7px
          .yedian
            margin 10px auto 12px !important
          .el-tabs
            border none
            height 90px
            display inline-block
          .el-tabs__content
            display none
          .el-tabs__header
            background #fff
            border none
          .el-tabs__item.is-active
            border-right none
            color #29abe2 !important
          .el-tabs__item:hover
            color #000 !important
          .el-tabs__item.is-active:hover
            color #29abe2 !important
          .el-tabs--border-card>.el-tabs__header .el-tabs__item
            margin 0
            border none
        .content-bottom
          padding 24px 68px 15px 71px
          background #fbfbfb
          .commend-list
            cursor pointer
            display inline-block
            margin-right 40px
            margin-bottom 20px
            width 341px
            height 544px
            background-color #ffffff
            border solid 1px #dcdcdc
            &:nth-child(2n)
              margin-right 0
            .list-header
              text-align center
              position relative
              img.img-content
                width 315px
                height 315px
                margin 11px 13px 0
              img.imgs-top
                position absolute
                top 0 
                transform translateX(-50%)
                margin 0
                width 101px
                height 32px
              .imgs-bottom
                position absolute
                right 11px
                bottom 4px
                width 107px
                height 44px
                color #fff
                font-family PingFangSC
                font-size 18px
                font-weight 600
                line-height 44px
                opacity 0.67
                border-radius 22px 0 0 0
                -webkit-backdrop-filter blur(0.4px)
                backdrop-filter blur(0.4px)
                background-color #000000
                span
                  position relative
                  left -5px
                .cil1,.cil2,.cil3
                  width 17px
                  height 17px
                  border-radius 50%
                  display inline-block
                  background #fed600
                  position relative
                  top 3px
                .cil1
                  opacity 1
                  left -17px
                .cil2
                  opacity 0.6
                  left -8px
                .cil3
                  opacity 0.3
            .list-title
              margin 3px 18px
              font-family Oswald
              font-size 20px
              line-height 24px
              letter-spacing 1.5px
              text-align left
              color #000000
            .list-desc
              margin 0 0 0 20px
              .date
                span 
                  display inline-block
                  font-family PingFangSC
                  font-size 16px
                  font-weight 500
                  line-height 22px
                  letter-spacing 0.5px
                  text-align left
                  color #bfbfbf
                img
                  position relative
                  top 10px
                  left 15px
              .desc
                margin-top 18px
                font-family PingFangSC
                font-size 16px
                font-weight 300
                line-height 20px
                letter-spacing 0.5px
                text-align left
                color #8c8c8c
      .content-right
        flex 1
</style>