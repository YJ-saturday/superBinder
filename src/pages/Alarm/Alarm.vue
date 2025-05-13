<template>
  <div class="alarm">
    <div class="alarm-header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>알림</span>
    </div>
    <div class="con01">
      <div class="alarm-title">
        <img src="/src/assets/img/alarm/alarm.png" alt="" />
        <p>OO통운 택배사 파업 관련 안내드립니다.</p>
      </div>
    </div>
    <ul class="con02">
      <template v-for="group in notifications" :key="group.date">
        <li class="title">{{ group.date }}</li>
        <li
          class="list-item"
          v-for="(item, idx) in group.items"
          :key="idx"
          :class="{ 'is-clickable': item.type.includes('공지') }"
          @click="item.type.includes('공지') && goNotice(item.id)"
        >
          <div class="item">
            <div class="item-title">
              <p>{{ item.type }}</p>
              <span>{{ item.message }}</span>
            </div>
            <p class="time">{{ item.time }}</p>
          </div>
          <img
            v-if="item.type.includes('공지')"
            src="/src/assets/img/productCard/rightAllow.png"
            alt="상세보기"
          />
        </li>
      </template>
      <button class="more">
        <img src="/src/assets/img/alarm/more.png" alt="" /> 더보기
      </button>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function goBack() {
  router.back('/');
}
function goNotice(id) {
  router.push({ name: 'Announcement', params: { id } });
}

const notifications = ref([
  {
    date: '12.31',
    items: [
      {
        id: 1,
        type: '[공지]',
        message: '포포크림3종 상품이 입고되었습니다.',
        time: '13:03',
      },
      {
        id: 2,
        type: '이벤트',
        message: '봄맞이 할인 이벤트가 시작되었습니다.',
        time: '09:00',
      },
      {
        id: 3,
        type: '[알림]',
        message: '시스템 점검이 예정되어 있습니다.',
        time: '14:00',
      },
    ],
  },
  {
    date: '12.29',
    items: [
      {
        id: 4,
        type: '이벤트',
        message: '신년 맞이 쿠폰이 발급되었습니다.',
        time: '10:30',
      },
      {
        id: 5,
        type: '[공지]',
        message: '신상품이 추가되었습니다.',
        time: '11:15',
      },
      {
        id: 5,
        type: '[공지]',
        message: '신상품이 추가되었습니다.',
        time: '11:15',
      },
    ],
  },
]);
</script>

<style scoped>
.alarm {
  width: 100%;
  height: 100vh;
}
.alarm .alarm-header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.alarm .alarm-header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.alarm .alarm-header span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.alarm .con01 .alarm-title {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 100px;
  background: #2866ec;
  padding: 10px 16px;
}
.alarm .con01 .alarm-title img {
  width: 24px;
  height: 24px;
}
.alarm .con01 .alarm-title p {
  color: #fff;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
.alarm .con02 {
  margin-top: 30px;
  padding: 0;
  list-style: none;
}
.alarm .con02 .title {
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 20px 0 8px 0px;
  border-bottom: 1px solid #222;
}
.alarm .con02 .list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 12px 0;
}
.alarm .con02 .list-item .item .item-title {
  display: flex;
  align-items: center;
}
.alarm .con02 .list-item .item-title p {
  margin-right: 4px;
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
}
.alarm .con02 .list-item .item-title span {
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}
.alarm .con02 .list-item .time {
  color: #888;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}
.alarm .con02 .list-item img {
  width: 24px;
  height: 24px;
}
.alarm .con02 .more {
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 40px;
  background: #f6f6f6;
  margin-top: 30px;
  color: #222;
  text-align: center;
  font-feature-alarms: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.alarm .con02 .more img {
  width: 24px;
  height: 24px;
}
.alarm .con01 {
  margin: 20px 24px 0px 24px;
}
.alarm .con02 {
  margin: 0px 24px 40px 24px;
}
</style>
