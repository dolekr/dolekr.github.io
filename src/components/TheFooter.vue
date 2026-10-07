<script setup lang="ts">
import { ref } from 'vue'
import SectionDivider from './SectionDivider.vue'

const copied = ref(false)
const year = new Date().getFullYear()

function copyEmail() {
  navigator.clipboard.writeText('kr.dolezalova@gmail.com')
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
  <SectionDivider />
  <div
    id="contact"
    class="flex items-center justify-center px-6 sm:px-[3vw] pt-6 pb-2 flex-col"
  >
    <div class="flex max-w-md text-white">
      <h2 class="mb-2 text-[1.5rem]">Contact</h2>
    </div>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-10 text-xs">
      <button
        type="button"
        class="relative flex flex-col items-center justify-center border border-transparent rounded-md p-3 transition duration-300 ease-in-out cursor-pointer bg-transparent text-white/70 hover:text-brand"
        @click="copyEmail"
      >
        <div>
          <i class="pi pi-at pb-2" style="font-size: 1rem"></i>
        </div>
        <div>
          <span class="sr-only">Copy email address </span>
          kr.dolezalova@gmail.com
        </div>

        <div
          role="status"
          class="absolute -top-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap"
        >
          <span v-if="copied" class="bg-white text-black px-2 py-1 rounded">
            Copied!
          </span>
        </div>
      </button>
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
    <p class="text-xs text-white/40 pt-3">© {{ year }} Kristýna Doležalová</p>
  </div>
</template>
