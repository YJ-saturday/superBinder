<template>
  <div class="home-Serve-card">
    <div class="home-Product-Card top">
      <div class="title">
        <span>인기상품</span>
        <img src="/src/assets/img/productCard/rightAllow.png" alt="" />
      </div>
      <ProductCard :products="items0" />
    </div>
    <div class="home-Product-Card top">
      <div class="title">
        <span>추천상품</span>
        <img src="/src/assets/img/productCard/rightAllow.png" alt="" />
      </div>
      <ProductCard :products="items1" />
    </div>
    <div class="home-Product-Card bottom" @click="isModalOpen = true">
      <div class="title">
        <span> 슈퍼 프리미엄 상품</span>
        <img src="/src/assets/img/productCard/rightAllow.png" alt="" />
      </div>
      <ProductCard :products="items2" />
    </div>
    <SuperAlert v-if="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '@/common/ProductCard.vue';
import SuperAlert from '@/common/Alert/SuperAlert.vue';

const isModalOpen = ref(false);

const items0 = [
  {
    id: 1,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 2,
    img: '/src/assets/img/productCard/bannerImg04.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 5,
  },
  {
    id: 3,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 4,
    img: '/src/assets/img/productCard/bannerImg04.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 5,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
];
const items1 = [
  {
    id: 1,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 2,
    img: '/src/assets/img/productCard/bannerImg04.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 5,
  },
  {
    id: 3,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 4,
    img: '/src/assets/img/productCard/bannerImg04.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 5,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
];
const items2 = [
  {
    id: 1,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 2,
    img: '/src/assets/img/productCard/bannerImg04.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 0,
  },
  {
    id: 3,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 4,
    img: '/src/assets/img/productCard/bannerImg04.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    stock: 9000,
  },
  {
    id: 5,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
];
</script>

<style scoped>
.home-Serve-card {
  width: 100%;
}
.home-Product-Card .title {
  display: flex;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-items: center;
  margin-top: 30px;
}
.home-Product-Card .title img {
  width: 24px;
  height: 24px;
}
</style>
