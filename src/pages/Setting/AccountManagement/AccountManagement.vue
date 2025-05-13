<template>
  <div class="wrap">
    <div class="title">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>계정관리</span>
    </div>
    <div class="con-wrap">
      <div class="con01" v-if="mainAccount">
        <p class="con-title">메인 계정</p>
        <ul class="list">
          <li
            class="item item-main"
            @click="goMainAccountDetaile(mainAccount.route)"
            style="cursor: pointer"
          >
            <div class="group">
              <img :src="mainAccount.icon" alt="메인 계정 아바타" class="img" />
              <span class="txt">{{ mainAccount.name }}</span>
            </div>
            <img
              class="allow-btn"
              src="/src/assets/img/icon/rightArrow.svg"
              alt=""
            />
          </li>
        </ul>
      </div>

      <div class="con02" v-if="subAccounts.length">
        <p class="con-title">서브 계정</p>
        <ul class="list list-sub">
          <div class="list-title">
            <input type="checkbox" class="checkbox" v-model="allSelected" />
            <button class="delete" @click="showModal = true">선택 삭제</button>
          </div>
          <li
            v-for="(account, idx) in subAccounts"
            :key="account.id"
            class="items"
            :class="`items-sub-${idx + 1}`"
            style="cursor: pointer"
          >
            <input
              type="checkbox"
              class="checkbox"
              v-model="selectedIds"
              :value="account.id"
            />
            <div
              class="item item-sub"
              @click="goSubAccountDetaile(account.route)"
            >
              <div class="group">
                <img :src="account.icon" alt="서브 계정 아바타" class="img" />
                <span class="txt">{{ account.name }}</span>
              </div>
              <img
                class="allow-btn"
                src="/src/assets/img/icon/rightArrow.svg"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
      <button type="button" class="flus-btn" @click="addAccount">
        <img src="/src/assets/img/icon/flus.svg" alt="계정 추가" />
        계정 추가하기
      </button>
      <button class="unsubscribe" @click="showModal2 = true">회원탈퇴</button>
    </div>
    <ServeIdDeleteAgree
      v-if="showModal"
      @confirm="onConfirmDelete"
      @cancel="showModal = false"
    />
    <IdDeleteAgree
      v-if="showModal2"
      @confirm="onConfirmDelete"
      @cancel="showModal2 = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import ServeIdDeleteAgree from './Alert/ServeIdDeleteAgree.vue';
import IdDeleteAgree from './Alert/IdDeleteAgree.vue';

const router = useRouter();
const showModal = ref(false);
const showModal2 = ref(false);
const accounts = ref([
  {
    id: 1,
    name: '메인 계정명00001',
    icon: '/src/assets/img/myPage/mainAcount.svg',
    type: 'main',
    route: '/my/serve',
  },
  {
    id: 2,
    name: '서브 계정명00002',
    icon: '/src/assets/img/myPage/serveAcount.svg',
    type: 'sub',
    route: '/my/serve',
  },
  {
    id: 3,
    name: '서브 계정명00003',
    icon: '/src/assets/img/myPage/serveAcount.svg',
    type: 'sub',
    route: '/my/serve',
  },
]);

const mainAccount = computed(
  () => accounts.value.find((acc) => acc.type === 'main') || null
);
const subAccounts = computed(() =>
  accounts.value.filter((acc) => acc.type === 'sub')
);

const selectedIds = ref([]);

const allSelected = computed({
  get() {
    return (
      subAccounts.value.length > 0 &&
      subAccounts.value.every((acc) => selectedIds.value.includes(acc.id))
    );
  },
  set(val) {
    selectedIds.value = val ? subAccounts.value.map((acc) => acc.id) : [];
  },
});

function goBack() {
  router.push('/setting');
}

function goMainAccountDetaile(path) {
  router.push('/setting/account/maindetaile');
}
function goSubAccountDetaile(path) {
  router.push('/setting/account/subdetaile');
}
function addAccount() {
  router.push('/setting/account/addition');
}

function deleteSelected() {
  accounts.value = accounts.value.filter(
    (acc) => !selectedIds.value.includes(acc.id)
  );
  selectedIds.value = [];
}

function onConfirmDelete() {
  deleteSelected();
  showModal.value = false;
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
.con-wrap {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 24px;
}
.con-wrap .con-title {
  color: #222;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 8px;
}
.con-wrap .con01 .list .item-main {
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con-wrap .con01 .group {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
.con02 .list-sub {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.con02 .list-sub .list-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #222;
  padding: 8px 0 16px;
  margin-bottom: 16px;
}
.con02 .checkbox {
  width: 24px;
  height: 24px;
}
.con02 .delete {
  cursor: pointer;
  border: none;
  background: transparent;
  color: #2866ec;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.con02 .items {
  display: flex;
  align-items: center;
  gap: 10px;
}
.con02 .item-sub {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  padding: 16px;
}
.con02 .item-sub .group {
  display: flex;
  align-items: center;
  gap: 8px;
}
.group img {
  width: 32px;
  height: 32px;
}
.flus-btn {
  display: flex;
  width: 100%;
  padding: 14px 10px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  border: none;
  background: #f6f6f6;
  border-radius: 8px;
  margin-bottom: 144px;
}
.unsubscribe {
  width: 100%;
  height: 52px;
  color: #888;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  border: 1px solid #dadada;
  background: #fff;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 24px;
}
</style>
