<template>
  <div class="DashBoard">
    <div class="padding">
      <Welcome />
      <DeliveryTracking />
      <GradeCard />
      <SmartCard />
      <MyPurchaseStatus />
      <SuperPayCard />
    </div>
    <DashBestCard />
    <DashServeCard />
    <Footer />
  </div>
</template>

<script setup>
import Welcome from './Components/Welcome.vue';
import DeliveryTracking from './Components/DeliveryTracking.vue';
import GradeCard from './Components/GradeCard.vue';
import SmartCard from './Components/SmartCard.vue';
import SuperPayCard from './Components/SuperPayCard.vue';
import MyPurchaseStatus from '../../common/MyPurchaseStatus.vue';
import DashBestCard from './Components/DashBestCard.vue';
import DashServeCard from './Components/DashServeCard.vue';
import Footer from '@/common/Footer.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

function goNextPage() {
  router.push('/none');
}
</script>

<style>
.DashBoard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.DashBoard .padding {
  width: 100%;
  padding: 0px 24px;
}
</style>
