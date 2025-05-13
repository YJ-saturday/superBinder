<template>
  <BannerCard
    :marginTop="30"
    @click="isModalOpen = true"
    title="스마트 발주"
    subtitle="발주 주문을 쉽고 빠르게&#10;진행하실 수 있어요."
    imgSrc="/src/assets/img/icon/bannersmart.png"
    altText="smart banner"
    bgColor="#d9f0ff"
    titleColor="#000"
    subtitleColor="#000"
  />
  <SmartAlert v-if="isModalOpen" @close="isModalOpen = false" />
</template>

<script setup>
import { ref } from 'vue';
import BannerCard from '@/common/BannerCard.vue';
import SmartAlert from '@/common/Alert/SmartAlert.vue';

const isModalOpen = ref(false);
</script>

<style scoped></style>
