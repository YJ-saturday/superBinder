<template>
  <div class="wrap">
    <div class="main">
      <div>
        <img src="/src/assets/img/icon/cartBacket.png" alt="" />
        <p>자주 구매하는 상품</p>
      </div>
      <button>불러오기</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 3;
  padding: 0px 24px;
}
.wrap .main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  padding: 12px 16px;
}
.wrap .main div {
  display: flex;
  gap: 8px;
  align-items: center;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}
.wrap .main div img {
  width: 24px;
  height: 24px;
}
.wrap .main button {
  padding: 2px 8px;
  width: 58px;
  height: 24px;
  border: none;
  border-radius: 8px;
  background: #2866ec;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 166.667% */
}
</style>
