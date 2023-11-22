<template>
  <Swiper
      :modules="[Navigation, FreeMode]"
      :slidesPerView="3"
      :spaceBetween="10"
      :navigation="true"
      :freeMode="true"
      :breakpoints="swiperOptions.breakpoints"
      class="mySwiper"
  >
    <SwiperSlide v-for="slide in petsInfo" :key="slide.id">
      <div class="ourfriends_card">
        <div class="ourfriends__card_img"><img :src="slide.img" :alt="slide.name" class=""></div>
        <div class="ourfriends__card_names">{{slide.name}}</div>
        <button class="ourfriends__card_btn" @click="$emit('openModalWindow', slide)">Learn more</button>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';
const props = defineProps(['petsInfo'])
const swiperOptions = {
  breakpoints: {
    1: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 5
    },

    920: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
}
</script>

<style>
.swiper-button-prev{
  color: #F1CDB3;
}
.swiper-button-next{
  color: #F1CDB3;
}
.mySwiper{
  max-width: 1000px;
  margin-top: 40px;
}

@media (max-width: 650px) {
  .swiper-slide-active{
    margin-left: 150px;
  }
}
@media (max-width: 550px) {
  .swiper-slide-active{
    margin-left: 20%;
  }
}

</style>
