<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { ref } from 'vue';

const fileInput = ref(null); // อัปโหลดไฟล์
const uploadedImage = ref(null); // เก็บข้อมูลภาพที่อัปโหลด
const accountNumber = "816-2-83295-1";
const showCopiedMessage = ref(false);

// ฟังก์ชันสำหรับเรียก input file
function triggerFileInput() {
    fileInput.value.click();
}

// ฟังก์ชันจัดการเมื่อมีการอัปโหลดไฟล์
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        uploadedImage.value = URL.createObjectURL(file);
    }
}
// ฟังก์ชันคัดลอกหมายเลขบัญชี
function copyAccountNumber() {
    navigator.clipboard.writeText(accountNumber).then(() => {
        // แสดงข้อความแจ้งเตือนเมื่อคัดลอกสำเร็จ
        showCopiedMessage.value = true;

        // ซ่อนข้อความหลังจาก 2 วินาที
        setTimeout(() => {
            showCopiedMessage.value = false;
        }, 2000);
    });
}

</script>

<template>
    <UserLayout>
        <div class="container md:px-auto lg:px-auto">
            <div class="bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen">
                <!-- header -->
                <div class="flex flex-col items-center py-8">
                    <span
                        class="text-3xl font-noto font-bold text-black text-shadow-lg">เติมเงินกระเป๋าอิเล็กทรอนิกส์</span>
                </div>
                <!-- บาร์แจ้งเตือน 1 -->
                <div class="m-4">
                    <div role="alert" class="alert alert-info bg-gradient-to-l from-[#64B5F6] to-[#B3E5FC] shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="h-6 w-6 shrink-0 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div class="font-sarabun">
                            <span class="font-bold">เวลาทำการ :</span>
                            <span> เวลาทำการตรวจสอบแจ้งเติมเงิน ทุกวัน เวลา 9.00 น. ถึง 18.00 น.
                                หากนอกเวลาทำการจะทำการตรวจสอบในเวลาทำการของวันถัดไป</span>
                        </div>
                    </div>
                </div>
                <!-- บาร์แจ้งเตือน 2 -->
                <div class="m-4">
                    <div role="alert"
                        class="alert alert-warning bg-gradient-to-l from-[#FFF94A] to-[#FFECB3] shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div class="font-sarabun">
                            <span class="font-bold">สำคัญ :</span>
                            <span> ยอดเงินขั้นต่ำในการโอนอย่างน้อย 100 บาท ขึ้นไป หากโอนยอดผิดหรือน้อยกว่านี้
                                กระบวนการตรวจสอบอาจใช้เวลานาน หรือรายการจะถูกยกเลิกทันที</span>
                        </div>
                    </div>
                </div>
                <!-- ขั้นตอนการเติมเงิน -->
                <div class="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 m-4 gap-4">
                    <!-- box 1 -->
                    <div class="card bg-white w-full h-96 shadow-xl">
                        <div class="bg-black w-full h-12 flex justify-center items-center rounded-t-xl">
                            <span>STEP 1 : โอนเงินเข้าบัญชีบริษัท</span>
                        </div>
                        <figure class="px-12 pt-12 lg:pt-0 xl:pt-10 xl:px-4">
                            <img src="../../../assets/img/Tsg-topup.png" class="rounded-xl" />
                        </figure>
                        <div class="card-actions justify-center mt-4 lg:mt-0 xl:mt-4">
                            <button @click="copyAccountNumber"
                                class="btn bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] border-none text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
                                <div class="flex flex-row items-center">
                                    <div class="h-4 w-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path
                                                d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
                                        </svg></div>
                                    <span class="ml-2">คัดลอกหมายเลขบัญชี</span>
                                </div>
                            </button>
                        </div>
                        <!-- แจ้งเตือนว่าคัดลอกสำเร็จ -->
                        <div v-if="showCopiedMessage" class="flex justify-center text-green-600 mt-2">
                            <div class="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>คัดลอกหมายเลขบัญชีแล้ว!</span>
                            </div>
                        </div>
                    </div>
                    <!-- box 2 -->
                    <div class="card bg-white w-full h-96 shadow-xl">
                        <div class="bg-black w-full h-12 flex justify-center items-center rounded-t-xl">
                            <span>STEP 2 : กรอกจำนวนเงิน และ แนบหลักฐานการโอน</span>
                        </div>
                        <div class="p-4">
                            <label class="form-control">
                                <div class="label">
                                    <span class="label-text text-black text-md font-semibold">กรอกจำนวนเงิน</span>
                                </div>
                                <input type="text" placeholder="Specify the amount"
                                    class="input input-bordered w-full bg-black border-none text-sm" />
                                <div class="label">
                                </div>
                            </label>
                        </div>
                        <div class="flex justify-center">
                            <!-- ปุ่มสำหรับกดแนบไฟล์ -->
                            <button @click="triggerFileInput()"
                                class="btn bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] border-none text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
                                {{ uploadedImage ? 'เปลี่ยนรูปภาพ' : '+ แนบหลักฐานการโอน' }}
                            </button>
                            <input ref="fileInput" type="file" class="hidden" @change="handleFileUpload" />
                        </div>
                        <!-- แสดงภาพที่อัปโหลด -->
                        <div v-if="uploadedImage" class="flex justify-center mt-4 w-full">
                            <img :src="uploadedImage" alt="Uploaded proof" class=" rounded-lg h-32" />
                        </div>
                    </div>
                    <!-- box 3 -->
                    <div class="card bg-white w-full h-96 shadow-xl">
                        <div class="bg-black w-full h-12 flex justify-center items-center rounded-t-xl">
                            <span>STEP 3 : ยอมรับเงื่อนไขและสัญญา</span>
                        </div>
                        <div class="p-8">
                            <div class="form-control mt-4">
                                <label class="label cursor-pointer justify-center">
                                    <input type="checkbox" class="checkbox checkbox-primary" />
                                </label>
                            </div>
                            <div class="flex justify-center">
                                <span class="text-black">ยอมรับเงื่อนไขการและข้อความแจ้งเตือนข้างต้น</span>
                            </div>
                            <div class="flex justify-center mt-4">
                                <button
                                    class="btn bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] border-none text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
                                    <div class="flex flex-row items-center">
                                        <div class="h-4 w-4"><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path
                                                    d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                                            </svg></div>
                                        <span class="ml-2">ยืนยันการโอนเงิน</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UserLayout>
</template>