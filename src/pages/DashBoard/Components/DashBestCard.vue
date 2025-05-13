<template>
  <div class="home-best-card">
    <div class="filter-btn">
      <button
        type="button"
        class="entire-btn"
        :class="{ 'is-active': selectedFilter === 'all' }"
        @click="selectedFilter = 'all'"
      >
        전체 매장 Hot Rank
      </button>
      <button
        type="button"
        class="our-btn"
        :class="{ 'is-active': selectedFilter === 'our' }"
        @click="selectedFilter = 'our'"
      >
        우리 매장 Hot Rank
      </button>
    </div>
    <div class="home-Product-Card" v-if="selectedFilter === 'all'">
      <ProductCardBest :products="items1" />
    </div>
    <div class="home-Product-Card" v-else>
      <ProductCardBest :products="items2" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCardBest from '@/common/ProductCardBest.vue';

const selectedFilter = ref('all');

const items1 = [
  {
    id: 1,
    img: '/src/assets/img/productCard/bannerImg01.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 2,
    img: '/src/assets/img/productCard/bannerImg02.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 3,
    img: '/src/assets/img/productCard/bannerImg02.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 4,
    img: '/src/assets/img/productCard/bannerImg02.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 5,
    img: '/src/assets/img/productCard/bannerImg02.png',
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
    img: '/src/assets/img/productCard/bannerImg02.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 2,
    img: '/src/assets/img/productCard/bannerImg01.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 3,
    img: '/src/assets/img/productCard/bannerImg02.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 4,
    img: '/src/assets/img/productCard/bannerImg01.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 5,
    img: '/src/assets/img/productCard/bannerImg02.png',
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
.home-best-card {
  width: 100%;
  padding-left: 20px;
}
.filter-btn {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}
.filter-btn button {
  background: none;
  border: 1px solid #eee;
  border-radius: 20px;
  width: 159px;
  height: 38px;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  transition: background-color 0.2s, color 0.2s;
}
.filter-btn button:hover {
  background: #1a1a1a;
  color: #fff;
  border-color: #1a1a1a;
}
.filter-btn button.is-active {
  background: #1a1a1a;
  color: #fff;
  border-color: #1a1a1a;
}
</style>
