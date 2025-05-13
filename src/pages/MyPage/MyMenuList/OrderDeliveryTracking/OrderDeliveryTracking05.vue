<template>
  <div class="header">
    <img src="/src/assets/img/icon/cross.svg" alt="뒤로가기" />
    <span>배송조회</span>
  </div>
  <div class="wrap">
    <div class="delivery">
      <div class="delivery-group">
        <div class="title">
          <span class="title-txt">배송 현황</span>
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
    <div class="item">
      <div class="item-title">
        <p>틸다 배송</p>
        <img src="/src/assets/img/icon/arrowUp.svg" alt="접기" />
      </div>
      <div class="item-sub-title">주문 상품</div>
      <div class="item-con">
        <img src="/src/assets/img/productCard/bannerImg03.png" alt="" />
        <div class="item-detaile">
          <h1>브랜드명</h1>
          <span>2P 블럭 수세미 외 N개</span>
          <p>126,000원</p>
        </div>
      </div>
    </div>
    <div class="item2">
      <div>
        <p>송장번호</p>
        <span>21345821512</span>
      </div>
      <div>
        <p>택배사</p>
        <span>대한통운</span>
      </div>
    </div>
  </div>
  <div class="item3-wrap">
    <div class="item3">
      <ul>
        <li class="title">
          <p>배송시간</p>
          <p>현재위치</p>
          <p>배송상태</p>
        </li>
        <li class="li-item">
          <p>
            2025.03.01<br />
            01:13
          </p>
          <p>양평물류센터</p>
          <p>집하</p>
        </li>
        <li class="li-item">
          <p>
            2025.03.01<br />
            01:13
          </p>
          <p>양평물류센터</p>
          <p>집하</p>
        </li>
        <li class="li-item">
          <p>
            2025.03.01<br />
            01 :13
          </p>
          <p>양평물류센터</p>
          <p>집하</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const stepList = [
  { count: 0, label: '주문접수' },
  { count: 0, label: '상품준비중' },
  { count: 0, label: '배송중' },
  { count: 0, label: '배송완료' },
];
</script>

<style scoped>
.header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: end;
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
.item-con {
  display: flex;
  gap: 16px;
  background: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}
.item-con img {
  width: 80px;
  height: 80px;
}
.item-detaile {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.item-detaile h1 {
  color: #888;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
}
.item-detaile span,
.item-detaile p {
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
}
.item .item-title {
  display: flex;
  justify-content: space-between;
}
.item2 {
  display: flex;
  gap: 16px;
  flex-direction: column;
}
.item2 div {
  display: flex;
  align-items: center;
}
.item2 div p {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  width: 90px;
}
.item2 div span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
}
.item3-wrap {
  background: #f5f5f5;
  padding: 32px 16px;
}

.item3 {
  background: #fff;
  border-radius: 16px;
  overflow: hidden; /* 모서리 잘림 */
}

/* ul 전체 초기화 */
.item3 ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* 헤더 행 */
.item3 li.title {
  display: flex;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.item3 li.title p {
  flex: 1;
  padding: 12px 0;
  margin: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #666; /* 회색 텍스트 */
}

/* 데이터 행 */
.item3 li.li-item {
  display: flex;
}

.item3 li.li-item p {
  flex: 1;
  padding: 12px 0;
  margin: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #222; /* 검정 텍스트 */
  border-bottom: 1px solid #eee;
}

/* 마지막 행의 밑줄 제거 */
.item3 li.li-item:last-child p {
  border-bottom: none;
}
.wrap {
  padding: 20px 24px 16px 24px;
}
</style>
