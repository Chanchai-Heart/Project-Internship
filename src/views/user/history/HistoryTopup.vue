<script setup>
import UserLayout from '@/layouts/UserLayout.vue';

</script>

<template>
    <UserLayout>
        <div class="container md:px-auto lg:px-auto">
            <div class="bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen">
                <!-- header -->
                <div class="flex flex-col items-center py-8">
                    <span class="text-3xl font-noto font-bold text-black text-shadow-lg">ประวัติการเติมเงินมือถือ</span>
                </div>
                <!-- history User -->
                <div class="overflow-x-auto bg-black m-8 rounded-xl mb-4" style="max-height: 400px; overflow-y:auto;">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th class="border-zinc-700 border-b">เลขที่ใบเสร็จ</th>
                                <th class="border-zinc-700 border-b">เลขที่ใบสั่งซื้อ</th>
                                <th class="border-zinc-700 border-b">ยอดรวม(บาท)</th>
                                <th class="border-zinc-700 border-b">การชำระเงิน</th>
                                <th class="border-zinc-700 border-b">เจ้าหน้าที่</th>
                                <th class="border-zinc-700 border-b">วันที่ทำรายการ</th>
                                <th class="border-zinc-700 border-b">ตัวเลือก</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- row 1 -->
                            <tr class="text-sm text-white ">
                                <td>No available options</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </UserLayout>
</template>