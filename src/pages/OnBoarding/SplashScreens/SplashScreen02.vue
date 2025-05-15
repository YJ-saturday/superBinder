<template>
  <div class="splash">
    <div class="splash-inner">
      <img
        src="/src/assets/img/splashScreenImg/vectorSmall.png"
        alt="app-logo-small-color"
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
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2866ec;
}

.splash .splash-inner {
  padding: 300px 0 356px 0;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash .splash-inner .splash-image {
  object-fit: contain;
  width: 100px;
  height: 100px;
}
</style>
