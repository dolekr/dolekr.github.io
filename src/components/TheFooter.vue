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
  <div class="h-px bg-linear-to-r from-transparent via-brand/25 to-transparent"></div>
  <div
    id="contact"
    class="flex items-center justify-center px-6 sm:px-[3vw] pt-6 pb-2 flex-col"
  >
    <div class="flex max-w-md text-white">
      <h3 class="mb-2">Contact</h3>
    </div>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-10 text-xs">
      <div
        class="relative flex flex-col items-center justify-center border border-transparent rounded-md p-3 transition duration-300 ease-in-out cursor-pointer text-white/70 hover:text-brand"
        @click="copyEmail"
      >
        <div>
          <i class="pi pi-at pb-2" style="font-size: 1rem"></i>
        </div>
        <div>kr.dolezalova@gmail.com</div>

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
        class="flex flex-col items-center justify-center border border-transparent rounded-md p-3 transition duration-300 ease-in-out text-white/70 hover:text-brand"
      >
        <div>
          <i class="pi pi-linkedin pb-2" style="font-size: 1rem"></i>
        </div>
        <div>linkedin.com/in/kr-dolezalova</div>
      </a>
    </div>
    <p class="text-xs text-white/40 pt-3">© 2026 Kristýna Doležalová</p>
  </div>
</template>
