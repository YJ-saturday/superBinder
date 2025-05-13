<template>
  <div class="permission06">
    <div class="group">
      <img src="/src/assets/img/Permissions/alarm.png" alt="camera-icon" />
      <p class="perm-message">
        슈퍼바인더에서 알림을 보내도록<br />
        허용하시겠습니까?
      </p>
      <div class="perm-action">
        <button class="action ok" @click="goNextPage">허용</button>
        <button class="action no" @click="goReRequest">거부</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goNextPage() {
  router.push('login');
}
function goReRequest() {
  router.push('permissions07');
}
</script>

<style scoped>
.permission06 {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.6);
}
.permission06 .group {
  width: 100%;
  height: 312px;
  padding: 24px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}
.permission06 .group img {
  margin-top: 30px;
  width: 40px;
  height: 40px;
}
.permission06 .group .perm-message {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.permission06 .group .perm-action {
  display: flex;
  flex-direction: column;
}

.permission06 .group .perm-action .action {
  height: 48px;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  padding: 8px;
}

.permission06 .group .perm-action .action:hover {
  color: #2866ec;
}
</style>
