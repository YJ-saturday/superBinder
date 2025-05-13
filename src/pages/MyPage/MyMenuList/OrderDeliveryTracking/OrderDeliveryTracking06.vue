<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>나의 쿠폰</span>
  </div>

  <div class="coupon-list">
    <div class="coupon">
      <div class="tag red">D-6</div>
      <div class="info">
        <h3>신규가입 축하 5,000원 할인</h3>
        <p>30,000원 이상 구매시 사용 가능</p>
      </div>
      <div class="value">5,000 <span>원</span></div>
    </div>
    <div class="coupon">
      <div class="info">
        <div class="tag blue">D-365</div>
        <h3>브론즈회원 전용 5,000원 할인</h3>
        <p>30,000원 이상 구매시 사용 가능</p>
      </div>
      <div class="value">5,000 <span>원</span></div>
    </div>
    <div class="coupon disabled">
      <div class="tag gray">사용만료</div>
      <div class="info">
        <h3>브론즈회원 전용 10% 할인</h3>
        <p>30,000원 이상 구매시 사용 가능</p>
      </div>
      <div class="value">5,000 <span>원</span></div>
    </div>
  </div>
</template>

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
.coupon-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.coupon {
  position: relative;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

.coupon.disabled {
  opacity: 0.4;
  background: #f5f5f5;
}

.tag {
  flex-shrink: 0;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  margin-right: 12px;
}

.tag.red {
  background: #ff2a59;
  width: 38px;
  color: #fff;

  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
}
.tag.blue {
  background: #2866ec;
  width: 52px;
  color: #fff;

  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
}
.tag.gray {
  background: #bbb;
  width: 58px;
  color: #fff;

  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
}

.info {
  flex: 1;
}

.info h3 {
  margin: 0 0 4px;
  font-size: 16px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
}

.info p {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}

.value {
  color: #c2c2c2;

  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}
.value span {
  color: #c2c2c2;

  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
</style>
