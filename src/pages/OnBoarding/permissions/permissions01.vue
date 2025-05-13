<template>
  <div class="permission01">
    <div class="perm-title">
      <img
        src="/src/assets/img/Permissions/vectorSmallColor.png"
        alt="app-logo-small-color"
      />
      <p>
        슈퍼바인더를 이용하려면<br />
        권한이 필요해요.
      </p>
    </div>
    <div class="group group-top">
      <p class="group-title">필수적 접근 권한</p>
      <ul>
        <li>
          <img src="/src/assets/img/Permissions/camera.png" alt="camera-icon" />
          <div>
            <p class="perm-name">카메라</p>
            <p class="perm-desc">사업자등록증 확인 시 촬영</p>
          </div>
        </li>
        <li>
          <img
            src="/src/assets/img/Permissions/picture.png"
            alt="picture-icon"
          />
          <div>
            <p class="perm-name">갤러리</p>
            <p class="perm-desc">신분증, 통장 샘플 이미지 저장을 위한 접근</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="group group-bottom">
      <p class="group-title">선택적 접근 권한</p>
      <ul>
        <li>
          <img src="/src/assets/img/Permissions/alarm.png" alt="alarm-icon" />
          <div>
            <p class="perm-name">알림</p>
            <p class="perm-desc">푸시 알림 등록 및 수신을 위한 접근</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="permission01-footer">
      <div class="group-warn">
        <img src="/src/assets/img/Permissions/warn.png" alt="warn-icon" />
        <p class="note">
          필수 권한을 허용하지 않는 경우 앱이 정상적으로 작동<br />
          하지 않을 수 있습니다. 선택 권한을 허용하지 않아도 해<br />
          당 기능 외 서비스는 정상적으로 사용 가능합니다.
        </p>
      </div>
      <button class="confirm-button" @click="goNextPage">확인</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goNextPage() {
  router.push('permissions02');
}
</script>

<style scoped>
.permission01 {
  padding: 0px 24px;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.permission01 .perm-title {
  margin-top: 40px;
  text-align: center;
}

.permission01 .perm-title img {
  width: 72px;
  height: 72px;
}
.permission01 .perm-title p {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  padding-top: 16px;
}

.permission01 .group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
}
.permission01 .group .group-title {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
}
.permission01 .group ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.permission01 .group ul li {
  display: flex;
  gap: 16px;
}
.permission01 .group ul img {
  width: 40px;
  height: 40px;
}
.permission01 .group ul li div .perm-name {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
}
.permission01 .group ul li div .perm-desc {
  padding-top: 4px;
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.permission01 .permission01-footer {
  width: 100%;
}
.permission01 .permission01-footer .group-warn {
  display: flex;
  margin-top: 77px;
}
.permission01 .permission01-footer .group-warn img {
  width: 24px;
  height: 24px;
}
.permission01 .permission01-footer .group-warn p {
  padding-left: 8px;
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
  font-size: 11px;
  color: #888;
  line-height: 1.5;
  word-break: keep-all;
}
.permission01 .permission01-footer .confirm-button {
  width: 100%;
  height: 56px;
  padding: 17px;
  border: none;
  cursor: pointer;
  background: #2866ec;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}
</style>
