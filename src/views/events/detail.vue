<template lang="pug">
  #events-detail
    .detail-left
      h3 New Peruvian Spot Ekeko Closes Abruptly Overnight
      .share-date
        .date-info
          span.date 2018/04/29
          span.text 进行中
        .share
          span 分享到
          img.icon-twitter(src="../../assets/detail1.svg")
          img.icon-facebook(src="../../assets/detail2.svg")
          img.icon-weibo(src="../../assets/detail3.svg")
          img.icon-weixin(src="../../assets/detail4.svg")
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
      .people.comment10.commentBorder
        .title
          img(src="../../assets/detail9.svg")
          span 已报名 10
        .comment-infos.clearfix
          img.fl(src="../../assets/footerPic.png" v-for="item in 10")
          span.fl ...
      .apply
        i.el-icon-circle-check-outline
        span 报名
      .taxi
        img(src="../../assets/taxi.svg")
        span TAXI PRINTOUT
</template>

<script>
</script>

<style lang="stylus">
  #events-detail
    display flex
    margin 13px 0 20px 0
    text-align left
    .detail-left
      padding 42px 53px
      background-color #ffffff
      box-shadow 0 2px 9px 0 rgba(0, 0, 0, 0.14)
      width 915px
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
    .detail-right
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
</style>