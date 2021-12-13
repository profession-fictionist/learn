<template>
  <div class="cart-list">
    <better-scroll class="content" ref="scroll">
      <!-- <div v-for="(item, index) in cartList" :key="index">{{ item }}</div> -->
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :item-info="item"
      />
    </better-scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BetterScroll from "../../../components/common/betterscroll/BetterScroll.vue";
import CartListItem from "./CartListItem.vue";

export default {
  computed: {
    ...mapGetters(["cartList"]),
  },
  components: {
    BetterScroll,
    CartListItem,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style scoped>
.content {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>