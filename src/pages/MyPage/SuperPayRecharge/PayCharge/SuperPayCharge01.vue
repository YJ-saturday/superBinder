<template>
  <div class="title">
    <img
      src="/src/assets/img/Authentication/leftAllow.png"
      alt="뒤로가기"
      @click="goBack"
    />
    <span>배송지 설정</span>
  </div>
  <div class="container">
    <div class="amount-section">
      <div class="header">
        <p>충전금액</p>
        <button class="reset-btn" @click="reset">초기화</button>
      </div>
      <input
        type="number"
        v-model.number="amount"
        placeholder="충전 금액 입력 (최소 10만원)"
        class="amount-input"
      />
      <div class="preset-buttons">
        <button type="button" @click="addAmount(100000)">+10만</button>
        <button type="button" @click="addAmount(500000)">+50만</button>
        <button type="button" @click="addAmount(1000000)">+100만</button>
      </div>
      <p class="error">* 충전 가능한 최소 금액이 충족되지 않습니다.</p>
    </div>

    <div class="payment">
      <p>결제수단</p>
      <div class="radio-group">
        <label class="radio">
          <input type="radio" value="toss" v-model="paymentMethod" />
          <span>토스 페이</span>
        </label>
        <label class="radio">
          <input type="radio" value="bank" v-model="paymentMethod" />
          <span>계좌 이체</span>
        </label>
      </div>
    </div>

    <div class="notice">
      <p class="notice-title">충전 시 유의사항</p>
      <p class="notice-txt">
        재충전 이후 거래 이력이 없는 경우, 충전일로부터 <br />
        최대 7일 내 취소가 가능합니다.
      </p>
    </div>

    <div class="summary">
      <p>충전 후 예상 잔액</p>
      <span class="balance">{{ formattedPredictedBalance }}</span>
    </div>

    <button class="charge-btn" :disabled="!canCharge" @click="charge">
      충전하기
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const MIN_AMOUNT = 100_000;
const currentBalance = 0;

const amount = ref(0);
const paymentMethod = ref('');

function reset() {
  amount.value = 0;
}

function addAmount(val) {
  amount.value += val;
}

const canCharge = computed(
  () => amount.value >= MIN_AMOUNT && paymentMethod.value !== ''
);

const predictedBalance = computed(
  () => currentBalance + (amount.value >= MIN_AMOUNT ? amount.value : 0)
);

const formattedPredictedBalance = computed(
  () => predictedBalance.value.toLocaleString() + '원'
);
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
.container {
  max-width: 360px;
  margin: 0 auto;
  padding: 16px;
  font-family: sans-serif;
  color: #333;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.reset-btn {
  background: none;
  border: none;
  color: #c2c2c2;
  font-size: 0.9rem;
  cursor: pointer;
}
.amount-input {
  width: 100%;
  padding: 13px 12px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: end;
}
.preset-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.preset-buttons button {
  flex: 1;
  margin-right: 8px;
  padding: 8px 0;
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.preset-buttons button:last-child {
  margin-right: 0;
}
.error {
  margin-top: 8px;
  color: #e74c3c;
  font-size: 0.85rem;
}
.payment p {
  margin-bottom: 8px;
  font-size: 1rem;
  margin-top: 30px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.radio-group {
  display: flex;
  gap: 8px;
}
.radio {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 168px;
  height: 56px;
  background: #f5f5f5;
  padding: 16px 0px 16px 8px;
  border-radius: 8px;
  margin-bottom: 30px;
}
.radio input {
  width: 18px;
  height: 18px;
}
.radio span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.notice {
  background: #f7f7f7;
  padding: 12px;
  border-radius: 8px;
}
.notice .notice-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
.notice .notice-txt {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin: 30px 0px 148px 0px;
}
.summary p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.balance {
  color: #222;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
}
.charge-btn {
  width: 100%;
  padding: 12px;
  background: #007aff;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.charge-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
