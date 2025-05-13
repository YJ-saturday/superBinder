<template>
  <div class="slide-container">
    <swiper
      :slidesPerView="1"
      :spaceBetween="25"
      :centeredSlides="true"
      @slideChange="onSlideChange"
      class="custom-swiper"
    >
      <swiper-slide v-for="(item, i) in slides" :key="i">
        <img :src="item.img" :alt="`slide-${i}`" class="slide-image" />
      </swiper-slide>
    </swiper>
    <div class="pagination">
      <span
        v-for="(_, i) in slides"
        :key="i"
        :class="['bullet', { active: i === activeIndex }]"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';

const slides = [
  { img: '/src/assets/img/homeImg/eventBaner1.png' },
  { img: '/src/assets/img/homeImg/eventBaner1.png' },
  { img: '/src/assets/img/homeImg/eventBaner1.png' },
];

const activeIndex = ref(0);

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<style scoped>
.slide-container {
  position: relative;
  margin-top: 28px;
  width: 100%;
}
.slide-container .slide-image {
  width: 100%;
  height: 230px;
  border-radius: 8px;
  object-fit: cover;
}
.slide-container .pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.slide-container .pagination .bullet {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #ddd;
  border-radius: 2.5px;
  margin: 0 4px;
  transition: width 0.3s;
}
.slide-container .pagination .bullet.active {
  width: 20px;
  background: #333;
}
</style>
