<template lang="pug">
#km-safariPublic
  h2 发布SAFARI
  .wish-wrap
    el-form.wishForm(:model="safariForm" :rules='safariRules' status-icon label-width="100px" ref="goodsForm" label-position='left')
      el-form-item(prop="goodsName" label='标题:')
        span.label-tips 最多100字符
        el-input(type='text' v-model="safariForm.goodsName" placeholder="goodsName")
      el-form-item(prop="goodsDes" label='正文内容:')
        span.label-tips 最多100字符
        el-input(type="textarea" v-model="safariForm.goodsDes" placeholder="goodsDes")
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
    name: 'km-safariPublic',
    data() {
      return {
        data: '',
        safariForm: {
          goodsDes: '',
          goodsName: '',
          goodspics: ''
        },
        safariRules: {
          goodsDes: [
            { required: true, message: 'please input your name', trigger: 'blur' }
          ],
          goodsName: [
            { required: true, message: 'please input your telephone', trigger: 'blur' }
          ],
          goodspics: [
            { required: true, message: 'please input your telephone', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang='stylus'>
#km-safariPublic
  background #fff
  box-shadow 0 2px 9px rgba(0, 0, 0, .15)
  width 99%
  margin 0 auto
  border-radius 5px
  overflow hidden
  h2
    line-height 100px
    font-size 36px
    padding-left 30px
    border-bottom 1px solid #d9d9d9
    text-align left
  .wish-wrap
    position relative
    padding 10px
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
