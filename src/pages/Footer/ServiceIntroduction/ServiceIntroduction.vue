<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>서비스 소개</span>
  </div>
  <div class="wrap">
    <div class="logo">
      <img src="/src/assets/img/introduction/introduction.png" alt="" />
    </div>
    <div class="main">
      <img src="/src/assets/img/introduction/introduction1.png" alt="" />
      <img src="/src/assets/img/introduction/introduction2.png" alt="" />
      <img src="/src/assets/img/introduction/introduction3.png" alt="" />
      <img src="/src/assets/img/introduction/introduction4.png" alt="" />
    </div>
    <div class="sub">
      <img src="/src/assets/img/introduction/introduction5.svg" alt="" />
      <div>
        <p>입점 및 제휴 문의</p>
        <span>카카오톡 채널</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
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
  padding: 20px 24px;
}
.logo img {
  width: 100%;
  margin-bottom: 60px;
}
.main img {
  width: 100%;
  margin-bottom: 20px;
}
.sub {
  padding: 34px 24px 24px 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.sub div {
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sub div p {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
}
.sub div span {
  color: #666;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
</style>
