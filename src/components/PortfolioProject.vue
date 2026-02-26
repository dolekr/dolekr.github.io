<template>
  <div
    class="flex flex-col items-center justify-center px-6 sm:px-[3vw] pt-16 text-white relative overflow-hidden"
  >
    <div class="flex mb-10">
      <h1>Projects</h1>
    </div>
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    title: "Dog Food Ordering App",
    heroImage: "dog-food-app.png",
    detailImages: [
      "dog-food-app-1.png",
      "dog-food-app-2.png",
      "dog-food-app-3.png",
      "dog-food-app-4.png",
    ],
    sections: [
      {
        heading: "Overview",
        content:
          "As part of the Google UX Design Certificate, I designed a mobile application that helps dog owners easily find and order high-quality dog food. The app focuses on advanced filtering, expert guidance, and a seamless home delivery experience.",
      },
      {
        heading: "Design",
        content:
          "The visual direction of the app is intentionally playful and expressive. Since the product focuses on dog food, I chose not to approach the design in a serious or overly corporate way. Instead, the goal was to create an interface that feels friendly, energetic, and full of personality.",
      },
      {
        heading: "The Goal",
        content:
          "To create an intuitive app that allows users to quickly filter and find suitable products, receive professional guidance and complete orders smoothly.",
      },
      {
        heading: "My Role",
        content:
          "• Wireframing (paper & digital)\n• Low- and high-fidelity prototyping\n• Usability testing\n• Accessibility considerations\n• Iteration and responsive design",
      },
      {
        heading: "Usability Study",
        content:
          "I conducted an unmoderated study with five participants. While I assumed filtering and navigation would be clear, testing revealed confusion around filters and missing standard features such as profile and settings. Based on these insights, I simplified filtering, improved navigation clarity, and added essential app features.",
      },
      {
        heading: "What I Learned",
        content:
          "Consistency is critical. Even small inconsistencies in navigation or filters can confuse users. Planning core features early prevents larger redesigns later.",
      },
    ],
  },
  {
    title: "Finely",
    heroImage: "finely.png",
    detailImages: [],
    sections: [
      {
        heading: "Overview",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
    ],
  },
];
</script>

<style scoped>
:deep(.p-panel) {
  --p-panel-background: transparent;
  --p-panel-border-radius: 0 0 0.5rem 0.5rem;
}

:deep(.p-panel-header) {
  font-size: large;
  --p-panel-title-font-weight: 300;
}
</style>
