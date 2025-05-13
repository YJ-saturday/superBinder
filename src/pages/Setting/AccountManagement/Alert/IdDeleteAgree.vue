<template>
  <div class="wrap">
    <section class="container">
      <div class="title">
        <p>회원탈퇴 동의</p>
        <img src="/src/assets/img/icon/cross.svg" alt="" @click="cancel" />
      </div>

      <div class="group">
        <div class="txt">
          <p class="txt-main">회원 탈퇴를 하시겠습니까?</p>
          <p class="txt-sb">
            회원 탈퇴시 메인 및 서브 계정에서 구매한 내역 및 <br />
            장바구니(장바구니, 찜, 자주구매, 최근 본 목록 등)<br />
            의 모든 데이터가 삭제됩니다.
            <br /><br />
            그래도 삭제를 원하시면 하단에 계정 탈퇴 동의 체크 <br />
            후 확인 버튼을 클릭해주세요.
          </p>
        </div>
        <div class="agree-btn">
          <input type="checkbox" />
          <p>계정 탈퇴를 동의 합니다.</p>
        </div>
        <div class="perm-action">
          <button class="action action-1" @click="cancel">취소</button>
          <button class="action action-2" @click="confirm">탈퇴</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['confirm', 'cancel']);
function confirm() {
  emit('confirm');
}
function cancel() {
  emit('cancel');
}
</script>

<style scoped>
.wrap {
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
.wrap .container {
  padding: 24px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
}
.wrap .container .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 18px;
}
.wrap .group {
  padding: 10px 0px;
}
.wrap .group .txt .txt-main {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 10px;
}
.wrap .group .txt .txt-sb {
  color: #000;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding-bottom: 20px;
  border-bottom: 1px solid #dadada;
}
.wrap .group .agree-btn {
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0px;
}
.wrap .group .agree-btn input {
  width: 24px;
  height: 24px;
}
.wrap .group .perm-action {
  width: 100%;
  display: flex;
  gap: 8px;
}
.wrap .group .perm-action .action {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
  width: 100%;
  height: 48px;
}
.wrap .group .perm-action .action:hover {
  background: #222222;
  color: #fff;
}
</style>
