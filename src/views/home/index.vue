<template lang="pug">
  #km-home
    
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'km-home',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  mounted() {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
