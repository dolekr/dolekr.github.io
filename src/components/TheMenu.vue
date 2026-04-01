<template>
  <div id="home" class="hero-bg flex flex-col h-screen w-full">
    <div class="flex-1 flex flex-col px-[8vw] pt-[24vh]">
      <div class="text-[clamp(2rem,10vw,6rem)]">
        <div class="uppercase tracking-[0.12em] font-extralight text-brand">
          Kristyna
        </div>
        <div
          class="uppercase tracking-[0.12em] font-extralight leading-20 text-brand"
        >
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
</style>
