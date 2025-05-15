<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>카테고리</span>
  </div>
  <div class="category-btn">
    <div class="btn-main">
      <ul class="croll">
        <li>
          <button class="active1">욕실용품</button>
        </li>
        <li>
          <button>세탁용품</button>
        </li>
        <li>
          <button>주방용품</button>
        </li>
        <li>
          <button>청소용품</button>
        </li>
        <li>
          <button>청소물품</button>
        </li>
      </ul>
      <div class="btn-sub">
        <img src="/src/assets/img/icon/arrowDown.svg" alt="" />
      </div>
    </div>
    <div class="type-btn">
      <div class="content">
        <div class="category-icons">
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon01.svg" alt="" />
            </div>
            <span>전체</span>
          </div>
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon02.svg" alt="" />
            </div>
            <span class="active">구강</span>
          </div>
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon03.svg" alt="" />
            </div>
            <span>워시</span>
          </div>
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon04.svg" alt="" />
            </div>
            <span>바디솝</span>
          </div>
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon05.svg" alt="" />
            </div>
            <span>헤어케어</span>
          </div>
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon06.svg" alt="" />
            </div>
            <span>위시</span>
          </div>
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon07.svg" alt="" />
            </div>
            <span>바디솝</span>
          </div>
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon08.svg" alt="" />
            </div>
            <span>바디솝</span>
          </div>
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon09.svg" alt="" />
            </div>
            <span>바디솝</span>
          </div>
          <div class="category-icon">
            <div class="icon">
              <img src="/src/assets/img/category/categoryIcon10.svg" alt="" />
            </div>
            <span>바디솝</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="product">
    <div class="prduct-title">
      <div class="title-left">
        <p>상품</p>
        <span class="badge">200</span>
      </div>
      <div class="title-right">
        <p>인기 상품순</p>
        <img src="/src/assets/img/icon/arrowDown.svg" alt="" />
      </div>
    </div>
    <div class="product-list">
      <div class="product-card" v-for="product in products" :key="product.id">
        <div class="card-image">
          <img :src="product.img" alt="상품 이미지" />
          <button class="icon-heart" @click="toggleLike(product.id)">
            <img
              v-if="!likedMap[product.id]"
              src="/src/assets/img/productCard/heart.svg"
              alt="찜하기"
            />
            <img
              v-else
              src="/src/assets/img/productCard/heartFull.svg"
              alt="찜완료"
            />
          </button>
          <button
            class="icon-cart"
            :class="{ 'sold-out': product.stock === 0 }"
            @click="toggleCart(product)"
          >
            <img
              :src="
                product.stock === 0
                  ? '/src/assets/img/productCard/bell.png'
                  : '/src/assets/img/productCard/cart.svg'
              "
              :alt="product.stock === 0 ? '알림받기' : '장바구니'"
            />
          </button>
          <div v-if="product.stock === 0" class="sold-out-overlay">
            일시품절
          </div>
        </div>
        <div class="card-info">
          <p class="category">{{ product.category }}</p>
          <p class="title">{{ product.title }}</p>
          <p class="subtitle">{{ product.subtitle }}</p>

          <div v-if="product.stock > 0">
            <p class="price">
              <span class="price-cost">{{ formatPrice(product.price) }}</span>
              <span class="price-unit">원</span>
              <span class="price-discount">{{ product.discount }}%</span>
              <span class="price-final">
                {{
                  formatPrice(
                    calculateFinalPrice(product.price, product.discount)
                  )
                }}원
              </span>
            </p>
            <span class="stock" :class="{ 'low-stock': product.stock <= 10 }">
              {{ product.stock }}개 남음
            </span>
          </div>
          <div v-else>
            <p class="sold-out-text">SOLD OUT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showJjimToast" class="jjim modal">찜 목록에 추가되었습니다.</div>

  <div v-if="cartToastType === 'add'" class="cart-add modal">
    <div class="content">
      <p class="title">{{ lastCartTitle }}</p>
      <p class="message">장바구니에 상품을 담았습니다.</p>
    </div>
    <button class="cart-btn">구매하기</button>
  </div>

  <div v-if="cartToastType === 'delete'" class="cart-delete modal">
    장바구니에서 상품을 삭제했습니다.
  </div>
</template>

<script setup>
import { ref } from 'vue';
const products = ref([
  {
    id: 1,
    img: '/src/assets/img/productCard/bannerImg01.png',
    category: '상의',
    title: '베이직 티셔츠',
    subtitle: '편안한 코튼 소재',
    price: 25000,
    discount: 10,
    stock: 9000,
  },
  {
    id: 2,
    img: '/src/assets/img/productCard/bannerImg02.png',
    category: '하의',
    title: '스트레이트 진',
    subtitle: '데님 팬츠',
    price: 45000,
    discount: 15,
    stock: 5,
  },
  {
    id: 3,
    img: '/src/assets/img/productCard/bannerImg02.png',
    category: '신발',
    title: '러닝 스니커즈',
    subtitle: '경량 러닝화',
    price: 65000,
    discount: 5,
    stock: 0,
  },
  {
    id: 4,
    img: '/src/assets/img/productCard/bannerImg02.png',
    category: '신발',
    title: '러닝 스니커즈',
    subtitle: '경량 러닝화',
    price: 65000,
    discount: 5,
    stock: 4,
  },
]);

const likedMap = ref({});
const showJjimToast = ref(false);
function toggleLike(id) {
  likedMap.value[id] = !likedMap.value[id];
  if (likedMap.value[id]) {
    showJjimToast.value = true;
    setTimeout(() => (showJjimToast.value = false), 2000);
  }
}

const notifyMap = ref({});
const inCartMap = ref({});
const lastCartTitle = ref('');
const cartToastType = ref('');
let cartToastTimer = null;

function toggleCart(product) {
  const id = product.id;
  lastCartTitle.value = product.title;

  if (product.stock > 0) {
    inCartMap.value[id] = !inCartMap.value[id];
    cartToastType.value = inCartMap.value[id] ? 'add' : 'delete';
  } else {
    notifyMap.value[id] = !notifyMap.value[id];
    cartToastType.value = notifyMap.value[id] ? 'add' : 'delete';
  }

  if (cartToastTimer) clearTimeout(cartToastTimer);
  cartToastTimer = setTimeout(() => {
    cartToastType.value = '';
  }, 2000);
}

function formatPrice(p) {
  return p.toLocaleString();
}

function calculateFinalPrice(p, d) {
  return Math.floor((p * (100 - d)) / 100);
}
</script>
<style scoped>
.header {
  width: 100%;
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
.category-btn {
  display: flex;
  flex-direction: column;
  padding: 24px;
}
.category-btn .btn-main ul {
  display: flex;
  gap: 4px;
}

.content {
  overflow-x: hidden;
  margin-top: 16px;
}
.category-top {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.category-top .item {
  padding: 4px 10px;
  border-radius: 12px;
  background: #f5f5f5;
  color: #888;
  font-size: 13px;
  cursor: pointer;
}
.category-top .item.active {
  background: #1e90ff;
  color: #fff;
}
.category-icons {
  width: 100%;
  display: flex;
  gap: 4px;
}
.category-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.category-icon .icon {
  width: 35px;
  height: 35px;
  background: #e0e7ef;
  border-radius: 50%;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 8px;
  background: #f3f7ff;
}
.category-icon span {
  font-size: 13px;
  color: #444;
}
.category-icon.active .icon {
  background: #2866ec;
  color: #fff;
}
.category-icon.active span {
  color: #1e90ff;
  font-weight: bold;
}
/* product */
.product {
  border-top: 6px solid #eee;
  padding: 30px 24px 0px 24px;
}
.product-list {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
}
.prduct-title {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.prduct-title .title-left {
  display: flex;
  align-items: center;
  gap: 4px;
}
.prduct-title .title-left p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
.prduct-title .title-left span {
  width: 28px;
  height: 13px;
  padding: 0px 4px;
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 13px; /* 130% */
  letter-spacing: -0.1px;
  border-radius: 11px;
  background: #ff2a59;
}
.prduct-title .title-right {
  display: flex;
  align-items: center;
  gap: 4px;
}
.prduct-title .title-right p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.prduct-title .title-right img {
  width: 16px;
  height: 16px;
}

.product-card {
  margin-top: 30px;
  width: 159px;
  height: 292px;
  flex: 0 0 calc(40%);
}
.card-image {
  position: relative;
  width: 159px;
  height: 159px;
  border-radius: 20px;
  border: 1px solid #c2c2c2;
}
.card-image img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.icon-heart {
  position: absolute;
  bottom: 28px;
  left: 3px;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
}
.icon-heart img {
  width: 24px;
  height: 24px;
}
.icon-cart {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  background: #1281e1;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-cart.sold-out {
  background: #ff2b59;
}
.icon-cart img {
  width: 24px;
  height: 24px;
}
.sold-out-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
}
.card-info {
  margin-top: 8px;
}
.category {
  color: #888;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.title {
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.subtitle {
  color: #222;
  font-size: 17px;
  font-weight: 500;
}
.price {
  margin-top: 8px;
  font-size: 20px;
  font-weight: 800;
}
.price-cost {
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
.price-unit {
  color: #222;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.price-discount {
  display: none;
  font-size: 16px;
  color: #009bfa;
}
.price-final {
  display: none;
  margin-left: 6px;
  font-size: 18px;
  font-weight: 700;
}
.stock {
  display: inline-block;
  margin-top: 8px;
  padding: 3px 8px;
  border-radius: 900px;
  background: #f5f5f5;
  font-size: 12px;
  font-weight: 500;
  color: #2866ec;
}
.low-stock {
  color: #ff2b59;
}
.sold-out-text {
  color: #dadada;
  font-size: 20px;
  font-weight: 800;
}

/* modal */
.modal {
  position: fixed;
  bottom: 96px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 30px;
  z-index: 4;
}
.jjim {
  width: 192px;
  height: 42px;
  display: flex;
  align-items: center;
}
.cart-delete {
  width: 240px;
  height: 42px;
  display: flex;
  align-items: center;
}
.cart-add {
  width: 327px;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
}
.cart-add .content .title {
  font-size: 14px;
  font-weight: 400;
}
.cart-btn {
  width: 58px;
  height: 24px;
  padding: 2px 8px;
  border: none;
  border-radius: 8px;
  background: #2866ec;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
/* 스크롤 */
.croll {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  margin: 0;
  list-style: none;
}
.croll li {
  flex: 0 0 auto;
}
.croll::-webkit-scrollbar {
  display: none;
}
.croll li button.active1 {
  border-radius: 20px;
  background: #222;
  color: #fff;
}
.croll li button.active2 {
  border-radius: 20px;
  background: #1281e1;
  color: #fff;
}
.croll li button {
  width: 81px;
  height: 40px;
  padding: 10px 12px;
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  border-radius: 20px;
  border: 1px solid #c2c2c2;
}

.btn-main {
  position: relative;
}

.btn-main::before {
  content: '';
  width: 40px;
  height: 40px;
  position: absolute;
  right: 40px;
  background: linear-gradient(270deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
}
.btn-sub {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.btn-sub img {
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 999999;
}

.category-icons {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  margin: 0;
  list-style: none;
}
.category-icons .category-icon {
  flex: 0 0 auto;
}
.category-icons::-webkit-scrollbar {
  display: none;
}
</style>
