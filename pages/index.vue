<script setup lang="ts">
import HeaderMain from "~/components/mainComponents/HeaderMain.vue";
import PromoMain from "~/components/mainComponents/PromoMain.vue";
import AboutSection from "~/components/mainComponents/AboutSection.vue";
import OurFriendsMain from "~/components/mainComponents/OurFriendsMain.vue";
import HelpShelterMain from "~/components/mainComponents/HelpShelterMain.vue";
import DonationSectionMain from "~/components/mainComponents/DonationSectionMain.vue";
import FooterMain from "~/components/mainComponents/FooterMain.vue";
</script>

<template>
     <div class="background_container" id="about">
       <span class="bg_shadow"></span>
        <HeaderMain/>
        <PromoMain/>
     </div>
        <AboutSection/>

        <OurFriendsMain/>

        <HelpShelterMain/>
        <DonationSectionMain/>
        <FooterMain/>
</template>

<style>
@import '../assets/styles/main.css';

</style>
