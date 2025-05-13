<template>
  <div class="wrap">
    <div class="model">
      <div class="main">
        <div class="title">
          <h1>결제 예정 금액</h1>
          <p>258,000<span>원</span></p>
        </div>
        <div class="item">
          <div>
            <h1>주문금액</h1>
            <p>252,000<span>원</span></p>
          </div>
          <div>
            <h1>배송비</h1>
            <p class="blue">+ 6,000<span>원</span></p>
          </div>
          <div>
            <h1>할인금액</h1>
            <p>- 0 <span class="red">원</span></p>
          </div>
        </div>
      </div>
      <div class="action">
        <div class="action-title">
          <p>총 금액 (3건)</p>
          <div class="action-item">
            <div>
              <p>258,000 <span>원</span></p>
              <span>배송비 6,000원 포함</span>
            </div>
            <img src="/src/assets/img/icon/arrowDown.svg" alt="" />
          </div>
        </div>
        <button>3건 주문하기</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: end;
}
.model {
  width: 100%;
  background: #fff;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.model .main {
  padding: 24px 24px 0px 24px;
}
.model .main .title {
  display: flex;
  justify-content: space-between;
}
.model .main .title h1 {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
}
.model .main .title p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
}
.model .main .title p span {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.model .main .item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}
.model .main .item div {
  display: flex;
  justify-content: space-between;
}
.model .main .item div h1 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.model .main .item div p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.action {
  width: 100%;
  height: 168px;
  bottom: 0px;
  margin-top: 24px;
  padding: 24px;
  border-top: 1px solid #dadada;
  background: #fff;
  z-index: 10;
}
.action-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.action-title p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
}
.action .action-item {
  display: flex;
  gap: 8px;
}
.action .action-item div {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
}
.action .action-item div p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
}
.action .action-item div p span {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.action .action-item div span {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.action button {
  width: 100%;
  height: 56px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  margin-top: 24px;
  border-radius: 8px;
  border: none;
  background: #2866ec;
}
</style>
