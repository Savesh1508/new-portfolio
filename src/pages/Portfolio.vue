<template>
  <div class="flex">
    <Sidebar />
    <div class="main sm:w-[90%] md:w-[93%] lg:w-[70%] bg-[#131313] h-screen overflow-x-hidden overflow-y-scroll">
      <div class="w-screen sm:w-[95%] mx-auto pt-0 sm:pt-6">
        <section id="intro" class="bg-intro min-h-[70vh] md:min-h-[467px] py-6 mb-16 text-white flex items-center justify-center">
          <div class="content flex flex-col items-center text-center">
            <h2 class="text-[30px] sm:text-[36px] font-bold mb-[-6px] ">I'm Daler Bahodirov</h2>
            <h2 class="flex text-[30px] sm:text-[36px] font-bold mb-5">
              <span class="text-[#FFB400]">Graphic Designer</span>
              &nbsp&&nbsp
              <span class="text-[#FFB400]">SMM Marketolog</span>
            </h2>
            <p class="w-[65%] text-[16px] font-medium mb-6">I am certificated graphic designer by WePro education center with over the year real work experience. I
  create modern posters for business promotion, logos, advertising banners, flyers. I also worked as social
  media marketolog. I have worked with the analysis of social media accounts, competitor analysis,
  targeting, and making plans for further advancement.</p>
            <button class="flex bg-[#FFB400] items-center rounded-md hover:bg-white transition-all duration-200 text-[#131313] py-2 lg:py-3 px-6 text-[16px]">
              <a href="https://t.me/dalerbaxadirov" class="text-[16px] font-semibold">CONTACT</a>
              <i class="text-[20px] bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </section>
      </div>

      <div class="w-[95%] mx-auto pt-0 sm:pt-6">
        <section id="services" class="mb-16">
          <h2 class="text-center font-bold mb-4 text-[32px] text-white">My Services</h2>
          <p class="text-[#fffc] mx-auto max-w-[438px] mb-[32px] text-center font-semibold">I can offer several of my services for you. You can get acquainted with them below.</p>
          <ServiceCards :services="services" />
        </section>

        <section id="education" class="mb-16">
          <h2 class="text-center font-bold mb-4 text-[32px] text-white">Education</h2>
          <p class="text-[#fffc] mx-auto max-w-[438px] mb-[32px] text-center font-semibold">Get to know the institutions where I studied</p>
          <EducationBlocks :education="education" />
        </section>


        <section id="works" class="mb-16">
          <h2 class="text-center font-bold mb-4 text-[32px] text-white">My Projects</h2>
          <ProjectCards :projects="projects" />
        </section>

        <section id="achive" class="mb-16">
          <h2 class="text-center font-bold mb-[32px] text-[32px] text-white">Achievements</h2>
          <AchievementsCards :achievements="achievements" />
        </section>
      </div>
      <footer class="h-[100px] bg-[#242424] flex justify-center items-center text-white text-[20px] text-bold">
        Site by Savlatxon Eshonov, 2024
      </footer>
    </div>
    <Navbar />
  </div>
</template>

<script setup>
  import Sidebar from "../components/partials/sidebar.vue"
  import Navbar from "../components/partials/navbar.vue"
  import ServiceCards from "../components/cards/services.vue"
  import EducationBlocks from "../components/blocks/education.vue"
  import ProjectCards from "../components/cards/projects.vue"
  import AchievementsCards from "../components/cards/achievements.vue"

  import { services, education, projects, achievements } from "../store";

</script>

<style scoped>
  .bg-intro {
    position: relative;
    background-image: url('../assets/img/bg-intro.jpg');
    background-size: cover;
    background-position: center;
  }
  .bg-intro::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  .bg-intro .content {
    position: relative;
    z-index: 2;
    color: white;
  }
</style>