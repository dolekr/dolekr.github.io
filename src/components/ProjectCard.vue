<template>
  <div
    class="card flex flex-col max-w-5xl mx-auto pb-8 md:pb-16"
    :id="project.anchor"
  >
    <div
      class="rounded-lg transition duration-300 ease-out hover:scale-[1.015] hover:shadow-[0_0_32px_rgba(20,184,166,0.35)]"
      :class="{ 'cursor-pointer': !expanded }"
      @click="openFromCard"
    >
      <img
        :src="resolveImage(project.heroImage)"
        :alt="project.title"
        class="rounded-t-lg"
      />
      <Panel
        :header="project.title"
        toggleable
        :collapsed="!expanded"
        @update:collapsed="(collapsed) => (expanded = !collapsed)"
      >
        <div
          class="flex flex-col items-start"
          :class="{ 'md:flex-row': project.sideImages }"
        >
          <div class="sm:p-6">
            <template v-for="section in project.sections" :key="section.heading">
              <h3 class="pb-1">{{ section.heading }}</h3>
              <p class="m-0 pb-4">{{ section.content }}</p>
              <a
                v-if="section.link"
                :href="section.link.href"
                class="block -mt-2 pb-4 text-brand/70 hover:text-brand transition duration-200 text-sm"
                >{{ section.link.text }}</a
              >
            </template>
          </div>
          <div
            class="grid grid-cols-2 gap-4 sm:p-6 mt-4 sm:mt-0 ml-auto items-center min-w-[40%]"
            :class="project.sideImages ? 'md:grid-cols-1' : 'md:grid-cols-2'"
          >
            <img
              v-for="(img, index) in project.detailImages"
              :key="img"
              :src="resolveImage(img)"
              :alt="img"
              class="rounded-lg cursor-zoom-in"
              @click="openGallery(index)"
            />
          </div>
        </div>
      </Panel>
    </div>
    <Galleria
      v-model:visible="galleryVisible"
      v-model:activeIndex="activeIndex"
      :value="project.detailImages"
      fullScreen
      circular
      showItemNavigators
      :showThumbnails="false"
      :pt="{ mask: { onClick: closeOnBackdrop } }"
    >
      <template #item="{ item }">
        <img
          :src="resolveImage(item)"
          :alt="item"
          class="max-w-[90vw] max-h-[90vh] rounded-lg"
        />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

const expanded = ref(false);
const galleryVisible = ref(false);
const activeIndex = ref(0);

/** Opens the full-screen gallery at the clicked picture. */
function openGallery(index) {
  activeIndex.value = index;
  galleryVisible.value = true;
}

/** Closes the gallery on a click anywhere except the picture or its buttons. */
function closeOnBackdrop(event) {
  if (event.target.closest("img, button")) return;
  galleryVisible.value = false;
}

/** Opens the card on any click, except on the panel's own toggle button, which handles itself. */
function openFromCard(event) {
  const onToggle = event
    .composedPath()
    .some((el) => el.classList?.contains("p-panel-toggle-button"));
  if (expanded.value || onToggle) return;
  expanded.value = true;
}
</script>

<style scoped>
h3 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
}

h3::after {
  content: '';
  display: block;
  width: 1.5rem;
  height: 1px;
  background: rgba(20, 184, 166, 0.45);
  flex-shrink: 0;
}

p {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
}
</style>
