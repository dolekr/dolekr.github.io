<script setup lang="ts">
import { ref } from "vue";

const copied = ref(false);

function copyEmail() {
  navigator.clipboard.writeText("kr.dolezalova@gmail.com");
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}
</script>

<template>
  <Divider />
  <div class="flex items-center justify-center px-6 sm:px-[3vw] py-16 flex-col">
    <div class="flex max-w-md text-white mb-10">
      <h1>Contact</h1>
    </div>
    <div class="flex flex-col sm:flex-row gap-5 sm:gap-20">
      <div
        class="relative flex flex-col items-center justify-center border border-transparent hover:border-white/20 active:border-white/50 rounded-md p-3 transition duration-300 ease-in-out cursor-pointer text-white/70 hover:text-white"
        @click="copyEmail"
      >
        <div>kr.dolezalova@gmail.com</div>
        <div>
          <div>
            <i class="pi pi-at pt-3" style="font-size: 1.5rem"></i>
          </div>
        </div>
        <div
          v-if="copied"
          class="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-2 py-1 rounded whitespace-nowrap"
        >
          Copied!
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/kr-dolezalova"
        target="_blank"
        class="flex flex-col items-center justify-center border border-transparent hover:border-white/20 active:border-white/50 rounded-md p-3 transition duration-300 ease-in-out text-white/70 hover:text-white"
      >
        <div>linkedin.com/in/kr-dolezalova</div>
        <div>
          <i class="pi pi-linkedin pt-3" style="font-size: 1.5rem"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #1bff1baa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #00fa8aaa);
}
</style>
