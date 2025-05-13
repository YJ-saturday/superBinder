<template>
  <teleport to="body">
    <div v-show="modelValue" class="auth-modal__overlay" @click.self="close">
      <div class="auth-modal">
        <div class="auth-modal__header">
          <span class="auth-modal__title">인증 방법 선택</span>
          <button class="auth-modal__close" @click="close">×</button>
        </div>
        <ul class="auth-modal__list">
          <li class="auth-modal__item" @click="select('toss')">
            <span>토스 인증</span>
          </li>
          <li class="auth-modal__item" @click="select('naver')">
            <span>네이버 인증</span>
          </li>
          <li class="auth-modal__item" @click="select('kakao')">
            <span>카카오 인증</span>
          </li>
          <li class="auth-modal__item" @click="select('ars')">
            <span>ARS 전화 인증</span>
          </li>
        </ul>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(['update:modelValue', 'select']);

function close() {
  emit('update:modelValue', false);
}

function select(method) {
  emit('select', method);
  close();
}
</script>

<style scoped>
.auth-modal__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.auth-modal {
  width: 320px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.auth-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
}
.auth-modal__title {
  font-size: 16px;
  font-weight: 600;
}
.auth-modal__close {
  background: none;
  border: none;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.auth-modal__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.auth-modal__item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}
.auth-modal__item:last-child {
  border-bottom: none;
}
.auth-modal__item span {
  font-size: 14px;
  color: #222;
}
</style>
