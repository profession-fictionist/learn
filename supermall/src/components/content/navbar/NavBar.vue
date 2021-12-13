<template>
  <div class="navbar">
    <div class="left"><slot name="left" /></div>
    <div class="center"><slot name="center" /></div>
    <div class="right"><slot name="right" /></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 44px;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
  font-weight: 600;
}
</style>