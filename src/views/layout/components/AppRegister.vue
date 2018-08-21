<template lang="pug">
  #km-register(v-if='dialogRegisterVisible')
    el-dialog(:visible="true" :close-on-click-modal='false' @close='closeRgDialog')
      .registerHeader
        i.registerIcon
        h2 REGISTER
        p Upon registration, the discount cash will be deducted automatically upon your shopping settlement
      el-form.registerForm(:model="registerForm" status-icon ref="registerForm" label-position='left')
        el-form-item.w50(prop="beforeName")
            el-input(type="text" v-model="registerForm.beforeName" placeholder="beforeName")
        el-form-item.w50(prop="afterName")
            el-input(type="text" v-model="registerForm.afterName" placeholder="afterName")
        el-form-item(prop="userName")
            el-input(type='text' v-model="registerForm.userName" placeholder="userName")
        el-form-item(prop="userEmail")
          .valCode
            el-input.inputEmail(type='text' v-model="registerForm.userEmail" placeholder="userEmail")
            span.sendCode Send Valid-Code
        el-form-item(prop="validateCode")
            el-input(type='text' v-model="registerForm.validateCode" placeholder="validateCode")
        el-form-item(prop="password")
            el-input(type='text' v-model="registerForm.passWord" placeholder="passWord")
        p.dealAndprivacy Click submit to indicate that you have read and agree
            a.checkurl Terms of use
            | 和
            a.checkurl Privacy policy
        el-button.rgsdBtn(v-on:click="submitForm('registerForm')") REGISTER
      .dialog-footer(slot="footer")
        i.registerIcon
        .registerFooter
          p 已有账号？
          a 立即登陆
        i.el-icon-arrow-right
</template>

<script>
export default {
  name: 'AppRegister',
  props: {
    dialogRegisterVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      registerForm: {
        beforeName: '',
        afterName: '',
        userName: '',
        userEmail: '',
        validateCode: '',
        passWord: ''
      }
    }
  },
  computed: {
    message() {
      return '网管说这个页面你不能进......'
    }
  },
  methods: {
    submitForm() {
      console.log(111)
    },
    closeRgDialog() {
      this.$emit('closeRglog')
    }
  }
}
</script>

<style lang="stylus">
#km-register
  .el-dialog
    width 470px
    border-radius 5px
    overflow hidden
    .el-dialog__body
      padding 10px
    .el-dialog__footer
    .el-dialog__header
      padding 0
    .el-dialog__header
      .el-dialog__headerbtn
        background: #f1f1f1
        width: 30px
        height: 30px
        border-radius: 100%
        position: absolute
        top: 20px
        right: 20px
        z-index 99
    .registerHeader
      position relative
      height 78px
      padding-left 106px
      text-align left
      h2 
        line-height 37px
        font-size 26px
      p
        margin-top 5px
        line-height 20px
        color #D3A961
        font-size 14px
      .registerIcon
        width 96px
        height 78px
        position absolute
        left 0
        top 0
        background: url('../../../assets/registerMask.png') top left no-repeat
        background-size 100% 100%
    .registerForm
      margin 20px
      .el-form-item
        float left
        width 100%
        margin-bottom 12px
        .el-input__inner
          height 60px
          line-height 60px
      .w50
        width 48%
        &:nth-child(1)
          margin-right 4%
      .valCode
        position relative
        .inputEmail
          .el-input__inner
            padding-right 150px
        .sendCode
          position absolute
          right 0
          width 132px
          line-height 60px
          height 60px
          color #29ABE2
          z-index 9
          cursor pointer
          &:before
            content: ''
            position absolute
            left 0
            top 19px
            width 1px
            height 22px
            background #d9d9d9
      .dealAndprivacy
        float left
        width 100%
        line-height 18px
        margin 12px auto 20px
        color #262626
        font-size 12px
        text-align center
        a
          float: initial
          color #29ABE2
      .rgsdBtn
        width 210px
        line-height 60px
        padding 0
        background #FEC000
        font-size 18px
        font-weight bold
        border-color #FEC000
        color #fff
        &:active
          border-color #FEC000
    .dialog-footer
      height 100px
      background #262626
      padding 0 40px
      position relative
      i
        position absolute
        top 50%
        transform translateY(-50%)
      .registerFooter
        position relative
        top 30px
        text-align left
        padding-left 64px
        p
          line-height 20px
          color #D9D9D9
          font-size 14px
        a
          line-height 25px
          font-size 18px
          color #fff
          &:hover
            color #29ABE2
      .registerIcon
        width 46px
        height 41px
        left 30px
        background: url('../../../assets/avatorDefault.png') top left no-repeat
        background-size 100% 100%
      .el-icon-arrow-right
        color #D9D9D9
        font-size 20px
        cursor pointer
        &:hover
          color #29ABE2
</style>
