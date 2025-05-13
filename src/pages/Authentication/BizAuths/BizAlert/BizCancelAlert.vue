<template>
  <div class="BizCancelAlert">
    <div class="group">
      <div class="perm-message">
        <p class="perm-title">회원가입을 취소하시겠습니까?</p>
      </div>
      <div class="perm-action">
        <button class="action re" @click="cancel">취소</button>
        <button class="action re" @click="goNextPage">확인</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['close']);

function cancel() {
  emit('close');
}
function goNextPage() {
  router.push('/login');
}
</script>

<style scoped>
.BizCancelAlert {
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
.BizCancelAlert .group {
  width: 100%;
  height: 189px;
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.BizCancelAlert .group .perm-message {
  margin: 30px 0;
}
.BizCancelAlert .group .perm-message .perm-title {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.BizCancelAlert .group .perm-message .perm-subtitle {
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
.BizCancelAlert .group .perm-action {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 8px 0px 0px 0px;
}
.BizCancelAlert .group .perm-action .action {
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
.BizCancelAlert .group .perm-action .action:hover {
  background: #222;
  color: #fff;
}
</style>
