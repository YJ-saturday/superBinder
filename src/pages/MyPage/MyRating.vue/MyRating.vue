<template>
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
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const progress = ref(30);
</script>

<style scoped>
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
</style>
