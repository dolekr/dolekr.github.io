<template>
  <div
    class="flex flex-col items-center justify-center px-6 sm:px-[3vw] py-16 text-white relative overflow-hidden"
  >
    <div class="flex mb-10">
      <h1>Projects</h1>
    </div>

    <div class="card flex flex-col max-w-5xl mx-auto pb-20">
      <img
        src="../assets/dog-food-app.png"
        alt="UI of mobile dog food shopping app"
        class="rounded-t-lg"
      />
      <Panel header="Dog Food Ordering App" toggleable>
        <div class="flex flex-row">
          <div class="pl-8 pr-20 max-w-2/3">
            <h2 class="text-2xl pt-8">Overview</h2>
            <p class="m-0">
              As part of the Google UX Design Certificate, I designed a mobile
              application that helps dog owners easily find and order
              high-quality dog food. The app focuses on advanced filtering,
              expert guidance, and a seamless home delivery experience.
            </p>

            <h2 class="text-2xl pt-8">Design</h2>
            <p class="m-0">
              The visual direction of the app is intentionally playful and
              expressive. Since the product focuses on dog food, I chose not to
              approach the design in a serious or overly corporate way. Instead,
              the goal was to create an interface that feels friendly,
              energetic, and full of personality.
            </p>

            <h2 class="text-2xl pt-8">The Goal</h2>
            <p class="m-0">
              To create an intuitive app that allows users to quickly filter and
              find suitable products, receive professional guidance and complete
              orders smoothly.
            </p>

            <h2 class="text-2xl pt-8">My Role</h2>
            <ul>
              <li>• Wireframing (paper & digital)</li>
              <li>• Low- and high-fidelity prototyping</li>
              <li>• Usability testing</li>
              <li>• Accessibility considerations</li>
              <li>• Iteration and responsive design</li>
            </ul>

            <h2 class="text-2xl pt-8">Usability study</h2>
            <p>
              I conducted an unmoderated study with five participants. While I
              assumed filtering and navigation would be clear, testing revealed
              confusion around filters and missing standard features such as
              profile and settings. Based on these insights, I simplified
              filtering, improved navigation clarity, and added essential app
              features.
            </p>

            <h2 class="text-2xl pt-8">What I Learned</h2>
            <p>
              Consistency is critical. Even small inconsistencies in navigation
              or filters can confuse users. Planning core features early
              prevents larger redesigns later.
            </p>
          </div>
          <div class="max-w-1/3 pr-6 pt-8">
            <Image
              :src="dogFoodApp1"
              alt="Image"
              width="250"
              preview
            />
          </div>
        </div>
      </Panel>
    </div>

    <div class="card flex flex-col max-w-5xl mx-auto pb-20">
      <img
        src="../assets/finely.png"
        alt="UI of parking ticket payment app"
        class="rounded-t-lg"
      />
      <Panel header="Finely" toggleable>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
      </Panel>
    </div>
  </div>
</template>

<script setup>
import dogFoodApp1 from '../assets/dog-food-app-1.png';
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