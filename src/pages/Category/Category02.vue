<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>카테고리</span>
  </div>
  <div class="wrap">
    <ul class="category">
      <li>카테고리</li>
      <li>브랜드</li>
      <li>카테고리</li>
    </ul>
    <ul class="category-list">
      <li><img src="/src/assets/img/brandImg/brand01.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand02.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand03.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand04.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand05.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand06.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand07.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand08.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand09.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand10.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand01.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand02.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand03.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand04.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand05.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand06.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand07.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand08.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand09.png" alt="" /></li>
      <li><img src="/src/assets/img/brandImg/brand10.png" alt="" /></li>
    </ul>
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
.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 0 auto;
  padding: 40px 24px 0px 24px;
}
.category-list img {
  width: 75px;
  height: 75px;
}
</style>
