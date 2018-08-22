<template lang="pug">
#km-addressAdd
  h2 新增地址
  .editaddress-wrap
    el-form.registerForm(:model="addressForm" :rules='rules' status-icon label-width="100px" ref="addressForm" label-position='left')
      el-form-item.w50(prop="userName" label='username:')
        el-input(type="text" v-model="addressForm.userName" placeholder="userName")
      el-form-item.w50(prop="userTelephone" label='telephone:')
        el-input(type="text" v-model="addressForm.userTelephone" placeholder="userTelephone")
      el-form-item(prop="country" label='country:')
        el-input(type='text' v-model="addressForm.country" placeholder="country")
      el-form-item(prop="address" label='address:')
        el-input(type='text' v-model="addressForm.address" placeholder="address")
      el-button.rgsdBtn(v-on:click="submitForm('addressForm')") SAVE
</template>

<script>
  export default {
    name: 'km-addressAdd',
    data() {
      return {
        addressForm: {
          userName: '',
          userTelephone: '',
          country: '',
          address: ''
        },
        rules: {
          userName: [
            { required: true, message: 'please input your name', trigger: 'blur' }
          ],
          userTelephone: [
            { required: true, message: 'please input your telephone', trigger: 'blur' }
          ],
          country: [
            { required: true, message: 'please input your country', trigger: 'blur' }
          ],
          address: [
            { required: true, message: 'please input your address', trigger: 'blur' }
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
#km-addressAdd
  background #fff
  box-shadow 0 2px 9px rgba(0, 0, 0, .15)
  width 99%
  margin 0 auto
  border-radius 5px
  overflow hidden
  h2
    line-height 110px
    font-size 36px
    padding 0 50px
    text-align left
    a
      float right
      color #FE3927
      font-size 14px
  .editaddress-wrap
    position relative
    overflow: hidden
    padding 0 30px 30px
    .registerForm
      margin 20px
      .el-form-item__label
        line-height 60px
        font-size 16px
        color #000
      .el-form-item
        float left
        width 100%
        margin-bottom 30px
        .el-input__inner
          height 60px
          line-height 60px
          box-shadow rgba(0,0,0,0.14) 0 2px 4px
      .w50
        width 48%
        &:nth-child(1)
          margin-right 4%
      .dealAndprivacy
        float left
        width 100%
        line-height 18px
        margin 12px auto 20px
        color #262626
        font-size 12px
        text-align center
        a
          color #29ABE2
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
