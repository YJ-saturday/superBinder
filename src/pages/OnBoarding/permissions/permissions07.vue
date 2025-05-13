<template>
  <div class="permission03">
    <div class="group">
      <div class="perm-message">
        <p class="perm-title">필수 권한 허용 안내</p>
        <!-- <p class="perm-subtitle">아래와 같은 이유로 권한 허용이 필요합니다.</p> -->
        <p class="perm-description">
          알림에 대한 권한 허용을 거부하였습니다.<br />
          기능 사용을 원하실 경우 휴대폰 설정 > 애플<br />
          리케이션 관리자에서 해당 앱의 권한을 허용<br />
          해주세요.
        </p>
      </div>
      <div class="perm-action">
        <button class="action no">닫기</button>
        <button class="action re" @click="goBack">권한재요청</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.push('permissions06');
}
</script>

<style scoped>
.permission03 {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.permission03 .group {
  width: 100%;
  height: 295px;
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
  padding-bottom: 10px;
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
.permission03 .group .perm-message .perm-description {
  opacity: 0.8;
  color: #222;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.permission03 .group .perm-message .perm-description .perm-descrip {
  opacity: 0.8;
  color: #666;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
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
  background: #fff;
}
.permission03 .group .perm-action .action:hover {
  background: #222;
  color: #fff;
}
</style>
