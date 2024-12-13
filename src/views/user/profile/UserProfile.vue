<script setup>
import UserLayout from '@/layouts/UserLayout.vue';

const formData = [
    {
        name: 'ชื่อ',
        field: 'firstname',
    },
    {
        name: 'นามสกุล',
        field: 'lastname',
    },
    {
        name: 'Card Number',
        field: 'cardNumber',
    },
    {
        name: 'เบอร์โทรศัพท์',
        field: 'phone number',
    },
]

const formPassword = [
    {
        name: 'รหัสผ่าน',
        field: 'รหัสผ่านใหม่',
    },
    {
        name: 'ยืนยันรหัสผ่าน',
        field: 'ยืนยันรหัสผ่าน',
    },
]

</script>

<template>
    <UserLayout>
        <div class="container md:px-auto lg:px-auto">
            <div class="hero bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen p-3">
                <div class=" bg-black shadow-xl h-full w-full rounded-xl p-10">
                    <div class="flex justify-center items-center">
                        <img class="w-32 mb-4" src="/src/assets/img/TSG-profile.png">
                    </div>
                    <!-- form 1 -->
                    <div class="grid grid-cols-2 gap-2">
                        <label v-for="form in formData" :key="form" class="form-control w-full">
                            <div class="label">
                                <span class="label-text">{{ form.name }}</span>
                            </div>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                            <div class="label">
                            </div>
                        </label>
                    </div>
                    <div class="divider"></div>
                    <!-- form 2 -->
                    <div class="grid grid-cols-2 gap-2">
                        <label v-for="pass in formPassword" :key="pass" class="form-control w-full">
                            <div class="label">
                                <span class="label-text">{{ pass.name }}</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                    class="h-4 w-4 opacity-70">
                                    <path fill-rule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input type="password" class="grow" value="password" />
                            </label>
                        </label>
                    </div>
                    <div class="divider"></div>
                    <div class="flex justify-center items-center">
                        <button
                            class="w-1/2 lg:w-1/5 text-black btn bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">บันทึก</button>
                    </div>
                </div>
            </div>
        </div>
    </UserLayout>
</template>