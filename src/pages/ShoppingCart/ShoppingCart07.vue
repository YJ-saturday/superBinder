<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>주문완료</span>
  </div>
  <div class="wrap">
    <div class="con01">
      <div class="con01-title">주문이 완료<span>되었습니다. </span></div>
      <div class="con-total">
        <h1>총 주문 금액</h1>
        <p>
          408,000
          <span>원</span>
        </p>
      </div>
    </div>
  </div>
  <div class="con02">
    <ul>
      <li>
        <div class="con02-title com02-title0">
          <p>틸다 배송</p>
          <img src="/src/assets/img/icon/arrowUp.svg" alt="" />
        </div>
        <div class="items">
          <div class="item-title">주문 상품</div>
          <div class="item-con">
            <img src="/src/assets/img/productCard/bannerImg03.png" alt="" />
            <div class="item-detaile">
              <h1>브랜드명</h1>
              <span>2P 블럭 수세미 외 N개</span>
              <p>126,000원</p>
            </div>
          </div>
          <div class="item-bottom">
            <ul>
              <li>
                <p>주문금액</p>
                <span class="item-bootom-txt1">252,000원</span>
              </li>
              <li>
                <p>배송비</p>
                <span class="item-bootom-txt2">+ 6,000원</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="total">
          <h1>합계</h1>
          <p>136,000 <span>원</span></p>
        </div>
      </li>
      <li>
        <div class="con02-title com02-title1">
          <p>밴더 A사</p>
          <img src="/src/assets/img/icon/arrowUp.svg" alt="" />
        </div>
        <div class="total">
          <h1>합계</h1>
          <p>136,000 <span>원</span></p>
        </div>
      </li>
      <li>
        <div class="con02-title com02-title2">
          <p>밴더 A사</p>
          <img src="/src/assets/img/icon/arrowUp.svg" alt="" />
        </div>

        <div class="total">
          <h1>합계</h1>
          <p>136,000 <span>원</span></p>
        </div>
      </li>
    </ul>
  </div>
  <div class="bottom">
    <button>결제하기</button>
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
  padding: 24px;
  background: #ffffff;
}
/* con01 */
.con01 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.con01 .con01-title {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; /* 137.5% */
}
.con01 .con01-title span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
}
.con01 .con-total {
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 16px 24px;
  border: 2px solid #2866ec;
  background: #f3f7ff;
}
.con01 .con-total h1 {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.con01 .con-total p {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
}
.con01 .con-total p span {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.con01 ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 18px 0px 10px 0px;
}
.con01 ul li {
  display: flex;
}
.con01 ul li p {
  width: 90px;
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.con01 ul li span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
}
/* con02 */
.con02 {
  margin-top: 16px;
}
.con02 .con02-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
}
/* border */
.com02-title0 {
  border-top: 6px solid #f8f8f8;
}
.con02 .con02-title p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.con02 .con02-title img {
  width: 24px;
  height: 24px;
}
.con02 .items {
  padding: 16px 24px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: #f8f8f8;
}
.con02 .items .item-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
}
/* item-con */
.item-con {
  display: flex;
  gap: 16px;
  background: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}
.item-con img {
  width: 80px;
  height: 80px;
}
.item-detaile {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.item-detaile h1 {
  color: #888;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
}
.item-detaile span,
.item-detaile p {
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
}
.con02 .items .item-bottom ul li {
  display: flex;
  justify-content: space-between;
}
.con02 .items .item-bottom ul li p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.con02 .items .item-bottom ul li .item-bootom-txt1 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
}
.con02 .items .item-bottom ul li .item-bootom-txt2 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.con02 .total {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 6px solid #f8f8f8;
}
.con02 .total h1 {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.con02 .total p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
}
.con02 .total span {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.bottom {
  padding: 24px;
  margin-top: 96px;
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
  border-radius: 8px;
  background: #2866ec;
  border: none;
}
</style>
