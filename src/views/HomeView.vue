<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/Service.vue'
import AOS from 'aos';

import { useServiceStore } from '@/stores/service';
import { onMounted } from 'vue';

onMounted(() => {
  AOS.init({
    duration: 1000, // ระยะเวลา 1 วินาที
    // once: true,     // ทำงานครั้งเดียวเมื่อเลื่อนถึง
  });
});

const serviceStore = useServiceStore();

</script>

<template>
  <main>
    <MainLayout>
      <!-- Hero -->
      <div class="container md:px-auto lg:px-auto">
        <div class="hero bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen">
          <div data-aos="fade-down" class="hero-content text-center">
            <div class="max-w-md">
              <div class="flex justify-center mb-2">
                <img class="h-48 w-48" src="../assets/img/TSG.png" alt="">
              </div>
              <h1 class="text-black font-inter text-4xl font-bold bg-clip-text bg-gradient-to-r from-black via-[#F8CB07] to-black animate-gradient-limited bg-[length:200%_200%]">TOSSAGAN ONE STOP SHOP & SERVICE</h1>
              <p class="py-6 text-black font-noto font-medium text-3xl">
                ร้านเดียว สินค้าครบ จบทุกบริการ
              </p>
              <p class=" text-black font-medium text-3xl font-inter">
                Digital System To Grocery Store
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- End Hero -->

      <AboutView></AboutView>

      <ServiceView :services="serviceStore.list"></ServiceView>

    </MainLayout>
  </main>
</template>
