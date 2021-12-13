<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="../../../assets/img/cart/Tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  width: 18px;
  height: 18px;
  border: 2px solid #e6e6e6;
  border-radius: 50%;
}
.check-button img {
  width: 13px;
}
.check {
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>