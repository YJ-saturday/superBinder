<template>
  <div class="new-brand">
    <div class="title">
      <p>신제품 & 브랜드</p>
      <img src="/src/assets/img/productCard/rightAllow.png" alt=">" />
    </div>
    <div class="item-img">
      <img src="/src/assets/img/homeImg/NewBrand.png" alt="" />
      <button class="buy-now">바로구매</button>
    </div>
    <div class="brand-list">
      <div v-for="brand in items1" :key="brand.name" class="brand-item">
        <img :src="brand.img" :alt="brand.name" class="brand-image" />
        <p class="brand-name">{{ brand.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items1 = [
  { name: '클린로직', img: '/src/assets/img/homeImg/newBrandLogo1.png' },
  { name: '라코로나', img: '/src/assets/img/homeImg/newBrandLogo2.png' },
  { name: '브러쉬테크', img: '/src/assets/img/homeImg/newBrandLogo3.png' },
  { name: '톤키타', img: '/src/assets/img/homeImg/newBrandLogo4.png' },
  { name: '드라이팍', img: '/src/assets/img/homeImg/newBrandLogo5.png' },
];
</script>

<style scoped>
.new-brand .title {
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.new-brand .title p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.new-brand .title img {
  width: 24px;
  height: 24px;
}
.new-brand .item-img {
  margin-top: 16px;
  position: relative;
}
.new-brand .item-img img {
  width: 100%;
  display: block;
}
.new-brand .item-img .buy-now {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 260px;
  height: 45px;
  border: none;
  border-radius: 40px;
  background: #1281e1;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.new-brand .brand-list {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
.new-brand .brand-list .brand-item {
  text-align: center;
  width: 100%;
}
.new-brand .brand-list .brand-item .brand-image {
  width: 51.094px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #eee;
  object-fit: cover;
}
.new-brand .brand-list .brand-item .brand-name {
  margin-top: 8px;
  font-family: Pretendard;
  font-size: 14px;
  color: #333;
}
</style>
