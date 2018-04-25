<template>
  <div id="app">
      <div class="main-wrapper">
          <sidenav></sidenav>
          <router-view></router-view>
      </div>
      <!--<div class="sidebar-overlay" data-reff="#sidebar"></div>-->
  </div>
</template>

<script>
    import sidenav from './components/headerMenu.vue'
    export default {
        components : {
            sidenav
        }
    }
</script>

<style>

</style>
