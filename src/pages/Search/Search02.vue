<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <div class="search">
      <div class="search-left">
        <img src="/src/assets/img/icon/searchPageBtn.svg" alt="" />
        <label for="search-box">
          <input
            type="text"
            placeholder="뷰티 상품 최대 30% 할인"
            id="search-box"
          />
        </label>
      </div>
      <div class="search-right">
        <img src="/src/assets/img/icon/crossOne.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="con">
    <div class="recent-searches">
      <div class="title">
        <p>최근 검색어</p>
      </div>
      <ul class="croll">
        <li>
          <p>화장품</p>
          <img src="/src/assets/img/icon/cross.svg" alt="" />
        </li>
        <li>
          <p>봄 자켓</p>
          <img src="/src/assets/img/icon/cross.svg" alt="" />
        </li>
        <li>
          <p>호텔수건</p>
          <img src="/src/assets/img/icon/cross.svg" alt="" />
        </li>
        <li>
          <p>수저</p>
          <img src="/src/assets/img/icon/cross.svg" alt="" />
        </li>
      </ul>
    </div>
    <div class="recent-product">
      <div class="title">
        <p>최근 본 상품</p>
      </div>
      <ProductCard :products="items1" />
    </div>
    <div class="popular-search">
      <div class="title">
        <p>인기 검색어</p>
        <span>09시 기준</span>
      </div>
      <ul>
        <li>
          <p class="num">1</p>
          <span class="badge-new-img">NEW</span>
          <p class="txt">비타리움</p>
        </li>
        <li>
          <p class="num">2</p>
          <span class="badge-up-img"></span>
          <p class="txt">호텔 수건</p>
        </li>
        <li>
          <p class="num">3</p>
          <span class="badge-down-img"></span>
          <p class="txt">2인 쇼파</p>
        </li>
        <li>
          <p class="num">4</p>
          <span class="badge-new-img">NEW</span>
          <p class="txt">수납장</p>
        </li>
        <li>
          <p class="num">5</p>
          <span class="badge-new-img">NEW</span>
          <p class="txt">식물성 수세미</p>
        </li>
        <li>
          <p class="num">6</p>
          <span class="badge-new-img">NEW</span>
          <p class="txt">친환경</p>
        </li>
        <li>
          <p class="num">7</p>
          <span class="badge-new-img">NEW</span>
          <p class="txt">포포크림</p>
        </li>
        <li>
          <p class="num">8</p>
          <span class="badge-up-img"></span>
          <p class="txt">비타리움</p>
        </li>
        <li>
          <p class="num">9</p>
          <span class="badge-up-img"></span>
          <p class="txt">실리콘몰드</p>
        </li>
        <li>
          <p class="num">10</p>
          <span class="badge-down-img"></span>
          <p class="txt">마스타크린</p>
        </li>
      </ul>
    </div>
    <BannerCard
      :marginTop="0"
      @click="isModalOpen = true"
      title="스마트 발주"
      subtitle="발주 주문을 쉽고 빠르게&#10;진행하실 수 있어요."
      imgSrc="/src/assets/img/icon/bannersmart.png"
      altText="smart banner"
      bgColor="#d9f0ff"
      titleColor="#000"
      subtitleColor="#000"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '@/common/ProductCardSearch.vue';
import BannerCard from '@/common/BannerCard.vue';

const items1 = [
  {
    id: 1,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 2,
    img: '/src/assets/img/productCard/bannerImg04.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 5,
  },
  {
    id: 3,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 4,
    img: '/src/assets/img/productCard/bannerImg04.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
  {
    id: 5,
    img: '/src/assets/img/productCard/bannerImg03.png',
    category: '비타리움',
    title: '보습, 보호, 알레르기 만능!!',
    subtitle: '포포크림 3종',
    price: 16000,
    discount: 20,
    stock: 9000,
  },
];
</script>
<style scoped>
.header {
  width: 100%;
  height: 62px;
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: relative;
}
.header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.header .search {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 40px;
  background: #f5f5f5;
}
.header .search .search-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header .search .search-left #search-box {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background: none;
  outline: none;
  box-shadow: none;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
#search-box::placeholder {
  color: #c2c2c2;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
.header .search .search-left img {
  width: 16px;
  height: 16px;
}
.con {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 24px 60px 24px;
}
.title p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
.items p {
  margin-top: 16px;
  color: #c2c2c2;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.14px;
}
/* recent-searches */
.croll {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  margin-top: 21px;
  list-style: none;
}
.croll li {
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  padding: 6px 12px 6px 16px;
  border-radius: 18px;
  border: 1px solid #bbb;
  background: #fff;
  white-space: nowrap;
}
.croll::-webkit-scrollbar {
  display: none;
}
.croll li p {
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;
}
.croll li img {
  width: 14px;
  height: 14px;
}

.popular-search .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.popular-search .title span {
  color: #888;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
}
.popular-search ul {
  display: flex;
  gap: 16px 12px;
  flex-wrap: wrap;

  margin-top: 16px;
}
.popular-search ul li {
  display: flex;
  align-items: center;
  flex: 0 0 calc(50% - 16px);
  gap: 1px;
}
.popular-search ul li .num {
  color: #555;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
}
.popular-search ul li .badge-new-img {
  width: 24px;
  height: 22px;
  padding: 3px 0px;
  color: #ff2b59;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
}
.popular-search ul li .txt {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
}

.popular-search ul li .badge-up-img,
.popular-search ul li .badge-down-img {
  display: inline-block;
  width: 24px;
  height: 22px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.popular-search ul li .badge-up-img {
  background-image: url('/src/assets/img/icon/badge-up-img.svg');
}
.popular-search ul li .badge-down-img {
  background-image: url('/src/assets/img/icon/badge-down-img.svg');
}
</style>
