<template>
  <div class="wrap">
    <div class="title">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>계정 상세</span>
    </div>
    <div class="con con01">
      <p class="con-title">로그인 정보</p>
      <ul>
        <li>
          <label for="con01-1" class="input-box">아이디</label>
          <input type="text" id="con01-1" placeholder="adminID9999" disabled />
        </li>
        <li class="position">
          <li>
          <label for="con01-2" class="con01-2">비밀번호</label>
          <button class="button-box" @click="goAccountChangSubPw">
            비밀번호 변경
          </button>
        </li>
          <label for="con01-3" class="input-box">비밀번호</label>
          <input
            :type="showNumbers ? 'text' : 'password'"
            id="con01-3"
            placeholder="●●●●●●●●"
          />
          <button class="con01-2-btn">비밀번호 번경</button>
          <img
            v-if="!showNumbers"
            src="/src/assets/img/icon/eyeClose.svg"
            alt="보이기"
            class="close"
            @click="showNumbers = true"
          />
          <img
            v-else
            src="/src/assets/img/icon/eyeOpen.svg"
            alt="숨기기"
            class="open"
            @click="showNumbers = false"
          />
        </li>
      </ul>
    </div>
    <div class="con con02">
      <p class="con-title">점주 정보</p>
      <ul>
        <li>
          <label for="con02-1" class="input-box">지점명</label>
          <input
            type="text"
            id="con02-1"
            placeholder="서브 계정명00002"
            disabled
          />
        </li>
        <li>
          <label for="con02-2" class="input-box">점주명명</label>
          <input type="text" id="con02-2" placeholder="김점주" disabled />
        </li>
        <li>
          <label for="con02-3" class="input-box">전화번호</label>
          <input
            type="text"
            id="con02-3"
            placeholder="010-1234-5678"
            v-model="phoneNumber"
            @input="handlePhoneInput"
            inputmode="numeric"
            maxlength="13"
          />
        </li>
        <li>
          <label for="con02-4" class="input-box">대표자 E-mail</label>
          <input
            type="text"
            id="con02-4"
            placeholder="testestest089@mail.com"
          />
        </li>
      </ul>
    </div>
    <div class="con con03">
      <p class="con-title">사진 등록</p>
      <div class="sub-group">
        <div class="sub-content">
          <div class="sub-title">프로필 사진</div>
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
          <div class="sub-title">신분증 사본</div>
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
    <button class="bottom-btn" @click="goAccountManagement">정보 수정</button>
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
const showNumbers = ref(false);

function goBack() {
  router.push('/setting/account/management');
}
function goAccountManagement() {
  router.push('/setting/account/management');
}
function goAccountChangSubPw() {
  router.push('/setting/account/changpw/sub');
}

const handlePhoneInput = (e) => {
  let digits = e.target.value.replace(/\D/g, '');

  if (digits.length <= 3) {
    phoneNumber.value = digits;
  } else if (digits.length <= 7) {
    phoneNumber.value = `${digits.slice(0, 3)}-${digits.slice(3)}`;
  } else if (digits.length <= 11) {
    phoneNumber.value = `${digits.slice(0, 3)}-${digits.slice(
      3,
      7
    )}-${digits.slice(7)}`;
  } else {
    phoneNumber.value = `${digits.slice(0, 3)}-${digits.slice(
      3,
      7
    )}-${digits.slice(7, 11)}`;
  }
};

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
.con .con-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  margin-bottom: 16px;
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
  background: #f5f5f5;
}
.con01 ul .position {
  position: relative;
}
.con01 ul .position img {
  position: absolute;
  top: 120px;
  right: 12px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.con01 .position .con01-2-btn {
  border: none;
  background: transparent;
  color: #2866ec;
  text-align: left;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.button-box {
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  width: 140px;
  height: 42px;
  cursor: pointer;
  border: none;
  /* background: transparent; */
  border-radius: 20px;
  background: #222;
}
#con01-2,
#con02-3,
#con02-4 {
  background: #fff;
}
/*  */
.sub-group {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.sub-content .sub-title {
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 8px;
}
.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}
.Attach .upload-btn {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background: #f5f5f5;
  border: 1px dashed #c2c2c2;
  border-radius: 8px;
}
.Attach .upload-btn input[type='file'] {
  display: none;
}
.Attach .upload-btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.image-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  border: 0.5px solid #d0d0d0;
  border-radius: 5px;
}
.image-box {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}
.remove-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ffffff;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 0;
}
.remove-btn img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.error {
  display: none;
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
}
.error.show {
  display: block;
}
.bottom-btn {
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  width: calc(100% - 48px);
  height: 56px;
  padding: 17px 10px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background: #c2c2c2;
  margin: 24px;
}
</style>
