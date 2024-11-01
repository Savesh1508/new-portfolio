<template>
  <div  class="gap-5 flex flex-wrap">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="w-full md:w-[calc(100%/3-16px)]  relative"
    >
      <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="10"
        :pagination="{ clickable: true }"
        :centeredSlides="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide v-for="item in project" :key="item.id" class="h-full truncate">
          <img :src="item.img" class="w-full md:min-h-[420px] md:max-h-[420px] object-cover" alt="img">
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';

const props = defineProps({
  projects: Array,
});

</script>
<style scoped></style>