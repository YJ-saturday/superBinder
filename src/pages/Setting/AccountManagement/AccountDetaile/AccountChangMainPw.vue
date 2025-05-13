<template>
  <div class="wrap">
    <div class="title">
      <span>비밀번호 변경</span>
      <img src="/src/assets/img/icon/cross.svg" alt="뒤로가기" />
    </div>
    <div class="con">
      <ul>
        <li class="position">
          <label for="con01-1" class="input-box">현재 비밀번호</label>
          <input
            :type="showNumbers ? 'text' : 'password'"
            id="con01-1"
            v-model="password1"
            inputmode="numeric"
            placeholder="현재 비밀번호"
            @input="password1 = password1.replace(/\D/g, '')"
          />
          <img
            v-if="!showNumbers"
            src="/src/assets/img/icon/eyeClose.svg"
            alt="보이기"
            class="close"
            @click="showNumbers = true"
          />
          <img
            v-else
            src="/src/assets/img/icon/eyeOpen.svg"
            alt="숨기기"
            class="open"
            @click="showNumbers = false"
          />
        </li>
      </ul>
      <ul>
        <li class="position">
          <label for="con01-2" class="input-box">새 비밀번호</label>
          <input
            :type="showNumbers2 ? 'text' : 'password'"
            id="con01-2"
            v-model="password2"
            inputmode="numeric"
            placeholder="새로운 비밀번호 재입력력"
            @input="password2 = password2.replace(/\D/g, '')"
          />
          <img
            v-if="!showNumbers2"
            src="/src/assets/img/icon/eyeClose.svg"
            alt="보이기"
            class="close"
            @click="showNumbers2 = true"
          />
          <img
            v-else
            src="/src/assets/img/icon/eyeOpen.svg"
            alt="숨기기"
            class="open"
            @click="showNumbers2 = false"
          />
        </li>
      </ul>
      <ul>
        <li class="position">
          <label for="con01-3" class="input-box">비밀번호 확인</label>
          <input
            :type="showNumbers3 ? 'text' : 'password'"
            id="con01-3"
            v-model="password3"
            inputmode="numeric"
            placeholder="새로운 비밀번호 재입력"
            @input="password3 = password3.replace(/\D/g, '')"
          />
          <img
            v-if="!showNumbers3"
            src="/src/assets/img/icon/eyeClose.svg"
            alt="보이기"
            class="close"
            @click="showNumbers3 = true"
          />
          <img
            v-else
            src="/src/assets/img/icon/eyeOpen.svg"
            alt="숨기기"
            class="open"
            @click="showNumbers3 = false"
          />
        </li>
      </ul>
      <p class="error">입력하신 현재 비밀번호를 확인해 주세요.</p>
      <p class="error">
        입력하신 비밀번호와 재입력한 비밀번호가 일지하지 않습니다.
      </p>
    </div>
    <button class="bottom-btn">정보 수정</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showNumbers = ref(false);
const showNumbers2 = ref(false);
const showNumbers3 = ref(false);
const password1 = ref('');
const password2 = ref('');
const password3 = ref('');
</script>

<style scoped>
.wrap {
  width: 100%;
}
.title {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  justify-content: end;
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
.con {
  padding: 20px 24px 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.con ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.con ul li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.con ul li label {
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
}
.con ul li input {
  width: 100%;
  height: 48px;
  padding: 13px 12px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
}
.con ul .position {
  position: relative;
}
.con ul .position img {
  position: absolute;
  top: 49px;
  right: 12px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.bottom-btn {
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  width: calc(100% - 48px);
  height: 56px;
  padding: 17px 10px;
  border: none;
  border-radius: 8px;
  background: #c2c2c2;
  margin: 24px;
  cursor: pointer;
}
.error {
  color: #e52f28;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  display: none;
}
</style>
