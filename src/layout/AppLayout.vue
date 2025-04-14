<template>
  <!-- header -->
  <div class="layout">
    <header id="header">
      <button type="button" title="alarm">
        <i class="icon-alarm"></i>
        <span class="sr-only">알람버튼</span>
      </button>
      <a href="/" title="maingo">
        <img src="../img/icon/titlelogo.png" alt="titlelogo" />
      </a>
      <button type="button" title="my">
        <i class="icon-mybtn"></i>
        <span class="sr-only">마이페이지</span>
      </button>
    </header>
    <!-- AppLayout을 사용하는 페이지들 -->
    <RouterView />
    <!-- footerNaber -->
    <nav class="footer-nav">
      <button class="nav-item">
        <img src="../img/icon/dashboardBtn.png" alt="dashboardBtn" />
      </button>
      <button class="nav-item">
        <img src="../img/icon/hambugerBtn.png" alt="hamburgerBtn" />
      </button>
      <button class="nav-item">
        <img src="../img/icon/homeBtn.png" alt="homeBtn" />
      </button>
      <button class="nav-item">
        <img src="../img/icon/searchBtn.png" alt="searchBtn" />
      </button>
      <button class="nav-item">
        <img src="../img/icon/chartBtn.png" alt="cartBtn" />
      </button>
    </nav>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
/* header */
header {
  display: flex;
  /* width: 375px; */
  width: 100%;
  height: 62px;
  padding: 13px 15px;
  justify-content: space-between;
  align-items: center;
}
header a img {
  width: 61px;
  height: 32px;
  flex-shrink: 0;
}
header button {
  cursor: pointer;
  border: none;
  background: none;
}
header .icon-alarm {
  background-image: url(../img/icon/alarmbtn.png);
  display: inline-block;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
}
header .icon-mybtn {
  background-image: url(../img/icon/mybtn.png);
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-position: center;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
slot {
  position: relative;
}

/* Footer */
.footer-nav {
  background-image: url(../img/icon/bottomBar.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 91px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 0;
  position: absolute;
  /* bottom: -240px; */
}

.footer-nav .nav-item {
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
</style>
