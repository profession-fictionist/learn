<template>
  <div id="page">
    <div class="userImg">
      <img src="../../../assets/img/profile/userImg.svg" alt="" />
      <span>职业小说家</span>
    </div>
    <div class="about">
      <div>
        <div class="item">
          <img src="../../../assets/img/profile/collect.svg" alt="" />
          <div>收藏</div>
        </div>
      </div>
      <div>
        <div class="item">
          <img src="../../../assets/img/profile/take.svg" alt="" />
          <div>订阅</div>
        </div>
      </div>
      <div>
        <div class="item">
          <img src="../../../assets/img/profile/footprint.svg" alt="" />
          <div>足迹</div>
        </div>
      </div>
      <div>
        <div class="item">
          <img src="../../../assets/img/profile/money.svg" alt="" />
          <div>零钱</div>
        </div>
      </div>
    </div>
    <div class="indent">
      <div class="indent-all">
        <div>我的订单</div>
        <div>全部 ></div>
      </div>
      <div class="indent-content">
        <div>
          <div class="indent-item">
            <img src="../../../assets/img/profile/payment.svg" alt="" />
            <div>待付款</div>
          </div>
        </div>
        <div>
          <div class="indent-item">
            <img src="../../../assets/img/profile/send.svg" alt="" />
            <div>待发货</div>
          </div>
        </div>
        <div>
          <div class="indent-item">
            <img src="../../../assets/img/profile/shipments.svg" alt="" />
            <div>待收款</div>
          </div>
        </div>
        <div>
          <div class="indent-item">
            <img src="../../../assets/img/profile/tuikuan.svg" alt="" />
            <div>退款/售后</div>
          </div>
        </div>
      </div>
    </div>
    <div class="VIP"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#page {
  background-color: pink;
}
.userImg {
  position: relative;
  height: 75px;
  padding: 10px;
  background-color: #ff8198;
}
.userImg img {
  background-color: #f8f8f8;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.userImg span {
  position: absolute;
  top: 26px;
  left: 80px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}
.about {
  display: flex;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 60px;
  background-color: #fff;
}
.about div {
  flex: 1;
}
.about img {
  width: 25px;
  margin-top: 7px;
  vertical-align: middle;
}
.item {
  width: fit-content;
  margin: 2px auto;
}
.indent {
  margin: 1px;
  margin-top: 2px;

  height: 100px;
  background-color: #f8f8f8;
  border-radius: 10px;
}
.indent-all {
  display: flex;
  padding: 3px;
}
.indent-all :first-child {
  flex: 1;
}
.indent-all :last-child {
  width: 50px;
}
.indent-content {
  margin-top: 10px;
  display: flex;
}
.indent-content > div {
  flex: 1;
}
.indent-item img {
  display: block;
  margin: 0 auto;
  width: 25px;
  height: 25px;
}
.indent-item div {
  margin-top: 5px;
  text-align: center;
}
.VIP {
  height: 1px;
  margin-top: 1px;
}
</style>