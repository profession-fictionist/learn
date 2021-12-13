<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" />
      <span>全选</span>
    </div>
    <div class="totalPrice">合计：{{ totalPrice }}</div>
    <div class="calculate">结算：{{ checkLength }}</div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 30px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  line-height: 30px;
  /* #FAC6CF  #f9f9f9*/
  background-color: #f9f9f9;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 65px;
}
.check-button {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.totalPrice {
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: #ff8198;
  color: #fff;
  font-weight: 600;
  text-align: center;
}
</style>