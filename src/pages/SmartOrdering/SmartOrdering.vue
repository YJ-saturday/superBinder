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
      <img src="/src/assets/img/smartOrdering/smartOrdering01.png" alt="" />
      <div class="main-txt">
        <h1>쉽고 빠른 쇼핑지원</h1>
        <p>맞춤형 서비스</p>
      </div>
      <div class="sub-txt">
        <p>나의 유형을 선택하여 쉽고 빠르게</p>
        <span>상품을 구매해볼까요?</span>
      </div>
      <div class="main-button">
        <button>
          <p>비기너</p>
          <span>슈퍼바인더를 처음 이용하시나요?</span>
        </button>
        <button>
          <p>스테이너</p>
          <span>슈퍼바인더를 꾸준히 이용하고 계신가요?</span>
        </button>
      </div>
    </div>
    <div class="bottom">
      <button>시작하기</button>
    </div>
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
  margin: 24px 0px 36px 0px;
  padding: 0px 24px;
}
.con01 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.con01 img {
  width: 206px;
  height: 206px;
}
.con01 .main-txt {
  margin-top: 30px;
  text-align: center;
}
.con01 .main-txt h1 {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; /* 137.5% */
}
.con01 .main-txt p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
}
.con01 .sub-txt {
  margin-top: 24px;
  color: #666;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
}
.con01 .main-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
}
.con01 .main-button button {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #dadada;
  background: #fff;
}
.con01 .main-button button:active {
  color: #2866ec;
  border: 2px solid #2866ec;
}
.con01 .main-button button p {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
}
.con01 .main-button button span {
  color: #666;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}

.bottom button {
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
  margin-top: 77px;
  border: none;
  border-radius: 8px;
  background: #2866ec;
}
</style>
