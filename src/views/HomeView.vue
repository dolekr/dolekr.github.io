<script setup lang="ts">
import TheMenu from '../components/TheMenu.vue'
import AboutMe from '../components/AboutMe.vue'
import PortfolioProject from '../components/PortfolioProject.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <TheMenu />
  <div class="h-px bg-linear-to-r from-transparent via-brand/25 to-transparent"></div>
  <AboutMe />
  <PortfolioProject />
  <TheFooter />
</template>
