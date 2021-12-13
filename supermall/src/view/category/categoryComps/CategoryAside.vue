<template>
  <div>
    <ul class="activeGoods">
      <li
        v-for="(item, index) in goodsList"
        :key="index"
        @click="Color(index)"
        :class="{ active: ativeColor === index }"
        class="goodsList"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: [
        "上衣",
        "裤子",
        "裙子",
        "内衣",
        "女鞋",
        "包包",
        "运动",
        "配饰",
        "美妆",
        "个护",
        "男鞋",
        "医药保健",
        "酒水饮料",
        "汽车生活",
        "礼品鲜花",
        "宠物生活",
        "二手商品",
        "钟表珠宝",
        "生活旅行",
      ],
      ativeColor: 0,
    };
  },
  methods: {
    Color(index) {
      this.ativeColor = index;
    },
  },
};
</script>

<style scoped>
.activeGoods {
  display: flex;
  flex-direction: column;
}

.goodsList {
  width: 88px;
  height: 46px;
  text-align: center;
  line-height: 46px;
  background-color: #f8f8f8;
}
.active {
  color: #ff8198;
}
</style>