<script setup>
import UserLayout from '@/layouts/UserLayout.vue';

const historyData = [
    {
        name: 'ชื่อผู้ใช้งาน',
        date: (new Date()).toLocaleDateString(),
        time: (new Date()).toLocaleTimeString(),
        ip: 'รหัสการเข้าผู้ใช้งาน',
    },
    {
        name: 'ชื่อผู้ใช้งาน',
        date: (new Date()).toLocaleDateString(),
        time: (new Date()).toLocaleTimeString(),
        ip: 'รหัสการเข้าผู้ใช้งาน',
    },
]

</script>

<template>
    <UserLayout>
        <div class="container md:px-auto lg:px-auto">
            <div class=" bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen">
                <!-- header -->
                <div class="flex flex-col items-center py-8">
                    <span class="text-3xl font-noto font-bold text-black text-shadow-lg">ประวัติการเข้าใช้งาน</span>
                </div>
                <!-- history User -->
                <div class="overflow-x-auto bg-black m-8 rounded-xl mb-4" style="max-height: 400px; overflow-y:auto;">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th class="border-zinc-700 border-b">ผู้ใช้งาน</th>
                                <th class="border-zinc-700 border-b">วันที่</th>
                                <th class="border-zinc-700 border-b">เวลา</th>
                                <th class="border-zinc-700 border-b">รหัสผู้ใช้งาน</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- row 1 -->
                            <tr v-for="user in historyData" :key="user" class="text-sm text-white ">
                                <td>{{ user.name }}</td>
                                <td>{{ user.date }}</td>
                                <td>{{ user.time }}</td>
                                <td>{{ user.ip }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </UserLayout>
</template>