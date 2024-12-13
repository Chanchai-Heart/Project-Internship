<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { onMounted, ref, inject } from 'vue';

const route = useRoute();
const activeMenu = ref('')

// รับฟังก์ชัน showPopup จาก Provide => App.vue
const showPopup = inject('showPopup');
const showUnavailablePopup = inject('showUnavailablePopup');
const openQRPopup = inject('openQRPopup');

// ฟังก์ชันที่ใช้สำหรับแสดง Popup เมื่อคลิกปุ่ม
const handleContactUnavailable = () => {
    if (showUnavailablePopup) {
        showUnavailablePopup(); // เรียกให้แสดง Popup
    }
};

const handleCopyLink = () => {
    navigator.clipboard.writeText('https://youtu.be/dQw4w9WgXcQ?si=q3C2JmfeVa3914G8').then(() => {
        showPopup('✅ คัดลอกลิ้งค์สำเร็จ!'); // เรียก Popup
    });
};

onMounted(() => {
    activeMenu.value = route.name
})

const menus = [
    {
        name: 'หน้าหลัก',
        routeName: 'users-home',
        icon: 'https://cdn-icons-png.freepik.com/128/5620/5620100.png'
    },
    {
        name: 'โปรไฟล์',
        routeName: 'users-profile',
        icon: 'https://cdn-icons-png.freepik.com/256/1144/1144760.png?uid=R137210165&ga=GA1.1.873522104.1730518889&semt=ais_hybrid'
    },
    {
        name: 'รายได้',
        routeName: 'users-income',
        icon: 'https://cdn-icons-png.freepik.com/128/1228/1228340.png'
    },
    {
        name: 'ประวัติการเข้าใช้งาน',
        routeName: 'history-user',
        icon: 'https://cdn-icons-png.freepik.com/256/17937/17937300.png?uid=R137210165&ga=GA1.1.873522104.1730518889&semt=ais_hybrid'
    },
]

const wallet = [
    {
        name: 'เติมเงิน',
        routeName: 'users-topup',
        icon: 'https://cdn-icons-png.freepik.com/256/10109/10109377.png?uid=R137210165&ga=GA1.1.873522104.1730518889&semt=ais_hybrid'
    },
    {
        name: 'ประวัติการเติมเงิน',
        routeName: 'users-cashtrail',
        icon: 'https://cdn-icons-png.freepik.com/256/13691/13691267.png?uid=R137210165&ga=GA1.1.873522104.1730518889'
    },
]

const history = [
    {
        name: 'ประวัติการเติมเงินมือถือ',
        routeName: 'history-topup',
        icon: 'https://cdn-icons-png.freepik.com/256/13242/13242325.png?uid=R137210165&ga=GA1.1.873522104.1730518889'
    },
    {
        name: 'ประวัติการสั่งซื้อแอพพรีเมี่ยม',
        routeName: 'history-premium',
        icon: 'https://cdn-icons-png.freepik.com/256/11361/11361008.png?uid=R137210165&ga=GA1.1.873522104.1730518889&semt=ais_hybrid'
    },
    {
        name: 'ประวัติการสั่งเซอร์วิส',
        routeName: 'history-service',
        icon: 'https://cdn-icons-png.freepik.com/256/11502/11502120.png?uid=R137210165&ga=GA1.1.873522104.1730518889&semt=ais_hybrid'
    },
]

</script>

<template>
    <main>
        <!-- drawer -->
        <div class="container md:px-auto lg:px-auto">
            <div class="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <!-- Responsive navigation here -->
                    <div class="flex items-start w-full">
                        <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block h-6 w-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <!-- Page content here -->
                    <slot></slot>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <!-- Sidebar content here -->

                        <!--Tossagan  -->
                        <div class="flex justify-center items-center mb-4">
                            <div class="avatar">
                                <div class="w-28 rounded-full">
                                    <img src="../assets/img/TSG.png" />
                                </div>
                            </div>
                        </div>
                        <!-- User Data -->
                        <div class="flex justify-center items-center mb-4">
                            <div class="card bg-white shadow-xl w-full">
                                <div class="flex flex-col justify-center items-center p-6">
                                    <h1 class="text-lg text-black font-sarabun font-semibold">ชื่อผู้ใช้</h1>
                                    <h1 class="text-lg text-black font-sarabun font-semibold">รหัสสมาชิก:********</h1>
                                    <div class="text-xl text-black font-bold font-inter mt-4">฿0.00</div>
                                    <div class="text-lg text-black font-sarabun font-semibold">ยอดคงเหลือ</div>
                                </div>
                            </div>
                        </div>
                        <!-- Menu User -->
                        <div class="bg-white rounded-2xl p-2 mb-4">
                            <li v-for="menu in menus" :key="menu" class="my-1 font-sarabun font-semibold">
                                <div
                                    :class="menu.routeName == activeMenu ? 'bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] text-black' : 'text-black'">
                                    <img :src="menu.icon" alt="menu icon" class="w-5 h-5 mr-2" />
                                    <RouterLink :to="{ name: menu.routeName }">
                                        {{ menu.name }}
                                    </RouterLink>
                                </div>
                            </li>
                            <!-- menu 1 -->
                            <li>
                                <details>
                                    <summary
                                        class="text-black font-sarabun font-semibold active:bg-gradient-to-r from-[#FFF94A] to-[#F8CB07]">
                                        <img class="w-5 h-5 mr-2"
                                            src="https://cdn-icons-png.freepik.com/256/13690/13690965.png?uid=R137210165&ga=GA1.1.873522104.1730518889" />
                                        กระเป๋าเงินอิเล็กทรอนิกส์
                                    </summary>
                                    <ul>
                                        <li v-for="menu in wallet" :key="menu" class="font-sarabun font-semibold">
                                            <div
                                                :class="menu.routeName == activeMenu ? 'bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] text-black' : 'text-black'">
                                                <img :src="menu.icon" alt="menu icon" class="w-5 h-5 mr-2" />
                                                <RouterLink :to="{ name: menu.routeName }">
                                                    {{ menu.name }}
                                                </RouterLink>
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <!-- menu 2 -->
                            <li>
                                <details>
                                    <summary
                                        class="text-black font-sarabun font-semibold active:bg-gradient-to-r from-[#FFF94A] to-[#F8CB07]">
                                        <img src="https://cdn-icons-png.freepik.com/256/13691/13691267.png?uid=R137210165&ga=GA1.1.873522104.1730518889"
                                            class="w-5 h-5 mr-2">
                                        ประวัติการทำรายการเซอร์วิส
                                    </summary>
                                    <ul>
                                        <li v-for="menu in history" :key="menu" class="font-sarabun font-semibold">
                                            <div
                                                :class="menu.routeName == activeMenu ? 'bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] text-black' : 'text-black'">
                                                <img :src="menu.icon" alt="menu icon" class="w-5 h-5 mr-2" />
                                                <RouterLink :to="{ name: menu.routeName }">
                                                    {{ menu.name }}
                                                </RouterLink>
                                            </div>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </div>
                        <!-- End Menu -->

                        <!-- Footer -->
                        <div class="bg-white rounded-2xl p-2 font-sarabun font-semibold">
                            <li class="my-1"><button @click="handleCopyLink"
                                    class="text-black hover:bg-gradient-to-r from-[#FFF94A] to-[#F8CB07]">
                                    <img src="https://cdn-icons-png.freepik.com/256/659/659999.png?uid=R137210165&ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        class="w-5 h-5 mr-2">
                                    ลิ้งค์ผู้แนะนำ
                                </button>
                            </li>
                            <li class="my-1"><button @click="openQRPopup"
                                    class="text-black hover:bg-gradient-to-r from-[#FFF94A] to-[#F8CB07]">
                                    <img src="https://cdn-icons-png.freepik.com/256/12436/12436477.png?uid=R137210165&ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        class="w-5 h-5 mr-2">
                                    สแกน QR Code ผู้แนะนำ</button></li>
                            <li class="my-1"><button @click="handleContactUnavailable"
                                    class="text-black hover:bg-gradient-to-r from-[#FFF94A] to-[#F8CB07]">
                                    <img src="https://cdn-icons-png.freepik.com/256/1774/1774914.png?uid=R137210165&ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        class="w-5 h-5 mr-2">
                                    ติดต่อพนักงาน
                                </button>
                            </li>
                            <li class="my-1">
                                <RouterLink :to="{ name: 'home' }"
                                    class="text-red-500 hover:bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:text-white">
                                    <img src="https://cdn-icons-png.freepik.com/256/13410/13410213.png?uid=R137210165&ga=GA1.1.873522104.1730518889&semt=ais_hybrid"
                                        class="w-5 h-5 mr-2">
                                    ออกจากระบบ
                                </RouterLink>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <!-- end drawer -->
    </main>
</template>