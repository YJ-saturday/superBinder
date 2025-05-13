<template>
  <div class="wrap">
    <div class="main">
      <img src="/src/assets/img/icon/lodingLogo.svg" alt="" />
      <p>불러오는 중..</p>
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
  align-items: center;
  padding: 24px;
}
.wrap .main {
  width: 130px;
  height: 138px;
  border-radius: 30px;
  background: rgba(34, 34, 34, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 24px;
}
.wrap .main img {
  width: 48px;
  height: 48px;
}
.wrap .main p {
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
</style>
