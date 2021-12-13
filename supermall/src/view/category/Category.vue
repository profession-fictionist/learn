<template>
  <div>
    <!-- 顶部导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>
    <category-aside />
  </div>
</template>

<script>
import NavBar from "../../components/content/navbar/NavBar.vue";
import CategoryAside from "./categoryComps/CategoryAside.vue";

export default {
  components: {
    NavBar,
    CategoryAside,
  },
};
</script>
<style scoped>
.nav-bar {
  position: sticky;
  top: 0;
  background-color: var(--color-tint);
  color: #fff;
}
</style>