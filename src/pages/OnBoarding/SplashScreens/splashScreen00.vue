<template>
  <div ref="lottieContainer" style="width: 100%; height: 100%"></div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/Lottie/flow.json';

export default {
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  },
};
</script>

<style scoped>
.splash {
  width: 100%;
  height: 100vh;
  background-color: #2866ec;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash .splash-inner {
  padding: 50px 0 106px 0;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash .splash-inner .splash-image {
  height: 100%;
  width: auto;
  object-fit: contain;
}
</style>
