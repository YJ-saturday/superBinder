<template>
  <div class="wrap">
    <div class="title">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>배송지 설정</span>
    </div>
    <div class="section">
      <p class="main" v-if="addresses.length === 0">
        등록되어 있는 배송지가 없어요.<br />
        배송지 추가를 통해 신규 배송지를 등록해주세요.
      </p>
      <div v-else class="list">
        <div class="card" v-for="(addr, index) in addresses" :key="addr.id">
          <div class="card-title">
            <div class="card-group">
              <span>{{ addr.name }}</span>
              <button v-if="index === 0" class="badge">기본 배송지</button>
            </div>
            <img
              class="card-btn"
              src="/src/assets/img/icon/dotdotdot.svg"
              alt="메뉴"
              @click.stop="toggleMenu(addr.id)"
            />
            <div v-if="activeMenuId === addr.id" class="modal">
              <button @click="setDefault(addr.id)">기본배송지 설정</button>
              <button @click="editAddress(addr.id)">수정</button>
              <button @click="deleteAddress(addr.id)">삭제</button>
            </div>
          </div>
          <p class="zip">({{ addr.zip }})</p>
          <p class="addr">{{ addr.address1 }}</p>
        </div>
      </div>
      <button type="button" class="flus-btn" @click="addAccount">
        <img src="/src/assets/img/icon/flus.svg" alt="추가" />
        계정 추가하기
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const addresses = ref([]);
const activeMenuId = ref(null);

function goBack() {
  router.back();
}

function addAccount() {
  addresses.value.push({
    id: Date.now(),
    name: '가양 3호점',
    zip: '07528',
    address1: '서울 강서구 양천로 401 에이동 1층 105-2호',
    address2: '',
  });
}

function toggleMenu(id) {
  activeMenuId.value = activeMenuId.value === id ? null : id;
}

function setDefault(id) {
  const idx = addresses.value.findIndex((a) => a.id === id);
  if (idx > 0) {
    const [item] = addresses.value.splice(idx, 1);
    addresses.value.unshift(item);
  }
  activeMenuId.value = null;
}

function editAddress(id) {
  activeMenuId.value = null;
}

function deleteAddress(id) {
  addresses.value = addresses.value.filter((a) => a.id !== id);
  activeMenuId.value = null;
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
}
.title img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.title span {
  flex: 1;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
}
.section {
  margin: 20px 24px 17px 24px;
}
.section .main {
  color: #888;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 44px;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
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
.card-group {
  display: flex;
  align-items: center;
  gap: 4px;
}
.zip,
.addr {
  color: #626262;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.flus-btn {
  display: flex;
  width: 100%;
  padding: 14px 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  background: #f6f6f6;
  border-radius: 8px;
  cursor: pointer;
}
.flus-btn img {
  width: 16px;
  height: 16px;
}
.badge {
  width: 71px;
  height: 24px;
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  border-radius: 900px;
  border: 1px solid #2866ec;
  background: transparent;
}
.modal {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  width: 133px;
  padding: 8px 6px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
.modal button {
  width: 100%;
  height: 32px;
  padding: 8px 0;
  border: none;
  background: transparent;
}
</style>
