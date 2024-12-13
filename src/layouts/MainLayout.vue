<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <main>
        <!-- Navbar -->
        <div class="container md:px-auto lg:px-auto">
            <div class="navbar bg-base-200 shadow-lg flex-wrap md:flex-nowrap lg:justify-between justify-center">
                <div>
                    <a class="hidden md:block" href="">
                        <img class="h-12 w-12 md:h-12 md:w-12" src="../assets/img/TSG.png" alt=""></a>
                    <a
                        class="font-bold text-base md:text-xl ml-2 md:ml-4 font-inter bg-gradient-to-r from-base-content via-#FFF94A to-[#F8CB07] bg-clip-text text-transparent">TOSSAGAN
                        ONE STOP SHOP & SERVICE</a>
                </div>
                <div class="flex flex-row md:flex-row items-center mt-4 md:mt-0 ">
                    <RouterLink to="/users-home"
                        class="md:ml-2 btn bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] text-black font-noto w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">เข้าสู่ระบบ</RouterLink>
                    <a
                        class="ml-2 md:ml-2 btn bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] text-black font-noto w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">สมัครเป็นพาร์ทเนอร์</a>
                </div>
            </div>

        </div>

        <slot></slot>

        <!-- Footer -->
        <div class="container lg:w-auto">
            <footer class="footer footer-center bg-base-200 text-base-content rounded p-10">
                <div class="hidden md:block">
                    <nav class="grid grid-flow-col gap-4 ">
                        <a class="link link-hover">ข้อกำหนดเเละการใช้งานเว็บไซต์</a>
                        <a class="link link-hover">นโยบายความเป็นส่วนตัว</a>
                        <a class="link link-hover">นโยบายคุกกี้</a>
                        <a class="link link-hover">นโยบายการนำข้อมูลออกจากระบบ</a>
                        <a class="link link-hover">ข้อตกลงการให้บริการ</a>
                    </nav>
                </div>
                <nav>
                    <div class="grid grid-flow-col gap-4">
                        <a href="">
                            <img class="h-28 w-28" src="../assets/img/TSG.png" alt="">
                        </a>
                    </div>
                    <h1
                        class="font-bold text-xl font-inter bg-gradient-to-r from-base-content via-#FFF94A to-[#F8CB07] bg-clip-text text-transparent">
                        TOSSAGAN ONE STOP SHOP & SERVICE</h1>
                </nav>
                <aside>
                    <p>© Copyright 2024. บริษัท ทศกัณฐ์ ดิจิตอล นิว เจเนเรชั่น จำกัด.</p>
                </aside>
            </footer>
        </div>
    </main>
</template>


<style></style>