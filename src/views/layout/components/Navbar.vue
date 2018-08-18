<template lang="pug">
  #topUserInfo
    ul
      li(@click='registerUser') SIGN IN
      li(@click='loginUser') LOG IN
    el-menu.navbar(mode="horizontal" v-if='hasLogined')
      el-dropdown.avatar-container(trigger="click")
        .avatar-wrapper
          <!--<img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">-->
          span admin
          i.el-icon-arrow-down
        el-dropdown-menu.user-dropdown(slot="dropdown")
          router-link(class="inlineBlock" to="/")
            el-dropdown-item 个人中心
          el-dropdown-item(divided)
            span(@click="logout" style="display:block;") 退出
    AppRegister
    AppLogin
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppRegister from './AppRegister'
import AppLogin from './AppLogin'
export default {
  components: {
    AppRegister,
    AppLogin
  },
  data() {
    return {
      hasLogined: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    ...mapActions({
      logOut: 'login/LogOut'
    }),
    loginUser() {},
    registerUser() {},
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.logOut().then((res) => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 56px;
  line-height: 56px;
  border-radius: 0px !important;
  position: absolute;
  right: 10px;
  top: -56px;
  z-index: 99999;
  padding: 0 19px;
  background-color: rgba(0,0,0,0);
  border-bottom: 0 none;
  .el-dropdown{
    color: #fff
  }
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 56px;
    display: inline-block;
    .avatar-wrapper {
      cursor: pointer;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

