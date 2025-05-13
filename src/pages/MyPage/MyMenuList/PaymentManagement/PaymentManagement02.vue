<template>
  <div class="wrap">
    <div class="header">
      <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
      <span>은행 선택</span>
    </div>
    <div class="section">
      <div class="title">본인 명의의 계좌만 등록 가능 합니다.</div>
      <div class="group">
        <ul>
          <li>
            <button>
              <img src="/src/assets/img/bankLogo/Nonghyup.svg" alt="" />
              <span>농협</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/kakao.svg" alt="" />
              <span>카카오뱅크</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/gieob.svg" alt="" />
              <span>기업</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/iM.svg" alt="" />
              <span>iM</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/saemaeul.svg" alt="" />
              <span>새마을</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/gyeongnam.svg" alt="" />
              <span>경남</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/gwangju.svg" alt="" />
              <span>광주</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/sinhyeob.svg" alt="" />
              <span>신협</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/siti.svg" alt="" />
              <span>씨티</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/jeonbuk.svg" alt="" />
              <span>전북</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/saneob.svg" alt="" />
              <span>산업</span>
            </button>
          </li>
          <li>
            <button>
              <img src="/src/assets/img/bankLogo/gugmin.svg" alt="" />
              <span>국민</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/sinhan.svg" alt="" />
              <span>신한</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/uli.svg" alt="" />
              <span>우리</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/hana.svg" alt="" />
              <span>하나</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/busan.svg" alt="" />
              <span>부산</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/postoffice.svg" alt="" />
              <span>우체국</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/sc.svg" alt="" />
              <span>SC</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/kbank.svg" alt="" />
              <span>케이뱅크</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/suhyeob.svg" alt="" />
              <span>수협</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/jeju.svg" alt="" />
              <span>제주</span>
            </button>
            <button>
              <img src="/src/assets/img/bankLogo/sbi.svg" alt="" />
              <span>SBI저축</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.header span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.section .title {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 20px;
}
.section .group {
  margin: 30px 0px 24px 0px;
}
.section .group ul {
  display: flex;
}
.section .group ul li {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.section .group ul li button {
  width: 100%;
  border: none;
  background: transparent;
  display: flex;
  justify-content: left;
  gap: 16px;
  padding: 18px 24px;
}
</style>
