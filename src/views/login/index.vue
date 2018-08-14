<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <h3 class="title">KM</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
        </span>
        <el-input
                name="username"
                type="text"
                v-model="loginForm.username"
                autoComplete="on"
                placeholder="用户名"
                @blur="onBlur"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="密码"></el-input>
          <span class="show-pwd" @click="showPwd"></span>
      </el-form-item>
      <el-form-item prop="rememberMe" style="border: none; background: none;">
        <el-checkbox style="color: white;" v-model="loginForm.rememberMe" true-label="1" false-label="0">记住账号</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import { mapActions } from 'vuex'
import { setToken } from '@/utils/auth'

export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        rememberMe: '0',
        token: ''
      },
      loginRules: {
        username: [{ required: true, validator: this.validateUsername }],
        password: [{ required: true, validator: this.validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  created() {
    // this.unLoginToken()
  },
  mounted() {
  // this.$store.dispatch('checkLogin')
  },
  methods: {
    ...mapActions({
      fetch: 'login/checkLogin',
      login: 'login/LoginByUsername'
    }),
    unLoginToken() {
      this.fetch().then(res => {
        this.loginForm.token = res.data.token
      })
    },
    validateUsername(rule, value, callback) {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    },
    validatePass(rule, value, callback) {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    },
    onBlur() {
      this.loginForm.username = this.loginForm.username.trim()
    },
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.login(this.loginForm).then((res) => {
            this.$router.push({ path: '/' })
            this.loading = false
            if (+res.code === 0) {
              setToken(res.token)
              this.$store.commit('login/SET_TOKEN', res.token)
              this.$router.push({ path: '/' })
            } else {
              this.unLoginToken()
              this.$message({
                message: res.message,
                type: 'warning'
              })
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
