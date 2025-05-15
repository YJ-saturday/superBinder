<template>
  <div class="pay-loding">
    <img
      src="/src/assets/img/Authentication/loginLogo01.png"
      alt="슈퍼바인더 로고"
    />
    <div class="main">
      <p>선택 계좌 인증 페이지로 이동</p>
      <span>33%</span>
    </div>
    <div class="sub">
      <p>잠시만 기다려주세요.</p>
      <span>페이지를 벗어나면 주문이 실패할 수 있습니다.</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.pay-loding {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
}

.pay-loding img {
  width: 48px;
  height: 48px;
}
main p {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
}
main span {
  color: #2866ec;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
}
sub {
  color: #888;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
</style>
