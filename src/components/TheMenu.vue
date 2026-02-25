<script setup lang="ts">
import bgImage from "../assets/andrew-kliatskyi-ZceT2m9wV7w-unsplash.jpg";
import { ref } from "vue";

const activeItem = ref("home");
</script>

<template>
  <div
    class="flex flex-col h-screen w-full bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <nav
      class="flex w-full items-center justify-end pl-[8vw] pr-[4vw] h-18 fixed"
    >
      <ul class="flex gap-4 list-none">
        <li
          v-for="item in ['home', 'about', 'portfolio', 'contact']"
          :key="item"
        >
          <a
            :href="`#${item}`"
            class="px-4 py-2 border rounded-md transition duration-300 ease-in-out font-light"
            :class="
              activeItem === item
                ? 'border-white/50 text-white'
                : 'border-transparent text-white/70 hover:text-white'
            "
            @click="activeItem = item"
            >{{ item }}</a
          >
        </li>
      </ul>
    </nav>
    <div class="flex-1 flex flex-col px-[8vw] pt-[16vh]">
      <div class="text-[clamp(2rem,10vw,6rem)] text-[#00FF44]/70">
        <div class="uppercase font-zilla tracking-widest">Kristyna</div>
        <div class="uppercase font-zilla tracking-widest">Dolezalova</div>
      </div>
      <div class="mt-auto flex justify-center pb-[20vh]">
        <a
          class="px-8 py-6 border text-xl text-white/70 border-white/50 rounded-md transition duration-300 ease-in-out font-light hover:text-white hover:border-white"
          >see my projects</a
        >
      </div>
    </div>
  </div>
</template>
