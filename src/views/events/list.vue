<template lang="pug">
  #events_box
    .events_left
      .events_tab
        el-tabs(type="border-card" v-model="activeTab")
          el-tab-pane(name="1")
            span(slot="label") 
              img(src="../../assets/events1.svg" v-if="activeTab === '1'")
              img(src="../../assets/events2.svg" v-if="activeTab === '2'")
              span.text 消息中心
          el-tab-pane(name="2")
            span(slot="label") 
              img(src="../../assets/events3.svg" v-if="activeTab === '1'")
              img(src="../../assets/events4.svg" v-if="activeTab === '2'")
              span.text 角色管理
        .tabNav_r
          p 如果没有您喜欢的活动<br>可以点击愿望清单
          p.btn_button
            img(src="../../assets/events5.svg") 
            | 愿望清单
      .events_content
        h3 目前有<span>15</span>个活动
        .events_list
          .list(v-for="item in 3")
            .list_date
              .top_date jun
              .bottom_date 24
    .events_right
</template>

<style lang="stylus">
  #events_box
    text-align left
    display flex
    margin-top 15px
    background #fff
    .events_left
      width 915px
      height 100px
      margin-right 20px
    .events_right
      flex 1
      height 100px
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
      padding-right 30px
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
          .list_date
            margin-right 79px
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
</style>

<script>
  export default {
    data() {
      return {
        activeTab: '1'
      }
    }
  }
</script>