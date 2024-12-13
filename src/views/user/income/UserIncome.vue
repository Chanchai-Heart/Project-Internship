<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { ref } from 'vue';

const historyUsers = ref([
    {
        id: 1,
        service: "Express",
        commission: "0.15 ฿",
        bill: "TSP2451128634",
        point: "15 point",
        date: (new Date()).toLocaleDateString(),
    },
    {
        id: 2,
        service: "Express",
        commission: "0.15 ฿",
        bill: "TSP2451128634",
        point: "15 point",
        date: (new Date()).toLocaleDateString(),
    },
    {
        id: 3,
        service: "Express",
        commission: "0.15 ฿",
        bill: "TSP2451128634",
        point: "15 point",
        date: (new Date()).toLocaleDateString(),
    },
    {
        id: 4,
        service: "Express",
        commission: "0.15 ฿",
        bill: "TSP2451128634",
        point: "15 point",
        date: (new Date()).toLocaleDateString(),
    },
])

</script>

<template>
    <UserLayout>
        <div class="container md:px-auto lg:px-auto">
            <div class="bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen">
                <div class="flex flex-col items-center py-8">
                    <span class="text-3xl font-noto font-bold text-black text-shadow-lg">รายได้ (Commission)</span>
                </div>
                <!-- Commission -->
                <div class="grid grid-cols-1 gap-5 mx-8 lg:grid-cols-2 xl:grid-cols-3">
                    <div class="stat bg-black shadow-xl rounded-xl">
                        <div class="stat-title">รายได้สะสม</div>
                        <div class="stat-value">฿89,400</div>
                        <div class="stat-actions">
                            <button
                                class=" text-black btn bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">ถอนรายได้</button>
                        </div>
                    </div>
                    <div class="stat bg-black shadow-xl rounded-xl">
                        <div class="stat-title">All Sale</div>
                        <div class="stat-value mb-4">฿10,000/30,000</div>
                        <progress class="progress progress-warning w-56" value="40" max="100"></progress>
                    </div>
                    <div class="stat bg-black shadow-xl rounded-xl">
                        <div class="stat-title">Happy Point</div>
                        <div class="flex justify-between">
                            <div class="stat-value">2,400</div>
                            <span class="flex items-center font-noto font-bold">Point</span>
                        </div>
                        <div class="stat-actions">
                            <button
                                class="text-black btn bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
                                แลกเปลี่ยน Happy Point</button>
                        </div>
                    </div>
                </div>
                <!-- End Commission -->

                <!-- History From -->
                <div class="overflow-x-auto bg-black m-8 rounded-xl mb-4" style="max-height: 400px; overflow-y: auto;">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th class="border-zinc-700 border-b">ลำดับที่</th>
                                <th class="border-zinc-700 border-b">บริการ</th>
                                <th class="border-zinc-700 border-b">ใบเสร็จเลขที่</th>
                                <th class="border-zinc-700 border-b">วันทีทำการ</th>
                                <th class="border-zinc-700 border-b">Happy Point</th>
                                <th class="border-zinc-700 border-b">ค่า Commission</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- row 1 -->
                            <tr v-for="history in historyUsers" :key="history">
                                <th>{{ history.id }}</th>
                                <td>{{ history.service }}</td>
                                <td>{{ history.bill }}</td>
                                <td>{{ history.date }}</td>
                                <td>{{ history.point }}</td>
                                <td>{{ history.commission }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </UserLayout>
</template>