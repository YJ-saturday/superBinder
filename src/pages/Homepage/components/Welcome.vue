<template>
  <div class="welcome-box">
    <p class="welcome-text"><strong>홍길동</strong>님, 안녕하세요.</p>
    <button type="button" class="setting-btn" title="설정">
      <i class="setting-icon">
        <img src="../../../img/icon/setting.png" alt=""
      /></i>
      <span class="sr-only">설정</span>
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
.welcome-box {
  width: 327px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px 30px;
  border-radius: 50px;
  border-radius: 50px;
  background: #f5f5f5;
}
.welcome-text {
  color: #222;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.setting-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.setting-btn img {
  width: 24px;
  height: 24px;
}
.setting-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("@/assets/img/icon/setting.png"); /* 실제 경로에 맞게 */
  background-size: cover;
  background-position: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
