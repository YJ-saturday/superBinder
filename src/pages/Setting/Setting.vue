<template>
  <div class="header">
    <div class="title">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>설정</span>
    </div>
  </div>
  <div class="wrap">
    <section class="section">
      <h2 class="section-title">계정</h2>
      <ul class="setting-list">
        <li class="setting-item">
          <span class="item-label" @click="goAccountManagement">계정 관리</span>
        </li>
        <li class="setting-item">
          <span class="item-label" @click="goDeliveryAddress">배송지 관리</span>
        </li>
        <li class="setting-item">
          <span class="item-label">회원코드</span>
          <div class="item-value">
            <span>ADSE12452</span>
            <img src="/src/assets/img/icon/copyCard.svg" alt="" />
          </div>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section-title">알림</h2>
      <ul class="setting-list">
        <li class="setting-item">
          <span class="item-label">푸시 알림</span>
          <label class="switch">
            <input type="checkbox" checked />
          </label>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section-title">정책</h2>
      <ul class="setting-list">
        <li class="setting-item">
          <span class="item-label">개인정보처리방침</span>
        </li>
        <li class="setting-item">
          <span class="item-label">이용약관</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.push('/my');
}

function goAccountManagement() {
  router.push('/setting/account/management');
}
function goDeliveryAddress() {
  router.push('/setting/Delivery/Address');
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1000;
  width: 100%;
}
.title {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.title img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.title span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.wrap {
  width: 100%;
  background: #fff;
  padding: 20px 24px 0px 24px;
}
.section-title {
  margin-top: 40px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px;
  border-bottom: 1px solid #eee;
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.section-title,
.item-label {
  display: flex;
  flex: 1;
  cursor: pointer;
}
.item-value {
  display: flex;
  gap: 4px;
}
.switch {
  position: relative;
  width: 56px;
  height: 32px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 20px;
  transition: 0.2s;
}
.slider::before {
  position: absolute;
  content: '';
  height: 30px;
  width: 30px;
  left: 1px;
  bottom: 1px;
  background: #fff;
  border-radius: 50%;
  transition: 0.2s;
}
input:checked + .slider {
  background-color: #2866ec;
}
input:checked + .slider::before {
  transform: translateX(24px);
}
</style>
