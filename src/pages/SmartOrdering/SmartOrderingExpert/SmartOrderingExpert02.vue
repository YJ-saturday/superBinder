<template>
  <div class="header">
    <div class="header-left">
      <img src="/src/assets/img/icon/leftAllow.svg" alt="뒤로가기" />
      <p>스마트 발주</p>
    </div>
    <div class="header-right">
      <img src="/src/assets/img/smartOrdering/homeBtn.svg" alt="뒤로가기" />
    </div>
  </div>
  <div class="wrap">
    <div class="con con01">
      <h1>Step. 2</h1>
      <span>구매할 상품을 선택해주세요.</span>
    </div>
  </div>
  <div class="con03">
    <div class="wrap">
      <div class="item-btns">
        <div>
          <label class="style_checkbox">
            <input type="checkbox" />
            <img
              src="/src/assets/img/cart/checkbox_active.png"
              alt="체크옵션 2"
            />
          </label>
          <p>총 <span>2</span>건</p>
        </div>
        <button class="deliete">선택 삭제</button>
      </div>
    </div>
    <div class="item-wrap">
      <ul>
        <div class="title">본사 출발</div>
        <li>
          <div class="product_card">
            <div class="product_header">
              <label class="style_checkbox">
                <input type="checkbox" />
                <img
                  src="/src/assets/img/cart/checkbox_active.png"
                  alt="체크옵션 2"
                />
              </label>
              <span class="buy_count_label02">4회 구매</span>
              <div class="product_header_option">
                <!-- 활성화시 버튼에 active class 추가 -->
                <button class="pin"></button>
                <button class="zzim active"></button>
              </div>
            </div>
            <div class="product_box">
              <img
                class="product_image"
                src="/src/assets/img/cart/smartOrderingItempng.png"
                alt="노브랜드"
              />
              <div class="product_info">
                <div class="brand">노브랜드</div>
                <div class="product_title">손상모발개선 탈모완화 샴푸</div>
                <div class="stock">5개 남음</div>
              </div>
            </div>
            <div class="option_info">
              <!-- 수량 있을때 row 에 active class 추가 -->
              <div class="row active">
                <span class="option_label">옵션 1</span>
                <div class="option_controls">
                  <button class="count_minus"></button>
                  <span>8</span>
                  <button class="count_plus"></button>
                </div>
              </div>
              <div class="row">
                <span class="option_label">옵션 2</span>
                <div class="option_controls">
                  <button class="count_minus"></button>
                  <span>0</span>
                  <button class="count_plus"></button>
                </div>
              </div>
              <div class="row active">
                <span class="option_label">옵션 3</span>
                <div class="option_controls">
                  <button class="count_minus"></button>
                  <span>3</span>
                  <button class="count_plus"></button>
                </div>
              </div>
              <div class="row pop_order">
                <span class="option_label">POP 주문</span>
                <label class="style_checkbox">
                  <input type="checkbox" />
                  <img
                    src="/src/assets/img/cart/checkbox.png"
                    alt="체크옵션 2"
                  />
                </label>
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
                  alt="체크옵션 2"
                />
              </label>
              <span class="buy_count_label02">2회 구매</span>
              <div class="product_header_option">
                <!-- 활성화시 버튼에 active class 추가 -->
                <button class="pin"></button>
                <button class="zzim active"></button>
              </div>
            </div>
            <div class="product_box">
              <img
                class="product_image"
                src="/src/assets/img/cart/smartOrderingItempng.png"
                alt="노브랜드"
              />
              <div class="product_info">
                <div class="brand">노브랜드</div>
                <div class="product_title">손상모발개선 탈모완화 샴푸</div>
                <div class="stock">5개 남음</div>
              </div>
            </div>
            <div class="option_info">
              <!-- 수량 있을때 row 에 active class 추가 -->
              <div class="row active">
                <span class="option_label">옵션 1</span>
                <div class="option_controls">
                  <button class="count_minus"></button>
                  <span>8</span>
                  <button class="count_plus"></button>
                </div>
              </div>
              <div class="row">
                <span class="option_label">옵션 2</span>
                <div class="option_controls">
                  <button class="count_minus"></button>
                  <span>0</span>
                  <button class="count_plus"></button>
                </div>
              </div>
              <div class="row active">
                <span class="option_label">옵션 3</span>
                <div class="option_controls">
                  <button class="count_minus"></button>
                  <span>3</span>
                  <button class="count_plus"></button>
                </div>
              </div>
              <div class="row pop_order">
                <span class="option_label">POP 주문</span>
                <label class="style_checkbox">
                  <input type="checkbox" />
                  <img
                    src="/src/assets/img/cart/checkbox.png"
                    alt="체크옵션 2"
                  />
                </label>
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
                  alt="체크옵션 2"
                />
              </label>
              <span class="buy_count_label02">3회 구매</span>
              <div class="product_header_option">
                <!-- 활성화시 버튼에 active class 추가 -->
                <button class="pin"></button>
                <button class="zzim active"></button>
              </div>
            </div>
            <div class="product_box">
              <img
                class="product_image"
                src="/src/assets/img/cart/smartOrderingItempng.png"
                alt="노브랜드"
              />
              <div class="product_info">
                <div class="brand">노브랜드</div>
                <div class="product_title">손상모발개선 탈모완화 샴푸</div>
                <div class="stock">5개 남음</div>
              </div>
            </div>
            <div class="option_info">
              <!-- 수량 있을때 row 에 active class 추가 -->
              <div class="row active">
                <span class="option_label">옵션 1</span>
                <div class="option_controls">
                  <button class="count_minus"></button>
                  <span>8</span>
                  <button class="count_plus"></button>
                </div>
              </div>
              <div class="row">
                <span class="option_label">옵션 2</span>
                <div class="option_controls">
                  <button class="count_minus"></button>
                  <span>0</span>
                  <button class="count_plus"></button>
                </div>
              </div>
              <div class="row active">
                <span class="option_label">옵션 3</span>
                <div class="option_controls">
                  <button class="count_minus"></button>
                  <span>3</span>
                  <button class="count_plus"></button>
                </div>
              </div>
              <div class="row pop_order">
                <span class="option_label">POP 주문</span>
                <label class="style_checkbox">
                  <input type="checkbox" />
                  <img
                    src="/src/assets/img/cart/checkbox.png"
                    alt="체크옵션 2"
                  />
                </label>
              </div>
            </div>
            <div class="price">126,000<span>원</span></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="con04">
      <div class="con04-title">
        <p>총 금액 (3건)</p>
        <div class="con04-item">
          <div>
            <p>258,000 <span>원</span></p>
            <span>배송비 6,000원 포함</span>
          </div>
          <img src="/src/assets/img/icon/arrowUp.svg" alt="" />
        </div>
      </div>
      <button>3건 주문하기</button>
    </div>
  </div>

  <div class="con04">
    <div class="con04-title">
      <p>총 금액 (3건)</p>
      <div class="con04-item">
        <div>
          <p>258,000 <span>원</span></p>
          <span>배송비 6,000원 포함</span>
        </div>
        <img src="/src/assets/img/icon/arrowUp.svg" alt="" />
      </div>
    </div>
    <button>3건 주문하기</button>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  width: 100%;
  height: 62px;
  padding: 16px 24px 10px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .header-left {
  display: flex;
  gap: 4px;
}
.header .header-left img {
  width: 24px;
  height: 24px;
}
.header .header-left p {
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.header .header-right img {
  width: 36px;
  height: 36px;
}
.wrap {
  padding: 0px 24px;
}
.con01 {
  margin-top: 20px;
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
}
.con01 h1 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.con01 p {
  margin-top: 8px;
}
/* con02 */
.con02 {
  margin-top: 18px;
}
.con02 ul {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.con02 ul li {
  width: 102px;
  height: 76px;
  display: flex;
  flex: 0 0 calc(30%);
  flex-direction: column;
  align-items: center;
  padding: 5px;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 169.231% */
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
}

.con02 ul li img {
  width: 42.125px;
  height: 42.125px;
}
.con02 ul .t {
  display: flex;
  justify-content: center;
  align-items: center;
}
.con02 ul .t p {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 169.231% */
}

.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
}
.card {
  border: 1px solid #dadada;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
}
.card-title {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.card-title span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
.card-txt p {
  color: #626262;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
/* con03 */
/* con03 */
.con03 .wrap {
  padding: 0px 24px;
  margin-top: 30px;
}
.item-btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
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
  margin-bottom: 168px;
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
.buy_count_label01 {
  width: 61px;
  height: 24px;
  padding: 3px 8px;
  color: #fff;
  margin-left: 8px;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  border-radius: 900px;
  background: #c561ff;
}
.buy_count_label02 {
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
  color: #ff2b59;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  border-radius: 900px;
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

/* 체크옵션 2 스타일 */
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

/* bottom */
.bottom {
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  gap: 8px;
  padding: 24px;
  background: #fff;
}
.bottom .cancel {
  width: 100%;
  height: 56px;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  border-radius: 8px;
  border: 1px solid #dadada;

  background: #fff;
}
.bottom .next {
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
  border: none;
  border-radius: 8px;
  background: #2866ec;
}

/* con04 */

.con04 {
  width: 100%;
  height: 168px;
  position: fixed;
  bottom: 0px;
  padding: 24px;
  border-top: 1px solid #dadada;
  background: #fff;
  z-index: 10;
}
.con04-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.con04-title p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
}
.con04 .con04-item {
  display: flex;
  gap: 8px;
}
.con04 .con04-item div {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
}
.con04 .con04-item div p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
}
.con04 .con04-item div p span {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.con04 .con04-item div span {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  margin-top: 24px;
  border-radius: 8px;
  border: none;
  background: #2866ec;
}
</style>
