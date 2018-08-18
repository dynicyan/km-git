<template lang="pug">
  #topUserInfo
    ul.unloginArea(v-if='hasLogined')
      li(@click='registerUser') REGISTERED
      li /
      li(@click='loginUser') LOG IN
    .loginbar(v-if='!hasLogined')
      .userInfos
        i.icon-bugCar
          b.carNums 
            em 12
      .userInfos
        i.icon-infos
          b.infoNums 
            em 12
      el-dropdown.avatar-container(trigger="click")
        .avatar-wrapper
          img.user-avatar(src="../../../../assets/picTx.png")
          //- span admin
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
import AppRegister from '../AppRegister'
import AppLogin from '../AppLogin'
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

<style lang="stylus">
 #topUserInfo
  position absolute
  top 0
  right 0
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
</style>
