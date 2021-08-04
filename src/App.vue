<template>
  <div id="app">
    <home-header></home-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HomeHeader from 'components/home-header/index.vue'
import Tab from 'components/tab/index.vue'

export default {
  components: {
    HomeHeader,
    Tab,
  },
}
</script>

<style lang="scss">

</style>
