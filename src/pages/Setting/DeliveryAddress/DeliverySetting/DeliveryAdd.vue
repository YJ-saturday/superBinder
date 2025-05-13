<template>
  <div class="wrap">
    <div class="title">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>배송지 추가</span>
    </div>
    <div class="con con01">
      <ul>
        <li>
          <label for="con01-1" class="input-box">배송지 별칭</label>
          <input type="text" id="con01-1" placeholder="가양 본점점" />
        </li>
        <li>
          <label for="con01-2" class="input-box">받는 분</label>
          <input type="text" id="con01-2" placeholder="가양점주" />
        </li>
        <li>
          <label for="con01-3" class="input-box">연락처</label>
          <input type="text" id="con01-3" placeholder="010-1234-5678" />
        </li>
        <li>
          <label for="con01-4" class="input-box">배송주소</label>
          <div class="group">
            <input type="text" id="con01-4" placeholder="가맹점 주소" />
            <button class="search-btn">검색</button>
          </div>
          <input type="text" placeholder="가맹점 상세 주소" />
        </li>
      </ul>
    </div>
    <div class="bottom">
      <button class="bottom-btn" @click="goAccountManagement">취소</button>
      <button class="bottom-btn" @click="goAccountManagement">수정</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const images = ref([]);
const imageId = ref([]);
const fileInput = ref(null);
const fileInputId = ref(null);
const phoneNumber = ref('');

function goBack() {
  router.push('/');
}
function goAccountManagement() {
  router.push('/');
}
</script>

<style scoped>
.wrap {
  width: 100%;
}
.title {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.title img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.title span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.con {
  padding: 20px 24px 40px 24px;
}

.con ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.con ul li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.con ul li label {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
}
.con ul li input {
  width: 100%;
  height: 48px;
  padding: 13px 12px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
}
.con ul li .group {
  display: flex;
  gap: 8px;
}
.con ul li .group .search-btn {
  width: 64px;
  height: 48px;
  border-radius: 8px;
  background: #222;
  color: #fff;
  border: none;
}

.bottom {
  margin: 24px;
  display: flex;
  gap: 8px;
}
.bottom-btn {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  width: calc(100%);
  height: 56px;
  padding: 17px 10px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
}
.bottom-btn:hover {
  background: #2866ec;
  color: #ffffff;
}
</style>
