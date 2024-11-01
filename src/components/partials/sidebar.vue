<template>
  <aside
    class="main absolute top-0 z-30 bg-[#131313] shadow-2xl shadow-[#000000] lg:shadow-none lg:static left-aside w-full sm:w-[350px] lg:w-[25%] h-screen overflow-y-scroll py-[50px] px-6 2xl:px-10 duration-500"
    :class="sidebarStore.visible ? 'left-0':'-left-full'"
  >
    <div class="w-full pb-6 mb-6 border-b-[1px] border-[#383838]">
      <img src="@/assets/img/myphoto.jpg" alt="Photo" class="w-[65%] mx-auto mb-[32px] rounded-[50%]">
      <h3 class="text-[22px] mb-3 font-semibold text-white text-center">Daler Bahodirov</h3>
      <p class="text-white text-[16px] text-center opacity-80 font-medium">Graphic Designer</p>
      <p class="text-white mb-4 text-[16px] text-center opacity-80 font-medium">SMM Marketolog</p>
      <div class="flex justify-center">
        <a v-for="contact in contacts" :key="contact.id" :href="contact.link"
          class="hover:bg-white transition-all duration-200 mx-[3px] 2xl:mx-[6px] bg-[#FFB400] w-[32px] h-[32px] rounded-[50%] flex justify-center items-center">
          <i :class="contact.icon" class="text-[20px] text-[#131313]"></i>
        </a>
      </div>
    </div>

    <ul class="w-full pb-6 mb-6 border-b-[1px] border-[#383838]">
      <li v-for="info in infos" :key="info.id" class="flex justify-between items-center mb-[10px]">
        <span
          class="py-[2px] px-[4px] text-[14px] 2xl:py-1 2xl:px-2 2xl:text-[16px]  mr-2 rounded-[4px] font-semibold text-[#131313] bg-[#FFB400] transition-all duration-200">
          {{ info.infoType }}
        </span>
        <span :class="!info.isGreen ? 'text-white text-[16px] font-semibold' : 'text-[#46A741] text-[16px]'">
          {{ info.info }}
        </span>
      </li>
    </ul>

    <div class="w-full pb-6 mb-6 border-b-[1px] border-[#383838]">
      <h3 class="font-medium text-[20px] mb-4 text-white">Skills</h3>
      <ul>
        <li v-for="skill in skills" :key="skill.id" class="mb-[10px]">
          <span class="flex justify-between text-white mb-1 py-1">
            <div class="text-[16px] opacity-80 ">{{ skill.skillType }}</div>
            <i class="bx bx-check-double text-2xl"></i>
          </span>
          <div class="border-[1px] border-[#FFB400] p-[2px] rounded-[10px]">
            <div :class="skill.percentage" class="bg-[#FFB400] rounded-[10px] h-[2px]"></div>
          </div>
        </li>
      </ul>
    </div>

    <div class="w-full pb-6 mb-6 border-b-[1px] border-[#383838]">
      <h3 class="font-medium text-[20px] mb-4 text-white">Extra Skills</h3>
      <ul>
        <li v-for="exSkill in exSkills" :key="exSkill.id" class="flex mb-1 items-center">
          <i class='bx bx-checkbox-checked text-[#FFB400] text-[24px]'></i>
          <span class="ml-3 font-medium opacity-70 text-white text-[16px]">{{ exSkill.skill }}</span>
        </li>
      </ul>
    </div>

    <div class="w-full pb-6 mb-6 border-b-[1px] border-[#383838]">
      <h3 class="font-medium text-[20px] mb-4 text-white">Languages</h3>
      <ul>
        <li v-for="language in languages" :key="language.id" class="mb-[10px] flex items-center">
          <i class='bx bx-radio-circle-marked text-[#FFB400] text-[18px] mr-2'></i>
          <div class="flex justify-between w-full">
            <span class="text-[16px] opacity-80 text-white font-medium">{{ language.language }}:</span>
            <span class="text-[16px] opacity-80 text-white font-medium">{{ language.level }}</span>
          </div>
        </li>
      </ul>
    </div>

    <a
      :href="pdfFile"
      class="flex justify-center rounded-sm bg-[#FFB400] w-full text-[#131313] text-[16px] py-2 2xl:py-3 transition-all duration-200 font-medium hover:bg-white"
      download
    >
      <button>DOWNLOAD RESUME</button>
    </a>

  </aside>
</template>

<script setup>
  import { languages, skills, contacts, infos, exSkills } from '../../store/sidebar.js';
  import { useVisibilitiesStore } from '../../store/visibilities.js';
  import pdfFile from '@/assets/files/bahodirov.pdf';

  const sidebarStore = useVisibilitiesStore();
</script>

<style scoped></style>