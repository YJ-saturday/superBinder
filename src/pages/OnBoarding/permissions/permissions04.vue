<template>
  <div class="permission04">
    <div class="group">
      <img src="/src/img/permissions/picture.png" alt="camera-icon" />
      <p class="perm-message">
        슈퍼바인더에서 기기의 사진, 파일에<br />
        엑세스하도록 허용하시겠습니까?
      </p>
      <div class="perm-action">
        <button class="action ok">허용</button>
        <button class="action no">거부</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.permission04 {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.6);
}
.permission04 .group {
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
.permission04 .group img {
  margin-top: 30px;
  width: 40px;
  height: 40px;
}
.permission04 .group .perm-message {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.permission04 .group .perm-action {
  display: flex;
  flex-direction: column;
}

.permission04 .group .perm-action .action {
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

.permission04 .group .perm-action .action:hover {
  color: #2866ec;
}
</style>
