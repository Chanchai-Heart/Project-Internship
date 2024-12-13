<script setup>
import UserLayout from '@/layouts/UserLayout.vue';

import { useMainServiceStore } from '@/stores/user/mainservice';
import { useAnotherServiceStore } from '@/stores/user/anotherservice';
import { useProfessionStore } from '@/stores/user/professionservice';

const anotherService = useAnotherServiceStore();
const mainService = useMainServiceStore();
const professionService = useProfessionStore();

</script>

<template>
    <UserLayout>
        <!-- main -->
        <div class="container lg:px-auto">
            <div class="bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen">
                <div>
                    <img class="p-12" src="@/assets/img/serviceTSG.jpg">
                </div>
                <!-- service 1 -->
                <div class="flex justify-center items-center w-full">
                    <h1 class="text-black font-noto text-3xl font-bold mb-4 text-shadow-lg">บริการหลัก</h1>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mx-8">
                    <div v-for="mainservice in mainService.list" :key="mainservice"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 mb-8">
                        <a class="flex justify-center">
                            <img class="w-full" :src="mainservice.image" />
                        </a>
                    </div>
                </div>
                <!-- service 2 -->
                <div class="flex justify-center items-center w-full">
                    <h1 class="text-black font-noto text-3xl font-bold mb-4 text-shadow-lg">บริการอื่นๆ</h1>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mx-8">
                    <div v-for="another in anotherService.list" :key="another"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 mb-8">
                        <a class="flex justify-center">
                            <img class="w-full" :src="another.image" />
                        </a>
                    </div>
                </div>
                <!-- service 3 -->
                <div class="flex justify-center items-center w-full">
                    <h1 class="text-black font-noto text-3xl font-bold mb-4 text-shadow-lg">บริการด้านวิชาชีพ</h1>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mx-8">
                    <div v-for="profession in professionService.list" :key="profession"
                        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 mb-8">
                        <a class="flex justify-center">
                            <img class="w-full" :src="profession.image" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </UserLayout>
</template>
