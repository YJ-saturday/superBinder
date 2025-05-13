<template>
  <div class="title">
    <img src="/src/assets/img/icon/cross.svg" alt="뒤로가기" @click="goBack" />
    <span>등급 안내</span>
  </div>
  <div class="wrap">
    <div class="rating-card">
      <div class="card-con01">
        <div class="bg">
          <img src="/src/assets/img/icon/rating.png" alt="" />
        </div>
        <div class="card-title">
          <p>현재 Bronze 등급입니다!</p>
          <span>silver등급까지 2,760,000원 남았어요!</span>
        </div>
      </div>
      <div class="card-con02">
        <div class="card-bar-wrapper">
          <div class="card-bar">
            <div class="bar" :style="{ width: progress + '%' }"></div>
            <p class="bar-label" :style="{ left: progress + '%' }">현재</p>
          </div>
        </div>
        <div class="bar-total">
          <span>3,000,000원</span>
        </div>
        <div class="card-txt">
          <p>등급 산정 기간 <span>2025.02.03 ~2025.04.30 </span></p>
          <p>Silver 달성까지 <span>2,760,000원 남음 </span></p>
        </div>
      </div>
    </div>
    <div class="my-rating">
      <div class=""></div>
      <div></div>
    </div>

    <div class="membership">
      <p class="membership-title">나의 등급</p>
      <div class="my-rating">
        <ul class="membership-levels">
          <li class="membership-level">
            <img
              src="/src/assets/img/rating/guideBronze.svg"
              alt="Silver 아이콘"
            />
          </li>
          <li class="membership-level">
            <img
              src="/src/assets/img/rating/guideSeliver.svg"
              alt="Silver 아이콘"
            />
          </li>
          <li class="membership-level">
            <img
              src="/src/assets/img/rating/guideGold.svg"
              alt="Silver 아이콘"
            />
          </li>
          <li class="membership-level">
            <img
              src="/src/assets/img/rating/guidePlatinum.svg"
              alt="Silver 아이콘"
            />
          </li>
        </ul>

        <div class="membership-card">
          <p class="card-level">Bronze</p>
          <dl class="card-details">
            <dt>조건</dt>
            <dd>회원가입 시 / 기본</dd>
            <dt>등급혜택</dt>
            <dd>적립율 0.5%</dd>
            <dd>배송비 10,000원<br />1회 구매 시 20만원 이상 무료</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const progress = ref(30);
</script>

<style scoped>
.wrap {
  width: 100%;
  padding: 0px 24px;
}
.title {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  justify-content: end;
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
.rating-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  border-radius: 20px;
  border: 1px solid #e2e2e2;
  padding: 24px 16px;
}
.rating-card .card-con01 {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.rating-card .card-con01 .bg {
  background: #ddf9ff;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rating-card .card-con01 .bg img {
  width: 58px;
  height: 46px;
}
.rating-card .card-con01 .card-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
}
.rating-card .card-con01 .card-title p {
  margin: 0;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}
.rating-card .card-con01 .card-title span {
  margin-top: 4px;
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
}
.rating-card .card-con02 {
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.rating-card .card-con02 .card-bar-wrapper {
  width: 100%;
}
.rating-card .card-con02 .card-bar-wrapper .card-bar {
  position: relative;
  width: 100%;
  height: 8px;
  background: #efefef;
  overflow: visible;
  border-radius: 90px;
}
.rating-card .card-con02 .card-bar-wrapper .card-bar .bar {
  height: 100%;
  background: #2866ec;
  border-radius: 90px;
}
.rating-card .card-con02 .card-bar-wrapper .card-bar .bar-label {
  position: absolute;
  top: -20px;
  transform: translateX(-50%);
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  white-space: nowrap;
}
.rating-card .card-con02 .bar-total {
  margin-top: 4px;
  width: 100%;
  text-align: right;
}
.rating-card .card-con02 .bar-total span {
  color: #888;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
}
.rating-card .card-con02 .card-txt {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.rating-card .card-con02 .card-txt p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
}
.rating-card .card-con02 .card-txt span {
  color: #626262;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.membership-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
}
.membership-levels {
  display: flex;
  gap: 12px;
  margin: 20px 0px;
}
.membership-card {
  padding: 16px 24px;
  border-radius: 20px;
  background: #f5f5f5;
  margin-bottom: 37px;
}
.card-level {
  margin-bottom: 16px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.card-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.membership-card dt {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.membership-card dd {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
</style>
