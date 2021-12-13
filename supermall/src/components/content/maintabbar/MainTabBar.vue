<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="../../../assets/img/tabbar/home.svg" alt="" slot="itemImg" />
        <img
          src="../../../assets/img/tabbar/homeActive.svg"
          alt=""
          slot="itemImgActive"
        />
        <div slot="itemText">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img
          src="../../../assets/img/tabbar/category.svg"
          alt=""
          slot="itemImg"
        />
        <img
          src="../../../assets/img/tabbar/categoryActive.svg"
          alt=""
          slot="itemImgActive"
        />
        <div slot="itemText">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img
          src="../../../assets/img/tabbar/shopcart.svg"
          alt=""
          slot="itemImg"
        />
        <img
          src="../../../assets/img/tabbar/shopcartActive.svg"
          alt=""
          slot="itemImgActive"
        />
        <div slot="itemText">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img
          src="../../../assets/img/tabbar/profile.svg"
          alt=""
          slot="itemImg"
        />
        <img
          src="../../../assets/img/tabbar/profileActive.svg"
          alt=""
          slot="itemImgActive"
        />
        <div slot="itemText">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>