<template>
  <div class="wrap">
    <div class="model">
      <div class="header">
        <span>전체 목록 보기</span>
        <img src="/src/assets/img/icon/cross.svg" alt="뒤로가기" />
      </div>
      <div class="item">
        <ul>
          <li>
            <label class="style_checkbox">
              <input type="radio" />
              <p>욕실용품</p>
            </label>
          </li>
          <li>
            <label class="style_checkbox">
              <input type="radio" />
              <p>세탁용품</p>
            </label>
          </li>
          <li>
            <label class="style_checkbox">
              <input type="radio" />
              <p>주방용품</p>
            </label>
          </li>
          <li>
            <label class="style_checkbox">
              <input type="radio" />
              <p>청소용품</p>
            </label>
          </li>
          <li>
            <label class="style_checkbox">
              <input type="radio" />
              <p>생활잡화</p>
            </label>
          </li>
          <li>
            <label class="style_checkbox">
              <input type="radio" />
              <p>화장품</p>
            </label>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <button>확인</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.push('');
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: end;
}
.wrap .model {
  width: 100%;
  height: 460px;
  background: #fff;
  border-radius: 16px 16px 0px 0px;
  padding: 24px;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.header {
  height: 28px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin-bottom: 18px;
}
.header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.header span {
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.item ul li {
  border-bottom: 1px solid #eee;
}
.style_checkbox {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 12px 8px;
}
.style_checkbox input {
  width: 24px;
  height: 24px;
}
.style_checkbox p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
}
.style_checkbox input[type='radio']:checked + p {
  color: #2866ec;
}
.bottom {
  margin-top: 18px;
  padding: 8px;
}
.bottom button {
  width: 100%;
  height: 48px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  border-radius: 8px;
  background: #222;
  border: none;
}
</style>
