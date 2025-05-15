<template>
  <div class="header">
    <div class="header-left">
      <img src="/src/assets/img/icon/leftAllow.svg" alt="뒤로가기" />
      <p>스마트 발주</p>
    </div>
    <div class="header-right">
      <img src="/src/assets/img/smartOrdering/homeBtn.svg" alt="뒤로가기" />
    </div>
  </div>
  <div class="wrap">
    <div class="con con01">
      <h1>Step. 4</h1>
      <span>배송지를 선택하세요..</span>
    </div>
    <div class="con con02">
      <ul>
        <li>
          <div class="card">
            <div class="card-title">
              <img src="/src/assets/img/myPage/mainAcount.svg" alt="" />
              <span>메인 계정명 0001</span>
            </div>
            <label class="style_checkbox">
              <input type="checkbox" />
              <img
                src="/src/assets/img/cart/checkbox_active.png"
                alt="체크옵션 2"
              />
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="bottom">
    <button class="cancel">취소</button>
    <button class="next">다음으로</button>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  width: 100%;
  height: 62px;
  padding: 16px 24px 10px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .header-left {
  display: flex;
  gap: 4px;
}
.header .header-left img {
  width: 24px;
  height: 24px;
}
.header .header-left p {
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.header .header-right img {
  width: 36px;
  height: 36px;
}
.wrap {
  padding: 0px 24px;
  margin-bottom: 182px;
}
.con01 {
  margin-top: 20px;
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
}
.con01 h1 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.con01 p {
  margin-top: 8px;
}
/* con02 */
.con02 {
  margin-top: 18px;
}
.con02 .title {
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  border-radius: 40px;
  background: #f6f6f6;
}
.list:active {
  border-radius: 8px;
  border: 2px solid #2866ec;
  background: #f3f7ff;
}
.list:active .card-title span {
  color: #2866ec;
}
.card {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #dadada;
  background: #fff;
}
.card .card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
}
.card .card-title img {
  width: 32px;
  height: 32px;
}
.card:active {
  border-radius: 8px;
  border: 2px solid #2866ec;
  background: #f3f7ff;
}
.card:active .card-title span {
  color: #2866ec;
}

/* con04 */
.con04 {
  width: 100%;
  height: 168px;
  position: fixed;
  bottom: 0px;
  padding: 24px;
  border-top: 1px solid #dadada;
  background: #fff;
  z-index: 10;
}
.con04-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.con04-title p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
}
.con04 .con04-item {
  display: flex;
  gap: 8px;
}
.con04 .con04-item div {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
}
.con04 .con04-item div p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
}
.con04 .con04-item div p span {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.con04 .con04-item div span {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.con04 button {
  width: 100%;
  height: 56px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  margin-top: 24px;
  border-radius: 8px;
  border: none;
  background: #2866ec;
}
/* bottom */
.bottom {
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  gap: 8px;
  padding: 24px;
  background: #fff;
}
.bottom .cancel {
  width: 100%;
  height: 56px;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  border-radius: 8px;
  border: 1px solid #dadada;

  background: #fff;
}
.bottom .next {
  width: 100%;
  height: 56px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  border: none;
  border-radius: 8px;
  background: #2866ec;
}
/* 체크박스 스타일 */
.style_checkbox {
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  vertical-align: middle;
}
.style_checkbox input[type='checkbox'] {
  opacity: 0;
  width: 24px;
  height: 24px;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: 2;
}
.style_checkbox img {
  width: 24px;
  height: 24px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.style_checkbox input[type='checkbox']:checked + img {
  content: url('/src/assets/img/cart/checkbox_active.png');
}
.style_checkbox input[type='checkbox']:not(:checked) + img {
  content: url('/src/assets/img/cart/checkbox.png');
}
</style>
