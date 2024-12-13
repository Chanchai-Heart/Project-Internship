<script setup>
import AOS from 'aos';

AOS.init({
    duration: 1000, // ระยะเวลา 1 วินาที
    // once: true,     // ทำงานครั้งเดียวเมื่อเลื่อนถึง
});


</script>

<template>
    <main>
        <MainLayout>
            <div class="container md:px-auto lg:px-auto">
                <div class="hero bg-gradient-to-r from-[#FFF94A] to-[#F8CB07] min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left" data-aos="fade-down">
                            <div class="text-6xl font-bold text-black font-noto">เกี่ยวกับเรา</div>
                            <p class="py-6 text-black text-justify font-sarabun text-xl">
                                One Stop Shop & Service (Digital System to Grocery Store) เรามุ่งมั่น สร้างสรรค์
                                และพัฒนา นำระบบ Digital มาช่วยเหลือร้านค้าโชห่วยธรรมดาชุมชน
                                ปรับเปลี่ยนให้เป็นร้านค้าทันต่อยุคสมัย ตอบโจทย์ผู้บริโภค
                                ในยุคปัจจุบันทั้งสินค้าและบริการที่หลากหลาย ตลอดจนอำนวยความสะดวกให้ร้านค้าชุมชน ขนาดเล็ก
                                กลาง ใหญ่

                                ที่ครอบคลุม ครบ จบ ในจุดเดียวเรามีทีมงานการวางแผนครอบคลุมเรื่องของการลงทุน การตลาด
                                โปรแกรมSofware ที่ครบครันเรื่องของโปรโมชั่นและ บริการหลังการขายโดย Tossagun One Stop
                                Shop พร้อมเป็นเครื่องมืออันทรงพลัง สร้างเงิน สร้างงาน สาน ต่ออาชีพ ประสบการณ์กว่า 5
                                ปีที่ผ่านมาเรามีร้านค้าบริการครบวงจรเรามั่นใจจะสามารถช่วยเหลือชุมชนและเปิดบริการ
                                ร้านค้าบริการภายใต้ TOSSAGUN One Stop Shop & Service
                                นอกจากร้านค้าจะได้เงินส่วนแบ่งของการตลาดแล้วนั้น
                                ลูกค้าเองทำการซื้อสินค้าหรือบริการกับร้านค้า หากสมัครเป็นสมาชิก TOSSAGUN Platfrom
                                จะได้เงินคืนพร้อมสิทธิประโยชน์มากมาย อาธิ คะแนนสะสม Happy Point , All Sale เพียงคุณ
                                เลือกเรา เชื่อมั่น เชื่อถือ เชื่อใจ ก้าวไปกับเรา Tossagun One Stop Shop
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    </main>
</template>


<style></style>