<template>
  <div class="bizQuestion">
    <div class="group">
      <div class="title">개업일자</div>
      <img
        src="/src/assets/img/Authentication/bizquestionBtn.png"
        alt="qustionBtn"
      />
      <p class="biz-message">
        사업자등록증에 표기되어 있는 ‘개업연월일’을<br />
        년, 월, 일을 제외한 8자리 숫자를 입력하세요.
      </p>
      <div class="biz-action">
        <button class="action" @click="cancel">확인</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const emit = defineEmits(['close']);

function cancel() {
  emit('close');
}
</script>

<style scoped>
.bizQuestion {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.6);
}
.bizQuestion .group {
  width: 100%;
  padding: 24px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
}
.bizQuestion .group .title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
.bizQuestion .group img {
  margin-top: 18px;
  width: 100%;
  height: 200px;
}
.bizQuestion .group .biz-message {
  margin-top: 16px;
  color: #000;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.bizQuestion .group .biz-action {
  margin-top: 18px;
}

.bizQuestion .group .biz-action .action {
  height: 48px;
  width: 100%;
  color: #fff;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  padding: 8px;
  background: #222;
}
</style>
