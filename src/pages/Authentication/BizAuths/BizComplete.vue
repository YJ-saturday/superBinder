<template>
  <div class="biz-complete-title">
    <div class="biz-complete-header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="leftAllow"
        @click="goBack"
      />
      <span>회원가입 완료</span>
    </div>
    <div class="main-content">
      <img
        src="/src/assets/img/Authentication/completeIcon.png"
        alt="completeIcon"
      />
      <p>환영합니다. 회원님</p>
      <span>슈퍼바인더의 회원이<br />되신 것을 진심으로 환영합니다.</span>
    </div>
    <div class="btn">
      <button type="submit" class="btn-submit" @click="goNextPage">확인</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.push('/bizauth/Bizpw');
}
function goNextPage() {
  router.push('/login');
}
</script>

<style scoped>
.biz-complete-title {
  width: 100%;
  height: 100vh;
  position: relative;
}
.biz-complete-title .biz-complete-header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
}
.biz-complete-title .biz-complete-header img {
  width: 24px;
  height: 24px;
}
.biz-complete-title .biz-complete-header span {
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  margin-left: 112.5px;
}
.biz-complete-title .main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 157px;
}
.biz-complete-title .main-content img {
  width: 128px;
  height: 128px;
}
.biz-complete-title .main-content p {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
.biz-complete-title .main-content span {
  color: #666;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}

.biz-complete-title .btn {
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 24px;
  bottom: 0;
  position: fixed;
}
.biz-complete-title .btn button {
  width: 100%;
  height: 56px;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #c2c2c2;
}
.biz-complete-title .btn .btn-submit {
  background: #2866ec;

  color: #ffffff;
}
</style>
