<template>
  <div class="biz-code-title">
    <div class="biz-code-header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt=""
        @click="goBack"
      />
      <span>회원가입</span>
    </div>
    <div class="agreement">
      <div class="sub-header">코드 입력</div>
      <div class="group">
        <div class="sub-content">
          <label for="bizNumber1" class="biz-number">추천코드</label>
          <input
            id="bizNumber1"
            type="text"
            class="biz-input"
            placeholder="- 추천코드 입력"
            maxlength="10"
            v-model="bizNumber"
          />
          <p class="error">입력하신 정보를 다시 확인해주세요.</p>
        </div>

        <div class="sub-content">
          <label for="bizNumber2" class="biz-number">관리코드 </label>
          <input
            id="bizNumber2"
            type="text"
            class="biz-input"
            placeholder="관리코드 입력"
            maxlength="10"
            v-model="bizNumber2"
          />
          <p class="error">입력하신 정보를 다시 확인해주세요.</p>
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
        @click="goNextPage"
      >
        다음으로
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
const isModalOpen = ref(false);
const bizNumber = ref('');
const bizNumber2 = ref('');

const emit = defineEmits(['close']);

function goNextPage() {
  router.push('/bizauth/bizpw');
}

function goBack() {
  router.push('/bizauth/attach');
}

const isFormValid = computed(() => {
  return bizNumber.value.length > 0 && bizNumber2.value.length > 0;
});
</script>
<style scoped>
.biz-code-title {
  width: 100%;
}
.biz-code-title .biz-code-header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
}
.biz-code-title .biz-code-header img {
  width: 24px;
  height: 24px;
}
.biz-code-title .biz-code-header span {
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  margin-left: 112.5px;
}
.biz-code-title .agreement {
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0 24px;
}
.biz-code-title .agreement .sub-header {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
}

.biz-code-title .agreement .group {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 18px;
}

.biz-code-title .agreement .group .sub-content .biz-number {
  color: #222222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  padding: 2px 4px;
}
.biz-code-title .agreement .group .sub-content .biz-input {
  width: 100%;
  height: 48px;
  margin-top: 8px;
  padding: 13px 12px;
  font-size: 14px;
  color: #666666;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
}
.biz-code-title .agreement .group .sub-content input::placeholder {
  color: #c2c2c2;
}

.biz-code-title .agreement .group .sub-content:focus-within .biz-number {
  color: #2866ec;
}
.biz-code-title .agreement .group .sub-content:focus-within .biz-input {
  border-color: #2866ec;
}
.biz-code-title .btn-group {
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 24px;
  bottom: 0;
  position: fixed;
}
.biz-code-title .btn-group button {
  width: 100%;
  height: 56px;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #c2c2c2;
}
.biz-code-title .btn-group .btn-submit {
  background: #c2c2c2;
  color: #ffffff;
  transition: background 0.3s;
}
.biz-code-title .btn-group .btn-submit.active {
  background: #2866ec;
  cursor: pointer;
}
.biz-code-title .btn-group .btn-submit:disabled {
  cursor: not-allowed;
}
.error {
  display: none;
  margin-top: 6px;
  color: #e52f28;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
}
</style>
