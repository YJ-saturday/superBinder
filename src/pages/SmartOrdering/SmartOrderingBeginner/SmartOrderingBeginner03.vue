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
      <h1>Step. 3</h1>
      <p>회원님에게 맞춤 서비스 제공을 위해</p>
      <span> 유형에 맞게 설정해주세요.</span>
    </div>
    <div class="con con02">
      <div class="title">구매 예정 자본</div>
      <ul>
        <li>100만원 이하</li>
        <li>100만원 ~ 500만원</li>
        <li>500만원 이상</li>
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
  margin: 30px 0px 266px 0px;
}
.con02 .title {
  margin-bottom: 30px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.con02 ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.con02 ul li {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  border-radius: 10px;
  border: 1px solid #dadada;
  background: #fff;
}
.con02 ul li:active {
  border-radius: 10px;
  border: 2px solid #2866ec;
  background: #f3f7ff;
  color: #2866ec;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
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
</style>
