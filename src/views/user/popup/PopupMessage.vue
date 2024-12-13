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
        default: "Woo hoo!!",
    },
    message: {
        type: String,
        default: "successfully!",
    },
});

</script>

<template>
    <transition name="fade">
        <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="bg-white rounded-2xl w-80 p-6 text-center shadow-xl">
                <!-- Icon -->
                <div class="flex justify-center items-center bg-green-100 rounded-full w-24 h-24 mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-12 h-12 text-green-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <!-- Title -->
                <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ title }}</h2>
                <!-- Description -->
                <p class="text-gray-600 text-sm mb-4">{{ message }}</p>
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