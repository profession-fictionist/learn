<template>
  <div id="home">
    <!-- 导航模块 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 5.流行/新款/精选 copr -->
    <tab-control
      :titels="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlOne"
      class="tab_control"
      v-show="isTabFixed"
    />

    <better-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播模块 UI库：mint-ui库 iview库 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />

      <!-- 推荐模块 -->
      <home-recommend-view :recommend="recommend" />

      <!-- 热门模块 -->
      <feature />

      <!-- 5.流行/新款/精选 -->
      <!-- :class="{fixed:isTabFixed}" 当isTabFixed 为true时，应用fixed，反之不用 -->
      <tab-control
        :titels="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControlTwo"
      />

      <!-- 6.商品详情 -->
      <goods-list :goods="showGoods" />
    </better-scroll>

    <!-- 放回顶部 -->
    <!-- .native修饰符 监听组件的点击 -->
    <!-- @click.native="backClick"  -->
    <back-top />
  </div>
</template>

<script>
/**
 * Home子组件
 */
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import HomeRecommendView from "./childComponents/HomeRecommend.vue";
import Feature from "./childComponents/Feature.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

/**
 * 公共文件
 */
import NavBar from "components/content/navbar/NavBar.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import BetterScroll from "components/common/betterscroll/BetterScroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
import { itemListenerMixin } from "common/mixin";

/**
 * 网络请求文件
 */
import { getHomeMultidata, getHomeGoods } from "network/home";

import { debouce } from "common/utils";
export default {
  components: {
    /**
     * Home子组件
     */
    HomeSwiper,
    HomeRecommendView,
    Feature,
    GoodsList,

    /**
     * 公共文件
     */
    NavBar,
    TabControl,
    BetterScroll,
    BackTop,
  },
  /**
   * mixin混入
   */
  mixins: [itemListenerMixin],
  data() {
    return {
      /**
       * 轮播/热门数据
       */
      banners: [],
      recommend: [],

      /**
       * 商品详情数据
       */
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      itemImgListener: null,
    };
  },
  deactivated() {
    // 取消全局事件监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },

  /**
   * created() 当组件创建时发送网络请求
   */
  created() {
    // 1.请求轮播图/推荐模块数据(具体实现在 methods ,调用时需要添加 this)
    this.getHomeMultidata();
    // 2.请求商品数据(具体实现在 methods ,调用时需要添加 this)
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      //解决数据展示不变而 tabControlOne 不变的问题
      this.$refs.tabControlOne.currentIndex = index;
      this.$refs.tabControlTwo.currentIndex = index;
    },
    // 上拉加载更多的方法
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 监听滚动状态
    contentScroll(position) {
      // 判断BackControl是否显示(放回顶部)
      // 决定 tabControl 是否吸顶 (position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // swiperImageLoad 方法
    swiperImageLoad() {
      // 2.获取 tabControl 的 offsetTop
      this.tabOffsetTop = this.$refs.tabControlTwo.$el.offsetTop;
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // 声明变量接受数据 防止 created() 回调函数执行完数据被回收
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp(); //完成上拉加载更多
      });
    },
    // backClick() {
    //   console.log("监听组件点击");
    //   this.$refs.scroll.scrollTo(0, 0);
    // },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.nav-bar {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 10;
}
.content {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.tab_control {
  position: relative;
  z-index: 11;
}
</style>