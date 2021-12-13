<template>
  <div id="app">
    <!-- keep-alive 的属性需要在组件中添加 name 属性 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "./components/content/maintabbar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/css/normalize.css";
</style>
