<template lang="pug">
#km-wish
  h2 
    p.title 愿望清单
    router-link.intoOrder(to='/user/wishlist') 进入我的清单
      i.el-icon-arrow-right
  .wish-wrap
    .menuBar
      span.menuItem(v-for='menu, index in mentList' @click='changeNoticeTab(index)' v-bind:class="activeIndex === index ? 'menu_active' : ''") {{menu}}
    el-form.wishForm(:model="wishForm" :rules='rules' status-icon label-width="100px" ref="wishForm" label-position='left' v-if='activeIndex === 0')
      el-form-item(prop="activeDes" label='正文内容:')
        span.label-tips 最多100字符
        el-input(type="textarea" v-model="wishForm.activeDes" placeholder="activeDes")
      el-form-item(prop="uploadpics" label='添加图片:')
        span.label-tips 最多5张图
        el-upload(
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card")
            i.el-icon-plus
      el-button.rgsdBtn submit
    el-form.wishForm(:model="goodsForm" :rules='goodsrules' status-icon label-width="100px" ref="goodsForm" label-position='left' v-if='activeIndex === 1')
      el-form-item(prop="goodsName" label='商品名:')
        span.label-tips 最多100字符
        el-input(type='text' v-model="goodsForm.goodsName" placeholder="goodsName")
      el-form-item(prop="goodsDes" label='描述商品:')
        span.label-tips 最多100字符
        el-input(type="textarea" v-model="goodsForm.goodsDes" placeholder="goodsDes")
      el-form-item(prop="goodsRelated" label='联系方式:')
        el-input(placeholder="goodsRelated" v-model="goodsForm.goodsRelated" class="input-with-select")
          el-select(v-model="select" slot="prepend" placeholder="请选择")
            el-option(label="手机" value="1")
            el-option(label="邮箱" value="2")
      el-form-item(prop="uploadpics" label='添加图片:')
        span.label-tips 最多5张图
        el-upload(
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card")
            i.el-icon-plus
      el-button.rgsdBtn submit
</template>

<script>
  export default {
    name: 'km-wish',
    data() {
      return {
        data: '',
        mentList: ['我想参加的活动', '我想买的东西'],
        activeIndex: 1,
        wishForm: {
          activeDes: '',
          uploadpics: ''
        },
        select: '1',
        rules: {
          activeDes: [
            { required: true, message: 'please input your name', trigger: 'blur' }
          ],
          uploadpics: [
            { required: true }
          ]
        },
        goodsForm: {
          goodsDes: '',
          goodsName: '',
          goodsRelated: '',
          goodspics: ''
        },
        goodsrules: {
          goodsDes: [
            { required: true, message: 'please input your name', trigger: 'blur' }
          ],
          goodsName: [
            { required: true, message: 'please input your telephone', trigger: 'blur' }
          ],
          goodsRelated: [
            { required: true, message: 'please input your telephone', trigger: 'blur' }
          ],
          goodspics: [
            { required: true, message: 'please input your telephone', trigger: 'blur' }
          ]
        }
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
#km-wish
  background #fff
  box-shadow 0 2px 9px rgba(0, 0, 0, .15)
  width 99%
  margin 0 auto
  border-radius 5px
  overflow hidden
  h2
    height 150px
    font-size 36px
    padding-left 30px
    border-bottom 1px solid #d9d9d9
    text-align left
    p.title
      float left
      width 100%
      margin-top 40px
      font-size 36px
      line-height 50px
      color #000
    .intoOrder
      float left
      margin-top 10px
      line-height 22px
      font-size 16px
      color #4A4A4A
  .wish-wrap
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
    .wishForm
      margin 20px
      .el-form-item__label
        line-height 60px
        font-size 16px
        color #000
      .label-tips
        position: absolute
        left: -100px
        top: 32px
        color: #8C8C8C
        font-size: 12px
      .el-form-item
        text-align left
        float left
        width 100%
        margin-bottom 30px
        .el-input__suffix
        .el-icon-circle-close
          display none
        .el-input__inner
          width 50%
          height 60px
          line-height 60px
        .el-textarea__inner
          width 75%
          height 120px
          line-height 30px
      .input-with-select
        height 60px
        border-radius 5px
        margin 25px auto
        .el-input-group__prepend
          width 100px
          text-align center
          background #fff
        .el-select
          width 73px
          height 60px
          .el-input__suffix
            display block
            width 25px
            color #595959
            .el-select__caret
              position absolute
              top 2px 
              left 0
              color #595959
              transition width .1s
              &.is-reverse
                top -4px
          .el-input__inner
            width 75px
            box-shadow: rgba(0,0,0,0) 0 0 0
          .el-input-group__append
            width 63px
            background #29ABE2
            color #fff
            font-size 18px
            border 0 none
      .rgsdBtn
        width 210px
        line-height 60px
        padding 0
        margin 30px auto 0
        background-image linear-gradient(45deg, #29ABE2, #53D5F3)
        font-size 18px
        font-weight bold
        border 0 none
        color #fff
        &:active
          border 0 none
</style>
