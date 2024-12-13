import { defineStore } from "pinia";

export const useProfessionStore = defineStore("profession", {
  state: () => ({
    list: [
        {
            id: 1,
            image: "/public/service/professionservice/1.png",
        },
        {
            id: 2,
            image: "/public/service/professionservice/2.png",
        },
        {
            id: 3,
            image: "/public/service/professionservice/3.png",
        },
        {
            id: 4,
            image: "/public/service/professionservice/4.png",
        },
        {
            id: 5,
            image: "/public/service/professionservice/5.png",
        },
        {
            id: 6,
            image: "/public/service/professionservice/6.png",
        },
    ],
  }),
});