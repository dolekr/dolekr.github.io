<template>
  <div
    id="about"
    class="about-bg flex flex-col sm:flex-row items-center justify-center px-6 sm:px-[3vw] py-16 relative overflow-hidden"
  >
    <div class="flex flex-col sm:flex-row items-center w-full max-w-5xl mx-auto gap-12 sm:gap-20">
      <div class="sm:w-2/3 text-base text-justify text-white/60">
        <h2 class="text-white reveal">About</h2>
        <p class="reveal" style="transition-delay: 0.1s">
          My path into UX started in software testing at a company building mobile
          and web apps for universities — used by tens of thousands of students.
          Analyzing new features naturally pulled me toward design: I started
          redesigning existing flows and creating my own, taking projects from
          initial wireframes through to high-fidelity prototypes in Figma.
        </p>
        <p class="reveal" style="transition-delay: 0.2s">
          I recently completed the Google UX Design Professional Certificate,
          covering the full design process from user research to testing. I bring
          a tester's eye to design — I think in edge cases and real user behavior,
          not just ideal flows.
        </p>
      </div>
      <div class="sm:w-1/3 flex justify-center items-center reveal" style="transition-delay: 0.15s">
        <div class="photo-wrap">
          <img
            src="../assets/pfp.jpg"
            alt="profile picture"
            class="photo"
          />
        </div>
      </div>
    </div>
    <ScrollTop />
  </div>
</template>

<script setup>
import { useReveal } from '../composables/useReveal'
useReveal()
</script>

<style scoped>
.about-bg {
  background: #0a0a0a;
}

.photo-wrap {
  position: relative;
  display: inline-block;
}


.photo-wrap::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(
    315deg,
    rgba(20, 184, 166, 0.5) 0%,
    rgba(20, 184, 166, 0.05) 50%,
    transparent 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.photo {
  display: block;
  max-height: 32vh;
  min-height: 200px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px;
  position: relative;
}

:deep(.p-scrolltop) {
  --p-scrolltop-background: rgba(255, 255, 255, 0.03);
  --p-scrolltop-hover-background: rgba(20, 184, 166, 0.15);
  --p-scrolltop-color: rgba(255, 255, 255, 0.35);
  --p-scrolltop-hover-color: rgba(20, 184, 166, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(8px);
}
</style>
