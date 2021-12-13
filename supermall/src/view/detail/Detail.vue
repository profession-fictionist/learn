<template>
  <div id="detail">
    <!-- 顶部导航 -->
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
    ></detail-nav-bar>

    <better-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <!-- 轮播图 -->
      <detail-swiper
        :topImages="topImages"
        @imageLoadSwiper="imageLoadSwiper"
      />
      <!-- 商品信息 -->
      <detail-base-info :goods="goods" />
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop" />
      <!-- 保存商品的详情数据 -->
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <!-- 获取商品参数 -->
      <!-- :itemParam 往子组件传递一个属性， itemParam 父组件的参数-->
      <detail-param-info ref="params" :itemParam="itemParam" />
      <!-- 评论 -->
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <!-- 推荐 -->
      <goods-list ref="recommend" :goods="recommends" />
    </better-scroll>
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
/**
 * 子组件
 */
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetaiShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailItemParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

/**
 * 公共组件
 */
import BetterScroll from "components/common/betterscroll/BetterScroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import { itemListenerMixin } from "common/mixin";

import {
  getDetail,
  Goods,
  Shop,
  itemParam,
  getRecommend,
} from "network/detail";
import { debouce } from "common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    BetterScroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  /**
   * mixin混入
   */
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParam: {},
      commentInfo: {},
      recommends: [],
      themeTopY: [],
      getThemeTopY: null,
      itemImgListener: null,
    };
  },
  methods: {
    imageLoad() {
      // this.newRefresh();
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    imageLoadSwiper() {
      this.$refs.scroll.refresh();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 500);
    },
    contentScroll(position) {
      // 需求：当滚动到某个内容时，主题显示不同的颜色
      // 1.获取 position的值
      const positionY = -position.y;
      // 2.positionY 和主体中值进行对比
      // [商品 offsetTop,参数offsetTop,评论offsetTop,推荐offsetTop]
      // position 在 0 和参数offsetTop 之间，index = 0
      // position 在参数offsetTop 和评论offsetTop 之间，index = 1
      // position 在评论offsetTop 和推荐offsetTop，index = 2
      // position 超过offsetTop，index = 3
      for (let i in this.themeTopY) {
        console.log(i);
      }
    },
    addToCart() {
      // 1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // // 2.将商品添加到购物车
      this.$store.dispatch("addToCart", product);
    },
  },

  created() {
    // 1.保存获取的 iid
    this.iid = this.$route.params.iid;
    // 2.根据 iid 请求详情数据
    getDetail(this.iid).then((res) => {
      // 中转
      const data = res.result;
      // 2.1.获取顶部轮播图片的数据
      this.topImages = data.itemInfo.topImages;
      // 2.2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取商品参数
      this.itemParam = new itemParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.获取评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }

      // 获取主题到内容的高度 offsetTop
      // nextTick() 当组件渲染完成会回调一次该函数
      // 问题：根具最新的数据，对应的 DOM 已经被渲染出来，但图片依旧没有加载完
      // 即：offsetTop 不包含所有图片高度
      // offsetTop 值不准确通常是图片未加载问题
      // this.$nextTick(() => {
      //   this.themeTopY = [];
      //   this.themeTopY.push(0);
      //   this.themeTopY.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopY);
      // });
    });
    // 3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
    // 4.给 getThemeTopY 赋值 ,对getThemeTopY 进行debouce()防抖
    this.getThemeTopY = debouce(() => {
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
    });
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.content {
  /* position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px; */
  height: calc(100% - 49px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>