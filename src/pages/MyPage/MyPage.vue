<template>
  <div class="padding">
    <MyProfile />
    <MyRating />
    <SuperPayCard />
    <SuperPayRecharge />
    <MyMenuList />
    <SmartCard />
    <MyLogOut />
  </div>
</template>

<script setup>
import MyProfile from './MyProfile/MyProfile.vue';
import MyRating from './MyRating.vue/MyRating.vue';
import SuperPayCard from './SuperPayCard/SuperPayCard.vue';
import SuperPayRecharge from './SuperPayRecharge/SuperPayRecharge.vue';
import MyMenuList from './MyMenuList/MyMenuList.vue';
import SmartCard from './SmartCard/SmartCard.vue';
import MyLogOut from './MyLogOut/MyLogOut.vue';
</script>

<style scoped>
.padding {
  padding: 0px 24px;
}
</style>
