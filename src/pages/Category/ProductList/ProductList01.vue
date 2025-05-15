<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>카테고리</span>
  </div>
  <div class="category-btn">
    <div class="btn-main">
      <ul>
        <li>
          <button>욕실 용품</button>
        </li>
        <li>
          <button>욕실 용품</button>
        </li>
        <li>
          <button>욕실 용품</button>
        </li>
        <li>
          <button>욕실 용품</button>
        </li>
        <div class="btn-sub">
          <img src="/src/assets/img/icon/arrowDown.svg" alt="" />
        </div>
      </ul>
      <button class="allow-btn"></button>
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
    <div class="product-item">
      <div class="product-title">
        <div class="title-left">
          <p>상품</p>
          <span class="badge">200</span>
        </div>
        <div class="title-right">
          <p>인기 상품순</p>
          <img src="/src/assets/img/icon/bottomarrow.png" alt="" />
        </div>
      </div>
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
    </div>
  </div>
</template>

<script setup></script>

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
  padding: 24px;
}
.category-btn .btn-main {
  position: relative;
}
.category-btn .btn-main ul {
  display: flex;
  gap: 4px;
}
.category-btn .btn-main ul li button {
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
.content {
  overflow-x: hidden;
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
</style>
