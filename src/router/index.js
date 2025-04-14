import { createRouter, createWebHistory } from "vue-router";

// 공통 레이아웃
import AppLayout from "@/layout/AppLayout.vue";

// AppLayout을 사용하는 페이지들
import HomePage from "@/pages/Homepage/HomePage.vue";

// AppLayout 없이 사용하는 단독 페이지들

// SplashScreenPage
import SplashScreen01 from "@/pages/OnBoarding/SplashScreens/SplashScreen01.vue";
import SplashScreen02 from "@/pages/OnBoarding/SplashScreens/SplashScreen02.vue";
import SplashScreen03 from "@/pages/OnBoarding/SplashScreens/SplashScreen03.vue";
import SplashScreen04 from "@/pages/OnBoarding/SplashScreens/SplashScreen04.vue";
// permissions
import permissions01 from "@/pages/OnBoarding/permissions/permissions01.vue";
import permissions02 from "@/pages/OnBoarding/permissions/permissions02.vue";
import permissions03 from "@/pages/OnBoarding/permissions/permissions03.vue";
import permissions04 from "@/pages/OnBoarding/permissions/permissions04.vue";
import permissions05 from "@/pages/OnBoarding/permissions/permissions05.vue";
import permissions06 from "@/pages/OnBoarding/permissions/permissions06.vue";
import permissions07 from "@/pages/OnBoarding/permissions/permissions07.vue";


const routes = [
  // AppLayout을 사용하는 페이지들
  // <RouterView /> AppLayout.vue 18줄 

  {
    path: '/', component: AppLayout, children: [
      { path: '', name: 'HomePage', component: HomePage },
    ]
  },
  // AppLayout 없이 사용하는 단독 페이지들

  // SplashScreenPage
  { path: '/SplashScreen01', name: 'SplashScreen01', component: SplashScreen01 },
  { path: '/SplashScreen02', name: 'SplashScreen02', component: SplashScreen02 },
  { path: '/SplashScreen03', name: 'SplashScreen03', component: SplashScreen03 },
  { path: '/SplashScreen04', name: 'SplashScreen04', component: SplashScreen04 },
  // permissions
  { path: '/permissions01', name: 'permissions01', component: permissions01 },
  { path: '/permissions02', name: 'permissions02', component: permissions02 },
  { path: '/permissions03', name: 'permissions03', component: permissions03 },
  { path: '/permissions04', name: 'permissions04', component: permissions04 },
  { path: '/permissions05', name: 'permissions05', component: permissions05 },
  { path: '/permissions06', name: 'permissions06', component: permissions06 },
  { path: '/permissions07', name: 'permissions07', component: permissions07 },


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
