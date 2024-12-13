<script setup>
import UserLayout from '@/layouts/UserLayout.vue';

const testData = [
    {
        date: (new Date()).toLocaleDateString(),
        time: (new Date()).toLocaleTimeString(),
    },
    {
        date: (new Date()).toLocaleDateString(),
        time: (new Date()).toLocaleTimeString(),
    },
    {
        date: (new Date()).toLocaleDateString(),
        time: (new Date()).toLocaleTimeString(),
    },
]

</script>

<template>
    <UserLayout>
        <div class="container md:px-auto lg:px-auto">
            <div class="bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen">
                <!-- header -->
                <div class="flex flex-col items-center py-8">
                    <span class="text-3xl font-noto font-bold text-black text-shadow-lg">ประวัติการเติมเงิน</span>
                </div>
                <!-- history Topup -->
                <div class="overflow-x-auto bg-black m-8 rounded-xl mb-4" style="max-height: 400px; overflow-y:auto;">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th class="border-zinc-700 border-b">เลขที่ทำรายการ</th>
                                <th class="border-zinc-700 border-b">วันที่</th>
                                <th class="border-zinc-700 border-b">เวลา</th>
                                <th class="border-zinc-700 border-b">จำนวน</th>
                                <th class="border-zinc-700 border-b">ค่าธรรมเนียม</th>
                                <th class="border-zinc-700 border-b">หลักฐานการโอน</th>
                                <th class="border-zinc-700 border-b">สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- row 1 -->
                            <tr v-for="form in testData" :key="form" class="text-sm text-white ">
                                <td>**********</td>
                                <td>{{ form.date }}</td>
                                <td>{{ form.time }}</td>
                                <td>200</td>
                                <td>0</td>
                                <td>***</td>
                                <td>สำเร็จ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </UserLayout>
</template>