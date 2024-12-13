<script setup>
import AOS from 'aos';
import { defineProps, onMounted } from 'vue';

onMounted(() => {
    AOS.init({
    duration: 1000, // ระยะเวลา 1 วินาที
    // once: true,     // ทำงานครั้งเดียวเมื่อเลื่อนถึง
});
})

defineProps({
    services: Array
})

</script>

<template>
    <main>
        <MainLayout>
            <div class="container md:px-auto lg:px-auto">
                <div class="bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen">
                    <div class="flex justify-center items-center w-full pt-6">
                       <p class="text-5xl font-bold text-black font-noto" data-aos="fade-down">
                        บริการของเรา
                       </p> 
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 m-10">
                        <div v-for="service in services" :key="service" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
                            <a class="flex justify-center" href="">
                                <img class="w-full" :src="service.image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    </main>
</template>
