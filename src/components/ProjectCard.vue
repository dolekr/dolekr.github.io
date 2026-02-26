<template>
  <div class="card flex flex-col max-w-5xl mx-auto pb-20">
    <img
      :src="resolveImage(project.heroImage)"
      :alt="project.title"
      class="rounded-t-lg"
    />
    <Panel :header="project.title" toggleable collapsed="false">
      <div class="flex flex-row items-start">
        <div class="p-6 pr-10">
          <template v-for="section in project.sections" :key="section.heading">
            <h2 class="text-2xl pb-1">{{ section.heading }}</h2>
            <p class="m-0 pb-4">{{ section.content }}</p>
          </template>
        </div>
        <div class="min-w-1/3 flex flex-col gap-4 p-6 ml-auto">
          <Image
            v-for="img in project.detailImages"
            :key="img"
            :src="resolveImage(img)"
            :alt="img"
            width="250"
            preview
          />
        </div>
      </div>
    </Panel>
  </div>
</template>

<script setup>
const images = import.meta.glob("../assets/*", { eager: true });

function resolveImage(filename) {
  const match = images[`../assets/${filename}`];
  return match ? match.default : "";
}

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.p-image-rotate-right-button,
.p-image-rotate-left-button {
  display: none;
}
</style>
