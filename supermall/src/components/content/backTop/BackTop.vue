<template>
  <div class="back-top">
    <img src="../../../assets/img/common/backtop.svg" alt="" />
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.back-top {
  position: fixed;
  z-index: 2;
  right: 8px;
  bottom: 53px;
  width: 30px;
  height: 30px;
  border-radius: 50% 50%;
  background-color: var(--color-tint);
}
.back-top img {
  width: 30px;
  height: 30px;
}
</style>