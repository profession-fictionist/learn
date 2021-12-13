<template>
  <div class="bottomBar">
    <div class="bar-item bar-left">
      <div>
        <img
          src="../../../assets/img/detail/service.svg"
          alt=""
          class="service"
        />
        <p class="text">客服</p>
      </div>
      <div>
        <img src="../../../assets/img/detail/shop.svg" alt="" class="service" />
        <p class="text">店铺</p>
      </div>
      <div>
        <img
          src="../../../assets/img/detail/collect.svg"
          alt=""
          class="service"
        />
        <p class="text">收藏</p>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

<style scoped>
.bottomBar {
  height: 49px;
  position: relative;
  bottom: 43px;
  background-color: #fff;
  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 3px auto 3px;
}

.bar-left .service {
  width: 26px;
  height: 26px;
  margin-top: 5px;
  vertical-align: middle;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
}
.sport-ball {
  position: absolute;
  left: 225px;
  bottom: 20px;
}
</style>