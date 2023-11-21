<template>
  <Swiper
      :modules="[Navigation]"
      :slidesPerView="3"
      :spaceBetween="90"
      :navigation="true"
      :pagination="true"
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
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const props = defineProps(['petsInfo'])
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
</style>
