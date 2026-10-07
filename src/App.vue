<script setup lang="ts">
import { RouterView } from 'vue-router'
import ScrollTop from 'primevue/scrolltop'
import TheNavbar from './components/TheNavbar.vue'
import { preferredScrollBehavior } from './motion'
</script>

<template>
  <div class="bg-base">
    <TheNavbar />
    <RouterView />
    <ScrollTop :behavior="preferredScrollBehavior()" />
  </div>
</template>

<style scoped>
:deep(.p-scrolltop) {
  --p-scrolltop-background: rgba(255, 255, 255, 0.03);
  --p-scrolltop-hover-background: color-mix(
    in srgb,
    var(--color-brand) 15%,
    transparent
  );
  --p-scrolltop-color: rgba(255, 255, 255, 0.35);
  --p-scrolltop-hover-color: color-mix(
    in srgb,
    var(--color-brand) 90%,
    transparent
  );
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(8px);
}

/* PrimeVue's Button transition overrides ScrollTop's own fade, so restore it. */
:deep(.p-scrolltop-enter-active),
:deep(.p-scrolltop-leave-active) {
  transition: opacity 0.3s;
}
</style>
