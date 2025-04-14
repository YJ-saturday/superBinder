<template>
  <div class="splash">
    <div class="splash-inner">
      <img
        src="/src/img/splashScreenImg/VectorGig.png"
        alt="app-logo-big"
        class="splash-image"
      />
    </div>
  </div>
</template>

<script setup></script>

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
