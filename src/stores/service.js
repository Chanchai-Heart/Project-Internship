import { defineStore } from "pinia";

export const useServiceStore = defineStore("service", {
  state: () => ({
    list: [
      {
        id: 1,
        image: "/public/service/ออกตั๋ว.png",
      },
      {
        id: 2,
        image: "/public/service/จองเบอร์มงคล.png",
      },
      {
        id: 3,
        image: "/public/service/ซื้อ-ซ่อมคอมพิวเตอร์.png",
      },
      {
        id: 4,
        image: "/public/service/ตรายาง.png",
      },
      {
        id: 5,
        image: "/public/service/ติดตั้งอินเตอร์เน็ต.png",
      },
      {
        id: 6,
        image: "/public/service/ถ่ายรูปติดบัตร.png",
      },
      {
        id: 7,
        image: "/public/service/บริการขนส่ง.png",
      },
      {
        id: 8,
        image: "/public/service/บริการจำหน่ายแอพพรีเมียม.png",
      },
      {
        id: 9,
        image: "/public/service/บริการตลาด.png",
      },
      {
        id: 10,
        image: "/public/service/บริการด้านบัญชี.png",
      },
      {
        id: 11,
        image: "/public/service/โรงแรม.png",
      },
      {
        id: 12,
        image: "/public/service/บริการฝาก-ถอน.png",
      },
      {
        id: 13,
        image: "/public/service/เคาน์เตอร์เซอร์วิส.png",
      },
      {
        id: 14,
        image: "/public/service/เติมเงินมือถือ.png",
      },
      {
        id: 15,
        image: "/public/service/บริการไอทีซัพพอร์ท.png",
      },
      {
        id: 16,
        image: "/public/service/พรบ-ภาษี.png",
      },
      {
        id: 17,
        image: "/public/service/ระบบขายสินค้า.png",
      },
      {
        id: 18,
        image: "/public/service/สถาปนิก-ออกแบบ.png",
      },
      {
        id: 19,
        image: "/public/service/สลากกินแบ่งรัฐบาล.png",
      },
      {
        id: 20,
        image: "/public/service/ออกแบบโปรแกรมและเว็บไซต์.png",
      },
      {
        id: 21,
        image: "/public/service/ออกแบบสื่อสิ่งพิมพ์.png",
      },
      {
        id: 22,
        image: "/public/service/ออมทอง.png",
      },
      {
        id: 23,
        image: "/public/service/บริการด้านอื่นๆ.png",
      },
    ],
  }),
});
