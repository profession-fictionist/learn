<template>
  <div class="tabbaritem" @click="btnItem">
    <div v-if="isActive">
      <slot name="itemImgActive" />
    </div>
    <div v-else>
      <slot name="itemImg" />
    </div>
    <div :style="textActive">
      <slot name="itemText" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    textActive() {
      return this.isActive ? { color: "#ff8198" } : {};
    },
  },
  props: {
    path: String,
  },
  methods: {
    btnItem() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tabbaritem {
  height: 49px;
  flex: 1;
  font-size: 14px;
  text-align: center;
}
.tabbaritem img {
  margin-top: 4px;
  width: 23px;
  height: 23px;
  vertical-align: middle;
}
.textColor {
  color: #ff8198;
}
</style>