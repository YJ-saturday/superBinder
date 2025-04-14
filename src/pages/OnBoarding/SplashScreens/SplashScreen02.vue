<template>
  <div class="splash">
    <div class="splash-inner">
      <img
        src="/src/img/splashScreenImg/vectorSmall.png"
        alt="app-logo-small"
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
