<template lang="pug">
  #km-login(v-if='showDialogLg')
    el-dialog(:visible="true" :close-on-click-modal='false' @close='closeLg')
      .loginHeader
        i.loginIcon
        h2 LOGIN
        p Starting a new life here！
      el-form.loginForm(:model="loginForm" :rules='loginRules' status-icon ref="loginForm" label-position='left')
        el-form-item(prop="loginName")
            el-input(type='text' v-model="loginForm.loginName" placeholder="userName/e-mail")
        el-form-item(prop="passWord")
            el-input(type='password' v-model="loginForm.passWord" placeholder="passWord")
        el-button.loginBtn(v-on:click="submitForm('loginForm')") LOGIN
        a.forgetPwd 忘记密码
      .dialog-footer(slot="footer")
        i.loginIcon
        .loginFooter
          p 没有有账号？
          a 立即注册
          p.white 增加KM值可以抵换商品哦
        i.el-icon-arrow-right
</template>

<script>
import { mapActions } from 'vuex'
import { setToken } from '@/utils/auth'
export default {
  name: 'AppLogin',
  props: {
    showDialogLg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogLoginVisible: true,
      loginForm: {
        loginName: '',
        passWord: ''
      },
      loginRules: {
        username: [{ required: true }],
        password: [{ required: true }]
      }
    }
  },
  computed: {
    message() {
      return '网管说这个页面你不能进......'
    }
  },
  methods: {
    ...mapActions({
      login: 'login/LoginByUsername'
    }),
    submitForm() {
      let self = this
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.login(this.loginForm).then((res) => {
            self.loading = false
            if (+res.code === 0) {
              setToken(res.data.token)
              self.$store.commit('login/SET_TOKEN', res.data.token)
              self.$emit('submitFormsss', '111')
            } else {
              self.$message({
                message: res.message,
                type: 'warning'
              })
            }
          }).catch(() => {
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    closeLg() {
      // this.dialogLoginVisible = false
      this.$emit('closeLg', this.dialogLoginVisible)
    }
  }
}
</script>

<style lang="stylus">
#km-login
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
    .loginHeader
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
      .loginIcon
        width 96px
        height 78px
        position absolute
        left 0
        top 0
        background: url('../../../assets/people.png') top left no-repeat
        background-size 100% 100%
    .loginForm
      margin 20px 30px 10px
      overflow: hidden
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
      .loginBtn
        width 210px
        line-height 60px
        padding 0
        margin-top 5px
        background-image linear-gradient(45deg, #29ABE2, #53D5F3)
        font-size 18px
        font-weight bold
        border 0 none
        color #fff
        &:active
          border 0 none
      .forgetPwd
        float left
        width 100%
        line-height 20px
        margin-top 10px
        text-align center
        color #29ABE2
    .dialog-footer
      height 100px
      background #014266
      padding 0 40px
      position relative
      i
        position absolute
        top 50%
        transform translateY(-50%)
      .loginFooter
        position relative
        top 20px
        text-align left
        padding-left 100px
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
        .white
          color #fff
      .loginIcon
        left 30px
        width 88px
        height 53px
        background: url('../../../assets/rightRegist.png') top left no-repeat
        background-size 100% 100%
      .el-icon-arrow-right
        color #D9D9D9
        font-size 20px
        cursor pointer
        &:hover
          color #29ABE2
</style>
