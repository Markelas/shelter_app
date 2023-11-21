import { defineStore } from 'pinia'
export const useShelterStore = defineStore("shelterStore",  {
    state: () => ({
        petsInfo: {},
        isPending: true,
    }),
    getters: {

    },
    actions: {
        async getPetsInfo() {
            const {data: info} = await $fetch('/api/infoCards')
            this.petsInfo = info
            return info
        }
    }
})
