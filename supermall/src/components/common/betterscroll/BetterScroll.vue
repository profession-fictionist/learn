<template>
  <!-- ref：如果是绑定在组件中，那么通过 this.$refs.refname 获取到的是一个组件对象-->
  <!-- ref：如果是绑定在普通的元素中，那么通过 this.$refs.refname 获取到的是一个元素对象  -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    /**
     * 创建 BScroll 对象
     */
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    console.log(this.scroll);
    /**
     * 监听滚动的位置
     */
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    /**
     * 监听上拉事件
     */
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("上拉加载更多");
        this.$emit("pullingUp");
      });
    }

    /**
     *  回到顶部
     */
    // this.scroll.scrollTo(0, 0);
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      // 逻辑与 当 this.scroll 为真，执行 this.scroll.refresh()，反之不执行
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
</style>