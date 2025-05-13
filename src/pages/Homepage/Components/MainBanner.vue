<template>
  <div class="slide-container">
    <div class="filter-btn">
      <div v-for="filter in filters" :key="filter.value" class="filter-item">
        <button
          type="button"
          :class="{ 'is-active': selectedFilter === filter.value }"
          @click="selectedFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>
    <swiper
      :modules="[Pagination]"
      :slidesPerView="1.1"
      :spaceBetween="25"
      :centeredSlides="true"
      :onSlideChange="onSlideChange"
      class="my-swiper"
    >
      <swiper-slide v-for="(item, index) in filteredBannerItems" :key="index">
        <div class="slide-box">
          <img :src="item.img" :alt="item.title" class="slide-image" />
        </div>
      </swiper-slide>
    </swiper>

    <div class="progress-wrap">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progressWidth + '%' }"
        ></div>
      </div>
      <p class="pagination-text">
        {{ currentIndex + 1 }}/<span>{{ filteredBannerItems.length }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { ref, computed } from 'vue';

const filters = [
  { label: '🛍️ 자주구매', value: 'items1' },
  { label: '🎁 신규상품', value: 'items2' },
  { label: '👍 베스트', value: 'items3' },
  { label: '🌟 기획전', value: 'items4' },
];

const bannerItemsMap = {
  items1: [
    { title: 'MainBanner1', img: '/src/assets/img/homeImg/mainBanner1.png' },
    { title: 'MainBanner2', img: '/src/assets/img/homeImg/mainBanner2.png' },
    { title: 'SkinBanner3', img: '/src/assets/img/homeImg/mainBanner3.png' },
  ],
  items2: [
    { title: 'SkinBanner3', img: '/src/assets/img/homeImg/mainBanner3.png' },
    { title: 'MainBanner2', img: '/src/assets/img/homeImg/mainBanner2.png' },
    { title: 'MainBanner1', img: '/src/assets/img/homeImg/mainBanner1.png' },
  ],
  items3: [
    { title: 'MainBanner1', img: '/src/assets/img/homeImg/mainBanner1.png' },
    { title: 'MainBanner2', img: '/src/assets/img/homeImg/mainBanner2.png' },
    { title: 'SkinBanner3', img: '/src/assets/img/homeImg/mainBanner3.png' },
  ],
  items4: [
    { title: 'SkinBanner3', img: '/src/assets/img/homeImg/mainBanner3.png' },
    { title: 'MainBanner2', img: '/src/assets/img/homeImg/mainBanner2.png' },
    { title: 'MainBanner1', img: '/src/assets/img/homeImg/mainBanner1.png' },
  ],
};

const selectedFilter = ref(filters[0].value);
const filteredBannerItems = computed(
  () => bannerItemsMap[selectedFilter.value] || []
);

const currentIndex = ref(0);
const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex;
};
const progressWidth = computed(() => {
  const count = filteredBannerItems.value.length || 1;
  return ((currentIndex.value + 1) / count) * 100;
});
</script>
<style scoped>
.slide-container {
  position: relative;
  width: 100%;
  margin-top: 20px;
  overflow: hidden;
}
.slide-container .filter-btn {
  display: flex;
  margin: 0 0 20px 24px;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.slide-container .filter-btn::-webkit-scrollbar {
  display: none;
}
.slide-container .filter-btn .filter-item {
  flex: 0 0 auto;
  scroll-snap-align: start;
}
.slide-container .filter-btn .filter-item button {
  width: 120px;
  height: 42px;
  padding: 10px 16px;
  border-radius: 20px;
  border: 1px solid #eee;
  background-color: #eeeeee;
  cursor: pointer;
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
.slide-container .filter-btn .filter-item button.is-active {
  background: #000;
  color: #fff;
}
.slide-container .my-swiper {
  padding: 0 30px;
  overflow: visible;
}
.slide-container .my-swiper .slide-box {
  width: 287px;
  height: 469px;
  border-radius: 30px;
  overflow: hidden;
}
.slide-container .my-swiper .slide-box .slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-container .progress-wrap {
  position: absolute;
  bottom: 20px;
  left: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  z-index: 1;
  margin: 0 70px;
}
.slide-container .progress-wrap .progress-bar {
  flex: 1;
  height: 3px;
  background: #5b5b5b4d;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 10px;
}
.slide-container .progress-wrap .progress-bar .progress-fill {
  height: 100%;
  background-color: #222222;
  transition: width 0.3s ease;
}
.slide-container .progress-wrap .pagination-text {
  font-family: Pretendard;
  font-weight: 700;
  font-size: 14px;
}
.slide-container .progress-wrap .pagination-text span {
  font-weight: 300;
}
</style>
