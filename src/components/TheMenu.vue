<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const activeItem = ref("home");
const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 0;
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  window.addEventListener("scroll", onScroll);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeItem.value = entry.target.id;
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
  );

  ["home", "about", "projects", "contact"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer!.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  observer?.disconnect();
});
</script>

<template>
  <div
    id="home"
    class="hero-bg flex flex-col h-screen w-full"
  >
    <nav
      class="flex w-full items-center justify-center sm:justify-end pl-[8vw] pr-[4vw] h-14 fixed z-50 transition duration-300 ease-in-out"
      :class="scrolled ? 'bg-black/50 backdrop-blur-sm shadow-lg' : ''"
    >
      <ul class="flex gap-4 list-none">
        <li
          v-for="item in ['home', 'about', 'projects', 'contact']"
          :key="item"
        >
          <a
            :href="`#${item}`"
            class="px-4 py-2 border rounded-md transition duration-400 ease-in-out font-light"
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
    <div class="flex-1 flex flex-col px-[8vw] pt-[24vh]">
      <div class="text-[clamp(2rem,10vw,6rem)]">
        <div class="uppercase font-zilla tracking-widest text-brand/70">
          Kristyna
        </div>
        <div class="uppercase font-zilla tracking-widest text-brand/70">
          Dolezalova
        </div>
      </div>
      <div class="mt-auto flex justify-center pb-[16vh]">
        <a
          href="#projects"
          class="px-8 py-4 border text-xl text-white/70 border-white/50 rounded-md transition duration-300 ease-in-out font-light hover:text-white hover:border-white"
          >see my projects</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background:
    radial-gradient(ellipse 70% 60% at 80% 85%, rgba(20, 184, 166, 0.13) 0%, transparent 65%),
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    #0a0a0a;
  background-size: 100% 100%, 60px 60px, 60px 60px;
}
</style>
