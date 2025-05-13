<template>
  <div class="alarm">
    <div class="alarm-header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>공지사항</span>
    </div>

    <ul class="content">
      <div v-for="group in notifications" :key="group.date">
        <li class="line"></li>
        <li class="list-item" v-for="(item, idx) in group.items" :key="idx">
          <div class="item">
            <span>{{ item.message }}</span>
            <p class="time">{{ item.date }}</p>
          </div>
          <div class="item-banner">
            <img src="/src/assets/img/alarm/announcement.png" alt="" />
            <p>
              회원가입 이후 신규혜택을 확인하시고,<br />
              앞으로도 많은 관심 부탁드립니다.<br />
              감사합니다.
            </p>
          </div>
        </li>
      </div>
    </ul>
    <div class="alarm-button">
      <div class="back btn">
        <button>
          <img src="/src/assets/img/Authentication/leftAllow.png" alt="" />
          <p>이전글</p>
        </button>
      </div>
      <div class="inventory btn">
        <button>
          <p>목록</p>
        </button>
      </div>
      <div class="next btn">
        <button>
          <p>다음글</p>
          <img src="/src/assets/img/productCard/rightAllow.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function goBack() {
  router.back('/alarm');
}

const notifications = ref([
  {
    date: '12.31',
    items: [
      {
        type: '[공지]',
        message: '포포크림3종 상품이 입고되었습니다.',
        date: '2021.09.01',
      },
    ],
  },
]);
</script>

<style scoped>
.alarm {
  width: 100%;
  height: 100%;
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
.alarm .content {
  padding: 0px 24px;
}
.alarm .content .line {
  margin-top: 20px;
  border-bottom: 1px solid #222;
}
.alarm .content .list-item {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.alarm .content .list-item .item {
  padding: 24px 0;
}
.alarm .content .list-item .item span {
  color: #222;
  font-feature-alarms: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.alarm .content .list-item .item .time {
  color: #888;
  font-feature-alarms: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.alarm .content .list-item .item-banner img {
  width: 100%;
  height: 475.785px;
}
.alarm .content .list-item .item-banner p {
  margin-top: 16px;
  padding-bottom: 40px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.alarm .alarm-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 24px;
}
.alarm .alarm-button .btn button {
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
}
.alarm .alarm-button .btn button {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  display: flex;
  justify-content: center;
}
.alarm .alarm-button .btn img {
  width: 24px;
  height: 24px;
}
.alarm .alarm-button .inventory button {
  width: 119px;
  height: 56px;
  text-align: center;
  color: #ffffff;
  border-radius: 40px;
  background: #2866ec;
}
</style>
