<script setup lang="ts">
import bgImage from "../assets/andrew-kliatskyi-ZceT2m9wV7w-unsplash.jpg";
import { ref, onMounted, onUnmounted } from "vue";

const activeItem = ref("home");
const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 0;
}

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <div
    id="home"
    class="flex flex-col h-screen w-full bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <nav
      class="flex w-full items-center justify-end pl-[8vw] pr-[4vw] h-14 fixed z-50 transition duration-300 ease-in-out"
      :class="scrolled ? 'bg-black/50 backdrop-blur-sm shadow-lg' : ''"
    >
      <ul class="flex gap-4 list-none">
        <li
          v-for="item in ['home', 'about', 'projects', 'contact']"
          :key="item"
        >
          <a
            :href="`#${item}`"
            class="px-4 py-2 border rounded-md transition duration-800 ease-in-out font-light"
            :class="
              activeItem === item
                ? 'border-white/40 text-white/80 active:border-white/70 hover:text-white'
                : 'border-transparent text-white/50 hover:text-white/80 active:text-white'
            "
            @click="activeItem = item"
            >{{ item }}</a
          >
        </li>
      </ul>
    </nav>
    <div class="flex-1 flex flex-col px-[8vw] pt-[20vh]">
      <div class="text-[clamp(2rem,10vw,6rem)]">
        <div class="uppercase font-zilla tracking-widest text-brand/70">
          Kristyna
        </div>
        <div class="uppercase font-zilla tracking-widest text-brand/70">
          Dolezalova
        </div>
      </div>
      <div class="mt-auto flex justify-center pb-[20vh]">
        <a
          href="#projects"
          class="px-8 py-4 border text-xl text-white/70 border-white/50 rounded-md transition duration-300 ease-in-out font-light hover:text-white hover:border-white"
          >see my projects</a
        >
      </div>
    </div>
  </div>
</template>
