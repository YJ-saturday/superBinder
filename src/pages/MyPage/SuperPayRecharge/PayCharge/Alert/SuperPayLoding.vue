<template>
  <div class="superpay-loading">
    <div class="superpay-loading__box">
      <img
        src="/src/assets/img/icon/superpay-logo.svg"
        alt="슈퍼페이 로고"
        class="superpay-loading__icon"
      />
      <p class="superpay-loading__text">슈퍼페이 충전 중..</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.superpay-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.superpay-loading__box {
  background: #424242;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.superpay-loading__icon {
  width: 48px;
  height: 48px;
}

.superpay-loading__text {
  margin-top: 12px;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
}
</style>
