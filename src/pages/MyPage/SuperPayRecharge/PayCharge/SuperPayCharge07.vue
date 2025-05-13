<template>
  <div class="loading">
    <div class="loading-box">
      <img
        src="/src/assets/img/icon/lodingLogo.svg"
        alt="슈퍼페이 로고"
        class="loading-icon"
      />
      <p class="loading-text">슈퍼페이 충전 중..</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: rgba(34, 34, 34, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-box {
  background: #424242;
  border-radius: 12px;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading-icon {
  width: 48px;
  height: 48px;
}

.loading-text {
  margin-top: 20px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
}
</style>
