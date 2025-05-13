<template>
  <div class="purchase-status">
    <p>나의 구매현황</p>
    <div class="status-card">
      <table>
        <tbody>
          <tr>
            <th>당월 구매금액</th>
            <td>{{ status.monthlyPurchase.toLocaleString() }} 만원</td>
          </tr>
          <tr>
            <th>누적 구매금액 (년)</th>
            <td>{{ status.yearlyAccumulated.toLocaleString() }} 만원</td>
          </tr>
          <tr>
            <th>누적 이익금액 (년)</th>
            <td>{{ status.yearlyProfit.toLocaleString() }} 만원</td>
          </tr>
        </tbody>
      </table>
      <div class="monthly-average">
        월평균 금액 <span>{{ monthlyAverage.toLocaleString() }} 만원</span>
      </div>

      <div class="tabs">
        <button
          :class="{ active: selectedTab === 'monthly' }"
          @click="selectedTab = 'monthly'"
        >
          월간
        </button>
        <button
          :class="{ active: selectedTab === 'quarterly' }"
          @click="selectedTab = 'quarterly'"
        >
          분기
        </button>
        <button
          :class="{ active: selectedTab === 'yearly' }"
          @click="selectedTab = 'yearly'"
        >
          연간
        </button>
      </div>
      <img class="bunhada" src="/src/assets/chart.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';

const status = reactive({
  monthlyPurchase: 1200,
  yearlyAccumulated: 1234567,
  yearlyProfit: 3200,
});

const monthlyAverage = computed(() =>
  Math.round(status.yearlyAccumulated / 12)
);

const monthlyData = [
  { period: '1월', value: 1100 },
  { period: '2월', value: 1200 },
  { period: '3월', value: 1300 },
  { period: '4월', value: 800 },
  { period: '5월', value: 900 },
  { period: '6월', value: 900 },
  { period: '7월', value: 400 },
  { period: '8월', value: 400 },
  { period: '9월', value: 400 },
  { period: '10월', value: 800 },
  { period: '11월', value: 900 },
  { period: '12월', value: 900 },
];

const selectedTab = ref('monthly');

const chartData = computed(() => {
  if (selectedTab.value === 'monthly') return monthlyData;
  if (selectedTab.value === 'quarterly') {
    const quarters = [];
    for (let i = 0; i < 4; i++) {
      const slice = monthlyData.slice(i * 3, i * 3 + 3);
      const sum = slice.reduce((acc, cur) => acc + cur.value, 0);
      quarters.push({ period: `${i + 1}분기`, value: sum });
    }
    return quarters;
  }
  const total = monthlyData.reduce((acc, cur) => acc + cur.value, 0);
  return [{ period: '연간', value: total }];
});
</script>

<style scoped>
.purchase-status {
  width: 100%;
  margin-top: 30px;
}
.purchase-status p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.status-card {
  margin-top: 20px;
  border-radius: 30px;
  background: #f5f5f5;
  padding: 30px;
}
.status-card table {
  width: 100%;
}
.status-card td,
.status-card th {
  padding-bottom: 10px;
}
.status-card th {
  text-align: left;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
}
.status-card td {
  text-align: right;
  color: #222;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}
.monthly-average {
  display: flex;
  justify-content: space-between;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-top: 10px;
}
.monthly-average span {
  color: #222;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 16px 0;
}
.tabs button {
  width: 57px;
  height: 28px;
  border-radius: 20px;
  border: 1px solid #eee;
  background: #fff;
  color: #212121;
  cursor: pointer;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
}
.tabs button.active {
  background: #333;
  color: #fff;
  border-color: #333;
}
.bunhada {
  object-fit: cover;
  width: 100%;
  height: 12rem;
  overflow: hidden;
}
</style>
