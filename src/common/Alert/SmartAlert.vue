<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">
        <img src="/src/assets/img/icon/cross.svg" alt="" />
      </button>
      <h1 class="title">
        안녕하세요.<br />
        슈퍼바인더를 처음 이용하시는<br />
        점주님!
      </h1>

      <p class="description">
        스마트 발주는 쉽고 빠르게<br />
        상품 선택부터 발주까지<br />
        지원해드리는 서비스입니다.
      </p>
      <p class="note">
        지금 하단 배너를 통해<br />
        스마트 발주 서비스를 경험해보세요.
      </p>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close']);
function closeModal() {
  emit('close');
}
</script>

<style scoped>
.modal-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
}

.modal-content {
  position: relative;
  width: 90%;
  height: 354.2px;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  border-radius: 12px;
  padding: 46.88px 15.63px;
  text-align: center;
  color: #fff;
  font-family: 'Pretendard GOV', sans-serif;
  background: #1f1f1f;
}

.close-btn {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
}

.title {
  color: #fff;
  text-align: center;
  font-family: 'Pretendard GOV';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -1px;
}

.description,
.note {
  color: #fff;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
  margin-top: 20px;
}
</style>
