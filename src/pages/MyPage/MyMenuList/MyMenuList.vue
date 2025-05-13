<template>
  <ul class="my-menu-list">
    <li class="list-item">
      <img
        src="/src/assets/img/myPage/orderDeliveryBtn.png"
        alt=""
        class="item-icon"
      />
      <span class="item-label"
        >주문/배송 조회<img
          class="alarm-point"
          src="/src/assets/img/icon/alarmPoint.png"
          alt=""
      /></span>
    </li>
    <li class="list-item">
      <img
        src="/src/assets/img/myPage/couponBtn.png"
        alt=""
        class="item-icon"
      />
      <span class="item-label"
        >나의쿠폰<img
          class="alarm-point"
          src="/src/assets/img/icon/alarmPoint.png"
          alt=""
      /></span>
    </li>
    <li class="list-item" @click="paymentmanagement01">
      <img src="/src/assets/img/myPage/Frame.png" alt="" class="item-icon" />
      <span class="item-label"
        >결제관리<img
          class="alarm-point"
          src="/src/assets/img/icon/alarmPoint.png"
          alt=""
      /></span>
    </li>
    <li class="list-item">
      <img
        src="/src/assets/img/myPage/notificationBtn.png"
        alt=""
        class="item-icon"
      />
      <span class="item-label"
        >공지사항<img
          class="alarm-point"
          src="/src/assets/img/icon/alarmPoint.png"
          alt=""
      /></span>
    </li>
    <li class="list-item">
      <img src="/src/assets/img/myPage/termsBtn.png" alt="" class="item-icon" />
      <span class="item-label"
        >약관정보<img
          class="alarm-point"
          src="/src/assets/img/icon/alarmPoint.png"
          alt=""
      /></span>
    </li>
    <li class="list-item version">
      <img
        src="/src/assets/img/myPage/versionBtn.png"
        alt=""
        class="item-icon"
      />
      <span class="item-label"
        >버전정보
        <img
          class="alarm-point"
          src="/src/assets/img/icon/alarmPoint.png"
          alt=""
        />
      </span>

      <span class="item-value">1.4.0</span>
    </li>
  </ul>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function paymentmanagement01() {
  router.push('/my/paymentmanagement01');
}
function PaymentManagement02() {
  router.push('/my/paymentmanagement02');
}
function PaymentManagement03() {
  router.push('/my/paymentmanagement03');
}
function PaymentManagement04() {
  router.push('/my/paymentmanagement04');
}
function PaymentManagement05() {
  router.push('/my/paymentmanagement05');
}
function PaymentManagement06() {
  router.push('/my/paymentmanagement06');
}
</script>

<style scoped>
.my-menu-list {
  width: 100%;
  height: 100%;
  margin-top: 20px;
}
.my-menu-list .list-item {
  display: flex;
  align-items: center;
  padding: 16px 8px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
}
.my-menu-list .list-item .item-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}
.my-menu-list .list-item .item-label {
  flex: 1;
  position: relative;
}
.my-menu-list .list-item.version .item-value {
  color: #888;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}
.alarm-point {
  display: none;
  position: absolute;
  width: 4px;
  height: 4px;
}
</style>
