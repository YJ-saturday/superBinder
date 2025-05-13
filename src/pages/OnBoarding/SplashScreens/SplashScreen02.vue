<template>
  <div class="search-title">
    <div class="search-header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>본인인증</span>
    </div>

    <div class="agreement">
      <img
        src="/src/assets/img/Authentication/searchPw/search2.png"
        alt="아이콘"
      />
      <h1 class="sub-header">휴대폰으로 전송된 인증 코드를 입력하세요.</h1>
      <p>
        회원님의 계정에 등록된 휴대폰으로 인증 코드를 전송했습니다.<br />
        <span>010-****-1234</span>으로 전송된 6자리 코드를 입력하세요.
      </p>

      <div class="group">
        <div class="sub-content">
          <label for="searchNumber" class="search-number">인증번호</label>
          <div class="input-wrapper">
            <input
              id="searchNumber"
              ref="inputRef"
              class="search-input"
              :class="{ error: hasError }"
              maxlength="6"
              v-model="searchNumber"
              @keydown="onKeyDown"
              @input="onInputNumber"
              placeholder="6자리 인증코드"
            />
            <span class="timer">{{ timerDisplay }}</span>
          </div>
          <p v-show="hasError" class="error-text" aria-live="polite">
            인증코드가 일치하지 않습니다.
          </p>
        </div>
      </div>
    </div>

    <div class="btn-group">
      <button type="button" class="btn-resend" @click="handleResend">
        재발송
      </button>
      <button
        type="submit"
        class="btn-submit"
        :class="{ active: isFormValid }"
        :disabled="!isFormValid"
        @click="goSearchPw"
      >
        인증 확인
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchNumber = ref('');
const isTouched = ref(false);
const inputRef = ref(null);

const timeLeft = ref(300);
let timerInterval = null;

const timerDisplay = computed(() => {
  const m = Math.floor(timeLeft.value / 60);
  const s = timeLeft.value % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
});

function startTimer() {
  timeLeft.value = 300;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) timeLeft.value--;
    else clearInterval(timerInterval);
  }, 1000);
}

function handleResend() {
  searchNumber.value = '';
  isTouched.value = false;
  if (inputRef.value) inputRef.value.value = '';
  startTimer();
}

// 숫자만 입력
function onKeyDown(e) {
  if (e.key.length === 1 && !/^\d$/.test(e.key)) e.preventDefault();
}
function onInputNumber() {
  // v-model로 이미 searchNumber가 바뀌므로,
  // 숫자 외 문자 제거만 수행
  searchNumber.value = searchNumber.value.replace(/[^0-9]/g, '');
  isTouched.value = true;
}

// 에러와 유효성
const hasError = computed(
  () => isTouched.value && searchNumber.value.length !== 6
);
const isFormValid = computed(() => searchNumber.value.length === 6);

// 페이지 이동
function goSearchPw() {
  router.push('search-pw03');
}
function goBack() {
  router.back();
}

// 생명주기 훅
onMounted(startTimer);
onBeforeUnmount(() => clearInterval(timerInterval));
</script>

<style scoped>
.search-title {
  width: 100%;
  height: 100vh;
}

.search-header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}

.search-header img {
  width: 24px;
  height: 24px;
}

.search-header span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  color: #212121;
}

.agreement {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
}

.agreement img {
  width: 140px;
  height: 140px;
}

.agreement h1.sub-header {
  margin-top: 16px;
  font-family: Pretendard;
  font-size: 16px;
  line-height: 1.4;
  color: #222;
}

.agreement p {
  margin-top: 8px;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.agreement p span {
  color: #2866ec;
}

.group {
  margin-top: 18px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.search-number {
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  color: #222;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 13px 12px;
  padding-right: 70px;
  margin-top: 8px;
  height: 48px;
  font-size: 14px;
  color: #666;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  box-sizing: border-box;
  background: #fff;
}

.search-input.error {
  border-color: #e52f28;
}

.timer {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  font-family: Pretendard;
  font-size: 14px;
  color: #666;
  pointer-events: none;
}

.error-text {
  margin-top: 10px;
  font-family: Pretendard;
  font-size: 12px;
  color: #e52f28;
}

.btn-group {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 24px;
  display: flex;
  gap: 8px;
}

.btn-group button {
  flex: 1;
  height: 56px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
}

.btn-resend {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-submit {
  background: #c2c2c2;
  color: #fff;
  transition: background 0.3s;
}

.btn-submit.active {
  background: #2866ec;
  cursor: pointer;
}

.btn-submit:disabled {
  cursor: not-allowed;
}
</style>
