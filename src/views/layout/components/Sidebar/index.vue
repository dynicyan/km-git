<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      class="el-menu-demo" 
      mode="horizontal"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#004167"
      text-color="#BFBFBF"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in permission_routers" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
    <Navbar></Navbar>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import Navbar from './Navbar'

export default {
  components: {
    SidebarItem,
    Navbar
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      // return !this.sidebar.opened
      return true
    }
  },
  created() {
  }
}
</script>
<style lang="stylus">
  .el-scrollbar__view
    max-width 1200px
    margin 0 auto
    position relative
</style>
