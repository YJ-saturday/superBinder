<template>
  <div class="grade-card">
    <!-- 아이콘 등급이미지 클래스로 변경 가능 bronze, seliver, gold, platinum -->
    <i class="grade-icon bronze"></i>
    <div class="grade-title">실버 등급까지 <span>120만원</span> 남았어요</div>
    <div class="grade-content">
      <div class="grade-subtitle">
        <div>실버 목표액 <span>300만원</span></div>
        <div>적립금 <span>300만원</span></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style>
.grade-card {
  margin-top: 30px;
  width: 100%;
  height: 173px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #ffdfdc;
}
.grade-card .grade-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.grade-card .grade-title span {
  color: #ff4867;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.grade-card .grade-content .grade-subtitle {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 18px;
  display: flex;
  gap: 30px;
}

.grade-card .grade-content .grade-subtitle span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 10px;
}
/* rating */
.grade-icon {
  width: 93px;
  height: 72px;
}
.bronze {
  background: url(@/assets/img/icon/rating.png) no-repeat center center;
  background-size: contain;
}
.seliver {
  background: url(@/assets/img/rating/guideSeliver.png) no-repeat center center;
  background-size: contain;
}
.gold {
  background: url(@/assets/img/rating/guideGold.png) no-repeat center center;
  background-size: contain;
}
.platinum {
  background: url(@/assets/img/rating/guidePlatinum.png) no-repeat center center;
  background-size: contain;
}
</style>
