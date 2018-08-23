<template lang="pug">
  #recommend-detail
    .detail-left
      h3 New Peruvian Spot Ekeko Closes Abruptly Overnight
      .share-date
        .date-info
          span.date 2018/04/29
        .share
          span 分享到
          img.icon-twitter(src="../../assets/detail1.svg")
          img.icon-facebook(src="../../assets/detail2.svg")
          img.icon-weibo(src="../../assets/detail3.svg")
          img.icon-weixin(src="../../assets/detail4.svg")
      .text-content(v-if="type === '1'")
      .text-content(v-if="type === '2'")
        .address-info
          .img-left
            img(src="../../assets/footerAd.jpg")
          .content-right
            .title Bell Bar
            .info 
              i.el-icon-location
              | No. 11 (back gate), Lane 248 Taikang Lu,near Ruijin Er Lu 泰康路248弄11号, 近瑞金二路
      .line-content
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
      .adv_title ADVERTISEMENT
      .adv_content
        img(src="../../assets/userAdpic.jpg")
        img(src="../../assets/userAdpic.jpg")
</template>

<script>
  // type = 1 普通文章 2 合集详情
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        type: '2',
        comment: ''
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  #recommend-detail
    margin 58px 0 20px 0
    text-align left
    display flex
    .detail-left
      width 915px
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
        .text
          margin-left 13px
          color #29abe2
        .end
          color #8c8c8c
          margin-left 13px
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
      .line-content
        background #979797
        height 1px 
        margin 0 -53px 32px
      .text-content
        background #f9f9f9
        height 200px
        margin 90px -20px 32px
        .address-info
          width 596px
          display flex
          margin 0 auto
          position relative
          top -55px
          .img-left
            width 140px
            height 140px
            img 
              width 100%
              height 100%
          .content-right
            background #fff
            padding 0 16px 0 19px
            flex 1
            border 1px solid #d9d9d9
            .title
              margin-top 17px
              padding-bottom 17px
              font-family Oswald
              font-size 18px
              line-height 26px
              letter-spacing 0.5px
              text-align left
              color #000000
              border-bottom 1px dashed #979797
            .info
              margin-top 13px
              font-family Arial
              font-size 12px
              line-height 16px
              letter-spacing 0.3px
              text-align left
              color #000000
              i 
                color #262626
      .comments
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
      margin-left 20px
      position relative
      flex 1
      .adv_title
        display block
        width 100%
        position absolute
        top -58px
        height 58px
        line-height 58px
        font-family Helvetica
        font-size 14px
        letter-spacing 0.4px
        text-align center
        color #c7c7cc
      .adv_content
        font-size 0
        img 
          width 300px
          height 300px
          margin-bottom 20px
</style>









