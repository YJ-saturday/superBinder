<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>내역 상세</span>
  </div>
  <div class="wrap">
    <div class="con01">
      <div class="group">
        <h1 class="sub-tit">사용</h1>
        <div class="sub-con">
          <p>토스페이</p>
          <div class="detaile">
            <p class="money">-52,500원</p>
            <span>원</span>
          </div>
        </div>
        <div class="sub-con">
          <div class="detaile">
            <p>14:20</p>
            <span>A1000D3332</span>
          </div>
          <p>잔액 30,000,000원</p>
        </div>
      </div>
    </div>
    <div class="con02">
      <div class="con02-tit">사용처</div>
      <div class="item-tit">주문 상품</div>
      <div class="item-con">
        <img src="/src/assets/img/productCard/bannerImg03.png" alt="" />
        <div class="item-detaile">
          <p>2P 블럭 수세미</p>
          <div class="detaile-sub">
            <span>옵션</span>
            <p>
              옵션1 50개 /옵션2 8개 /<br />
              POP주문
            </p>
          </div>
          <span>126,000원</span>
        </div>
      </div>
      <div class="con03">
        <div class="con03-detaile">
          <p>주문금액</p>
          <span>126,000원</span>
        </div>
        <div class="con03-detaile">
          <p>배송비</p>
          <span>3,000원</span>
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
.wrap {
  padding: 20px 24px 20px 24px;
}
.con01 {
  padding: 16px 8px;
  border-bottom: 1px solid #e2e2e2;
}
.con01 .group h1 {
  color: #e52f28;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 6px;
}
.con01 .group .sub-con p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
.con01 .group .sub-con .detaile {
  display: flex;
  align-items: center;
}
.con01 .group .sub-con .detaile .money {
  color: #e52f28;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
.con01 .group .sub-con {
  display: flex;
  justify-content: space-between;
}
.con01 .group .sub-con .detaile {
  display: flex;
  gap: 8px;
  align-items: center;
}
.con01 .group .sub-con .detaile span {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.con01 .group .sub-con p {
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
.con02 .con02-tit {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-top: 40px;
}
.con02 .item-tit {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-top: 16px;
}
.con02 .item-con {
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
  padding: 24px;
  display: flex;
  gap: 16px;
}
.con02 .item-con img {
  width: 80px;
  height: 80px;
}
.con02 .item-con .item-detaile {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.con02 .item-con .item-detaile p {
  color: #888;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.con02 .item-con .item-detaile span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.con02 .item-con .detaile-sub {
  display: flex;
  gap: 4px;
}
.con02 .item-con .detaile-sub span {
  width: 29px;
  height: 21px;
  height: 21px;
  border-radius: 4px;
  border: 1px solid #c2c2c2;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.con02 .item-con .detaile-sub p {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.con03 {
  width: 100%;
  height: 84px;
  border-radius: 30px;
  background: #f5f5f5;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 16px;
}
.con03-detaile {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  display: flex;
  justify-content: space-between;
}
</style>
