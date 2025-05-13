<template>
  <div class="layout">
    <header class="layout-header" v-if="!$route.meta.hideHeader">
      <button type="button" title="alarm">
        <i class="layout-header-icon-alarm" @click.stop="goAlarm"></i>
        <span class="layout-header-sr-only">알람버튼</span>
      </button>
      <router-link v-if="!isMyPage" to="/" title="maingo">
        <img
          src="/src/assets/img/icon/titlelogo.png"
          alt="titlelogo"
          class="layout-header-logo"
        />
      </router-link>
      <router-link v-else to="/my" title="mypage">
        <img
          class="myPageLogo"
          src="/src/assets/img/myPage/myPageLogo.png"
          alt=""
        />
      </router-link>
      <button type="button" title="my" @click="goMyPage">
        <i v-if="!isMyPage" class="layout-header-icon-mybtn"></i>
        <img
          v-else
          @click.stop="goSetting"
          class="setting"
          src="/src/assets/img/myPage/setting.png"
          alt=""
        />
        <span class="layout-header-sr-only">마이페이지</span>
      </button>
    </header>

    <RouterView />

    <nav class="layout-footer-nav">
      <button
        class="layout-footer-nav-item"
        :class="{ active: activeNav === 'dashboard' }"
        @click="goDashBoard"
      >
        <img src="/src/assets/img/icon/dashboardBtn.png" alt="dashboardBtn" />
        <img
          class="hover-img"
          src="/src/assets/img/icon/dashboardBtnHover.png"
          alt="dashboardBtnHover"
        />
      </button>
      <button
        class="layout-footer-nav-item"
        :class="{ active: activeNav === 'hamburger' }"
        @click="router.push('/hamburger')"
      >
        <img src="/src/assets/img/icon/hambugerBtn.png" alt="hamburgerBtn" />
        <img
          class="hover-img"
          src="/src/assets/img/icon/hambugerBtnHover.png"
          alt="hamburgerBtnHover"
        />
      </button>
      <button class="layout-footer-nav-item" @click="goHomePage">
        <img
          v-if="isHome"
          src="/src/assets/img/icon/homeClickBtn.png"
          alt="homeBtn"
        />
        <img v-else src="/src/assets/img/icon/homeBtn.png" alt="homeBtn" />
      </button>
      <button
        class="layout-footer-nav-item"
        :class="{ active: activeNav === 'search' }"
        @click="router.push('/search')"
      >
        <img src="/src/assets/img/icon/searchBtn.png" alt="searchBtn" />
        <img
          class="hover-img"
          src="/src/assets/img/icon/searchBtnHover.png"
          alt="searchBtnHover"
        />
      </button>
      <button
        class="layout-footer-nav-item"
        :class="{ active: activeNav === 'chart' }"
        @click="router.push('/chart')"
      >
        <img src="/src/assets/img/icon/cartBtn.svg" alt="chartBtn" />
        <img
          class="hover-img"
          src="/src/assets/img/icon/chartBtnHover.png"
          alt="chartBtnHover"
        />
      </button>
    </nav>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

function goHomePage() {
  router.push('/homepage');
}

function goMyPage() {
  router.push('/my');
}

function goDashBoard() {
  router.push('/');
}

function goAlarm() {
  router.push('/alarm');
}

function goSetting() {
  router.push('/setting');
}

const isHome = computed(() => route.path === '/homepage');
const isMyPage = computed(() => route.path === '/my');

const activeNav = computed(() => {
  if (route.path === '/') return 'dashboard';
  if (route.path === '/hamburger') return 'hamburger';
  if (route.path === '/search') return 'search';
  if (route.path === '/chart') return 'chart';
  return null;
});
</script>

<style scoped>
.layout {
  height: 100%;
  padding-top: 62px;
  padding-bottom: 70px;
}

.layout .layout-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 62px;
  display: flex;
  padding: 13px 15px;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  z-index: 2;
}

.layout .layout-header button {
  cursor: pointer;
  border: none;
  background: none;
}

.layout .layout-header-logo {
  width: 61px;
  height: 32px;
  flex-shrink: 0;
}

.layout .layout-header-icon-alarm,
.layout .layout-header-icon-mybtn {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-position: center;
}

.layout .layout-header-icon-alarm {
  background-image: url(/src/assets/img/icon/alarmbtn.png);
}

.layout .layout-header-icon-mybtn {
  background-image: url(/src/assets/img/icon/mybtn.png);
}

.layout .layout-header-sr-only {
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

.layout .layout-footer-nav {
  background-image: url(/src/assets/img/icon/bottomBar.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 91px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
}

.layout .layout-footer-nav .layout-footer-nav-item {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout .layout-footer-nav .layout-footer-nav-item img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.layout .layout-footer-nav .layout-footer-nav-item .hover-img {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

.layout .layout-footer-nav .layout-footer-nav-item.active .hover-img {
  display: block;
}

.layout .layout-footer-nav .layout-footer-nav-item.active img:not(.hover-img) {
  display: none;
}

.myPageLogo {
  width: 153px;
  height: 48px;
}

.setting {
  width: 24px;
  height: 24px;
}
</style>
