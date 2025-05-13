<template>
  <MainBanner />
  <div class="container">
    <div class="padding">
      <HomeSeasonCard />
      <EventBaner />
      <HomeBestCard />
      <NewBrannd />
      <HomeServeCard />
    </div>
    <Footer />
    <HomeMainAlert v-if="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainBanner from './Components/MainBanner.vue';
import HomeSeasonCard from './Components/HomeSeasonCard.vue';
import HomeBestCard from './Components/HomeBestCard.vue';
import EventBaner from './Components/EventBaner.vue';
import NewBrannd from './Components/NewBrand.vue';
import HomeServeCard from './Components/HomeServeCard.vue';
import Footer from '@/common/Footer.vue';
import HomeMainAlert from '@/common/HomeMainAlert.vue';

const isModalOpen = ref(false);

onMounted(() => {
  isModalOpen.value = true;
});
</script>

<style scoped>
.padding {
  width: 100%;
  padding: 0px 24px;
}
</style>
