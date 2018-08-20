<template lang="pug">
  #events_box
    .events_left
      .events_tab
        el-tabs(type="border-card" v-model="activeTab")
          el-tab-pane(name="1")
            span(slot="label") 
              img(src="../../assets/events1.svg" v-if="activeTab === '1'")
              img(src="../../assets/events2.svg" v-if="activeTab === '2'")
              span.text 进行中
          el-tab-pane(name="2")
            span(slot="label") 
              img(src="../../assets/events3.svg" v-if="activeTab === '1'")
              img(src="../../assets/events4.svg" v-if="activeTab === '2'")
              span.text 已结束
        .tabNav_r
          p 如果没有您喜欢的活动<br>可以点击愿望清单
          p.btn_button
            img(src="../../assets/events5.svg") 
            | 愿望清单
      .events_content
        h3 目前有<span>15</span>个活动
        .events_list
          .list(v-for="item in 3" @click="turnDetail")
            .list_date(:class="{list_date_end: activeTab === '2'}")
              .top_date jun
              .bottom_date 24
            .list_enents
              .img_left
                img(src="../../assets/footerPic.png")
              .list_events_info
                h3 Alter.Rooftop Party Vol. 3
                p Alter. continues it's summer daze with a DJ lineup drawn from Shanghai’s…
                .date(v-if="activeTab === '1'")
                  img(src="../../assets/date.png")
                  span 2018/04/29  -  2018/08/20
                .end_number(v-if="activeTab === '2'")
                  .like
                    img(src="../../assets/like.svg")
                    | 221
                  .comment
                    img(src="../../assets/comment.svg")
                    | 231
          .endLast.clearfix
            .line.fl
            .text.fl 已经到底了
            .line.fl
          .loadMore(v-if="false")
            p 加载更多
            i.el-icon-arrow-down
    .events_right
      .adv_title ADVERTISEMENT
      .adv_content
        img(src="../../assets/userAdpic.jpg")
        img(src="../../assets/userAdpic.jpg")
</template>

<style lang="stylus">
  #events_box
    text-align left
    display flex
    margin 15px 0 20px 0
    .events_left
      width 915px
      margin-right 20px
    .events_right
      flex 1
      .adv_title
        height 89px
        line-height 89px
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
    .events_tab
      position relative
      .tabNav_r
        position absolute
        right 19px
        top 22px
        font-size 0
        p 
          line-height 23px
          color #8c8c8c
          text-align right
          display inline-block
          font-size 14px
          font-family PingFangSC
          opacity 0.63
        p.btn_button
          cursor pointer
          margin-left 10px
          position relative
          top -11px
          text-align center
          display inline-block
          width 166px
          height 46px
          line-height 46px
          border-radius 4px
          background-color #29abe2
          color #fff
          img 
            display inline-block
            margin 0
            position relative
            top 5px
            left -18px
      .el-tabs--border-card
        box-shadow none
      .el-tabs__item
        height 90px
        text-align center
        color #000
        padding 0 37px
        border-right solid 0.5px #e4e4e4 !important
      span.text
        display block
        margin 0 auto
        line-height 20px
        height 20px
      img
        display block
        margin 20px auto 7px
      .el-tabs
        border none
      .el-tabs__content
        display none
      .el-tabs__header
        background #fff
        border none
      .el-tabs__item.is-active
        border-right solid 0.5px #e4e4e4 !important
        color #29abe2 !important
      .el-tabs__item:hover
        color #000 !important
      .el-tabs__item.is-active:hover
        color #29abe2 !important
      .el-tabs--border-card>.el-tabs__header .el-tabs__item
        margin 0
        border none
    .events_content
      padding-bottom 81px
      background #fbfbfb
      margin-top 1px
      border-top 1px solid #E4E4E4
      h3 
        height 40px
        line-height 40px
        font-family PingFangSC
        font-size 20px
        font-weight 600
        color #014266
        margin 15px 0 0 23px
        letter-spacing 2px
        span 
          color #fec000
          font-family DIN
          height 40px
          font-size 40px
          font-weight bold
          font-stretch condensed
      .events_list
        margin-top 27px
        .list
          display flex
          // width 639px
          margin-bottom 40px
          .list_date
            margin 0 79px 0 77px
            width 92px
            height 92px
            background-color #29abe2
            border-radius 50%
            text-align center
            font-family Oswald
            font-size 28px
            .top_date
              font-family Oswald
              font-size 14px
              font-weight bold
              text-align center
              color #ffffff
              margin 15px 0 8px
            .bottom_date
              font-family Oswald
              font-size 28px
              font-weight bold
              text-align center
              color #ffffff
          .list_date_end
            background #8c8c8c
          .list_enents
            cursor pointer
            width 639px
            display flex
            .img_left
              width 165px
              height 165px
              img 
                width 100%
                height 100%
            .list_events_info
              padding 8px 0 0 0
              box-shadow 0 2px 5px 0 #e5e5ea
              background-color #ffffff
              border solid 0.5px #e0e0e0
              flex 1
              &:hover
                background #dbedf4
              h3
                padding-left 18px
                font-family Oswald
                font-size 28px
                line-height 40px
                text-align left
                color #000000
                margin 0 0 11px 0
              p 
                padding-left 18px
                font-family Arial
                font-size 16px
                line-height 18px
                text-align left
                color #8e8e93
                margin 0
                padding-bottom 14px
                border-bottom 2px solid #d9d9d9
              .date
                font-size 0
                margin-top 17px
                line-height 20px
                height 20px
                img 
                  margin 0 12px 0 18px
                  display inline-block
                span
                  display inline-block
                  height 20px
                  font-family PingFangSC
                  font-size 16px
                  line-height 20px
                  text-align left
                  color #000000
                  position relative
                  top -4px
              .end_number
                margin-top 8px
                padding-left 18px
                .like
                .comment
                  display inline-block
                  height 14px
                  font-family Arial
                  font-size 12px
                  letter-spacing 0.8px
                  color #8e8e93
                  img 
                    position relative
                    top 8px
                    margin-right 3px
                .like
                  margin-right 30px
        .loadMore
          cursor pointer
          padding-top 8px
          text-align center
          height 60px 
          background-image linear-gradient(91deg, #6bc3e8, #29abe2)
          p 
            height 20px
            font-family PingFangSC
            font-size 16px
            line-height 20px
            color #ffffff
            margin 0 0 5px 0
          i.el-icon-arrow-down
            display inline-block
            color #fff
            width 16px 
            height 16px
            border-radius 50%
        .endLast
          padding 0 61px
          .line 
            width 267px
            height 1px
            background #d9d9d9
            margin-top 10px
          .text
            margin 0 81px
            height 20px
            font-family PingFangSC
            font-size 14px
            line-height 20px
            letter-spacing 1.4px
            text-align left
            color #bfbfbf
</style>

<script>
  export default {
    data() {
      return {
        activeTab: '1'
      }
    },
    methods: {
      turnDetail() {
        this.$router.push('/events/detail')
      }
    }
  }
</script>