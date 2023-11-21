<script lang="ts">
import {useShelterStore} from "~/stores/store";
import SwiperPets from "~/components/mainComponents/SwiperPets.vue";
export default defineComponent({
  components: {SwiperPets},
  setup() {
    const shelterStore = useShelterStore();
    onMounted(async () => {
      await useShelterStore().getPetsInfo()
    })
    return {
      shelterStore
    }
  },
  data(){
    return{
      isOpenModal:false,
      activeCard: {}
    }
  },
  methods: {
    toggleModal(item: any) {
      console.log(item, this.isOpenModal)
      this.isOpenModal = !this.isOpenModal
      if (this.isOpenModal) {
        this.activeCard = item
      }
    }
  }

})

</script>

<template>
  <section class="ourfriends" id="ourpets">
    <div class="wrapper">
      <h3 class="page_title ourfriends_title">
        Our friends who<br>are looking for a house
      </h3>
      <SwiperPets :pets-info="shelterStore.petsInfo" @open-modal-window="toggleModal"/>
      <div class="ourfriends_btn_container"><a href="https://rolling-scopes-school.github.io/markelas-JSFE2022Q1/shelter/pages/pets/index.html" class=""><button class="ourfriends_button">Get to know the rest</button></a></div>
      <ModalWindow v-if="isOpenModal" :is-open-modal="isOpenModal" :active-card="activeCard" :close-modal-window="toggleModal"/>
    </div>
  </section>
</template>

<style scoped>

</style>
