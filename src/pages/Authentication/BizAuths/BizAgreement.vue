<template>
  <div class="biz-title">
    <div class="biz-header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="leftAllow"
        @click="goBack"
      />
      <span>회원가입</span>
    </div>
    <div class="biz-main">
      <div class="main-title">약관동의</div>
      <div class="check-item-main">
        <input type="checkbox" class="check-all" v-model="allChecked" />
        <label for="check-all">약관 전체 동의</label>
      </div>
      <div class="check-item">
        <input id="terms-1rd" type="checkbox" v-model="terms1rd" />
        <label for="terms-1rd">서비스 이용약관 필수동의</label>
      </div>
      <div class="check-item">
        <input type="checkbox" class="terms-2rd" v-model="terms2rd" />
        <label for="terms-2rd">개인정보 수집·이용 필수동의</label>
      </div>
      <div class="check-item">
        <input type="checkbox" class="terms-3rd" v-model="terms3rd" />
        <label for="terms-3rd">개인정보 제3자 제공 선택동의</label>
      </div>
    </div>
    <div class="btn-group">
      <button type="button" class="btn-cancel" @click="isModalOpen = true">
        취소
      </button>
      <button
        type="button"
        class="btn-submit"
        :class="{ active: canAgree }"
        :disabled="!canAgree"
        @click="canAgree && goNextPage()"
      >
        인증
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
const terms1rd = ref(false);
const terms2rd = ref(false);
const terms3rd = ref(false);

function goNextPage() {
  router.push('/bizauth');
}
function goBack() {
  router.push('/login');
}
const isModalOpen = ref(false);

const allChecked = computed({
  get() {
    return terms1rd.value && terms2rd.value && terms3rd.value;
  },
  set(v) {
    terms1rd.value = v;
    terms2rd.value = v;
    terms3rd.value = v;
  },
});

const canAgree = computed(() => terms1rd.value && terms2rd.value);
</script>
<style scoped>
.biz-title {
  width: 100%;
  height: 100vh;
}
.biz-title .biz-header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.biz-title .biz-header img {
  width: 24px;
  height: 24px;
}
.biz-title .biz-header span {
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.biz-title .biz-main {
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0 24px;
  width: 100%;
}
.biz-title .biz-main {
  width: 100%;
}
.biz-title .biz-main .main-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
}
.biz-title .biz-main .check-item-main {
  width: 100%;
  height: 56px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #f5f5f5;
}
.biz-title .biz-main .check-item {
  width: 100%;
  height: 56px;
  padding: 16px;
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.biz-title .biz-main input {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.biz-title .btn-group {
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 24px;
  bottom: 0;
  position: fixed;
}
.biz-title .btn-group button {
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
.biz-title .btn-group .btn-submit {
  background: #c2c2c2;
  color: #ffffff;
  transition: background 0.3s;
}

.biz-title .btn-group .btn-submit.active {
  background: #2866ec;
  cursor: pointer;
}
</style>
