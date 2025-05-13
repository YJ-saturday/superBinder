<template>
  <div class="title">
    <img
      src="/src/assets/img/Authentication/leftAllow.png"
      alt="뒤로가기"
      @click="goBack"
    />
    <span>슈퍼페이 충전</span>
  </div>
  <div class="top-up wrap">
    <div class="top-up-amount">
      <div class="top-up-label">
        <span>충전금액</span>
        <button type="button" class="top-up-reset">초기화</button>
      </div>
      <input type="text" class="top-up-input" value="3,000,000원" readonly />
      <div class="top-up-shortcuts">
        <button type="button" class="top-up-shortcut-btn">+10만</button>
        <button type="button" class="top-up-shortcut-btn">+50만</button>
        <button type="button" class="top-up-shortcut-btn">+100만</button>
      </div>
    </div>

    <div class="top-up-method">
      <div class="top-up-label">결제수단</div>
      <div class="method-tabs">
        <label class="method-tab">
          <input type="radio" name="method" value="tosspay" />
          <span>토스페이</span>
        </label>
        <label class="method-tab method-tab--active">
          <input type="radio" name="method" value="transfer" checked />
          <span>계좌 이체</span>
        </label>
      </div>
      <div class="method-card">
        <img
          src="/src/assets/img/bankLogo/kakaoBig.svg"
          alt="카카오뱅크 로고"
          class="bank-logo"
        />
        <div class="bank-info">
          <p class="bank-name">카카오 뱅크</p>
          <p class="bank-account">123*********388</p>
        </div>
        <button type="button" class="method-action"></button>
      </div>
    </div>

    <div class="top-up-notice">
      <h3>충전 시 유의사항</h3>
      <p>
        재충전 이후 거래 이력이 없는 경우, 충전일로부터 최대 7일 내 취소가
        가능합니다.
      </p>
    </div>

    <div class="top-up-footer">
      <p class="top-up-balance">충전 후 예상 잔액 <span>83,000,000원</span></p>
      <button type="button" class="top-up-button">충전하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const progress = ref(30);
</script>

<style scoped>
.title {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.title img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.title span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.top-up {
  padding: 0 24px;
  font-family: Pretendard, sans-serif;
}

.top-up-amount {
  margin-top: 24px;
}

.top-up-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #222;
}

.top-up-reset {
  background: none;
  border: none;
  color: #2866ec;
  font-size: 14px;
  cursor: pointer;
}

.top-up-input {
  width: 100%;
  height: 52px;
  margin-top: 8px;
  padding: 0 16px;
  font-size: 18px;
  text-align: right;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

.top-up-shortcuts {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.top-up-shortcut-btn {
  flex: 1;
  height: 44px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
}

.top-up-method {
  margin-top: 32px;
}

.method-tabs {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.method-tab {
  flex: 1;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  background: #fff;
  position: relative;
}

.method-tab--active {
  border-color: #2866ec;
  background: #f0f6ff;
}

.method-tab input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.method-tab span {
  font-size: 14px;
  font-weight: 500;
  color: #222;
}

.method-card {
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

.bank-logo {
  width: 32px;
  height: 32px;
}

.bank-info {
  flex: 1;
  margin-left: 12px;
}

.bank-name {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #222;
}

.bank-account {
  margin: 4px 0 0;
  font-size: 14px;
  color: #666;
}

.method-action {
  background: none;
  border: none;
  cursor: pointer;
}

.top-up-notice {
  margin-top: 32px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}

.top-up-notice h3 {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: #222;
}

.top-up-notice p {
  margin: 0;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
}

.top-up-footer {
  margin-top: 32px;
}

.top-up-balance {
  margin: 0 0 16px;
  font-size: 14px;
  color: #222;
}

.top-up-balance span {
  font-weight: 600;
}

.top-up-button {
  width: 100%;
  height: 52px;
  background: #2866ec;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
</style>
