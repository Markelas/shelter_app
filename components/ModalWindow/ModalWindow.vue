<template>
  <div class="popup">
    <div class="popup__body">
      <div class="popup__content">
        <button class="popup__button close-pet-info" @click="$emit('closeModal')">&#215;</button>
        <img class="popup__img" :src="activeCard.img" :alt="activeCard.name">
        <div class="popup__data">
          <h3 class="popup__name">{{activeCard.name}}</h3>
          <h4 class="popup__type">{{activeCard.type}} - {{activeCard.breed}}</h4>
          <p class="popup__description">
            {{activeCard.description}}
          </p>
          <ul class="popup__additional">
            <li><b>Age:</b> <span>{{activeCard.age}}</span></li>
            <li><b>Inoculations:</b> <span v-for="inoculations in activeCard.inoculations">{{inoculations}}</span></li>
            <li><b>Diseases:</b> <span v-for="diseases in activeCard.diseases" >{{diseases}}</span></li>
            <li><b>Parasites:</b> <span v-for="parasites in activeCard.diseases" >{{parasites}}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['isOpenModal', 'activeCard'])

</script>
