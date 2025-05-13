<template>
  <div class="SuperAlert">
    <div class="group">
      <p class="perm-message">
        해당 상품은 <span>'Glod'</span> 등급 이상의<br />
        회원만 구매가 가능합니다.
      </p>
      <div class="perm-action">
        <button class="action" @click="$emit('close')">확인</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.SuperAlert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
}
.SuperAlert .group {
  width: 100%;
  height: 214px;
  padding: 24px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}
.SuperAlert .group .perm-message {
  margin-top: 30px;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.SuperAlert .group .perm-message span {
  color: #ffae00;
}
.SuperAlert .group .perm-action .action {
  height: 48px;
  width: 327px;
  padding: 8px;
  border-radius: 8px;
  background: #222;
  border: none;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
}
</style>
