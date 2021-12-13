/**
 * mixin混入
 *  */
import { debouce } from "./utils"
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 防抖动使用
    const refresh = debouce(this.$refs.scroll.refresh, 20);
    // 当组件创建时监听 GoodsListItem 图片加载状态
    this.itemImgListener = () => {
      refresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
}