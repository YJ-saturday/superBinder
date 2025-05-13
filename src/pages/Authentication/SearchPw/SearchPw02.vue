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
        회원님의 계정에 등록된 휴대폰으로 인증 코드를 전송했습니<br />다.
        <span>010-****-1234</span>으로 전송된 6자리 코드를 입력하세요.
      </p>
      <div class="group">
        <div class="sub-content">
          <label for="searchNumber" class="search-number">인증번호</label>
          <div class="input-wrapper">
            <input
              id="searchNumber"
              class="search-input"
              :class="{ error: hasError }"
              maxlength="6"
              :value="searchNumber"
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

const timeLeft = ref(300);
let timerInterval = null;

const timerDisplay = computed(() => {
  const m = Math.floor(timeLeft.value / 60);
  const s = timeLeft.value % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
});

function startTimer() {
  timeLeft.value = 300;
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function handleResend() {
  searchNumber.value = '';
  isTouched.value = false;
  startTimer();
}

function onKeyDown(e) {
  if (e.key.length === 1 && !/^\d$/.test(e.key)) e.preventDefault();
}
function onInputNumber(e) {
  const only = e.target.value.replace(/[^0-9]/g, '');
  e.target.value = only;
  searchNumber.value = only;
  isTouched.value = true;
}

const hasError = computed(
  () => isTouched.value && searchNumber.value.length !== 6
);
const isFormValid = computed(() => searchNumber.value.length === 6);

function goSearchPw() {
  router.push('search-pw03');
}
function goBack() {
  router.back();
}

onMounted(() => {
  startTimer();
});
onBeforeUnmount(() => {
  if (timerInterval) clearInterval(timerInterval);
});
</script>

<style scoped>
.search-title {
  width: 100%;
  height: 100vh;
}
.search-title .search-header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.search-title .search-header img {
  width: 24px;
  height: 24px;
}
.search-title .search-header span {
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.search-title .agreement {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
}
.search-title .agreement img {
  width: 140px;
  height: 140px;
}
.search-title .agreement h1.sub-header {
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  margin-top: 16px;
}
.search-title .agreement p {
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  text-align: center;
  margin-top: 8px;
}
.search-title .agreement p span {
  color: #2866ec;
}
.search-title .agreement .group {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 18px;
  width: 100%;
}
.search-title .agreement .sub-content .search-number {
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
}
.search-title .agreement .sub-content .input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}
.search-title .agreement .sub-content .input-wrapper .search-input {
  flex: 1;
  width: auto;
  padding-right: 70px;
  height: 48px;
  margin-top: 8px;
  padding: 13px 12px;
  font-size: 14px;
  color: #666;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  box-sizing: border-box;
  background: #fff;
}
.search-title .agreement .sub-content .input-wrapper .search-input.error {
  border-color: #e52f28;
}
.search-title .agreement .sub-content .input-wrapper .timer {
  position: absolute;
  right: 16px;
  top: 55%;
  transform: translateY(-50%);
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 14px;
  color: #666666;
  pointer-events: none;
}
.search-title .agreement .sub-content .error-text {
  margin-top: 10px;
  color: #e52f28;
  font-family: Pretendard;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
}
.search-title .btn-group {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 24px;
}
.search-title .btn-group button {
  width: 100%;
  height: 56px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #c2c2c2;
}
.search-title .btn-group .btn-resend {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: 56px;
}
.search-title .btn-group .btn-submit {
  background: #c2c2c2;
  color: #fff;
  transition: background 0.3s;
}
.search-title .btn-group .btn-submit.active {
  background: #2866ec;
  cursor: pointer;
}
.search-title .btn-group .btn-submit:disabled {
  cursor: not-allowed;
}
</style>
