<template>
  <swiper class="swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" @load="imageLoadSwiper" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoadSwiper() {
      this.$emit("imageLoadSwiper");
    },
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
</style>