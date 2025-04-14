<script setup>
import Welcome from "./components/Welcome.vue";
import DeliveryTracking from "./components/DeliveryTracking.vue";
import GradeCard from "./components/GradeCard.vue";
import BannerCard from "../../common/BannerCard.vue";
// import MyPurchaseStatus from "./components/MyPurchaseStatus.vue";
import StoreProducts from "./components/StoreProducts.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container">
    <Welcome />
    <DeliveryTracking />
    <GradeCard />
    <BannerCard
      title="스마트 발주"
      subtitle="발주 주문을 쉽고 빠르게&#10;진행하실 수 있어요."
      imgSrc="/src/img/icon/bannersmart.png"
      altText="smart banner"
      bgColor="#d9f0ff"
      titleColor="#000"
      subtitleColor="#000"
    />
    <!-- <MyPurchaseStatus /> -->
    <BannerCard
      title="슈퍼페이"
      subtitle="슈퍼페이로 쉽고&#10;간편하게 결제해요!"
      imgSrc="/src/img/icon/bannersuper.png"
      altText="super banner"
      bgColor="#FFE8A9"
      titleColor="#000"
      subtitleColor="#000"
    />
    <StoreProducts />
    <Footer />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 375px; */
}
</style>
