<template>
  <div class="biz-auth-title">
    <div class="biz-auth-header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt=""
        @click="goBack"
      />
      <span>회원가입</span>
    </div>
    <div class="agreement">
      <div class="sub-header">파일 첨부</div>
      <div class="sub-group">
        <div class="sub-content">
          <div class="sub-title">매장 및 매대 사진</div>
          <div class="image-container">
            <div class="Attach">
              <label class="upload-btn">
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  @change="handleFileReaderChange"
                />
                <img
                  src="/src/assets/img/Authentication/noneImage.svg"
                  alt="noneImage"
                />
              </label>
              <!-- display none -->
              <p class="error error1">첨부한 파일의 형식이 맞지 않습니다.</p>
              <p class="error error1">첨부한 용량이 너무 큽니다.</p>
            </div>
            <div
              v-for="(image, index) in images"
              :key="index"
              class="image-wrapper"
            >
              <img :src="image" class="image-box" />
              <button class="remove-btn" @click="removeImage(index)">
                <img
                  src="/src/assets/img/Authentication/closeBtn.png"
                  alt="closeBtnImg"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="sub-content">
          <div class="sub-title">신분증</div>

          <div class="image-container">
            <div class="Attach">
              <label class="upload-btn">
                <input
                  ref="fileInputId"
                  type="file"
                  accept="image/*"
                  @change="handleFileReaderChangeId"
                />
                <img
                  src="/src/assets/img/Authentication/noneImage.png"
                  alt="noneImg"
                />
              </label>
              <!-- display none -->
              <p p class="error error3">첨부한 파일의 형식이 맞지 않습니다.</p>
              <p p class="error error4">첨부한 용량이 너무 큽니다.</p>
            </div>
            <div
              v-for="(image, index) in imageId"
              :key="index"
              class="image-wrapper"
            >
              <img :src="image" class="image-box" />
              <button class="remove-btn" @click="removeImageId(index)">
                <img
                  src="/src/assets/img/Authentication/closeBtn.png"
                  alt="closeBtnImg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button type="button" class="btn-cancel" @click="isModalOpen = true">
        취소
      </button>
      <button
        type="submit"
        class="btn-submit"
        :disabled="isNextDisabled"
        :class="{ active: !isNextDisabled }"
        @click="goNextPage"
      >
        다음으로
      </button>
    </div>
    <BizCancelAlert v-if="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BizCancelAlert from './BizAlert/BizCancelAlert.vue';

const router = useRouter();
const images = ref([]);
const imageId = ref([]);
const fileInput = ref(null);
const fileInputId = ref(null);
const isModalOpen = ref(false);

function goNextPage() {
  router.push('/bizauth/code');
}
function goBack() {
  router.push('/bizauth');
}

const handleFileReaderChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const dataUrl = event.target.result;
    if (images.value.length === 0) {
      images.value.push(dataUrl);
    } else {
      images.value.splice(0, 1, dataUrl);
    }
  };
  reader.readAsDataURL(file);
  e.target.value = '';
};

const removeImage = (index) => {
  images.value.splice(index, 1);
};

const handleFileReaderChangeId = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const dataUrl = event.target.result;
    if (imageId.value.length === 0) {
      imageId.value.push(dataUrl);
    } else {
      imageId.value.splice(0, 1, dataUrl);
    }
  };
  reader.readAsDataURL(file);
  e.target.value = '';
};

const removeImageId = (index) => {
  imageId.value.splice(index, 1);
};

const isNextDisabled = computed(
  () => images.value.length === 0 || imageId.value.length === 0
);
</script>

<style scoped>
.biz-auth-title {
  width: 100%;
}
.biz-auth-title .biz-auth-header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
}
.biz-auth-title .biz-auth-header img {
  width: 24px;
  height: 24px;
}
.biz-auth-title .biz-auth-header span {
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin-left: 112.5px;
}
.biz-auth-title .agreement {
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-top: 0;
}
.biz-auth-title .agreement .sub-header {
  color: #222;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
}
.biz-auth-title .agreement .sub-content .sub-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-top: 16px;
}

.biz-auth-title .agreement .sub-content .image-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}
.biz-auth-title .agreement .sub-content .image-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  border: 0.5px solid #d0d0d0;
  border-radius: 5px;
}
.biz-auth-title .agreement .sub-content .image-wrapper .image-box {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}
.biz-auth-title .agreement .sub-content .image-wrapper .remove-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ffffff;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.biz-auth-title .agreement .sub-content .image-wrapper .remove-btn img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.biz-auth-title .agreement .sub-content .Attach .upload-btn {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
.biz-auth-title .agreement .sub-content .Attach .upload-btn img {
  width: 80px;
  height: 80px;
  border: none;
  outline: none;
  display: block;
  border-radius: 8px;
}

.biz-auth-title .agreement .sub-content .Attach .upload-btn input[type='file'] {
  display: none;
}
.biz-auth-title .btn-group {
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 24px;
  position: fixed;
  bottom: 0;
}
.biz-auth-title .btn-group button {
  width: 100%;
  height: 56px;
  color: #222;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #c2c2c2;
}
.biz-auth-title .btn-group .btn-submit {
  background: #c2c2c2;
  color: #fff;
}
.biz-auth-title .btn-group .btn-submit.active {
  background: #2866ec;
  cursor: pointer;
}
.error {
  display: none;
  color: #e52f28;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
}
</style>
