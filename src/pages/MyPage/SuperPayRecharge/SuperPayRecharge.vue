<template>
  <div class="pay-recharge">
    <div class="con01">
      <div class="title">
        <img src="/src/assets/img/myPage/myCoin.png" alt="" />
        <h1>슈퍼페이</h1>
      </div>
      <div class="amount">
        <p>80,000,000</p>
        <span>원</span>
      </div>
    </div>
    <div class="con02">
      <button class="recharge-btn">충전하기</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.pay-recharge {
  width: 100%;
  height: 100%;
  padding: 24px;
  margin-top: 20px;
  border-radius: 20px;
  border: 1px solid #e2e2e2;
  background: #fff;
}
.pay-recharge .con01 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pay-recharge .con01 .title {
  display: flex;
  align-items: center;
}
.pay-recharge .con01 img {
  width: 32px;
  height: 32px;
}
.pay-recharge .con01 h1 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}
.pay-recharge .con01 .amount {
  display: flex;
  align-items: center;
}
.pay-recharge .con01 .amount p {
  color: #222;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
}
.pay-recharge .con01 .amount span {
  color: #222;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.con02 {
  margin-top: 24px;
}
.con02 button {
  width: 100%;
  height: 36px;
  border: none;
  padding: 8px;
  border-radius: 8px;
  background: #222;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}
</style>
