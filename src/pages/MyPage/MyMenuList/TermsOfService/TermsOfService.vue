<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>약관정보</span>
  </div>
  <div class="con">
    <div class="item line">
      <p>개인정보 처리방침</p>
      <span>2025.02.21 11:25:35</span>
    </div>
    <div class="item">
      <p>서비스 이용 약관</p>
      <span>2025.02.21 11:25:35</span>
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
.con {
  border-top: 1px solid #222222;

  margin: 20px 32px 0px 32px;
}
.con .line {
}
.con .item {
  padding: 16px 8px;
  border-bottom: 1px solid #e2e2e2;
}
</style>
