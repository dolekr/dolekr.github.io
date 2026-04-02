<template>
  <div id="home" class="hero-bg flex flex-col h-screen w-full">
    <div class="flex-1 flex flex-col px-[8vw] pt-[24vh]">
      <div class="text-[clamp(2rem,10vw,6rem)]">
        <div class="uppercase tracking-[0.12em] font-extralight text-brand fade-in">
          Kristyna
        </div>
        <div
          class="uppercase tracking-[0.12em] font-extralight leading-20 text-brand fade-in delay-1"
        >
          Dolezalova
        </div>
      </div>
      <div class="mt-auto flex justify-center pb-[16vh]">
        <button
          @click="scrollToProjects"
          class="px-8 py-4 border text-xl text-white/70 border-white/50 rounded-md transition duration-300 ease-in-out font-light hover:text-white hover:border-white fade-in delay-2 cursor-pointer bg-transparent"
          >see my projects</button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero-bg {
  background:
    radial-gradient(
      ellipse 70% 60% at 80% 85%,
      rgba(20, 184, 166, 0.13) 0%,
      transparent 65%
    ),
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    #0a0a0a;
  background-size:
    100% 100%,
    60px 60px,
    60px 60px;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-in       { animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) both; }
.delay-1       { animation-delay: 0.12s; }
.delay-2       { animation-delay: 0.24s; }
</style>
