<template>
  <div class="wrap">
    <div class="group">
      <div class="perm-message">
        <p class="perm-title">배송지를 삭제하시겠습니까?</p>
        <p class="perm-description">
          배송지 삭제 후 복구가 불가합니다.<br />
          그래도 삭제를 원하시면 하단 확인 버튼을<br />
          누르시면 삭제가 완료됩니다.
        </p>
      </div>
      <div class="perm-action">
        <button class="action no">취소</button>
        <button class="action re" @click="goBack">삭제</button>
      </div>
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

.wrap .group {
  width: 100%;
  height: 271px;
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.wrap .group .perm-message {
  margin: 30px 0;
}

.wrap .group .perm-message .perm-title {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  padding-bottom: 10px;
}
.wrap .group .perm-message .perm-subtitle {
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
.wrap .group .perm-message .perm-description {
  opacity: 0.8;
  color: #222;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.wrap .group .perm-message .perm-description .perm-descrip {
  opacity: 0.8;
  color: #666;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.wrap .group .perm-action {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 8px 0px 0px 0px;
}

.wrap .group .perm-action .action {
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
  background: #fff;
}
.wrap .group .perm-action .action:hover {
  background: #222;
  color: #fff;
}
</style>
