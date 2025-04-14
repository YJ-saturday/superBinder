<template>
  <div class="card-list">
    <div class="product-card">
      <span class="best-label">BEST 1</span>
      <img
        class="product-img"
        src="https://via.placeholder.com/160x160"
        alt="상품이미지"
      />
      <div class="heart-icon">♥</div>
      <div class="cart-icon">장</div>
      <div class="product-info">
        <div class="brand">비타리온</div>
        <p class="title">보습, 보호, 알레르기 만능!! 포프로링 3종</p>
        <p class="price">16,000원</p>
        <p class="stock">9,000개 남음</p>
      </div>
    </div>
    <div class="product-card">
      <span class="best-label">BEST 2</span>
      <img
        class="product-img"
        src="https://via.placeholder.com/160x160"
        alt="상품이미지"
      />
      <div class="heart-icon">♥</div>
      <div class="cart-icon">장</div>
      <div class="product-info">
        <div class="brand">로샤네스</div>
        <p class="title">각질제거 고민 끝!</p>
        <p class="price">25,000원</p>
        <p class="stock">5개 남음</p>
      </div>
    </div>
    <div class="product-card">
      <span class="best-label">BEST 3</span>
      <img
        class="product-img"
        src="https://via.placeholder.com/160x160"
        alt="상품이미지"
      />
      <div class="heart-icon">♥</div>
      <div class="cart-icon">장</div>
      <div class="product-info">
        <div class="brand">다른브랜드</div>
        <p class="title">톡톡 튀는 향기!</p>
        <p class="price">32,000원</p>
        <p class="stock">2개 남음</p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style>
.card-list {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 10px;
}
.card-list::-webkit-scrollbar {
  height: 6px;
}
.card-list::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
.product-card {
  min-width: 160px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}
.product-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}
.best-label {
  position: absolute;
  top: 8px;
  left: 8px;
  background: #b66afc;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  border-radius: 8px;
}
.heart-icon,
.cart-icon {
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 8px;
  font-size: 14px;
  cursor: pointer;
}
.heart-icon {
  right: 40px;
}
.cart-icon {
  right: 8px;
}
.product-info {
  padding: 8px;
}
.brand {
  font-size: 12px;
  color: #999;
  margin-bottom: 4px;
}
.title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 0 0 6px;
}
.price {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin: 0 0 4px;
}
.stock {
  font-size: 12px;
  color: #ff5555;
  margin: 0;
}
</style>
