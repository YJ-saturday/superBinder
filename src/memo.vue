<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>계정관리</span>
  </div>
  <div class="wrap">
    <div class="con01">
      <div class="con01-title">주문자 정보</div>
      <ul>
        <li>
          <p>주문자명</p>
          <span>김슈퍼</span>
        </li>
        <li>
          <p>휴대폰</p>
          <span>010-1234-1234</span>
        </li>
        <li>
          <p>이메일</p>
          <span>testestest089@mail.com</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="con02">
    <div class="con02-title">
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
  </div>

  <div class="wrap">
    <div class="con03">
      <div class="total-all">
        <div class="total-all-title">총 주문 금액</div>
        <div class="total-all-item">
          <p>408,000 <span>원</span></p>
        </div>
      </div>

      <div class="coupon">
        <div class="coupon-title">쿠폰 사용</div>
        <button>
          <p>선택된 쿠폰이 없습니다.</p>
          <img src="/src/assets/img/icon/rightAllow.svg" alt="" />
        </button>
      </div>

      <div class="payment">
        <ul>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>페이사용</p>
            </label>
          </li>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>간편결제</p>
            </label>
          </li>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>일반결제</p>
            </label>
          </li>
        </ul>
      </div>

      <div class="pay-da">
        <ul>
          <li>
            <p>현재 보유 페이</p>
            <span>500,000</span>
          </li>
          <li>
            <p>현재 보유 페이</p>
            <span>500,000</span>
          </li>
        </ul>
        <button>슈퍼 페이 충전</button>
      </div>

      <div class="pay-result">
        <div class="title">결제정보</div>
        <ul>
          <li>
            <p>상품 금액</p>
            <span>25,800원</span>
          </li>
          <li>
            <p>상품 금액</p>
            <span>25,800원</span>
          </li>
          <li>
            <p>상품 금액</p>
            <span>25,800원</span>
          </li>
          <li>
            <p>상품 금액</p>
            <span>25,800원</span>
          </li>
          <li>
            <p>상품 금액</p>
            <span>25,800원</span>
          </li>
          <li>
            <p>상품 금액</p>
            <span>25,800원</span>
          </li>
          <li>
            <p>상품 금액</p>
            <span>25,800원</span>
          </li>
        </ul>
      </div>

      <div class="warning">
        <div class="title">미출고시 조치방법</div>
        <ul>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>사용하지 않음</p>
            </label>
          </li>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>사용하지 않음</p>
            </label>
          </li>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>사용하지 않음</p>
            </label>
          </li>
        </ul>
      </div>

      <div class="agree">
        <div class="title">개인정보 수집/제공</div>
        <div class="agree-item">
          <label class="style_checkbox">
            <input type="checkbox" />
            <p>사용하지 않음</p>
          </label>
        </div>
      </div>
    </div>

    <div class="bottom">
      <button>결제하기</button>
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
  padding: 24px;
}
/* con01 */
.con01 .con01-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
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
.con02 .con02-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-top: 5px solid #f8f8f8;
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
</style>
