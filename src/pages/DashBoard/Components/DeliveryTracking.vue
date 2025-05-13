<template>
  <div class="delivery">
    <div class="delivery-group">
      <div class="title">
        <span class="title-txt" @click="goNextPage">주문 배송 조회</span>
        <img src="/src/assets/img/icon/rightArrow.svg" alt="rightarrow" />
      </div>
    </div>
    <ul class="steps">
      <template v-for="(step, index) in stepList" :key="index">
        <li class="step">
          <div class="circle" :class="{ active: Number(step.count) > 0 }">
            {{ step.count }}
          </div>
          <p>{{ step.label }}</p>
        </li>
        <li v-if="index !== stepList.length - 1" class="step-img">
          <img src="/src/assets/img/icon/rightArrow.svg" alt="rightarrow" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goNextPage() {
  router.push('/none');
}

const stepList = [
  { count: 0, label: '주문접수' },
  { count: 0, label: '상품준비중' },
  { count: 2, label: '배송중' },
  { count: 0, label: '배송완료' },
];
</script>

<style scoped>
.delivery {
  width: 100%;
  height: 125px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.delivery .delivery-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.delivery .delivery-group .title {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.delivery .delivery-group .title .title-txt {
  color: #222;
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin-right: 8px;
}
.delivery .steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 20px;
}
.delivery .steps .step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.delivery .steps .step .circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
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
.delivery .steps .step .circle.active {
  background: #383838;
  color: #fff;
}
.delivery .steps .step p {
  color: #666;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.1px;
}
.delivery .steps .step-img {
  width: 10px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
}
.delivery .steps .step-img img {
  width: 10px;
  height: 10px;
}
</style>
