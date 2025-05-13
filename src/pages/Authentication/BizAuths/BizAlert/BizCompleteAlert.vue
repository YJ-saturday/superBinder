<template>
  <div class="BizAuthAlert">
    <div class="group">
      <p class="title">
        사업자등록번호 인증이<br />
        완료되었습니다.
      </p>
      <button class="action-btn re" @click="goNextPage">확인</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goNextPage() {
  router.push('/bizauth/attach');
}
</script>

<style scoped>
.BizAuthAlert {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.BizAuthAlert .group {
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
.BizAuthAlert .group .title {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin: 30px 0px;
}

.BizAuthAlert .group .action-btn {
  width: 100%;
  height: 48px;
  color: #222222;
  padding: 8px;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #ffffff;
  border: none;
}
.BizAuthAlert .group .action-btn:hover {
  background: #222;
  color: #ffffff;
}
</style>
