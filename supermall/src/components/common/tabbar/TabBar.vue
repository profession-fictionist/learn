<template>
  <div class="tabbar">
    <slot />
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";

export default {
  setup() {},
  components: {
    TabBarItem,
  },
};
</script>

<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
}
</style>