<script setup>
import { ref, provide } from 'vue';
import { RouterView } from 'vue-router'

import PopupMessage from '@/views/user/popup/PopupMessage.vue';
import UnavailablePopup from './views/user/popup/UnavailablePopup.vue';
import PopupQRCode from './views/user/popup/PopupQRCode.vue';

// สร้าง State สำหรับ Popup
const isUnavailablePopupVisible = ref(false)
const popupVisible = ref(false);
const popupMessage = ref('');
const showQRPopup = ref(false);

// ฟังก์ชันเปิด PopupQRcode
const openQRPopup = () => {
  showQRPopup.value = true;
};

// ฟังก์ชันปิด PopupQRcode
const closeQRPopup = () => {
  showQRPopup.value = false;
};

// ฟังก์ชันในการแสดง UnavailablePopup
const showUnavailablePopup = () => {
  isUnavailablePopupVisible.value = true;
};

// ฟังก์ชันในการซ่อน UnavailablePopup
const closeUnavailablePopup = () => {
  isUnavailablePopupVisible.value = false;
};


// ฟังก์ชันแสดง Popup
const showPopup = (message) => {
  popupMessage.value = message;
  popupVisible.value = true;
  setTimeout(() => {
    popupVisible.value = false; // ซ่อน Popup หลัง 2 วินาที
  }, 1000);
};

// แชร์ State และฟังก์ชันด้วย Provide
provide('showPopup', showPopup);
provide('openQRPopup', openQRPopup);
provide('showUnavailablePopup', showUnavailablePopup)

</script>

<template>
  <main>
    <!-- Popup -->
    <PopupMessage :visible="popupVisible" :message="popupMessage" />
    <UnavailablePopup :visible="isUnavailablePopupVisible" title="Ooops!!" message="ขออภัย! ฟีเจอร์นี้ยังไม่พร้อมใช้งาน"
      @close="closeUnavailablePopup" />
    <PopupQRCode :visible="showQRPopup" @close="closeQRPopup" />
    <!-- Content -->
    <RouterView />
  </main>
</template>
