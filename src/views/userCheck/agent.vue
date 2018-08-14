<template lang="pug">
  #checkAgent
    h2.agenTitle 审核代理商资质
      span {{num}} 条待审核
</template>

<script>
  export default {
    name: 'checkAgent',
    data() {
      return {
        num: 2
      }
    },
    created() {},
    methods: {

    }
  }
</script>

<style scoped lang="stylus">
  #checkAgent
    h2.agenTitle
      span
        margin-left 10px
        font-size 16px
        font-weight normal
</style>
