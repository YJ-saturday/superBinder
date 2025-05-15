<template>
  <div class="biz-auth">
    <header class="biz-header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>회원가입</span>
    </header>

    <section class="agreement">
      <h2 class="sub-header">사업자 정보</h2>
      <p class="error" v-if="!isStepValid && isTouched">
        입력하신 정보를 다시 확인해주세요.
      </p>
      <div class="group">
        <div class="sub-content" v-if="step >= 0">
          <label for="biz-number" class="biz-label">사업자등록번호</label>
          <input
            id="biz-number"
            class="biz-input"
            placeholder="- 제외 10자리 입력"
            maxlength="10"
            v-model="bizNumber"
            @input="onlyNumbers($event, bizNumber)"
            @blur="isTouched = true"
          />
        </div>

        <div class="sub-content" v-if="step >= 1">
          <label for="ceo-name" class="biz-label">대표자명</label>
          <input
            id="ceo-name"
            class="biz-input"
            placeholder="이름 입력"
            maxlength="30"
            v-model="ceoName"
            @input="onlyKoreanOrEnglish($event, ceoName)"
            @blur="isTouched = true"
          />
        </div>

        <div class="sub-content" v-if="step >= 2">
          <label for="start-date" class="biz-label sub-question">
            개업일자
            <img
              src="/src/assets/img/Authentication/question.png"
              alt="도움말"
              @click="isQuestionOpen = true"
            />
          </label>
          <input
            id="start-date"
            class="biz-input"
            placeholder="YYYY.MM.DD"
            maxlength="10"
            v-model="startDate"
            @input="formatDate($event)"
            @blur="isTouched = true"
          />
        </div>

        <div class="sub-content" v-if="step >= 3">
          <label for="phone" class="biz-label">전화번호</label>
          <input
            id="phone"
            class="biz-input"
            placeholder="01012345678"
            maxlength="11"
            v-model="phone"
            @input="onlyNumbers($event, phone)"
            @blur="isTouched = true"
          />
        </div>

        <div class="sub-content" v-if="step >= 4">
          <label for="email" class="biz-label">이메일</label>
          <input
            id="email"
            type="email"
            class="biz-input"
            placeholder="test@mail.com"
            maxlength="30"
            v-model.trim="email"
            @blur="isTouched = true"
          />
        </div>
      </div>
    </section>

    <div class="btn-group">
      <button type="button" class="btn-cancel" @click="isModalOpen = true">
        취소
      </button>
      <button
        type="button"
        class="btn-submit"
        :class="{ active: isStepValid }"
        :disabled="!isStepValid"
        @click="goNextComplete"
      >
        {{ step < 4 ? '다음으로' : '인증' }}
      </button>
    </div>

    <BizQuestion v-if="isQuestionOpen" @close="isQuestionOpen = false" />
    <BizCancelAlert v-if="isModalOpen" @close="isModalOpen = false" />
    <BizCompleteAlert v-if="isCompleteOpen" @close="isCompleteOpen = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BizCancelAlert from './BizAlert/BizCancelAlert.vue';
import BizQuestion from './BizAlert/BizQuestion.vue';
import BizCompleteAlert from './BizAlert/BizCompleteAlert.vue';

const router = useRouter();

const step = ref(0);
const isTouched = ref(false);

const bizNumber = ref('');
const phone = ref('');
const startDate = ref('');
const ceoName = ref('');
const email = ref('');

const isQuestionOpen = ref(false);
const isModalOpen = ref(false);
const isCompleteOpen = ref(false);

function goNextComplete() {
  if (!isStepValid.value) {
    isTouched.value = true;
    return;
  }
  isTouched.value = false;
  if (step.value < 4) step.value += 1;
  else isCompleteOpen.value = true;
}

const onlyNumbers = (e, r) =>
  (r.value = e.target.value = e.target.value.replace(/\D/g, ''));
const onlyKoreanOrEnglish = (e, r) =>
  (r.value = e.target.value =
    e.target.value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z\s]/g, ''));

function formatDate(e) {
  let v = e.target.value.replace(/\D/g, '');

  if (v.length >= 5 && v.length <= 6) {
    v = `${v.slice(0, 4)}.${v.slice(4)}`;
  } else if (v.length > 6) {
    v = `${v.slice(0, 4)}.${v.slice(4, 6)}.${v.slice(6, 8)}`;
  }

  startDate.value = e.target.value = v;
}

const isStepValid = computed(() => {
  switch (step.value) {
    case 0:
      return /^\d{10}$/.test(bizNumber.value);
    case 1:
      return /^\d{11}$/.test(phone.value);
    case 2:
      return /^\d{4}\.\d{2}\.\d{2}$/.test(startDate.value);
    case 3:
      return ceoName.value.trim().length > 0;
    case 4:
      return /^[\w-.]+@[\w-]+\.[\w-.]+$/.test(email.value);
    default:
      return false;
  }
});

function goBack() {
  router.push('/bizauth/agreement');
}
</script>

<style scoped>
.biz-auth {
  width: 100%;
}
.biz-auth .biz-header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
}
.biz-auth .biz-header img {
  width: 24px;
  height: 24px;
}
.biz-auth .biz-header span {
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.biz-auth .agreement {
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-top: 58px;
}
.biz-auth .agreement .sub-header {
  font: 600 18px/25px Pretendard;
  color: #222;
}
.biz-auth .agreement .group {
  display: flex;
  flex-direction: column-reverse;
  gap: 18px;
  margin-top: 18px;
}
.biz-auth .agreement .group .sub-content .biz-label {
  font: 600 14px/18px Pretendard;
  color: #222;
  padding: 2px 4px;
}
.biz-auth .agreement .group .sub-content .sub-question {
  display: flex;
  justify-content: space-between;
}
.biz-auth .agreement .group .sub-content .sub-question img {
  width: 16px;
  height: 16px;
}
.biz-auth .agreement .group .sub-content .biz-input {
  width: 100%;
  height: 48px;
  margin-top: 8px;
  padding: 13px 12px;
  font-size: 14px;
  color: #666;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
}
.biz-auth .agreement .group .sub-content .biz-input::placeholder {
  color: #c2c2c2;
}
.biz-auth .agreement .group .sub-content:focus-within .biz-label {
  color: #2866ec;
}
.biz-auth .agreement .group .sub-content:focus-within .biz-input,
.biz-auth .agreement .group .sub-content .biz-input:focus {
  outline: none;
  border-color: #2866ec;
}

.biz-auth .btn-group {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 24px;
  display: flex;
  gap: 8px;
}
.biz-auth .btn-group button {
  flex: 1;
  height: 56px;
  font: 600 16px/22px Pretendard;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
}
.biz-auth .btn-group .btn-cancel {
  background: #fff;
  color: #222;
}
.biz-auth .btn-group .btn-submit {
  background: #c2c2c2;
  color: #fff;
}
.biz-auth .btn-group .btn-submit.active {
  background: #2866ec;
  cursor: pointer;
}
.biz-auth .btn-group .btn-submit:disabled {
  cursor: not-allowed;
}
.error {
  margin-top: 6px;
  color: #e52f28;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
}
</style>
