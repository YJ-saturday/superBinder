<template>
  <div class="search-title">
    <div class="header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>비밀번호 찾기</span>
    </div>
    <div class="agreement">
      <div class="sub-header">코드 입력</div>
      <div class="group">
        <div class="sub-content">
          <label for="bizNumber1" class="biz-number">비밀번호 입력</label>
          <input
            id="bizNumber1"
            :type="showPassword ? 'text' : 'password'"
            class="biz-input"
            placeholder="비밀번호 입력"
            maxlength="15"
            v-model="bizNumber"
          />
          <span class="eye-icon" @click="togglePassword">
            <img
              v-if="showFirst"
              src="/src/assets/img/icon/eyeClose.svg"
              alt="eyeCloseImg"
            />
            <img
              v-else
              src="/src/assets/img/icon/eyeOpen.svg"
              alt="eyeOpenImg"
            />
          </span>
        </div>

        <div class="sub-content">
          <label for="bizNumber2" class="biz-number">비밀번호 확인</label>
          <input
            id="bizNumber2"
            :type="showPassword2 ? 'text' : 'password'"
            class="biz-input"
            placeholder="비밀번호 재입력"
            maxlength="15"
            v-model="bizNumber2"
          />
          <!-- mismatch error -->
          <p v-show="mismatchError" class="error-text">
            입력하신 비밀번호가 일치하지 않습니다.
          </p>
          <span class="eye-icon2" @click="togglePassword2">
            <img
              v-if="showFirst2"
              src="/src/assets/img/icon/eyeClose.svg"
              alt="eyeCloseImg"
            />
            <img
              v-else
              src="/src/assets/img/icon/eyeOpen.svg"
              alt="eyeOpenImg"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button type="button" class="btn-cancel" @click="isModalOpen = true">
        취소
      </button>
      <button
        type="submit"
        class="btn-submit"
        :class="{ active: isFormValid }"
        :disabled="!isFormValid"
        @click="isModalOpen = true"
      >
        완료
      </button>
    </div>
    <BizCancelAlert v-if="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BizCancelAlert from './BizAlert/BizCancelAlert.vue';

const router = useRouter();
const bizNumber = ref('');
const bizNumber2 = ref('');
const showFirst = ref(true);
const showPassword = ref(false);
const showFirst2 = ref(true);
const showPassword2 = ref(false);

const emit = defineEmits(['close']);

function goBack() {
  router.push('search-pw02');
}

const isModalOpen = ref(false);

const mismatchError = computed(
  () => bizNumber2.value.length > 0 && bizNumber.value !== bizNumber2.value
);

const isFormValid = computed(() => {
  return (
    bizNumber.value.length > 0 &&
    bizNumber2.value.length > 0 &&
    bizNumber.value === bizNumber2.value
  );
});

const togglePassword = () => {
  showPassword.value = !showPassword.value;
  showFirst.value = !showFirst.value;
};
const togglePassword2 = () => {
  showPassword2.value = !showPassword2.value;
  showFirst2.value = !showFirst2.value;
};
</script>

<style scoped>
.search-title {
  width: 100%;
  height: 100vh;
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
.search-title .agreement {
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-top: 20px;
}
.search-title .agreement .sub-header {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
}
.search-title .agreement .group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 18px;
}
.search-title .agreement .group .sub-content {
  position: relative;
}
.search-title .agreement .group .sub-content .search-number,
.search-title .agreement .group .sub-content .biz-number {
  color: #222222;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  padding: 2px 4px;
}
.search-title .agreement .group .sub-content .biz-input {
  width: 100%;
  height: 48px;
  margin-top: 8px;
  padding: 13px 12px;
  font-size: 14px;
  color: #666666;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  box-sizing: border-box;
}
.search-title .agreement .group .sub-content .biz-input::placeholder {
  color: #c2c2c2;
}

.search-title .agreement .group .sub-content:focus-within .biz-input {
  border-color: #2866ec;
}
.search-title .agreement .group .sub-content .eye-icon,
.search-title .agreement .group .sub-content .eye-icon2 {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 12px;
  top: 56px;
  transform: translateY(-50%);
  cursor: pointer;
}
.search-title .agreement .group .sub-content .eye-icon img,
.search-title .agreement .group .sub-content .eye-icon2 img {
  width: 24px;
  height: 24px;
}
.search-title .agreement .group .sub-content .error-text {
  margin-top: 6px;
  color: #e52f28;
  font-family: Pretendard;
  font-size: 12px;
  line-height: 14px;
}
.search-title .btn-group {
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 24px;
  position: fixed;
  bottom: 0;
}
.search-title .btn-group .btn-cancel,
.search-title .btn-group .btn-submit {
  flex: 1;
  height: 56px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #ffffff;
}
.search-title .btn-group .btn-submit {
  background: #c2c2c2;
  color: #ffffff;
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
