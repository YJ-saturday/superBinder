<template>
  <div class="home-Serve-card">
    <div class="home-Product-Card top">
      <div class="title">
        <span>특별한 시즌!! 한정특가</span>
        <img src="/src/assets/img/productCard/rightAllow.png" alt="" />
      </div>
      <ProductCard :products="items1" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '@/common/ProductCard.vue';

const isModalOpen = ref(false);

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
