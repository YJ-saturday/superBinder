<template>
  <div class="wrap">
    <div class="header">
      <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
      <span>계정관리</span>
    </div>
    <div class="section">
      <div class="con con01">
        <div class="title">
          <div class="title-txt">계좌</div>
          <div class="title-btn">추가</div>
        </div>
        <div class="main">
          <img
            class="bank-img"
            src="/src/assets/img/bankLogo/kakaoBig.svg"
            alt=""
          />
          <div class="main-txt">
            <p>카카오 뱅크</p>
            <span>123********388</span>
          </div>
        </div>
        <div class="main">
          <img class="bank-img" src="/src/assets/img/bankLogo/tos.svg" alt="" />
          <div class="main-txt">
            <p>토스 뱅크</p>
            <span>123********388</span>
          </div>
        </div>
      </div>

      <div class="con con02">
        <div class="title">
          <div class="title-txt">계좌</div>
          <div class="title-btn">추가</div>
        </div>
        <div class="main">
          <img
            class="card-img"
            src="/src/assets/img/paymentManagement/cardIcon1.png"
            alt=""
          />
          <div class="main-txt">
            <p>CARD</p>
            <span>
              체크
              <img src="/src/assets/img/icon/dot.svg" alt="" />
              9876
            </span>
          </div>
        </div>
        <div class="main">
          <img
            class="card-img"
            src="/src/assets/img/paymentManagement/cardIcon2.png"
            alt=""
          />
          <div class="main-txt">
            <p>CARD</p>
            <span>
              체크
              <img src="/src/assets/img/icon/dot.svg" alt="" />
              9876
            </span>
          </div>
        </div>
      </div>

      <div class="bottom con03">
        <div class="con03-title">설정</div>
        <div class="con03-txt">
          <p>비밀번호 변경</p>
          <img src="/src/assets/img/icon/rightArrow.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.header span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.section {
  padding: 20px 24px 24px 20px;
}
.con {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.con .title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}
.con .title-txt {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.con .title-btn {
  color: #2866ec;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.con .main {
  width: 100%;
  height: 76px;
  border-radius: 20px;
  border: 1px solid #c2c2c2;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0px 16px;
}
.con .main .main-txt p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
.con .main .main-txt span {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  align-items: center;
  gap: 4px;
}
.con .main .main-txt span img {
  width: 4px;
  height: 4px;
}
.con .main .bank-img {
  width: 40px;
  height: 40px;
}
.con .main .card-img {
  width: 37px;
  height: 57px;
}
.con02 {
  margin-top: 40px;
}
.bottom {
  margin: 96px 0px 24px 0px;
}
.con03-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.con03-txt {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.con03-txt img {
  width: 24px;
  height: 24px;
}
</style>
