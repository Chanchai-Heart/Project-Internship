<script setup>
import { defineProps, defineEmits } from "vue";

// รับ Props
defineProps({
    visible: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "Ooops!!",
    },
    message: {
        type: String,
        default: "ขออภัย! ฟีเจอร์นี้ยังไม่พร้อมใช้งาน",
    },
});

// ส่ง Event เมื่อปิด Popup
const emit = defineEmits(["close"]);
const closePopup = () => {
    emit("close");
};
</script>

<template>
    <transition name="fade">
        <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="bg-white rounded-2xl w-80 p-6 text-center shadow-xl">
                <!-- Icon -->
                <div class="flex justify-center items-center bg-red-100 rounded-full w-20 h-20 mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
                        stroke="currentColor" class="w-10 h-10 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <!-- Title -->
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ title }}</h2>
                <!-- Description -->
                <p class="text-gray-600 text-sm mb-4">{{ message }}</p>
                <!-- Button -->
                <button @click="closePopup"
                    class="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition">
                    close
                </button>
            </div>
        </div>
    </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    @apply transition-opacity duration-300 ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}
</style>