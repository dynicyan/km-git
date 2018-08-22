<template lang="pug">
#km-address
  h2 我的地址
  .address-wrap
    .address-list(v-if='data')
      p 暂无数据
    ul.address-list
      li
        .address-message
          span.nickName Kill'le
          span.telephone 177722221111
          p.comments China Social Club's bringing two young Korean stars in Seoul's fast-rising underground
          router-link.edit-button(to='/user/edit') 编辑
      router-link.newAdd-button(to='/user/add') 
        i.el-icon-plus 新建地址
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
#km-address
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
  .address-wrap
    position relative
    overflow: hidden
    padding 0 30px 30px
    .newAdd-button
      margin-top 20px
      float left
      height 40px
      width 100px
      line-height 40px
      padding 0
      background #fff
      line-height 40px
      text-align center
      color #595959
      font-size 14px
      border 1px solid #e0e0e0
      &:hover
        color #409EFF
        border-color #c6e2ff
        background-color #ecf5ff
      &:focus
        border-color #e0e0e0
    .address-list
      clear both
      li
        width 100%
        float left
        margin-bottom 20px
        box-shadow #E5E5EA 0 2px 5px
        border 1px solid #e0e0e0
        .address-message
          border-left 4px solid #000
          position relative
          left -1px
          padding 25px 35px 25px12px
          overflow hidden
          .nickName
            float left
            line-height 28px
            font-size 20px
            color #000
          .telephone
            float right
            line-height 28px
            font-size 20px
            color #000
          .comments
            float left
            width 85%
            max-height 40px
            line-height 20px
            font-size 16px
            margin-top 20px
            color #171B31
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
          .edit-button
            margin-top 10px
            float right
            height 40px
            width 100px
            line-height 40px
            padding 0
            background #fff
            line-height 40px
            text-align center
            color #595959
            font-size 14px
            border 1px solid #e0e0e0
            &:hover
              color #409EFF
              border-color #c6e2ff
              background-color #ecf5ff
            &:focus
              border-color #e0e0e0
</style>
