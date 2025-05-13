<template>
  <div class="wrap">
    <div class="header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>계정 인증</span>
    </div>
    <div class="section">
      <div class="con01">
        <p class="title">결제 비밀번호 입력</p>
        <div class="dots">
          <span
            v-for="i in 6"
            :key="i"
            :class="['dot', { filled: i <= pin.length }]"
          />
        </div>
        <button class="reset-btn" @click="onReset">비밀번호 재설정</button>
      </div>

      <div class="pin-screen-keypad">
        <button
          v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="n"
          class="key"
          @click="onNumber(n)"
        >
          {{ n }}
        </button>

        <button class="key action" @click="onReset">전체삭제</button>
        <button class="key" @click="onNumber(0)">0</button>
        <button class="key action" @click="onDelete">
          <img
            src="/src/assets/img/icon/certificationBackIcon.svg"
            alt="지우기"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pin = ref('');

function onNumber(num) {
  if (pin.value.length < 6) {
    pin.value += num;
  }
}

function onDelete() {
  pin.value = pin.value.slice(0, -1);
}

function onReset() {
  pin.value = '';
}
</script>

<style scoped>
.wrap {
  width: 100%;
}
.header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.header span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.section {
  display: flex;
  flex-direction: column;
}
.section .con01 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.section .con01 .title {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-top: 120px;
}
.section .con01 .dots {
  display: flex;
  gap: 16px;
  margin-top: 60px;
}

.dot {
  width: 24px;
  height: 24px;
  border: 1px solid #2866ec;
  border-radius: 50%;
}

.dot.filled {
  background: #2866ec;
}
.reset-btn {
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  background: transparent;
  padding: 12px 10px;
  margin: 130px 0px 40px 0px;
  width: 119px;
  height: 40px;
}
.pin-screen-reset {
  margin-bottom: 24px;
  padding: 8px 16px;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  color: #2866ec;
  background: #fff;
  border: 1px solid #2866ec;
  border-radius: 8px;
  cursor: pointer;
}

.pin-screen-keypad {
  margin-top: auto;
  width: 100%;
  background: #2866ec;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
}

.key {
  height: 72px;
  background: #2866ec;
  color: #fff;
  font-family: Pretendard, sans-serif;
  font-size: 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.key.action {
  font-size: 14px;
}

.key img {
  width: 24px;
  height: 24px;
}
</style>
