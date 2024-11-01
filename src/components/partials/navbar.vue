<template>
  <aside
    class="border border-[#ffb3006b] sm:border-none w-auto px-2 sm:px-0 pt-4 pb-2 sm:pt-0 bg-[#0000008a] rounded-[23px] sm:rounded-[0px] sm:bg-[#131313] absolute top-[20%] right-2 z-40 sm:static sm:w-[10%] md:w-[7%] lg:w-[5%] sm:h-screen flex flex-col justify-start sm:justify-center items-center duration-300"
  >
    <button @click="toggleSidebar" class="flex items-center justify-center mb-[10px] sm:mb-10 lg:hidden w-[34px] h-[34px] rounded-md bg-[#FFB400] duration-200">
      <i v-if="!sidebarStore.visible" class="bx bxs-user-detail text-2xl text-[#131313]"></i>
      <i v-else class="bx bxs-user-x text-2xl text-[#131313]"></i>
    </button>
    <button @click="menuVisibility" class="flex items-center justify-center mb-[6px] sm:mb-10 sm:hidden w-[34px] h-[34px] rounded-md bg-[#FFB400] duration-200">
      <i v-if="sidebarStore.menu" class="bx bx-menu text-2xl text-[#131313]"></i>
      <i v-else class="bx bx-x text-2xl text-[#131313]"></i>
    </button>
    <div
      :class="sidebarStore.menu ? 'hidden sm:flex sm:flex-col' : 'flex flex-col'"
    >
      <a href="#intro" class="nav-link active">
        <i class="bx bxs-home-alt-2 text-[#131313] text-[20px]"></i>
      </a>
      <a href="#services" class="nav-link">
        <i class="bx bx-code-block text-[#131313] text-[20px]"></i>
      </a>
      <a href="#education" class="nav-link">
        <i class="bx bx-detail text-[#131313] text-[20px]"></i>
      </a>
      <a href="#works" class="nav-link">
        <i class="bx bxs-briefcase-alt-2 text-[#131313] text-[20px]"></i>
      </a>
      <a href="#achive" class="nav-link">
        <i class="bx bxl-blogger text-[#131313] text-[20px]"></i>
      </a>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useVisibilitiesStore } from '../../store/visibilities.js'
const sidebarStore = useVisibilitiesStore();

const menuVisibility = () => {
  sidebarStore.menuOnOff();
};
const toggleSidebar = () => {
  sidebarStore.toggleVisibility();
};

onMounted(() => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

</script>

<style scoped>
.nav-link {
  background-color: #353535;
  margin: 12px 0;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 200ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover,
.active {
  background-color: #FFB400;
}

@media (max-width: 640px) {
  .nav-link {
    margin: 4px 0;
  }
}
</style>