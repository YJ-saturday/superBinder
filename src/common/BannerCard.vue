<template>
  <div
    class="banner-card"
    :style="{
      background: bgColor,
      marginTop: computedMarginTop,
    }"
  >
    <div class="banner-content">
      <p class="banner-title" :style="{ color: titleColor }">{{ title }}</p>
      <p class="banner-subtitle" :style="{ color: subtitleColor }">
        {{ subtitle }}
      </p>
 
    </div>
    <img :src="imgSrc" :alt="altText" class="banner-icon" />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  subtitle2: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: 'banner icon',
  },
  bgColor: {
    type: String,
    default: '#cff1ff',
  },
  titleColor: {
    type: String,
    default: '#000',
  },
  subtitleColor: {
    type: String,
    default: '#000',
  },
  marginTop: {
    type: [String, Number],
    default: 0,
  },
});

const computedMarginTop = computed(() => {
  return typeof props.marginTop === 'number'
    ? props.marginTop + 'px'
    : props.marginTop;
});
</script>

<style scoped>
.banner-card {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 24px;
  border-radius: 30px;
  justify-content: space-between;
}
.banner-title {
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  margin: 0;
  padding-bottom: 10px;
}
.banner-subtitle {
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  margin: 0;
  white-space: pre-wrap;
}
.banner-icon {
  width: 80px;
  height: 76px;
  object-fit: contain;
}
</style>
