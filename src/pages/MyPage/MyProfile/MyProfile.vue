<template>
  <div class="my-profile">
    <img class="profile" src="/src/assets/img/myPage/myProfile.png" alt="" />
    <div class="compont">
      <h1>메인 홍길동001</h1>
      <img
        class="bottom-btn btn"
        src="/src/assets/img/icon/bottomarrow.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.my-profile {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-profile .profile {
  margin-top: 20px;
  width: 100px;
  height: 100px;
}
.my-profile .compont {
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
}
.my-profile .compont h1 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.my-profile .compont img {
  width: 24px;
  height: 24px;
}
</style>
