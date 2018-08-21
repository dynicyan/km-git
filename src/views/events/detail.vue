<template lang="pug">
  #events-detail
    .all_header_box
      .detail-left
        .top-box-info
          h3 New Peruvian Spot Ekeko Closes Abruptly Overnight
          .share-date
            .date-info
              span.date 2018/04/29
              span.text(:class="{'end': type === '2'}") 进行中
            .share
              span 分享到
              img.icon-twitter(src="../../assets/detail1.svg")
              img.icon-facebook(src="../../assets/detail2.svg")
              img.icon-weibo(src="../../assets/detail3.svg")
              img.icon-weixin(src="../../assets/detail4.svg")
        .bottom-box-info
          .end-header
            h3 本次活动圆满结束
            p 没参加的朋友也不要遗憾，KM将举办等多有意思的活动，您也可以点击<span> 愿望清单 </span>说出您喜欢的活动，我们会虚心接受并采纳哦
          .img-list
            img(src="../../assets/footerAd.jpg" v-for="item in 6")
          .comments
            .input-comment.clearfix
              el-input.fl(v-model="comment" placeholder="写下你的想法")
              el-button.fl(type="primary") 评价
            .comment-number
              span.number 123
              |  条评论
            .comment-list(v-for="item in 3")
              .user-img
                img(src="../../assets/footerAd.jpg")
              .user-info
                .user-info-t.clearfix
                  .name.fl
                    span.fl killer
                    span.fl 参与者
                  .time.fr 2018/04/01  14:00
                .user-info-b China Social Club's bringing two young Korean stars in Seoul's fast-rising underground 
      .detail-right
        .label
          .title
            img(src="../../assets/detail5.svg")
            span 标签
          .infos
            span(v-for="item in 5") 标签12
        .dates.comment10.commentBorder
          .title
            img(src="../../assets/detail6.svg")
            span 日期
          .comment-infos
            span 2018/04/29  -  2018/08/20
        .moments.comment10.commentBorder
          .title
            img(src="../../assets/detail7.svg")
            span 时间
          .comment-infos
            span 8PM - 9AM
        .address.comment10.commentBorder
          .title
            img(src="../../assets/detail8.svg")
            span 地址
            span 查看地图
          .comment-infos
            span No. 11 (back gate), Lane 248 Taikang Lu,near Ruijin Er Lu
            span 泰康路248弄11号, 近瑞金二路
        .people.comment10.commentBorder(v-if="type === '1'")
          .title
            img(src="../../assets/detail9.svg")
            span 已报名 10
          .comment-infos.clearfix
            img.fl(src="../../assets/footerPic.png" v-for="item in 10")
            span.fl ...
        .apply(v-if="type === '1'")
          i.el-icon-circle-check-outline
          span 报名
        .taxi(v-if="type === '1'")
          img(src="../../assets/taxi.svg")
          span TAXI PRINTOUT
    .recommend-events
      .events-title 推荐活动
      .rswiper-container
        swiper.swiper-no-swiping(:options="swiperOption" ref="mySwiper")
            swiper-slide(v-for='item,index in 6' :key='index')
              .reconlist
                .img-content
                  img(src='../../assets/footerPic.png')
                .right-info
                  .tltle Alter. Rooftop Party Vol. 3
                  .date
                    img(src="../../assets/date.png")
                    span 2018/04/29  -  2018/08/20
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
</template>

<script>
  // type = 1 进行中 2 已结束
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        type: '2',
        swiperOption: {
          autoplay: false,
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 27,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        comment: ''
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  #events-detail
    margin 13px 0 20px 0
    text-align left
    .all_header_box
      display flex
    .detail-left
      width 915px
      .top-box-info
        padding 42px 53px
        background-color #ffffff
        box-shadow 0 2px 9px 0 rgba(0, 0, 0, 0.14)
        h3 
          height 51px
          font-family Oswald
          font-size 24px
          text-align center
          color #000000
        .share-date
          position relative
          span 
            display inline-block
            height 22px
            font-family PingFangSC
            font-size 16px
            font-weight 500
            line-height 22px
            letter-spacing 0.5px
            text-align center
            color #bfbfbf
          .date
            padding-right 10px
            border-right 3px solid #bfbfbf
          .text
            margin-left 13px
            color #29abe2
          .end
            color #8c8c8c
          .date-info
            text-align center
          .share
            position absolute
            right 0
            top -1px
            span 
              position relative
              top -6px
              margin-right 8px
              height 20px
              font-family PingFangSC
              font-size 14px
              line-height 20px
              letter-spacing 0.4px
              text-align center
              color #8c8c8c
            img 
              cursor pointer
              margin-right 8px
      .bottom-box-info
        margin-top 20px
        background-color #ffffff
        box-shadow 0 2px 9px 0 rgba(0, 0, 0, 0.14)
        .end-header
          height 81px
          border-left 5px solid #29abe2
          border-bottom 1px solid #e8e8e8
          h3 
            line-height 27px
            color #000
            font-size 18px
            text-align center
            padding-top 15px
          p 
            line-height 27px
            color #000
            font-size 14px
            text-align center
            span 
              color #29abe2
              cursor pointer
        .img-list
          margin 25px 101px 32px 101px
          img 
            width 164px
            height 171px
            margin 0 18px 20px 0
            &:nth-child(4n)
              margin-right 0
        .comments
          padding 0 56px 42px 50px
          .input-comment
            font-size 0
            .el-input
              width 690px
              input
                height 60px
                border-radius 4px 0 0 4px
                font-size 16px
            .el-input__inner:focus
              border-color #29abe2
            .el-input__inner
              color #bfbfbf
            .el-button
              height 60px
              width 119px
              background #29abe2
              font-family PingFangSC
              font-size 18px
              font-weight 600
              color #ffffff
              border-radius 0 4px 4px 0
            .el-button--primary:focus, .el-button--primary:hover
              border-color #29abe2
          .comment-number
            margin-top 30px
            height 45px
            line-height 45px
            font-family PingFangSC
            font-size 14px
            text-align left
            color rgba(0, 0, 0, 0.65)
            span 
              font-family Oswald
              font-size 30px
              color #014266
          .comment-list
            margin-top 20px
            display flex 
            padding-bottom 27px
            border-bottom 1px dashed #979797
            .user-img
              width 35px
              height 35px
              border-radius 50%
              margin-right 13px
              img 
                width 100%
                height 100%
                border-radius 50%
            .user-info
              flex 1
            .user-info-t
              height 20px
              line-height 20px
              margin 8px 0 21px 0
              .name
                span:nth-child(1)
                  display inline-block
                  height 20px
                  font-family Arial
                  font-size 18px
                  line-height 20px
                  letter-spacing 0.5px
                  text-align left
                  color #595959
                span:nth-child(2)
                  width 55px
                  margin-left 10px
                  border-radius 4px
                  background-color rgba(41, 171, 226, 0.18)
                  display inline-block
                  height 20px
                  font-family PingFangSC
                  font-size 11px
                  line-height 20px
                  text-align center
                  color #29abe2
              .time
                color #8c8c8c
                letter-spacing 1px
                font-size 16px
            .user-info-b
              font-family Arial
              font-size 16px
              line-height 16px
              letter-spacing 0.5px
              text-align left
              color #171b31
    .detail-right
      height fit-content
      padding 0 17px 50px
      width 300px
      margin-left 20px
      background-color #ffffff
      box-shadow 0 2px 9px 0 rgba(0, 0, 0, 0.14)
      flex 1
      .label,.dates,.moments,.people,.address
        margin-top 42px
        .title
          img 
            width 14px
            height 14px
            margin-right 9px
            position relative
            top 2px
          span 
            height 20px
            font-family PingFangSC
            font-size 14px
            font-weight 600
            line-height 20px
            letter-spacing 0.4px
            text-align left
            color #000000
        .infos
          margin-top 15px
          span
            margin 0 10px 10px 0
            display inline-block
            padding 9px 24px
            border-radius 4px
            font-family PingFangSC
            font-size 12px
            letter-spacing 0.4px
            text-align center
            color #29abe2
            background-color rgba(41, 171, 226, 0.2)
      .commentBorder
        padding-top 13px
        border-top dashed 1px #979797
      .comment10
        margin-top 10px
      .comment-infos
        margin 15px 0 20px
        span
          font-family PingFangSC
          font-size 16px
          line-height 22px
          text-align left
          color #000000
          padding 0 24px
      .address
        .comment-infos
          span
            display block
            &:nth-child(1)
              margin-bottom 30px
      .people
        .comment-infos
          padding 0 24px
          img
            width 40px
            height 40px
            border-radius 50%
            margin-right 18px
            margin-bottom 10px
            &:nth-child(4n)
              margin 0
          span 
            line-height 40px
            display inline-block
            width 40px
            text-align center
            color #bfbfbf
            height 40px
            padding 0
      .apply
        height 60px
        border-radius 4px
        line-height 60px
        cursor pointer
        text-align center
        background-image linear-gradient(278deg, #53d5f3, #29abe2)
        margin-bottom 20px
        span
          font-family PingFangSC
          font-size 20px
          color #ffffff
        i
          font-size 35px
          color #fff
          position relative
          top 5px
          left -40px
      .taxi
        height 60px
        border-radius 4px
        background #014266
        line-height 60px
        text-align center
        cursor pointer
        img 
          width 35px
          height 35px
          margin 13px 3px 0 0
        span
          font-family PingFangSC
          font-size 20px
          color #fff
          position relative
          top -9px
    .recommend-events
      width 100%
      background #fff
      margin-top 20px
      overflow hidden
      position relative
      .events-title
        padding-left 37px
        font-family PingFangSC
        font-size 20px
        font-weight 600
        text-align left
        color #ffffff
        z-index 1
        width 199px
        height 53px
        line-height 53px
        border-radius 0 0 100px 0
        background-image linear-gradient(to right, #29abe2, #048bd3)
        position absolute
        top 0 
        left 0
      .rswiper-container
        float left
        width 100%
        padding 0 70px
        height 267px
        background #fff
        position: relative
        .swiper-container
          height 100%
          margin-top 36px
          .swiper-wrapper
            align-items center
        .swiper-button-prev
          width 34px
          height 127px
          position absolute
          transform translateY(-50%)
          margin 0
          margin-top 36px
        .swiper-button-next
          width 34px
          height 127px
          position absolute
          transform rotate(180deg)
          top 50%
          right 0
          margin-top -27px
        .swiper-button-prev
          left 0
          background #f5f5f5 url('../../assets/arrowLeft.svg') no-repeat 3px center
        .swiper-button-next
          right 0
          background #f5f5f5 url('../../assets/arrowLeft.svg') no-repeat 3px center
        .swiper-slide
          width 341px
          height 140px
          display flex
          align-items center
          .reconlist
            height 140px
            opacity 0
            display flex
            cursor pointer
            .img-content
              width 137px
              height 140px
              img 
                width 100%
                height 100%
            .right-info
              border 1px solid #e0e0e0
              .tltle
                margin 23px 0 26px 12px
                font-family Oswald
                font-size 18px
                line-height 24px
                letter-spacing normal
                text-align left
                color #000000
              .date
                margin-left 12px
                img 
                  width 12px
                  height 12px
                  margin-right 7px
                span 
                  display inline-block
                  height 16px
                  font-family PingFangSC
                  font-size 12px
                  line-height 16px
                  text-align left
                  color #000000
                  position relative
                  top -1px
        .swiper-slide-prev
        .swiper-slide-next
          width 341px!important
          .reconlist
            width 341px!important
            height 140px
            opacity 1
            transition all 0.3s
        .swiper-slide-prev
            margin-left 8px !important
        .swiper-slide-active
          width 341px!important
          .reconlist
            width 341px!important
            height 140px
            opacity 1
            transition all 0.3s
</style>









