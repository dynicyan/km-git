<template lang="pug">
  #topUserInfo
    ul.sharePlatform
      li
        i.icon-twitter
      li
        i.icon-facebook
      li
        i.icon-weibo
      li
        i.icon-weixin
    ul.unloginArea(v-if='!hasLogined')
      li(@click='registerUser') REGISTERED
      li /
      li(@click='loginUser') LOG IN
    .loginbar(v-if='hasLogined')
      .userInfos
        i.icon-bugCar
          b.carNums 
            em 12
      router-link.userInfos(to='/user/notices')
        i.icon-infos
          b.infoNums 
            em 12
      el-dropdown.avatar-container(trigger="click")
        .avatar-wrapper
          img.user-avatar(src="../../../../assets/picTx.png")
          //- span admin
          i.el-icon-arrow-down
        el-dropdown-menu.user-dropdown(slot="dropdown")
          router-link(class="inlineBlock" to="/user")
            el-dropdown-item 个人中心
          el-dropdown-item(divided)
            span(@click="logout" style="display:block;") 退出
    el-dialog.km-login(:visible.sync='dialogLoginVisible' :close-on-click-modal='false')
      .loginHeader
        i.loginIcon
        h2 LOGIN
        p Starting a new life here！
      el-form.loginForm(:model="loginForm" :rules='loginRules' status-icon ref="loginForm" label-position='left')
        el-form-item(prop="loginName")
            el-input(type='text' v-model="loginForm.loginName" placeholder="userName/e-mail")
        el-form-item(prop="passWord")
            el-input(type='password' v-model="loginForm.passWord" placeholder="passWord")
        el-button.loginBtn(v-on:click="submitlgForm('loginForm')") LOGIN
        a.forgetPwd(@click='forgetPwdFun') 忘记密码
      .dialog-footer(slot="footer")
        i.loginIcon
        .loginFooter
          p 没有有账号？
          a(@click='registerUser') 立即注册
          p.white 增加KM值可以抵换商品哦
        i.el-icon-arrow-right
    el-dialog.km-login(:visible.sync="forgetFlag" :close-on-click-modal='false')
      h3.sendEmail 忘记密码
      p.sendBrief(v-if='!hasSendStatus') 只需在此输入您的邮箱点击发送，验证码就会发送至您的邮箱
      p.receiveBrief(v-if='hasSendStatus')
        i.el-icon-success
        | 验证码已发送至您的邮箱
      el-form.loginForm(:model="forgetForm" :rules='forgetRules' status-icon ref="forgetForm" label-position='left' v-if='!hasSendStatus')
        el-form-item(prop="email")
          el-input(type='text' v-model="forgetForm.email" placeholder="email")
        el-button.loginBtn(v-on:click="sendValidate('forgetForm')") 发送验证码
      el-form.loginForm(:model="pwdForm" :rules='pwdRules' status-icon ref="pwdForm" label-position='left' v-if='hasSendStatus')
        el-form-item(prop="validatecode")
          el-input.w60(type='text' v-model="pwdForm.validatecode" placeholder="validatecode")
          el-button.loginBtn.validBtn 验证
        el-form-item(prop="newpassword")
          el-input(type='text' v-model="pwdForm.newpassword" placeholder="newpassword")
        el-button.loginBtn(v-on:click="confirmPwd('pwdForm')") 提交
    el-dialog.km-register(:visible.sync="dialogRegisterVisible" :close-on-click-modal='false')
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
            el-input(type='password' v-model="registerForm.passWord" placeholder="passWord")
        p.dealAndprivacy 
            span Click submit to indicate that you have read and agree
            a.checkurl Terms of use
            span And
            a.checkurl Privacy policy
        el-button.rgsdBtn(v-on:click="submitRgForm('registerForm')") REGISTER
      .dialog-footer(slot="footer")
        i.registerIcon
        .registerFooter
          p 已有账号？
          a(@click='loginUser') 立即登陆
        i.el-icon-arrow-right(@click='loginUser')
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { setToken } from '@/utils/auth'
export default {
  components: {
  },
  data() {
    return {
      dialogLoginVisible: false,
      dialogRegisterVisible: false,
      forgetFlag: false,
      hasSendStatus: false,
      registerForm: {
        beforeName: '',
        afterName: '',
        userName: '',
        userEmail: '',
        validateCode: '',
        passWord: ''
      },
      forgetForm: {
        email: ''
      },
      forgetRules: {
        email: [{ required: true }]
      },
      pwdForm: {
        validcode: '',
        newpassword: ''
      },
      pwdRules: {
        validatecode: [{ required: true }],
        newpassword: [{ required: true }]
      },
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
    hasLogined() {
      return this.token
    },
    ...mapGetters([
      'sidebar',
      'avatar',
      'token'
    ])
  },
  created() {
  },
  methods: {
    ...mapActions({
      logOut: 'login/LogOut',
      login: 'login/LoginByUsername'
    }),
    loginUser() {
      this.dialogRegisterVisible = false
      this.dialogLoginVisible = true
    },
    registerUser() {
      this.dialogLoginVisible = false
      this.dialogRegisterVisible = true
    },
    closeDialog() {
      this.dialogLoginVisible = false
      this.dialogRegisterVisible = false
    },
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    forgetPwdFun() {
      this.dialogLoginVisible = false
      this.forgetFlag = true
    },
    sendValidate() {
      this.$refs.forgetForm.validate(valid => {
        if (valid) {
          this.hasSendStatus = true
        }
      })
    },
    confirmPwd() {
      this.$refs.pwdForm.validate(valid => {
        if (valid) {
          this.forgetFlag = false
        }
      })
    },
    logout() {
      this.logOut().then((res) => {
        this.$router.push('/home')
        // location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    submitlgForm() {
      let self = this
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.login(this.loginForm).then((res) => {
            self.loading = false
            if (+res.code === 0) {
              setToken(res.data.token)
              self.$store.commit('login/SET_TOKEN', res.data.token)
              self.dialogLoginVisible = false
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
    submitRgForm() {
      console.log(111)
    }
  }
}
</script>

<style lang="stylus">
 #topUserInfo
  position absolute
  top 0
  right 0
  .fl
    float: left
  .sharePlatform
    clear: both
    position absolute
    top 0
    left -1035px
    li
      float left
      line-height 52px
      margin 0 12px
      i
        width 20px
        height 20px
        float left
        margin-top 16px
      .icon-twitter
        background url('../../../../assets/twitter.svg') no-repeat left center
        background-size contain
      .icon-facebook
        background url('../../../../assets/facebook.svg') no-repeat left center
        background-size contain
      .icon-weibo
        background url('../../../../assets/weibo.svg') no-repeat left center
        background-size contain
      .icon-weixin
        background url('../../../../assets/weixin.svg') no-repeat left center
        background-size contain
  .unloginArea
    clear: both
    background url('../../../../assets/reGis.png') no-repeat left 9px
    background-size 34px 34px
    padding-left 34px
    overflow hidden
    li
      float left
      color #fff
      height 52px
      line-height 52px
      font-size 14px
      font-weight bold
      cursor: pointer
      &:nth-child(1)
        color #FEC000
      &:nth-child(2)
        padding 0 7px
  .loginbar
    .userInfos
      float left
      width 52px
      height 52px
      line-height 52px
      &:hover
        background #005B8E
        b
          border-color #005B8E
      i
        display inline-block
        position relative
        width 16px
        height 16px
        top 8px
        b
          position absolute
          top -8px
          right -5px
          width 14px
          height 14px
          line-height 14px
          font-style normal
          border-radius 100%
          border 1px solid #014266
          font-weight normal
          font-size 12px
          em
            float left
            margin-left -1px
            font-style normal
            transform scale(0.8)
      .icon-infos
        background url('../../../../assets/remind_fill.svg') no-repeat
        background-size contain
        .infoNums
          background #FF3B30
          color #fff
      .icon-bugCar
        background url('../../../../assets/bugCar.svg') no-repeat
        background-size contain
        .carNums
          background #fff
          color #005B8E
    .el-dropdown
      color: #fff
    .hamburger-container
      line-height: 52px;
      height: 50px;
      float: left;
      padding: 0 10px;
    .screenfull
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    .avatar-container
      height: 52px;
      display: inline-block;
      .avatar-wrapper
        height 100%
        cursor: pointer;
        position: relative;
        .user-avatar
          width: 40px;
          height: 40px;
          margin-top 5px
          border-radius: 100%
          cursor pointer
        .el-icon-arrow-down
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
  .km-login
    .el-dialog
      width 470px
      border-radius 5px
      overflow hidden
      .sendEmail
        line-height 40px
        font-size 26px
        color #000
        text-align left
        padding 20px 0 5px 30px
      .receiveBrief
      .sendBrief
        text-align left
        padding-left 30px
        line-height 20px
        font-size 14px
        color #bfbfbf
      .receiveBrief
        color #34B931
        position relative
        .el-icon-success
          font-size 21px
          margin 2px 10px 0 0
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
          background: url('../../../../assets/people.png') top left no-repeat
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
        .w60
          width 57%
          margin-right 3%
        .validBtn
          float right
          width 40%
          margin 0
          background #29ABE2
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
            padding 0
            &:hover
              color #29ABE2
          .white
            float left
            width 100%
            color #fff
        .loginIcon
          left 30px
          width 88px
          height 53px
          background: url('../../../../assets/rightRegist.png') top left no-repeat
          background-size 100% 100%
        .el-icon-arrow-right
          color #D9D9D9
          font-size 20px
          cursor pointer
          &:hover
            color #29ABE2
  .km-register
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
          background: url('../../../../assets/registerMask.png') top left no-repeat
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
          span
            float left
          a
            padding 0 5px
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
            padding 0
            &:hover
              color #29ABE2
        .registerIcon
          width 46px
          height 41px
          left 30px
          background: url('../../../../assets/avatorDefault.png') top left no-repeat
          background-size 100% 100%
        .el-icon-arrow-right
          color #D9D9D9
          font-size 20px
          cursor pointer
          &:hover
            color #29ABE2
</style>
