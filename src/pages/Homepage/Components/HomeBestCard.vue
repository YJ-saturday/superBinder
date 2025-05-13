<template>
  <div class="home-best-card">
    <h1>구매 상품의 연관상품</h1>
    <div class="filter-btn">
      <div v-for="filter in filters" :key="filter.value" class="filter-item">
        <button
          type="button"
          :class="{ 'is-active': selectedFilter === filter.value }"
          @click="selectedFilter = filter.value"
        >
          <img :src="filter.icon" :alt="filter.label" class="filter-icon" />
        </button>
        <p class="filter-label">{{ filter.label }}</p>
      </div>
    </div>
    <div class="home-Product-Card">
      <ProductCardBest :products="filteredItems" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductCardBest from '@/common/ProductCardBest.vue';

const filters = [
  {
    label: '메이크업',
    value: 'item1',
    icon: '/src/assets/img/homeImg/makeupIcon.png',
  },
  {
    label: '스킨케어',
    value: 'item2',
    icon: '/src/assets/img/homeImg/skinIcon.png',
  },
  {
    label: '이너뷰티',
    value: 'item3',
    icon: '/src/assets/img/homeImg/beautyIcon.png',
  },
  {
    label: '홈데코',
    value: 'item4',
    icon: '/src/assets/img/homeImg/firecracker.png',
  },
];

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
];
const items3 = [
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
const items4 = [
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

const itemsMap = {
  item1: items1,
  item2: items2,
  item3: items3,
  item4: items4,
};

const selectedFilter = ref(filters[0].value);
const filteredItems = computed(() => itemsMap[selectedFilter.value] || []);
</script>
<style scoped>
.home-best-card {
  width: 100%;
}
.home-best-card > h1 {
  margin-top: 30px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
}
.home-best-card .filter-btn {
  display: flex;
  gap: 16px;
  margin-top: 30px;
}
.home-best-card .filter-btn .filter-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.home-best-card .filter-btn .filter-item button {
  width: 70px;
  height: 70px;
  border-radius: 52px;
  border: 1px solid #e6f3ff;
  background-color: #e6f3ff;
  padding: 0;
  cursor: pointer;
}
.home-best-card .filter-btn .filter-item button.is-active {
  background-color: #1281e1;
  border-color: #1281e1;
}
.home-best-card .filter-btn .filter-item button img {
  width: 50px;
  height: 50px;
}
.home-best-card .filter-btn .filter-item p.filter-label {
  margin-top: 12px;
  color: #212529;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.1px;
}
</style>
