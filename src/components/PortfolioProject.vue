<template>
  <div
    id="projects"
    class="flex flex-col items-center justify-center px-6 sm:px-[3vw] pt-18 text-white relative overflow-hidden"
  >
    <div class="flex mb-10">
      <h2>Projects</h2>
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
    title: "Unizone – University App",
    sideImages: true,
    heroImage: "uni.png",
    detailImages: ["uni-1.png", "uni-3.png", "uni-5.png", "uni-6.png"],
    sections: [
      {
        heading: "Overview",
        content:
          "Unizone is a real mobile application used by thousands of students across multiple Czech universities. I worked on the product between 2022–2024. I initially focused on redesigning existing screens and improving user experience, ensuring consistency within the established visual system. Later, I moved on to designing entirely new modules and expanding the app’s functionality.",
      },
      {
        heading: "The Goal",
        content:
          "My primary goal was maintaining design consistency across both redesigned and newly introduced features. In Figma, I relied heavily on the existing component library to preserve clarity, usability, and familiarity. This ensured that new modules felt like a natural extension of the app while keeping the experience intuitive and cohesive for students.",
      },
      {
        heading: "Key Contributions",
        content:
          "Redesign of existing features (e.g., news feed, login screen, and settings), design of new modules including a multi-step questionnaire, interactive calendar, job opportunities, and conferences, as well as color theme definition and customization for new university clients and adaptation of the app to their specific requirements.",
      },
      {
        heading: "My Role",
        content:
          "UX research and feature definition\n• Wireframing\n• High-fidelity designs\n• Interactive prototyping\n• Collaboration with developers\n• Iterative improvements based on student feedback",
      },
      {
        heading: "What I Learned",
        content:
          "Working on a live product with an established visual identity gave me hands-on experience designing within real constraints. Close collaboration with developers also deepened my understanding of technical limitations, improving how I approach practical and scalable design decisions.",
      },
    ],
  },

  {
    title: "Finely — Parking Fines App",
    sideImages: false,
    heroImage: "finely.png",
    detailImages: [
      "finely-prototype.gif",
      "finely-1.png",
      "finely-2.png",
      "finely-3.png",
      "finely-4.png",
    ],
    sections: [
      {
        heading: "Overview",
        content:
          "Finely is a concept app designed as part of a UX course project (2025). The product explores how paying or disputing parking tickets could be simplified through a clear, mobile-friendly interface.",
      },

      {
        heading: "The Problem",
        content:
          "The assignment was based on the premise that paying or disputing parking tickets is often confusing and inconsistent across cities, with unclear instructions and lengthy forms making the process frustrating and time-consuming.",
      },
      {
        heading: "The Goal",
        content:
          "To design a simple, mobile-friendly solution that allows users to quickly pay or dispute parking tickets.",
      },
      {
        heading: "My Role",
        content:
          "Paper & digital wireframing • Low- and high-fidelity prototyping • Usability testing • Iteration",
      },
      {
        heading: "Results",
        content:
          "The final concept presents a structured and easy-to-follow flow that simplifies ticket payment and dispute submission. The fastest payment journey was designed as: Scan ticket → Confirm details → Enter contact information → Pay fine, reducing manual input and unnecessary steps.",
      },
    ],
  },
  {
    title: "Dog Food Ordering App",
    anchor: "dog-food-app",
    sideImages: true,
    heroImage: "dog-food-app.png",
    detailImages: [
      "dog-food-app-1.png",
      "dog-food-app-3.png",
      "dog-food-app-4.png",
    ],
    sections: [
      {
        heading: "Overview",
        content:
          "As part of the Google UX Design Certificate in 2024, I designed a mobile app that helps dog owners find food for their pets’ specific needs using advanced filtering and expert guidance.",
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
          "Wireframing (paper & digital)\n• Low- and high-fidelity prototyping\n• Usability testing\n• Accessibility considerations",
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
    title: "Full Bonkers – Dog Food E-Shop",
    sideImages: false,
    heroImage: "dog-web.png",
    detailImages: [
      "dog-web-1.png",
      "dog-web-2.png",
      "dog-web-3.png",
      "dog-web-4.png",
    ],
    sections: [
      {
        heading: "Overview",
        content:
          "Full Bonkers is a concept web application created for the Google UX Design Certificate (2025). Based on the same problem as the mobile app version, this project reimagines the solution for desktop users, focusing on a clear product structure and a streamlined checkout experience.",
        link: { text: "→ See the mobile app version", href: "#dog-food-app" },
      },

      {
        heading: "The Goal",
        content:
          "Create a web shopping experience that makes browsing, filtering, and ordering dog food fast and intuitive.",
      },
      {
        heading: "Design",
        content:
          "I adapted the playful brand identity to better suit a structured web layout. The design balances clarity and personality, ensuring scalability across larger screens while maintaining a recognizable brand identity.",
      },
      {
        heading: "My Role",
        content:
          "Wireframing (paper & digital)\n•  Low- and high-fidelity prototyping\n• Responsive design",
      },
      {
        heading: "What I Learned",
        content:
          "Designing the same product for web and mobile highlighted how structure and hierarchy must adapt to platform constraints. I strengthened my responsive design skills and learned to think more strategically about layout and scalability.",
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
