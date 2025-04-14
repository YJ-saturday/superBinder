<template>
  <div class="permission03">
    <div class="group">
      <div class="perm-message">
        <p class="perm-title">필수 권한 허용 안내</p>
        <p class="perm-subtitle">아래와 같은 이유로 권한 허용이 필요합니다.</p>
        <p class="perm-description">
          회원 가입시 첨부하는 파일 직접 촬영 후 첨부<br />
          (사업자등록증, 매장 이미지, 신분증 등)<br />
          회원가입 및 서비스 이용에 반드시 필요한<br />
          권한으로 설정되지 않을 경우 서비스 이용이<br />
          불가합니다.
        </p>
      </div>
      <div class="perm-action">
        <button class="action no">닫기</button>
        <button class="action re">권한재요청</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  height: 367px;
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
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
.permission03 .group .perm-message .perm-title .popup-subtitle {
  color: #222;
  text-align: center;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  padding-top: 10px;
}

.popup-description {
  font-size: 13px;
  font-weight: 400;
  color: #666;
  line-height: 1.6;
  word-break: keep-all;
}

.popup-buttons {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
}

.btn {
  flex: 1;
  height: 48px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn.cancel {
  background: #fff;
  border: 1px solid #ccc;
  color: #1e1e1e;
}

.btn.confirm {
  background: #1e1e1e;
  color: #fff;
}
</style>
