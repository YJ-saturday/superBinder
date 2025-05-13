<template>
  <swiper
    :modules="modules"
    slidesPerView="auto"
    :spaceBetween="12"
    :freeMode="{
      enabled: true,
      momentum: true,
      sticky: false,
      minimumVelocity: 0.02,
    }"
    class="my-swiper"
  >
    <swiper-slide
      class="my-slide"
      v-for="product in products"
      :key="product.id"
    >
      <div class="product-card">
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
    </swiper-slide>
  </swiper>
  <div v-if="showJjimToast" class="jjim modal">찜 목록에 추가되었습니다.</div>
  <div v-if="cartToastType === 'add'" class="cart-add modal">
    <div class="content">
      <p class="title">{{ lastCartTitle }}</p>
      <p class="message">장바구니에 상품을 담았어요.</p>
    </div>
    <button class="cart-btn">구매하기</button>
  </div>
  <div v-if="cartToastType === 'delete'" class="cart-delete modal">
    장바구니에서 상품을 삭제했습니다.
  </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper/modules';

const { products } = defineProps({
  products: { type: Array, required: true },
});

const modules = [FreeMode, Pagination];

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
    if (!inCartMap.value[id]) {
      inCartMap.value[id] = true;
      cartToastType.value = 'add';
    } else {
      inCartMap.value[id] = false;
      cartToastType.value = 'delete';
    }
  } else {
    if (!notifyMap.value[id]) {
      notifyMap.value[id] = true;
      cartToastType.value = 'add';
    } else {
      notifyMap.value[id] = false;
      cartToastType.value = 'delete';
    }
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
.my-slide {
  width: 240px !important;
}
.product-card {
  margin-top: 30px;
  width: 240px;
  height: 380px;
}
.card-image {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  border: 1px solid #c2c2c2;
}
.card-image img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.icon-heart {
  position: absolute;
  bottom: 28px;
  left: 10px;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  border: none;
  z-index: 2;
}
.icon-heart img {
  width: 24px;
  height: 24px;
}
.icon-cart {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 46px;
  height: 46px;
  background: #1281e1;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
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
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 33px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.6);
}
.card-info {
  display: inline-block;
  margin-top: 8px;
}
.category {
  color: #888;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
}
.title,
.subtitle {
  color: #222;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
}
.price {
  margin-top: 8px;
  color: #222;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 800;
  white-space: nowrap;
}
.price .price-cost {
  color: #c2c2c2;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: line-through;
}
.price .price-unit {
  color: #222;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  margin-right: 8px;
}
.price .price-discount {
  color: #009bfa;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  margin: 0 6px;
}
.price .price-final {
  margin-left: 6px;
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
.stock {
  display: inline-block;
  margin-top: 8px;
  height: 24px;
  color: #2866ec;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 900px;
  background: #f5f5f5;
  padding: 3px 8px;
}
.low-stock {
  color: #ff2b59 !important;
}
.sold-out-text {
  color: #dadada;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 4px;
}

.modal {
  position: fixed;
  bottom: 96px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
}
.jjim {
  width: 192px;
  height: 42px;
  align-items: center;
  border-radius: 30px;
}
.cart-delete {
  width: 240px;
  height: 42px;
  align-items: center;
  border-radius: 30px;
}
.cart-add {
  width: 327px;
  height: 62px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-add .content .title {
  color: #fff;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.cart-add button {
  width: 58px;
  height: 24px;
  padding: 2px 8px;
  border: none;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 8px;
  background: #2866ec;
}
</style>
