<template>
  <div
    ref="root"
    id="projects"
    class="flex flex-col items-center justify-center px-6 sm:px-[3vw] pt-18 text-white relative overflow-hidden"
  >
    <div class="flex">
      <h2 class="reveal">Projects</h2>
    </div>
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :project="project"
      class="reveal"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'
import { useTemplateRef } from 'vue'
import { useReveal } from '../composables/useReveal'

useReveal(useTemplateRef('root'))
</script>

<style scoped>
:deep(.p-panel) {
  --p-panel-background: #111111;
  --p-panel-border-radius: 0 0 0.5rem 0.5rem;
  --p-panel-border-color: rgba(255, 255, 255, 0.08);
}

:deep(.p-panel-header) {
  font-size: large;
  --p-panel-title-font-weight: 300;
  --p-panel-header-border-color: rgba(255, 255, 255, 0.08);
  --p-panel-header-color: rgba(255, 255, 255, 0.75);
}

:deep(.p-panel-content) {
  --p-panel-content-background: #111111;
  --p-panel-content-border-color: rgba(255, 255, 255, 0.08);
}

:deep(.p-panel-toggle-button) {
  color: rgba(255, 255, 255, 0.4);
}
:deep(.p-panel-toggle-button:hover) {
  color: color-mix(in srgb, var(--color-brand) 80%, transparent);
  background: color-mix(in srgb, var(--color-brand) 8%, transparent) !important;
}
</style>
