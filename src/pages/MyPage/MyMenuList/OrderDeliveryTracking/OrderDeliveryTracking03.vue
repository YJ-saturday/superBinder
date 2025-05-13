<template>
  <div class="header">
    <img src="/src/assets/img/icon/cross.svg" alt="뒤로가기" @click="goBack" />
    <span>주문/배송 조회</span>
  </div>
  <div class="body">
    <div class="wrap">
      <div class="title">
        <p>2025년 3월 5일</p>
        <span>담당자 : 홍길동님</span>
      </div>
      <div class="con con01">
        <ul>
          <li>
            <div class="item-title">공급자</div>
            <div class="items">
              <div class="item">
                <p>상호</p>
                <span>㈜헥사곤무역산업</span>
              </div>
              <div class="item">
                <p>등록번호</p>
                <span>127-87-01023</span>
              </div>
              <div class="item">
                <p>상호</p>
                <span>㈜헥사곤무역산업</span>
              </div>
              <div class="item">
                <p>성명</p>
                <span>홍길동</span>
              </div>
              <div class="item">
                <p>주소</p>
                <span
                  >서울특별시 강남구 선릉로 704 (청담동) 10층
                  ㈜헥사곤무역산업</span
                >
              </div>
              <div class="item">
                <p>종목</p>
                <span>무역/전자상거래</span>
              </div>
              <div class="item">
                <p>TEL</p>
                <span>02-545-8509</span>
              </div>
              <div class="item">
                <p>FAX</p>
                <span>02-544-6698</span>
              </div>
            </div>
          </li>
          <li>
            <div class="item-title">공급받는자</div>
            <div class="items">
              <div class="item">
                <p>상호</p>
                <span>틸다블루(고투몰2호점)</span>
              </div>
              <div class="item">
                <p>등록번호</p>
                <span>372-64-00682</span>
              </div>

              <div class="item">
                <p>성명</p>
                <span>홍길동</span>
              </div>
              <div class="item">
                <p>주소</p>
                <span
                  >서울특별시 서초구 신반포로 지하200 (잠원동) G-019호(반포동,
                  강남터미널 지하쇼핑몰</span
                >
              </div>
              <div class="item">
                <p>업태</p>
                <span>소매</span>
              </div>
              <div class="item">
                <p>종목</p>
                <span>잡화</span>
              </div>
            </div>
          </li>
          <li>
            <div class="item-title">정보</div>
            <div class="items">
              <div class="item">
                <p>공급가액</p>
                <span>126,000원</span>
              </div>
              <div class="item">
                <p>부가세</p>
                <span>0 원</span>
              </div>
              <div class="item">
                <p>미수금</p>
                <span>0 원</span>
              </div>
              <div class="item">
                <p>합계</p>
                <span>126,000 원</span>
              </div>
              <div class="item">
                <p>합계금액<br />(미수포함)</p>
                <span>126,000 원</span>
              </div>
              <div class="item">
                <p>계좌정보</p>
                <span>기업은행 5460-5485-12345 ㈜헥사곤무역산업</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="con con02">
        <div class="item-title">공급자</div>
        <div class="item-sub-title">3/5</div>

        <div class="detail-item">
          <div class="row row-2">
            <div class="col">
              <p class="label">품목코드</p>
              <p class="value">1208</p>
            </div>
            <div class="col">
              <p class="label">품목명</p>
              <p class="value">딜라이드일루이매직브러쉬</p>
            </div>
          </div>
          <hr class="divider dotted" />

          <div class="row row-3">
            <div class="col">
              <p class="label">수량</p>
              <p class="value">5</p>
            </div>
            <div class="col">
              <p class="label">단가</p>
              <p class="value">11,250</p>
            </div>
            <div class="col">
              <p class="label">공급가액</p>
              <p class="value">56,250</p>
            </div>
          </div>
          <hr class="divider dotted" />

          <div class="row row-2">
            <div class="col">
              <p class="label">부가세</p>
              <p class="value check">✔</p>
            </div>
            <div class="col">
              <p class="label">바코드</p>
              <p class="value">7773423120886</p>
            </div>
          </div>
          <hr class="divider solid" />
        </div>

        <div class="detail-item">
          <div class="row row-2">
            <div class="col">
              <p class="label">품목코드</p>
              <p class="value">1208</p>
            </div>
            <div class="col">
              <p class="label">품목명</p>
              <p class="value">딜라이드일루이매직브러쉬</p>
            </div>
          </div>
          <hr class="divider dotted" />

          <div class="row row-3">
            <div class="col">
              <p class="label">수량</p>
              <p class="value">5</p>
            </div>
            <div class="col">
              <p class="label">단가</p>
              <p class="value">11,250</p>
            </div>
            <div class="col">
              <p class="label">공급가액</p>
              <p class="value">56,250</p>
            </div>
          </div>
          <hr class="divider dotted" />

          <div class="row row-2">
            <div class="col">
              <p class="label">부가세</p>
              <p class="value check">✔</p>
            </div>
            <div class="col">
              <p class="label">바코드</p>
              <p class="value">7773423120886</p>
            </div>
          </div>
          <hr class="divider solid" />
        </div>

        <div class="detail-item">
          <div class="row row-2">
            <div class="col">
              <p class="label">품목코드</p>
              <p class="value">1208</p>
            </div>
            <div class="col">
              <p class="label">품목명</p>
              <p class="value">딜라이드일루이매직브러쉬</p>
            </div>
          </div>
          <hr class="divider dotted" />

          <div class="row row-3">
            <div class="col">
              <p class="label">수량</p>
              <p class="value">5</p>
            </div>
            <div class="col">
              <p class="label">단가</p>
              <p class="value">11,250</p>
            </div>
            <div class="col">
              <p class="label">공급가액</p>
              <p class="value">56,250</p>
            </div>
          </div>
          <hr class="divider dotted" />

          <div class="row row-2">
            <div class="col">
              <p class="label">부가세</p>
              <p class="value check">✔</p>
            </div>
            <div class="col">
              <p class="label">바코드</p>
              <p class="value">7773423120886</p>
            </div>
          </div>
          <hr class="divider solid" />
        </div>
      </div>
    </div>
  </div>
  <div class="button-wrap">
    <button class="bottom">메일 발송</button>
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
.body {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: #f8f8f8;
  padding: 24px;
  width: 100%;
}

.wrap {
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
}
.wrap .title {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 2px solid #222;
}
.con01 ul li .item-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-top: 24px;
}
.item-sub-title {
  padding: 8px 0px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  border-bottom: 1px solid #222222;
}
.con01 ul li .items {
  padding: 10px 0px 34px 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px dashed #dadada;
}
.con01 ul li .items .item {
  display: flex;
}
.con01 ul li .items .item p {
  flex: 2;
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.con01 ul li .items .item span {
  flex: 4;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.con02 .item-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-top: 24px;
}
.detail-item {
  padding: 16px 0;
}

.row {
  display: grid;
  align-items: center;
}
.row-2 {
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
}
.row-3 {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
}

.col .label {
  margin: 0;
  font-size: 12px;
  color: #888;
}
.col .value {
  margin: 4px 0 0;
  font-size: 14px;
  font-weight: 600;
  color: #222;
}
.check {
  color: #2866ec;
  font-size: 16px;
}

.divider {
  border: none;
  margin: 8px 0;
}
.divider.dotted {
  border-top: 1px dashed #ddd;
}
.divider.solid {
  border-top: 1px solid #222;
  margin-top: 16px;
}
.button-wrap {
  padding: 24px;
}
.bottom {
  border-radius: 8px;
  background: #2866ec;
  padding: 17px 10px;
  width: 100%;
  border: none;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}
</style>
