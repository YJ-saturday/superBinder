<template>
  <div class="wrap">
    <p>찜 목록에 추가되었습니다.</p>
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
  padding: 0px 74px;
}
.wrap p {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 184px;
  border-radius: 30px;
  background: #222;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
}
</style>
