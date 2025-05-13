<template>
  <div class="welcome-box">
    <p class="welcome-text"><strong>홍길동</strong>님, 안녕하세요.</p>
    <button type="button" class="setting-btn" title="설정" @click="goNextPage">
      <i class="setting-icon">
        <img src="/src/assets/img/icon/setting.png" alt="" />
      </i>
      <span class="sr-only">설정</span>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goNextPage() {
  router.push('/none');
}
</script>

<style scoped>
.welcome-box {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px 30px;
  border-radius: 50px;
  background: #f5f5f5;
  margin-top: 20px;
}
.welcome-box .welcome-text {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.welcome-box .setting-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.welcome-box .setting-btn .setting-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: cover;
  background-position: center;
}
.welcome-box .setting-btn img {
  width: 24px;
  height: 24px;
}
.welcome-box .setting-btn .sr-only {
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
