<template>
  <div class="wrap">
    <div class="model">
      <div class="header">
        <span>약관정보</span>
        <img src="/src/assets/img/icon/cross.svg" alt="뒤로가기" />
      </div>
      <div class="item">
        <p>[현행] 2025년 02월 24일 시행안</p>
        <p>2025년 01월 17일 시행안</p>
        <p>2024년 11월 29일 시행안</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.push('');
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: end;
}

.wrap .model {
  width: 100%;
  height: 272px;
  background: #fff;
  border-radius: 16px 16px 0px 0px;
  padding: 24px;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.header {
  height: 62px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin-bottom: 8px;
}
.header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.header span {
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.item {
  text-align: start;
  color: #222;

  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.item p {
  padding: 12px 8px;
  border-bottom: 1px solid #eee;
}
</style>
