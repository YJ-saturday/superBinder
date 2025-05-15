<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>카테고리</span>
  </div>
  <ul class="category">
    <li>카테고리</li>
    <li>브랜드</li>
    <li>카테고리</li>
  </ul>
  <div class="container">
    <nav class="sidebar">
      <ul>
        <li>신상품</li>
        <li>이벤트</li>
        <li>베스트</li>
        <li class="active">욕실용품</li>
        <li>세탁용품</li>
        <li>주방용품</li>
        <li>청소용품</li>
        <li>생활잡화</li>
        <li>화장품</li>
        <li>가전디지털</li>
        <li>반려동물용품</li>
        <li>묶음상품</li>
        <li>마켓딜러 관련비품</li>
        <li>식품</li>
      </ul>
    </nav>
    <div class="content">
      <div class="category-icons">
        <div class="category-icon">
          <div class="icon">
            <img src="/src/assets/img/category/categoryIcon01.svg" alt="" />
          </div>
          <span>바디솝</span>
        </div>
        <div class="category-icon">
          <div class="icon">
            <img src="/src/assets/img/category/categoryIcon02.svg" alt="" />
          </div>
          <span class="active">에어케어</span>
        </div>
        <div class="category-icon">
          <div class="icon">
            <img src="/src/assets/img/category/categoryIcon03.svg" alt="" />
          </div>
          <span>바디밀크</span>
        </div>
        <div class="category-icon">
          <div class="icon">
            <img src="/src/assets/img/category/categoryIcon04.svg" alt="" />
          </div>
          <span>욕실소품</span>
        </div>
        <div class="category-icon">
          <div class="icon">
            <img src="/src/assets/img/category/categoryIcon05.svg" alt="" />
          </div>
          <span>구강</span>
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
.wrap {
  width: 100%;
}
.category {
  display: flex;
}
.category li {
  width: 100%;
  height: 46px;
  padding: 8px 24px 16px 24px;
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22category */
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.category li:active {
  color: #2866ec;
  border-bottom: 2px solid #2866ec;
}
.container {
  display: flex;
  border: 1px solid #eee;
}
.sidebar {
  width: 168px;
  background: #f5f5f5;
  border-right: 1px solid #eee;
}
.sidebar ul {
  list-style: none;
  margin: 0;
}
.sidebar li {
  padding: 15px 24px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.sidebar li.active {
  background: #fff;
  color: #1e90ff;
  font-weight: bold;
}
.content {
  flex: 1;
  padding: 16px 12px;
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
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
}
.category-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  margin-bottom: 12px;
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
