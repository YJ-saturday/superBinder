<template>
  <div class="order">
    <!-- Order delivery inquiry title -->
    <div class="title">
      <a href="#" class="order-link">
        <span class="title-txt">주문 배송 조회</span>
        <img src="../../../img/icon/rightarrow.png" alt="rightarrow" />
      </a>
    </div>
    <!-- Order delivery inquiry detail -->
    <ul class="steps">
      <li class="step">
        <div class="circle">0</div>
        <p>주문접수</p>
      </li>
      <li class="step-img">
        <img src="../../../img/icon/rightarrow.png" alt="rightarrow" />
      </li>
      <li class="step">
        <div class="circle">0</div>
        <p>상품준비중</p>
      </li>
      <li class="step-img">
        <img src="../../../img/icon/rightarrow.png" alt="rightarrow" />
      </li>
      <li class="step current">
        <div class="circle">2</div>
        <p>배송중</p>
      </li>
      <li class="step-img">
        <img src="../../../img/icon/rightarrow.png" alt="rightarrow" />
      </li>
      <li class="step">
        <div class="circle">0</div>
        <p>배송완료</p>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.order {
  width: 327px;
  height: 125px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
/* Order delivery inquiry title */
.order .title {
  padding-bottom: 20px;
}
.order .title .order-link {
  display: flex;
  align-items: center;
}
.order .title .order-link .title-txt {
  color: #222;
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin-right: 8px;
}
.order-link {
  text-decoration: none;
}
/*  Order delivery inquiry detail */
.steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.steps .step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.steps .step .circle {
  width: 52px;
  height: 52px;
  border-radius: 52px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c2c2c2;
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}
.steps .step p {
  color: #666;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.1px;
}
.steps .step-img {
  width: 10px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
}
.steps .step-img img {
  width: 10px;
  height: 10px;
}
.step.current .circle {
  transition: background-color 0.3s ease, color 0.3s ease;
}
.step.current .circle:hover {
  background: #333;
  color: #fff;
}
</style>
