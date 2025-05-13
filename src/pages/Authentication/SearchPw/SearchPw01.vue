<template>
  <div class="search-title">
    <div class="search-header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="leftAllow"
        @click="goBack"
      />
      <span>비밀번호 찾기</span>
    </div>
    <div class="agreement">
      <img src="/src/assets/img/Authentication/searchPw/search1.png" alt="" />
      <p class="sub-header">
        계정 정보를 찾기 위해<br />회원님의 사업자등록번호를 입력하세요
      </p>
      <div class="group">
        <div class="sub-content">
          <label for="searchNumber" class="search-number">사업자등록번호</label>
          <input
            id="searchNumber"
            type="text"
            class="search-input"
            placeholder="사업자등록번호 입력(-입력제외)"
            maxlength="10"
            :value="searchNumber"
            @keydown="onKeyDown"
            @input="onInputNumber"
          />
          <p>가입되지 않은 사업자등록번호 입니다.</p>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button
        type="submit"
        class="btn-submit"
        :class="{ active: isFormValid }"
        :disabled="!isFormValid"
        @click="goSearchPw"
      >
        다음
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchNumber = ref('');

function goSearchPw() {
  router.push('search-pw02');
}
function goBack() {
  router.push('login');
}

function onKeyDown(e) {
  if (e.key.length === 1 && !/^\d$/.test(e.key)) {
    e.preventDefault();
  }
}
function onInputNumber(e) {
  const target = e.target;
  const onlyNumbers = target.value.replace(/[^0-9]/g, '');
  target.value = onlyNumbers;
  searchNumber.value = onlyNumbers;
}
const isFormValid = computed(() => searchNumber.value.length === 10);
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
.search-title .agreement {
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0 24px;
  align-items: center;
}
.search-title .agreement img {
  width: 140px;
  height: 140px;
}
.search-title .agreement .sub-header {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
}

.search-title .agreement .group {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 18px;
  width: 100%;
}
.search-title .agreement .group .sub-content .search-number {
  color: #222222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  padding: 2px 4px;
}
.search-title .agreement .group .sub-content .search-input {
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
.search-title .agreement .group .sub-content p {
  display: none;
  margin-top: 10px;
  color: #e52f28;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
}

.search-title .agreement .group .sub-content input::placeholder {
  color: #c2c2c2;
}

.search-title .agreement .group .sub-content:focus-within .search-number {
  color: #2866ec;
}
.search-title .agreement .group .sub-content:focus-within .search-input {
  border-color: #2866ec;
}
.search-title .btn-group {
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 24px;
  bottom: 0;
  position: fixed;
}
.search-title .btn-group button {
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
.search-title .btn-group .btn-submit {
  background: #c2c2c2;
  color: #ffffff;
  transition: background 0.3s;
}

.search-title .btn-group .btn-submit.active {
  background: #2866ec;
  cursor: pointer;
}
</style>
