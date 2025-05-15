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
              <span class="price-final">
                {{
                  formatPrice(
                    calculateFinalPrice(product.price, product.discount)
                  )
                }}원
                <span class="price-discount">{{ product.discount }}%</span>
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
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper/modules';

const { products } = defineProps({
  products: { type: Array, required: true },
});

const modules = [FreeMode, Pagination];

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

.sold-out-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  color: #fff;
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  text-align: center;
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

.title {
  color: #222;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
}

.subtitle {
  color: #222;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
}

.price {
  margin-top: 8px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 800;
  white-space: nowrap;
}
.price-discount {
  margin-left: 6px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #009bfa;
}
.price-final {
  margin-left: 6px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
}

.stock {
  display: inline-block;
  margin-top: 8px;
  padding: 3px 8px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 900px;
  background: #f5f5f5;
  color: #2866ec;
}

.low-stock {
  color: #ff2b59 !important;
}

.sold-out-text {
  margin-top: 4px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 800;
  color: #dadada;
}
</style>
