<template>
  <div class="HomeMainAlert">
    <div class="alert-swiper-wrapper">
      <swiper
        :modules="[]"
        :slides-per-view="1"
        :space-between="0"
        @slideChange="onSlideChange"
        class="alert-swiper"
      >
        <swiper-slide
          v-for="(slide, idx) in slides"
          :key="idx"
          class="alert-slide"
        >
          <img :src="slide.img" :alt="`alert-slide-${idx}`" />
        </swiper-slide>
      </swiper>
      <div class="custom-pagination">
        <span
          v-for="(_, idx) in slides"
          :key="idx"
          :class="{ active: idx === currentIndex }"
        />
        <div class="pagination-count">
          {{ currentIndex + 1 }} <span>/ {{ slides.length }}</span>
        </div>
      </div>
    </div>
    <div class="biz-action">
      <button class="action" @click="cancel1">오늘 그만 보기</button>
      <button class="action" @click="cancel2">닫기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const emit = defineEmits(['close']);
const slides = [
  { img: '/src/assets/img/HomeMainAlertImg/HomeAlertImg.png' },
  { img: '/src/assets/img/HomeMainAlertImg/HomeAlertImg.png' },
  { img: '/src/assets/img/HomeMainAlertImg/HomeAlertImg.png' },
  { img: '/src/assets/img/HomeMainAlertImg/HomeAlertImg.png' },
  { img: '/src/assets/img/HomeMainAlertImg/HomeAlertImg.png' },
];
const currentIndex = ref(0);

function cancel1() {
  emit('close');
}
function cancel2() {
  emit('close');
}

function onSlideChange(swiper) {
  currentIndex.value = swiper.activeIndex;
}
</script>

<style scoped>
.swiper-slide {
  height: 375px;
}
.HomeMainAlert {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.6);
  z-index: 4;
}

.alert-swiper-wrapper {
  position: relative;
}

.alert-slide img {
  width: 100%;
  height: 375px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}

.custom-pagination {
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  z-index: 10;
  margin-bottom: 16px;
}

.custom-pagination span {
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  background: #888;
}

.custom-pagination span.active {
  background: #fff;
}

.pagination-count {
  width: 45px;
  height: 25px;
  bottom: -6px;
  right: 16px;
  position: absolute;
  padding: 4px 8px;
  z-index: 3;
  border-radius: 100px;
  background: #222;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.pagination-count span {
  color: #fff;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0px;
  background: #222;
}

.HomeMainAlert .biz-action {
  display: flex;
}

.HomeMainAlert .biz-action .action {
  flex: 1;
  height: 48px;
  color: #fff;
  text-align: center;
  background: #222;
  border: none;
  border-right: 1px solid #444;
  color: #888;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
}
.HomeMainAlert .biz-action .action:hover {
  color: #fff;
}
</style>
