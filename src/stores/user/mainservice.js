import { defineStore } from "pinia";

export const useMainServiceStore = defineStore("mainservice", {
  state: () => ({
    list: [
      {
        id: 1,
        image: "/public/service/mainservice/1.png",
      },
      {
        id: 2,
        image: "/public/service/mainservice/2.png",
      },
      {
        id: 3,
        image: "/public/service/mainservice/3.png",
      },
      {
        id: 4,
        image: "/public/service/mainservice/4.png",
      },
      {
        id: 5,
        image: "/public/service/mainservice/5.png",
      },
      {
        id: 6,
        image: "/public/service/mainservice/6.png",
      },
      {
        id: 7,
        image: "/public/service/mainservice/7.png",
      },
      {
        id: 8,
        image: "/public/service/mainservice/8.png",
      },
      {
        id: 9,
        image: "/public/service/mainservice/9.png",
      },
      {
        id: 10,
        image: "/public/service/mainservice/10.png",
      },
      {
        id: 11,
        image: "/public/service/mainservice/11.png",
      },
      {
        id: 12,
        image: "/public/service/mainservice/12.png",
      },
    ],
  }),
});
