<template>
  <footer>
    <div class="footer-main">
      <div class="dropdown" @click="toggleMenu">
        <img src="/src/assets/img/icon/superBinderFooterLogo.svg" alt="" />
        <div class="dropdown-txt">
          <span>회사정보</span>
          <button class="dropdown-btn">
            <img :src="isOpen ? downArrow : upArrow" alt="bottomBtn" />
          </button>
        </div>
      </div>
      <div class="sub-menu">
        <a>서비스소개</a>
        <a>이용약관</a>
        <a>개인정보처리방침</a>
        <a>환불약관</a>
      </div>
    </div>
    <div class="middle-line"></div>
    <div class="dropdown-message" v-show="isOpen">
      <h2 class="company-info-name">㈜헥사곤무역산업</h2>

      <dl class="company-info-list">
        <div class="info-item">
          <dt>사업자등록번호</dt>
          <dd>127-87-01023</dd>
        </div>
        <div class="info-item">
          <dt>통신판매업신고증</dt>
          <dd>제2020-서울강남-03180호</dd>
        </div>
        <div class="info-item">
          <dt>대표이사</dt>
          <dd>양승혁</dd>
        </div>
        <div class="info-item">
          <dt>주소</dt>
          <dd>
            서울특별시 강남구 선릉로 704, 10층, 12층 100호 (청담동,
            청담벤처프라자)
          </dd>
        </div>
      </dl>
      <p class="company-info-disclaimer">
        서비스제공에 대한 민원, 환불등은 “㈜헥사곤무역산업”에서 처리하며 모든
        책임은 “㈜헥사곤무역산업”에 있습니다.
      </p>

      <div class="company-info-contact">
        <img
          src="/src/assets/img/icon/kakao.svg"
          alt="카카오채널 아이콘"
          class="contact-icon"
        />
        <span class="contact-text">
          고객문의는 카카오채널을 이용해주세요.
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const upArrow = new URL('/src/assets/img/icon/rightArrow.svg', import.meta.url)
  .href;
const downArrow = new URL(
  '/src/assets/img/icon/bottomarrow.png',
  import.meta.url
).href;
</script>

<style scoped>
footer {
  height: auto;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 30px;
  background: #f6f6f6;
}

footer .footer-main {
  padding: 24px;
}
footer .footer-main .dropdown {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
footer .footer-main .dropdown-txt {
  color: #222;

  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
footer .footer-main .dropdown div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

footer .footer-main .dropdown .dropdown-btn {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

footer .footer-main .dropdown .dropdown-btn img {
  width: 16px;
  height: 16px;
}
.middle-line {
  border-bottom: 1px solid #dadada;
}
.sub-menu {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
}

.sub-menu a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  color: #666;

  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.dropdown-message {
  width: 100%;
  padding: 10px 24px 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.company-info-name {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-top: 10px;
}

.company-info-list {
  margin: 0;
  padding: 0;
}

.company-info-list .info-item {
  display: flex;
  margin-bottom: 8px;
}

.company-info-list dt {
  width: 180px;
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.company-info-list dd {
  width: 100%;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.company-info-disclaimer {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.company-info-contact {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
}

.contact-icon {
  width: 24px;
  height: 24px;
}

.contact-text {
  color: #666;

  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}
</style>
