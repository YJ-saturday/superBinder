<template>
  <div class="wrap">
    <div class="title">
      <p>계정 변경</p>
      <img
        src="/src/assets/img/icon/cross.svg"
        alt="닫기"
        @click="closeModal"
      />
    </div>
    <ul class="list">
      <li
        v-for="(account, index) in accounts"
        :key="account.id"
        :class="['item', `item-${index + 1}`]"
        @click="goTo(account.route)"
        style="cursor: pointer"
      >
        <img
          :src="account.icon"
          :alt="`${account.type === 'main' ? '메인' : '서브'} 계정 아바타`"
          class="sv-item"
        />
        <span :class="account.type === 'main' ? 'name' : 'sv-name'">
          {{ account.name }}
        </span>
      </li>
    </ul>
    <button type="button" class="flus-btn" @click="addAccount">
      <img src="/src/assets/img/icon/flus.svg" alt="계정 추가" />
      계정 추가하기
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['close']);
const router = useRouter();

const accounts = ref([
  {
    id: 1,
    name: '메인 계정명00001',
    icon: '/src/assets/img/myPage/mainAcount.svg',
    type: 'main',
    route: '/src/pages/MyPage/MyServePage.vue',
  },
  {
    id: 2,
    name: '서브 계정명00002',
    icon: '/src/assets/img/myPage/serveAcount.svg',
    type: 'sub',
    route: '/src/pages/MyPage/MyServePage.vue',
  },
  {
    id: 3,
    name: '서브 계정명00003',
    icon: '/src/assets/img/myPage/serveAcount.svg',
    type: 'sub',
    route: '/src/pages/MyPage/MyServePage.vue',
  },
]);

function closeModal() {
  emit('close');
}

function goTo(path) {
  emit('close');
  router.push(path);
}

// 계정 추가 (더미)
function addAccount() {
  const newId = accounts.value.length + 1;
  accounts.value.push({
    id: newId,
    name: `새 계정명0000${newId}`,
    icon: '/src/assets/img/myPage/serveAcount.svg',
    type: 'sub',
    route: '/src/pages/MyPage/MyServePage.vue',
  });
}
</script>

<style scoped>
.wrap {
  width: 100%;
  padding: 24px;
  position: fixed;
  bottom: 0px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 4;
}
.wrap .title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
}
.wrap .list .item {
  padding: 12px 8px;
  display: flex;
  gap: 8px;
  border-bottom: 1px solid #eee;
}
.wrap .flus-btn {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 12px 8px;
  border-bottom: 1px solid #eee;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.wrap .flus-btn img {
  width: 32px;
  height: 32px;
}
</style>
