<template>
  <div class="permission03">
    <div class="group">
      <div class="perm-message">
        <p class="perm-title">
          회원님의 비밀번호 변경이<br />
          완료되었습니다.
        </p>
      </div>
      <div class="perm-action">
        <button class="action re" @click="goNextPage">확인</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goNextPage() {
  router.push('/login');
}
</script>

<style scoped>
.permission03 {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}
.permission03 .group {
  width: 100%;
  height: 214px;
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.permission03 .group .perm-message {
  margin: 30px 0;
}
.permission03 .group .perm-message .perm-title {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.permission03 .group .perm-message .perm-subtitle {
  color: #222;
  text-align: center;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  padding-bottom: 20px;
  opacity: 0.8;
}

.permission03 .group .perm-action {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 8px 0px 0px 0px;
}

.permission03 .group .perm-action .action {
  width: 100%;
  height: 48px;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  border-radius: 8px;
  border: 1px solid #222;
  background: #222;
  color: #fff;
}
.permission03 .group .perm-action .action:hover {
  background: #222;
  color: #fff;
}
</style>
