<template>
  <div id="home" class="hero-bg flex flex-col h-screen w-full">
    <div class="flex-1 flex flex-col px-[8vw] pt-[24vh]">
      <div class="text-[clamp(2rem,10vw,6rem)]">
        <div
          class="uppercase tracking-[0.12em] font-extralight text-brand fade-in"
        >
          Kristyna
        </div>
        <div
          class="uppercase tracking-[0.12em] font-extralight leading-20 text-brand fade-in fade-delay-1"
        >
          Dolezalova
        </div>
        <p
          class="mt-4 lg:mt-8 text-white/35 tracking-[0.35em] uppercase text-[0.75rem] fade-in fade-delay-2"
        >
          UX/UI design & Quality assurance
        </p>
      </div>
      <div class="mt-auto flex justify-center pb-[16vh]">
        <button
          @click="scrollToProjects"
          class="px-8 py-4 border text-xl text-white/70 border-white/50 rounded-md transition duration-300 ease-in-out font-light hover:text-white hover:border-brand/70 hover:shadow-[0_0_20px] hover:shadow-brand/25 fade-in fade-delay-3 cursor-pointer bg-transparent"
        >
          See my projects
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { preferredScrollBehavior } from '../motion'

function scrollToProjects() {
  document
    .getElementById('projects')
    ?.scrollIntoView({ behavior: preferredScrollBehavior() })
}
</script>

<style scoped>
.hero-bg {
  background:
    radial-gradient(
      ellipse 70% 60% at 80% 85%,
      color-mix(in srgb, var(--color-brand) 13%, transparent) 0%,
      transparent 65%
    ),
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    var(--color-base);
  background-size:
    100% 100%,
    60px 60px,
    60px 60px;
}
</style>
