<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <HeroSection />
  <div
    class="h-px bg-linear-to-r from-transparent via-brand/25 to-transparent"
  ></div>
  <AboutSection />
  <ProjectsSection />
  <TheFooter />
</template>
