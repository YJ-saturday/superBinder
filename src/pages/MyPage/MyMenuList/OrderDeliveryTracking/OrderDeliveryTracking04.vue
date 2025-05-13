<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>주문 상세</span>
  </div>
  <div class="order-detail">
    <section class="summary">
      <h2>주문상품 내역</h2>
      <div class="info">
        <div class="info-row">
          <span class="label">주문일시</span>
          <span class="value">2025.03.01 오후 01:13</span>
        </div>
        <div class="info-row">
          <span class="label">주문번호</span>
          <span class="value">B22141111YX</span>
        </div>
      </div>
      <button class="total-btn">총 주문 금액 <strong>408,000원</strong></button>
    </section>

    <section class="section">
      <div class="section-header" @click="toggle('delivery')">
        <span>틸다 배송</span>
        <img
          :class="{ open: isOpen.delivery }"
          src="/src/assets/img/icon/arrowDown.svg"
          alt="펼치기/접기"
        />
      </div>
      <div v-if="isOpen.delivery" class="section-body">
        <div class="product">
          <!-- <img src="@/assets/img/products/sample.jpg" alt="상품이미지" /> -->
          <div class="detail">
            <p class="brand">브랜드명</p>
            <p class="name">2P 블랙 수세미 외 N개</p>
            <p class="price">126,000원</p>
          </div>
        </div>
        <div class="price-info">
          <div class="row">
            <span>주문금액</span>
            <span>252,000원</span>
          </div>
          <div class="row">
            <span>배송비</span>
            <span>+ 6,000원</span>
          </div>
        </div>
        <div class="section-total">합계 <span>136,000원</span></div>
      </div>
    </section>

    <!-- 밴더 A사 섹션 -->
    <section class="section">
      <div class="section-header" @click="toggle('vendorA')">
        <span>밴더 A사</span>
        <!-- <img
          :class="{ open: isOpen.vendorA }"
          src="@/assets/img/icon/arrowDown.svg"
          alt="펼치기/접기"
        /> -->
      </div>
      <div v-if="isOpen.vendorA" class="section-body">
        <div class="section-total">합계 <span>136,000원</span></div>
      </div>
    </section>

    <!-- 밴더 B사 섹션 -->
    <section class="section">
      <div class="section-header" @click="toggle('vendorB')">
        <span>밴더 B사</span>
        <!-- <img
          :class="{ open: isOpen.vendorB }"
          src="@/assets/img/icon/arrowDown.svg"
          alt="펼치기/접기"
        /> -->
      </div>
      <div v-if="isOpen.vendorB" class="section-body">
        <div class="section-total">합계 <span>136,000원</span></div>
      </div>
    </section>

    <!-- 쿠폰/결제 요약 -->
    <section class="coupon">
      <h2>쿠폰사용</h2>
      <div class="coupon-item">
        <span>신규가입 쿠폰</span>
        <span>5,000원</span>
      </div>
      <div class="summary-list">
        <div class="row"><span>상품금액</span><span>25,800원</span></div>
        <div class="row"><span>상품할인금액</span><span>0원</span></div>
        <div class="row"><span>배송비</span><span>무료</span></div>
        <div class="row"><span>쿠폰 사용</span><span>5,000원</span></div>
        <div class="row"><span>적립금</span><span>150원</span></div>
        <div class="row total">
          <span>최종결제금액</span><span>258,000원</span>
        </div>
        <div class="row">
          <span>결제방법</span><span>일반 결제(카드 결제) 우리카드</span>
        </div>
      </div>
    </section>

    <!-- 안내 문구 -->
    <section class="notice">
      <h2>미출고시 조치방법</h2>
      <p>슈퍼페이로 환급</p>
    </section>

    <!-- 장바구니 버튼 -->
    <button class="cart-btn">같은 상품 장바구니 담기</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

function goBack() {
  window.history.back();
}

const isOpen = reactive({
  delivery: true,
  vendorA: false,
  vendorB: false,
});

function toggle(section) {
  isOpen[section] = !isOpen[section];
}
</script>

<style scoped>
.order-detail {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 16px;
  background: #f9f9f9;
}
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
/* 주문 요약 */
.summary {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.summary h2 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #212121;
}
.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}
.info-row .label {
  font-size: 14px;
  color: #757575;
}
.info-row .value {
  font-size: 14px;
  color: #212121;
}
.total-btn {
  width: 100%;
  padding: 12px 0;
  margin-top: 8px;
  border: 1px solid #0066ff;
  border-radius: 6px;
  background: #fff;
  color: #0066ff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

/* 섹션 공통 */
.section {
  margin-bottom: 4px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
}
.section-header span {
  font-size: 16px;
  font-weight: 500;
  color: #212121;
}
.section-header img {
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
}
.section-header img.open {
  transform: rotate(180deg);
}
.section-body {
  background: #fff;
  padding: 16px;
  border-radius: 0 0 8px 8px;
}

/* 상품 정보 */
.product {
  display: flex;
  margin-bottom: 12px;
}
.product img {
  width: 64px;
  height: 64px;
  border-radius: 4px;
  margin-right: 12px;
}
.product .brand {
  font-size: 14px;
  color: #424242;
  margin-bottom: 4px;
}
.product .name {
  font-size: 14px;
  color: #212121;
  margin-bottom: 4px;
}
.product .price {
  font-size: 14px;
  color: #757575;
}

/* 가격 정보 */
.price-info .row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #424242;
  margin-bottom: 4px;
}
.section-total {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  color: #212121;
  border-top: 1px solid #e0e0e0;
  padding-top: 12px;
}

/* 쿠폰/결제 요약 */
.coupon {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
}
.coupon h2 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #212121;
}
.coupon-item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #424242;
  margin-bottom: 12px;
}
.summary-list .row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #424242;
  margin-bottom: 8px;
}
.summary-list .total {
  font-weight: 500;
  color: #212121;
}

/* 안내 문구 */
.notice {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.notice h2 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #212121;
}
.notice p {
  font-size: 14px;
  color: #424242;
}

/* 장바구니 버튼 */
.cart-btn {
  width: 100%;
  padding: 14px 0;
  background-color: #0066ff;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
}
</style>
