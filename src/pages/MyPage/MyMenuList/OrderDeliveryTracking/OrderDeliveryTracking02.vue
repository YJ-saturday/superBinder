<template>
  <div class="header">
    <img
      src="/src/assets/img/Authentication/leftAllow.png"
      alt="뒤로가기"
      @click="goBack"
    />
    <span>주문/배송 조회</span>
  </div>
  <div class="wrap">
    <div class="con01">
      <div class="title">
        <div class="tit-sub">
          <p>주문내역</p>
          <span>45</span>
        </div>
        <img
          src="/src/assets/img/icon/filterIcon.svg"
          class="filter-btn"
          @click="openCalendar"
        />
      </div>
      <div class="date-text" v-if="dateText">
        {{ dateText }}
        <img
          src="/src/assets/img/icon/cross.svg"
          alt="지우기"
          @click.stop="clearDate"
        />
      </div>

      <div class="calendar-panel" v-if="showCalendar">
        <div class="calender-wrap">
          <div class="cal-header">
            <button class="nav-btn" @click="prevMonth">
              <img src="/src/assets/img/icon/leftAllow.svg" alt="" />
            </button>
            <span>{{ displayYear }}. {{ displayMonth }}월</span>
            <button class="nav-btn" @click="nextMonth">
              <img src="/src/assets/img/icon/rightAllow.svg" alt="" />
            </button>
          </div>
          <div class="cal-weekdays">
            <span
              v-for="(d, i) in weekdays"
              :key="i"
              :class="{ sun: i === 0, sat: i === 6 }"
              >{{ d }}</span
            >
          </div>
          <div class="cal-days">
            <div class="week" v-for="(week, wi) in weeks" :key="wi">
              <span
                v-for="(day, di) in week"
                :key="di"
                :class="[
                  'day',
                  {
                    other: !day.current,
                    sun: day.weekday === 0,
                    sat: day.weekday === 6,
                  },
                  {
                    start: tempStart && +tempStart === +day.date,
                    end: tempEnd && +tempEnd === +day.date,
                    'in-range':
                      tempStart &&
                      tempEnd &&
                      day.date > tempStart &&
                      day.date < tempEnd,
                  },
                ]"
                @click="selectDate(day)"
                >{{ day.date.getDate() }}</span
              >
            </div>
          </div>
        </div>

        <div class="cal-actions">
          <button class="btn-cancel" @click="cancel">취소</button>
          <button class="btn-confirm" @click="confirm">확인</button>
        </div>
      </div>
    </div>
    <div class="con02">
      <img
        src="/src/assets/img/orderDeliveryTracking/trackingnone.png"
        alt=""
      />
      <p>조회 결과가 없습니다.</p>
      <p>해당 조건에 맞는 주문내역이 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showDetail = ref(false);
const showCalendar = ref(false);
const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth());
const tempStart = ref(null);
const tempEnd = ref(null);
const startRange = ref(null);
const endRange = ref(null);
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

const displayYear = computed(() => currentYear.value);
const displayMonth = computed(() => currentMonth.value + 1);

const weeks = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  const first = new Date(year, month, 1);
  const startWeek = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalSlots = Math.ceil((startWeek + daysInMonth) / 7) * 7;
  const days = [];
  for (let i = 0; i < totalSlots; i++) {
    let dateObj, current;
    if (i < startWeek) {
      dateObj = new Date(year, month, i - startWeek + 1);
      current = false;
    } else if (i < startWeek + daysInMonth) {
      dateObj = new Date(year, month, i - startWeek + 1);
      current = true;
    } else {
      dateObj = new Date(year, month + 1, i - (startWeek + daysInMonth) + 1);
      current = false;
    }
    days.push({ date: dateObj, current, weekday: dateObj.getDay() });
  }
  const wk = [];
  for (let i = 0; i < days.length; i += 7) {
    wk.push(days.slice(i, i + 7));
  }
  return wk;
});

function clearDate() {
  startRange.value = null;
  endRange.value = null;
}

const dateText = computed(() => {
  if (startRange.value && endRange.value) {
    const f = formatDate(startRange.value);
    const t = formatDate(endRange.value);
    return +startRange.value === +endRange.value ? f : `${f} ~ ${t}`;
  }
  return '';
});

function goBack() {
  router.back();
}
function toggleDetail() {
  showDetail.value = !showDetail.value;
}
function openCalendar() {
  tempStart.value = startRange.value;
  tempEnd.value = endRange.value;
  showCalendar.value = true;
}
function prevMonth() {
  if (currentMonth.value === 0) {
    currentYear.value--;
    currentMonth.value = 11;
  } else {
    currentMonth.value--;
  }
}
function nextMonth() {
  if (currentMonth.value === 11) {
    currentYear.value++;
    currentMonth.value = 0;
  } else {
    currentMonth.value++;
  }
}
function selectDate(day) {
  if (!day.current) return;
  if (!tempStart.value || (tempStart.value && tempEnd.value)) {
    tempStart.value = day.date;
    tempEnd.value = null;
  } else if (day.date < tempStart.value) {
    tempEnd.value = tempStart.value;
    tempStart.value = day.date;
  } else {
    tempEnd.value = day.date;
  }
}
function confirm() {
  if (tempStart.value) {
    startRange.value = tempStart.value;
    endRange.value = tempEnd.value || tempStart.value;
  }
  showCalendar.value = false;
}
function cancel() {
  showCalendar.value = false;
}
function formatDate(date) {
  const y = date.getFullYear();
  const m = ('0' + (date.getMonth() + 1)).slice(-2);
  const d = ('0' + date.getDate()).slice(-2);
  return `${y}.${m}.${d}`;
}
</script>

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
.wrap {
}
.con01 {
  padding: 20px 24px;
}
.con01 .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tit-sub {
  display: flex;
  gap: 4px;
}
.tit-sub p {
  color: #222;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
}
.tit-sub span {
  display: flex;
  align-self: center;
  border-radius: 11px;
  background: #ff2a59;
  width: 23px;
  height: 13px;
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 700;
  padding: 0 4px;
}
.filter-btn {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.date-text {
  width: 63%;
  height: 32px;
  border-radius: 18px;
  border: 1px solid #bbb;
  background: #fff;
  margin-top: 16px;
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;
  padding: 6px 12px 6px 16px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
}
.date-text img {
  width: 14px;
  height: 14px;
}

.calendar-panel {
  position: absolute;
  top: 62px;
  right: 16px;
  width: 327px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
.calender-wrap {
  padding: 20px;
  height: 300px;
}

.cal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.nav-btn {
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
}
.cal-header span {
  font-size: 16px;
  font-weight: 600;
  color: #222;
}
.cal-weekdays {
  display: flex;
  margin-bottom: 4px;
}
.cal-weekdays span {
  flex: 1;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #222;
}
.cal-weekdays .sun,
.cal-weekdays .sat {
  color: #ff2a59;
}
.cal-days .week {
  display: flex;
}
.day {
  width: 14.28%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.day.other {
  color: #ccc;
}
.day.sun,
.day.sat {
  color: #ff2a59;
}
.day.start,
.day.end {
  background-color: #2866ec;
  color: #fff;
  clip-path: polygon(
    50% 0%,
    /* top vertex */ 100% 25%,
    /* top-right */ 100% 75%,
    /* bottom-right */ 50% 100%,
    /* bottom vertex */ 0% 75%,
    /* bottom-left */ 0% 25% /* top-left */
  );
}
.cal-actions {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-radius: 0px 0px 16px 16px;
  border-top: 1px solid #c2c2c2;
}
.btn-cancel {
  flex: 1;
  height: 36px;
  border: 1px solid #222;
  border-radius: 8px;
  background: #fff;
  margin-right: 8px;
  cursor: pointer;
}
.btn-confirm {
  flex: 1;
  height: 36px;
  border: none;
  border-radius: 8px;
  background: #2866ec;
  color: #fff;
  cursor: pointer;
}
.con02 {
  width: 100%;
  height: 571px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
}
.con02 img {
  width: 80px;
  height: 80px;
}
.con02 p {
  color: #888;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
</style>
