<template>
  <footer>
    <div class="dropdown" @click="toggleMenu">
      <span>슈퍼바인더</span>
      <button class="dropdownBtn">
        <img :src="isOpen ? downArrow : upArrow" alt="bottomBtn" />
      </button>
    </div>
    <div class="sub-menu" v-show="isOpen">
      <a href="#">소개</a>
      <a href="#">이용약관</a>
      <a href="#">개인정보처리방침</a>
      <a href="#">할부약관</a>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(true);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const downArrow = new URL('../../../img/icon/rightarrow.png', import.meta.url)
  .href;
const upArrow = new URL('../../../img/icon/bottomarrow.png', import.meta.url)
  .href;
</script>

<style scoped>
footer {
  height: auto;
  width: 100%;
  padding: 20px 24px 40px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 30px;
  background: #f6f6f6;
}

footer .dropdown {
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

footer .dropdown .dropdownBtn {
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

footer .dropdown .dropdownBtn img {
  width: 20px;
  height: 20px;
}

.sub-menu {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
}
.sub-menu a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}
</style>
