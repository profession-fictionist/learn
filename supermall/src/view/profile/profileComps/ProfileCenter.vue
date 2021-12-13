<template>
  <div id="item">
    <ul class="item-list">
      <li
        v-for="(item, index) in itemContent"
        :key="index"
        @click="itemClick(index)"
        :class="{ active: currentIndex === index }"
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
      itemContent: [
        "我的快递",
        "收货地址",
        "我的评价",
        "我的问答",
        "我的预定",
        "我的预约",
        "领券中心",
        "官方客服",
        "闲置换钱",
        "高价回收",
      ],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      return (this.currentIndex = index);
    },
  },
};
</script>
<style scoped>
.item-list li {
  height: 60px;
  line-height: 60px;
  padding: 0 5px;
  border-bottom: 1px solid #f3f3f3;
  background-color: #fff;
}
.active {
  color: #ff8198;
}
</style>