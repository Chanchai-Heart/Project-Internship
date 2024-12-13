import { defineStore } from "pinia";

export const useAnotherServiceStore = defineStore("anotherservice", {
  state: () => ({
    list: [
        {
            id: 1,
            image: "/public/service/anotherservice/1.png",
        },
        {
            id: 2,
            image: "/public/service/anotherservice/2.png",
        },
        {
            id: 3,
            image: "/public/service/anotherservice/3.png",
        },
        {
            id: 4,
            image: "/public/service/anotherservice/4.png",
        },
        {
            id: 5,
            image: "/public/service/anotherservice/5.png",
        },
        {
            id: 6,
            image: "/public/service/anotherservice/6.png",
        },
    ],
  }),
});