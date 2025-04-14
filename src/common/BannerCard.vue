<template>
  <div class="banner-card" :style="{ background: bgColor }">
    <div class="banner-content">
      <p class="banner-title" :style="{ color: titleColor }">{{ title }}</p>
      <p class="banner-subtitle" :style="{ color: subtitleColor }">
        {{ subtitle }}
      </p>
    </div>
    <img :src="imgSrc" :alt="altText" class="banner-icon" />
  </div>
</template>
/

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "banner icon",
  },
  bgColor: {
    type: String,
    default: "#cff1ff",
  },
  titleColor: {
    type: String,
    default: "#000",
  },
  subtitleColor: {
    type: String,
    default: "#000",
  },
});
</script>

<style scoped>
.banner-card {
  display: flex;
  margin-top: 30px;
  width: 327px;
  height: 116px;
  padding: 20px 24px;
  border-radius: 30px;
  justify-content: space-between;
}

.banner-title {
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  margin: 0;
  padding-bottom: 10px;
}
.banner-subtitle {
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
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
