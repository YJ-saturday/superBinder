<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <div class="search">
      <div class="search-left">
        <img src="/src/assets/img/icon/searchPageBtn.svg" alt="" />
        <label for="search-box">
          <input type="text" placeholder="화장품" id="search-box" />
        </label>
      </div>
      <div class="search-right">
        <img src="/src/assets/img/icon/crossOne.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="category-btn">
    <div class="btn-main">
      <ul class="croll">
        <li>
          <button class="active1">욕실용품</button>
        </li>
        <li>
          <button>세탁용품</button>
        </li>
        <li>
          <button>주방용품</button>
        </li>
        <li>
          <button>청소용품</button>
        </li>
        <li>
          <button>청소물품</button>
        </li>
      </ul>
      <div class="btn-sub">
        <img src="/src/assets/img/icon/arrowDown.svg" alt="" />
      </div>
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
  </div>
  <div class="product-neno">
    <p>‘화장품’ 상품이 없습니다.</p>
    <span>입력하신 검색어 확인 후 다시 검색해주세요</span>
  </div>
</template>

<script setup></script>
<style scoped>
.header {
  width: 100%;
  height: 62px;
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: relative;
}
.header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.header .search {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 40px;
  background: #f5f5f5;
}
.header .search .search-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header .search .search-left #search-box {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background: none;
  outline: none;
  box-shadow: none;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
#search-box::placeholder {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
.header .search .search-left img {
  width: 16px;
  height: 16px;
}

.category-btn {
  display: flex;
  flex-direction: column;
  padding: 24px;
}
.category-btn .btn-main ul {
  display: flex;
  gap: 4px;
}

.content {
  overflow-x: hidden;
  margin-top: 16px;
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
/* product */
.product-neno {
  width: 100%;
  height: 520px;
  border-top: 6px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
}
.product-neno p {
  color: #000;
  text-align: center;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
}
.product-neno span {
  color: #000;
  text-align: center;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
/* 스크롤 */
.croll {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  margin: 0;
  list-style: none;
}
.croll li {
  flex: 0 0 auto;
}
.croll::-webkit-scrollbar {
  display: none;
}
.croll li button.active1 {
  border-radius: 20px;
  background: #222;
  color: #fff;
}
.croll li button.active2 {
  border-radius: 20px;
  background: #1281e1;
  color: #fff;
}
.croll li button {
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

.btn-main {
  position: relative;
}

.btn-main::before {
  content: '';
  width: 40px;
  height: 40px;
  position: absolute;
  right: 40px;
  background: linear-gradient(270deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
}
.btn-sub {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.btn-sub img {
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 999999;
}

.category-icons {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  margin: 0;
  list-style: none;
}
.category-icons .category-icon {
  flex: 0 0 auto;
}
.category-icons::-webkit-scrollbar {
  display: none;
}
</style>
