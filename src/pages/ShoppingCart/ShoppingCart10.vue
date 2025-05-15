<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>서비스 소개</span>
  </div>
  <div class="con01">
    <div class="title">
      <img src="/src/assets/img/myPage/myProfile.png" alt="" />
      <p>메인 홍길동001</p>
    </div>
    <button>배송지 추가</button>
  </div>
  <div class="con02">
    <div class="title">
      <ul :class="{ active: activeTab === 0 }" @click="activeTab = 0">
        <li>장바구니</li>
      </ul>
      <ul :class="{ active: activeTab === 1 }" @click="activeTab = 1">
        <li>자주구매</li>
      </ul>
      <ul :class="{ active: activeTab === 2 }" @click="activeTab = 2">
        <li>찜목록</li>
      </ul>
      <ul :class="{ active: activeTab === 3 }" @click="activeTab = 3">
        <li>최근 본</li>
      </ul>
    </div>
    <div class="main">
      <div class="con03">
        <div class="wrap">
          <div class="tit-btns">
            <button class="btn1">전체</button>
            <button class="btn2">식료품</button>
            <button class="btn3">전자기기</button>
          </div>
          <div class="item-btns">
            <div>
              <label class="style_checkbox">
                <input type="checkbox" />
                <img
                  src="/src/assets/img/cart/checkbox_active.png"
                  alt="체크박스"
                />
              </label>
              <p>총 <span>4</span>건</p>
            </div>
            <button class="deliete">선택 삭제</button>
          </div>
        </div>
        <!-- -->
        <div class="item-wrap">
          <ul>
            <li>
              <div class="product_card">
                <div class="product_header">
                  <label class="style_checkbox">
                    <input type="checkbox" />
                    <img
                      src="/src/assets/img/cart/checkbox_active.png"
                      alt="체크박스"
                    />
                  </label>
                  <span class="buy_count_label">4회구매</span>
                  <div class="product_header_option">
                    <!-- 활성화시 버튼에 active class 추가 -->
                    <button class="pin"></button>
                    <button class="zzim active"></button>
                  </div>
                </div>
                <div class="product_box">
                  <img
                    class="product_image"
                    src="/src/assets/img/cart/product.png"
                    alt="마스타크린"
                  />
                  <div class="product_info">
                    <div class="brand">마스타크린</div>
                    <div class="product_title">2P 블럭 수세미</div>
                    <div class="stock">9,000개 남음</div>
                  </div>
                </div>

                <div class="price">126,000<span>원</span></div>
              </div>
            </li>
            <li>
              <div class="product_card">
                <div class="product_header">
                  <label class="style_checkbox">
                    <input type="checkbox" />
                    <img
                      src="/src/assets/img/cart/checkbox_active.png"
                      alt="체크박스"
                    />
                  </label>
                  <span class="buy_count_label">4회구매</span>
                  <div class="product_header_option">
                    <!-- 활성화시 버튼에 active class 추가 -->
                    <button class="pin"></button>
                    <button class="zzim active"></button>
                  </div>
                </div>
                <div class="product_box">
                  <img
                    class="product_image"
                    src="/src/assets/img/cart/product.png"
                    alt="마스타크린"
                  />
                  <div class="product_info">
                    <div class="brand">마스타크린</div>
                    <div class="product_title">2P 블럭 수세미</div>
                    <div class="stock">9,000개 남음</div>
                  </div>
                </div>

                <div class="price">126,000<span>원</span></div>
              </div>
            </li>
            <li>
              <div class="product_card">
                <div class="product_header">
                  <label class="style_checkbox">
                    <input type="checkbox" />
                    <img
                      src="/src/assets/img/cart/checkbox_active.png"
                      alt="체크박스"
                    />
                  </label>
                  <span class="buy_count_label">4회구매</span>
                  <div class="product_header_option">
                    <!-- 활성화시 버튼에 active class 추가 -->
                    <button class="pin"></button>
                    <button class="zzim active"></button>
                  </div>
                </div>
                <div class="product_box">
                  <img
                    class="product_image"
                    src="/src/assets/img/cart/product.png"
                    alt="마스타크린"
                  />
                  <div class="product_info">
                    <div class="brand">마스타크린</div>
                    <div class="product_title">2P 블럭 수세미</div>
                    <div class="stock">9,000개 남음</div>
                  </div>
                </div>

                <div class="price">126,000<span>원</span></div>
              </div>
            </li>
            <li>
              <div class="product_card">
                <div class="product_header">
                  <label class="style_checkbox">
                    <input type="checkbox" />
                    <img
                      src="/src/assets/img/cart/checkbox_active.png"
                      alt="체크박스"
                    />
                  </label>
                  <span class="buy_count_label">4회구매</span>
                  <div class="product_header_option">
                    <!-- 활성화시 버튼에 active class 추가 -->
                    <button class="pin"></button>
                    <button class="zzim active"></button>
                  </div>
                </div>
                <div class="product_box">
                  <img
                    class="product_image"
                    src="/src/assets/img/cart/product.png"
                    alt="마스타크린"
                  />
                  <div class="product_info">
                    <div class="brand">마스타크린</div>
                    <div class="product_title">2P 블럭 수세미</div>
                    <div class="stock">9,000개 남음</div>
                  </div>
                </div>

                <div class="price">126,000<span>원</span></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="con04">
      <button>3건 주문하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref(0);
</script>
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
.con01 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  margin: 20px 0px;
}
.con01 .title {
  display: flex;
  gap: 7px;
  align-items: center;
}
.con01 .title img {
  width: 64px;
  height: 64px;
}
.con01 .title p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.con01 button {
  width: 96px;
  height: 40px;
  color: #666;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  border: none;
  padding: 10px 16px;
  border-radius: 50px;
  background: #f5f5f5;
}
.con02 .title {
  display: flex;
}
.con02 .title ul {
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.con02 .title ul.active {
  color: #2866ec;
  border-bottom: 2px solid #2866ec;
}
.main {
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main p {
  overflow: hidden;
  color: #888;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}

/* con03 */
.con03 .wrap {
  padding: 0px 24px;
  margin-top: 30px;
}
.tit-btns {
  display: flex;
  gap: 4px;
}
.tit-btns button {
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  margin-bottom: 16px;
  padding: 5px 16px;
  border: none;
  border-radius: 20px;
}
.tit-btns .btn1 {
  width: 57px;
  height: 28px;
  background: #222;
  color: #fff;
}
.tit-btns .btn2 {
  width: 69px;
  height: 28px;
  color: #626262;
}
.tit-btns .btn3 {
  width: 81px;
  height: 28px;
  color: #626262;
}
.item-btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.item-btns div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.item-btns div p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
}
.item-btns div p span {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
}
.item-btns .deliete {
  width: 52px;
  height: 24px;
  color: #2866ec;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  border: none;
  background: none;
}
.item-wrap {
  padding: 24px;
  background: #f5f5f5;
  margin-bottom: 104px;
}
.item-wrap ul title {
  margin-top: 24px;
}
.item-wrap ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.item-wrap .title {
  overflow: hidden;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  padding-bottom: 12px;
}
.con04 {
  width: 100%;
  height: 104px;
  position: fixed;
  bottom: 0px;
  padding: 24px;
  border-top: 1px solid #dadada;
  background: #fff;
  z-index: 10;
}
.con04 button {
  width: 100%;
  height: 56px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  border-radius: 8px;
  border: none;
  background: #2866ec;
}
/* product_card */
.product_card {
  max-width: 340px;
  padding: 16px;
  position: relative;
  background: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
}
.product_header {
  display: flex;
  align-items: flex-start;
}
.buy_count_label {
  margin-left: 8px;
  padding: 3px 8px;
  color: #2866ec;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  border-radius: 900px;
  border: 1px solid #2866ec;
}
.product_header_option {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}
.product_header_option button {
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
}
.product_header_option .pin {
  background-image: url('/src/assets/img/cart/pin.png');
}
.product_header_option .pin.active {
  background-image: url('/src/assets/img/cart/pin_active.png');
}
.product_header_option .zzim {
  background-image: url('/src/assets/img/cart/zzim.png');
}
.product_header_option .zzim.active {
  background-image: url('/src/assets/img/cart/zzim_active.png');
}
.product_box {
  display: flex;
  align-items: flex-start;
  margin-top: 24px;
}
.product_image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
}
.product_info {
  margin-left: 26px;
}
.brand {
  color: #888;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.product_title {
  margin-top: 2px;
  color: #222;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
.stock {
  display: inline-block;
  margin-top: 4px;
  padding: 3px 8px;
  color: #2196f3;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  border-radius: 12px;
  background: #f5f5f5;
}
.option_info {
  width: calc(100% - 108px);
  margin: 12px 0 0 auto;
}
.row {
  display: flex;
  align-items: center;
  padding: 6px 0;
  color: #444;
  font-size: 15px;
}
.option_label {
  flex: 1;
  color: #c2c2c2;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}
.row.active .option_label {
  color: #000;
}
.option_controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.option_controls button {
  width: 24px;
  height: 24px;
  border: none;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.option_controls span {
  width: 40px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
}
.row.active .option_controls span {
  color: #2866ec;
}
.row.active .option_controls .count_minus {
  background-image: url('/src/assets/img/cart/btn_mn_active.png');
}
.count_minus {
  background-image: url('/src/assets/img/cart/btn_mn.png');
}
.count_plus {
  background-image: url('/src/assets/img/cart/btn_pu_active.png');
}
.pop-order {
  color: #bbb;
  font-size: 15px;
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
}
.pop-order input[type='checkbox'] {
  accent-color: #2196f3;
}
.price {
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 122.222% */
}
.price span {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
}

/* 체크박스 스타일 */
.style_checkbox {
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  vertical-align: middle;
}
.style_checkbox input[type='checkbox'] {
  opacity: 0;
  width: 24px;
  height: 24px;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: 2;
}
.style_checkbox img {
  width: 24px;
  height: 24px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.style_checkbox input[type='checkbox']:checked + img {
  content: url('/src/assets/img/cart/checkbox_active.png');
}
.style_checkbox input[type='checkbox']:not(:checked) + img {
  content: url('/src/assets/img/cart/checkbox.png');
}
</style>
