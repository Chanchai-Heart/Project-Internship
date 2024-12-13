<script setup>
import { defineProps, defineEmits } from 'vue';

// Props
defineProps({
    visible: Boolean, // ควบคุมการแสดงผล Popup
});

// Event สำหรับการปิด Popup
const emit = defineEmits(['close']); // รับ Event close

</script>


<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div class="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <!-- Header -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold text-gray-800">Scan QR Code</h2>
                <button @click="$emit('close')" class="text-gray-500 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- QR Code Section -->
            <div class="flex flex-col items-center">
                <img src="../../../assets/img/qrcode.png" alt="QR Code" class="mb-4 w-40 h-40" />
                <p class="text-gray-600 text-sm mb-4 font-sarabun font-bold">แชร์ QR Code นี้กับเพื่อน</p>               
            </div>
        </div>
    </div>
</template>