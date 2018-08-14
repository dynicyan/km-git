<template lang="pug">
  #adUnitCheck
    h3 广告单元审核
      span 10条待审核
      span 3条待二次审核
</template>

<script>
  export default {
    name: 'adUnitCheck',
    data() {
      return {
        unitParams: {
          page: 1,
          page_size: 10,
          date_type: 2,
          status: 1,
          keyword: '',
          type: 'unit',
          current_page: 1,
          _: +new Date()
        }
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus">

</style>
