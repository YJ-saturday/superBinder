<template>
  <div class="store-products">
    <div class="store-title">
      <button class="store-title-btn">전체 매장 Hot Rank</button>
      <button class="store-title-btn2">우리 매장 Hot Rank</button>
    </div>
  </div>
  <ProductCard />
</template>
<script setup>
import ProductCard from "../../../common/ProductCard.vue";
</script>
<style scoped>
.store-products {
  width: 100%;
}
.store-products .store-title {
  margin-top: 30px;
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
}
.store-products .store-title button {
  width: 159px;
  height: 38px;
  border-radius: 20px;
  background: #1a1a1a;
  border: none;
  cursor: pointer;
  color: #fff;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.store-title-btn.active {
  background: #000;
  color: #fff;
  border-color: #000;
}
</style>
