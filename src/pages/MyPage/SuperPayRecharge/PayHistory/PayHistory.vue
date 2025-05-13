<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>슈퍼페이 내역</span>
  </div>
  <div class="wrap">
    <div class="con01">
      <div class="title">
        <p>보유 슈퍼페이</p>
      </div>
      <div class="contents">
        <img src="/src/assets/img/icon/coin.svg" alt="" />
        <div class="detaile">
          <p>83,000,000</p>
          <span>원</span>
        </div>
      </div>
    </div>
    <div class="con02">
      <div class="tit-btn">
        <button>전체</button>
        <button>충전</button>
        <button>적립</button>
        <button>사용</button>
      </div>
      <div class="group">
        <div class="title">02.25</div>
        <ul>
          <li class="charge">
            <h1 class="sub-tit">충전</h1>
            <div class="sub-con sub-con01">
              <p>토스페이</p>
              <div class="detaile">
                <p>+100,000</p>
                <span>원</span>
              </div>
            </div>
            <div class="sub-con sub-con02">
              <div class="detaile">
                <p>14:20</p>
                <span>A1000D3332</span>
              </div>
              <p>잔액 30,000,000원</p>
            </div>
          </li>
          <li class="use">
            <h1 class="sub-tit">사용</h1>
            <div class="sub-con sub-con01">
              <p>토스페이</p>
              <div class="detaile">
                <p>-100,000</p>
                <span>원</span>
              </div>
            </div>
            <div class="sub-con sub-con02">
              <div class="detaile">
                <p>14:20</p>
                <span>A1000D3332</span>
              </div>
              <p>잔액 30,000,000원</p>
            </div>
          </li>
          <li class="use-coupon">
            <h1 class="sub-tit">사용</h1>
            <div class="sub-con sub-con01">
              <p>토스페이</p>
              <div class="detaile">
                <p>-100,000</p>
                <span>원</span>
              </div>
            </div>
            <div class="sub-con sub-con02">
              <div class="detaile">
                <p>14:20</p>
                <span>A1000D3332</span>
              </div>
              <p>잔액 30,000,000원</p>
            </div>
            <div class="coupon">
              <img src="/src/assets/img/icon/coupon.svg" alt="" />
              <p>브론즈등급 1,000원 할인 쿠폰 사용</p>
            </div>
          </li>
        </ul>
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
.wrap {
  padding: 20px 24px 20px 24px;
}
.con01 {
  padding: 12px 16px;
  border-radius: 8px;
  background: #e7eeff;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.con01 .title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  margin-bottom: 24px;
}
.con01 .contents {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con01 .contents img {
  width: 32px;
  height: 32px;
}
.con01 .contents .detaile {
  display: flex;
  align-items: end;
}
.con01 .contents .detaile p {
  color: #222;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
}
.con01 .contents .detaile span {
  color: #222;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}
.con02 {
  margin-top: 20px;
}
.con02 .tit-btn {
  display: flex;
  gap: 4px;
}
.con02 .tit-btn button {
  border-radius: 20px;
  border: 1px solid #c2c2c2;
  padding: 10px 16px;
}
.con02 .group .title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-top: 24px;
}
.con02 .group ul li {
  padding: 16px 8px;
}
.con02 .group ul li h1 {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 6px;
}
.con02 .group ul li .sub-con {
  display: flex;
  justify-content: space-between;
}
.con02 .group ul li .sub-con01 p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
.con02 .group ul li .sub-con01 .detaile {
  display: flex;
  align-items: center;
}
.con02 .group ul li .sub-con01 .detaile p {
  color: #2866ec;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
.con02 .group ul li .sub-con02 {
  display: flex;
  justify-content: space-between;
}
.con02 .group ul li .sub-con02 .detaile {
  display: flex;
  gap: 8px;
  align-items: center;
}
.con02 .group ul li .sub-con02 .detaile span {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.con02 .group ul li .sub-con02 p {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.use-coupon .coupon {
  display: flex;
  gap: 2px;
  margin-top: 8px;
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}
.con02 .group .use .sub-tit {
  color: #e52f28;
}
.con02 .group .use .sub-con01 .detaile p {
  color: #e52f28;
}
.con02 .group .use .sub-con01 .detaile span {
  color: #e52f28;
}
.con02 .group .use-coupon .sub-tit {
  color: #e52f28;
}
.con02 .group .use-coupon .sub-con01 .detaile p {
  color: #e52f28;
}
.con02 .group .use-coupon .sub-con01 .detaile span {
  color: #e52f28;
}
</style>
