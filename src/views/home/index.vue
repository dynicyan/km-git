<template lang="pug">
  #km-home
    .home-side
      h3.sideTitle SAFARI
        a.icon-more more
          i.el-icon-arrow-right
      ul.safariList
        li(v-for = 'index in 4')
          .imgArea
            img(src='../../assets/404_images/404.png')
          p.safariTitle Alter. continues it's summer daze with a DJ lineup
          p.safariComments
            i.icon-good 11
            i.icon-commentsNum 22
          p.safariAvator
            span.savator
              img(src='../../assets/404_images/404.png')
            span.snick asdhasd
    .home-mcnt
      .km-swiper
        el-carousel(:autoplay = 'false' height='490px')
          el-carousel-item(v-for="item in slideItems" :key="item")
            h3 this is {{ item }}
      .home-events
        .events-top
          .etop-title 
            h4 EVENT
            |Choose to view the day's events
          .etop-dates
            ul
              li(v-for='item, index in 6' v-bind:class = "{'is_active': +index === selectIndex}" @click='changeDate(index)' :key='index')
                .date-top DAY {{item + 1}}
                .date-bottom {{item + 1}}
        .events-list
          ul
            li(v-for='item in 3')
              .list-left
                img(src='../../assets/404_images/404.png')
              .list-right
                h4.event-title Alter. Rooftop Party Vol. 3{{item}}
                p.event-brief Alter. continues it's summer daze with a DJ lineup drawn from Shanghai's talented expat mavericks, doing their thing before the madding crowds
                p.event-date
                  i.el-icon-date
                  | 2018/04/29  -  2018/08/20
          el-button.allEvents ALL EVENTS
    .recommends-swiper
      h3.sideTitle KMER RECOMMEND
        a.icon-more more
          i.el-icon-arrow-right
      .rswiper-container 
        swiper.swiper-no-swiping(:options="swiperOption" ref="mySwiper")
          swiper-slide(v-for='item,index in 6' :key='index')
            .ss-wrapper
              .reconlist
                .imgWrapper
                  img(src='../../assets/404_images/404.png')
                p.recommend-title New Peruvian Spot Ekeko Closes Abruptly Overnight
                p.recommend-date 2018/04/29
                p.recommend-brief After barely four months of operation, Peruvian restaurant Ekeko has closed. The announcement was made by chef Carlos Sotomayor on…
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    .recommends-swiper.shop-swiper
      h3.sideTitle KMER SHOP
        a.icon-more more
          i.el-icon-arrow-right
      .rswiper-container 
        swiper.swiper-no-swiping(:options="swiperOption" ref="mySwiper")
          swiper-slide(v-for='item,index in 6' :key='index')
            .ss-wrapper
              .reconlist
                .imgWrapper
                  img(src='../../assets/404_images/404.png')
                  span.save-price ¥ 100.45
                p.shop-price ¥ 100.45
                p.recommend-title New Peruvian Spot Ekeko Closes Abruptly Overnight
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
export default {
  name: 'km-home',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      slideItems: [1, 2, 3, 4],
      selectIndex: 0,
      swiperOption: {
        autoplay: false,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 32,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  mounted() {
  },
  methods: {
    changeDate(index) {
      this.selectIndex = index
    }
  }
}
</script>

<style lang="stylus">
#km-home
  width 100%
  .sideTitle
    font-size 22px
    color #014266
    border-bottom 1px solid #d9d9d9
    .icon-more
      float right
      background url('../../assets/moreIcon.svg') no-repeat 10px center
      background-size 12px 12px
      padding 0 10px 0 26px
      border-left 1px solid #d9d9d9
      font-size 16px
      .el-icon-arrow-right
        font-size 14px
        font-weight bold
  .home-side
    width 300px
    padding-bottom 10px
    float left
    overflow hidden
    border-radius 2px
    border 1px solid #d9d9d9
    text-align left
    background #fff
    .sideTitle
      padding-left 10px
      height 40px
      line-height 40px
    .safariList
      clear both
      width 273px
      margin 10px auto
      li
        float left
        width 100%
        margin-bottom 15px
        box-shadow rgba(0,0,0,0.5) 0 1px 5px
        border-radius 3px
        border-bottom 1px solid #eee
        .imgArea
          width 100%
          height 205px
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
        .safariTitle
          font-size 18px
          color #000
          line-height 25px
          padding 0 10px
        .safariComments
          float left
          width 100%
          margin-top 10px
          line-height 14px
          padding 0 10px
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
        .safariAvator
          float left
          padding 10px
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
  .home-mcnt
    width 870px
    float right
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
          width 8px
          height 8px
          border-radius 100%
          background rgba(0,0,0,0.5)
      .is-active 
        button
          background #29ABE2
    .home-events
      width 100%
      margin-top 25px
      border-radius 10px
      overflow hidden
      text-align left
      background #fff
      .events-top
        padding 5px
        padding-bottom 20px
        background #262626
        overflow: hidden
        .etop-title
          height 54px
          line-height 54px
          background url('../../assets/hmeventsbg.svg') no-repeat left top
          color rgba(255, 255, 255, 0.5)
          font-size 20px
          h4
            float left
            padding 0 15px
            line-height 54px
            font-size 32px
            color #fff
        .etop-dates
          margin-top 25px
          ul
            clear both
            float left
            margin-left 20px
            li
              width 84px
              border 1px solid #c9c9c9
              float left
              margin-right 40px
              border-radius 5px
              text-align center
              overflow hidden
              cursor pointer
              &.is_active
                .date-top
                  background #29ABE2
                  color #fff
                .date-bottom
                  color #29ABE2 
              .date-top
                width 100%
                height 25px
                background #eee
                line-height 25px
                font-size 20px
                font-weight bold
                color #000
                border-bottom 1px solid #c9c9c9
              .date-bottom
                width 100%
                height 58px
                line-height 58px
                background #fff
                font-size 40px
                color #000
      .events-list
        padding 20px 40px
        .allEvents
          width 100%
          height 66px
          margin 40px 0
          padding 0
          line-height 66px
          background #E8E8E8
          font-size 26px
          position relative
          &:after
            content ''
            position absolute
            top 50%
            transform translateY(-50%)
            width:0;
            height:0;
            border-width: 10px;
            border-style: dashed dashed dashed solid;
            border-color: transparent transparent transparent #606266;
            margin-left 10px
          &:hover
            background #E8E8E8
            border-color #E8E8E8
            color #000
        ul
          clear both
          width 100%
          li
            width 100%
            box-shadow #E4E4E4 0 2px 4px
            border 1px solid #E0E0E0
            overflow: hidden
            display flex
            margin-bottom 25px
            .list-left
              float left
              width 168px
              height 162px
              position relative
              border-right 1px solid #D8D8D8
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
            .list-right
              float left
              flex 1
              h4.event-title
                padding-top 10px
                padding-left 15px
                font-size 28px
                color #000
              p.event-brief
                padding-left 15px
                line-height 20px
                max-height 40px
                margin 20px 0 15px
                font-size 16px
                color #8E8E93
              p.event-date
                padding 11px 15px
                padding-bottom 0
                border-top 1px solid #D8D8D8
                font-size 16px
                color #000
                .el-icon-date
                  color #014266
                  font-size 20px
                  margin-right 10px
  .recommends-swiper
    float left
    width 100%
    background #fff
    margin-top 20px
    overflow hidden
    .sideTitle
      line-height 100px
    .rswiper-container
      float left
      width 100%
      padding 0 70px
      height 615px
      position: relative
      .swiper-container
        height 100%
        .swiper-wrapper
          align-items center
      .swiper-button-prev
      .swiper-button-next
        width 34px
        height 127px
      .swiper-button-prev
        left 0
        background #f5f5f5 url('../../assets/arrowLeft.svg') no-repeat 3px center
      .swiper-button-next
        right 0
        background #f5f5f5 url('../../assets/arrowLeft.svg') no-repeat 3px center
        transform rotate(180deg)
      .swiper-slide
        height 488px
        display flex
        align-items center
        .reconlist
          opacity 0
          border 1px solid #979797
          position relative
          .imgWrapper
            position absolute
            left 50%
            transform translateX(-50%)
            border 1px solid #979797
            background #fff
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
          p
            padding 0 40px
            float left
            text-align left
          .recommend-title
            overflow hidden
            margin-top 185px
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            color #333
          .recommend-date
            color #bfbfbf
            margin 8px 0
            font-weight bold
          .recommend-brief
            line-height 27px
            max-height 135px
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 5
            -webkit-box-orient vertical
            color #8C8C8C
      .swiper-slide-prev
      .swiper-slide-next
        width 312px!important
        .ss-wrapper
          height 408px
          padding-top 50px
        .reconlist
          width 310px!important
          height 408px
          opacity 1
          transition all 0.3s
          .imgWrapper
            width 230px
            height 230px
            top -50px
          .recommend-title
            line-height 25px
            max-height 50px
            font-size 18px
          .recommend-date
            line-height 20px
            font-size 14px
          .recommend-brief
            font-size 16px
      .swiper-slide-active
        width 350px!important
        .ss-wrapper
          height 488px
          padding-top 60px
        .reconlist
          width 350px!important
          height 488px
          opacity 1
          transition all 0.3s
          .imgWrapper
            width 265px
            height 265px
            top -60px
          .recommend-title
            margin-top 210px
            line-height 28px
            max-height 56px
            font-size 20px
          .recommend-date
            margin 10px 0
            line-height 20px
            font-size 16px
          .recommend-brief
            font-size 18px
  .shop-swiper
    width 100%
    .rswiper-container
      height 530px
      .reconlist
        .recommend-title
          -webkit-line-clamp 3
        .save-price
          position absolute
          left -10px
          bottom 10px
          color #fff
      .swiper-slide-prev
      .swiper-slide-next
        width 312px!important
        .ss-wrapper
          height 318px
        .reconlist
          height 318px
          .recommend-title
            margin-top 20px
          .shop-price
            margin-top 190px
            line-height 20px
            font-size 14px
            color #b9b9b9
          .save-price
            padding 0 35px
            line-height 32px
            background linear-gradient(45deg, #FF9933, #FE3927)
      .swiper-slide-active
        .ss-wrapper
          height 380px
        .reconlist
          height 380px
          .recommend-title
            margin-top 20px
          .shop-price
            margin-top 220px
            line-height 20px
            font-size 16px
            color #b9b9b9
          .save-price
            padding 0 35px
            line-height 32px
            background linear-gradient(45deg, #FF9933, #FE3927)
</style>
