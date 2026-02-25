<template>
  <div
    class="flex flex-col sm:flex-row items-center justify-center px-6 sm:px-[3vw] py-16 bg-white relative overflow-hidden"
  >
    <div class="sm:w-2/3 sm:pr-20 max-w-md text-black text-justify mb-10">
      <h1 class="">About</h1>
      <p>
        My path into UX started in software testing at a company building mobile
        and web apps for universities — used by tens of thousands of students.
        Analyzing new features naturally pulled me toward design: I started
        redesigning existing flows and creating my own, taking projects from
        initial wireframes through to high-fidelity prototypes in Figma.
      </p>
      <p>
        I recently completed the Google UX Design Professional Certificate,
        covering the full design process from user research to testing. I bring
        a tester's eye to design — I think in edge cases and real user behavior,
        not just ideal flows.
      </p>
    </div>
    <div class="sm:w-1/3 relative group">
      <div
        class="absolute -left-10 inset-y-4 z-10 bg-[#00FF44]/40 w-20 transition-transform duration-500 origin-center group-hover:scale-x-50"
      ></div>
      <img
        src="../assets/pfp.jpg"
        alt="profile picture"
        class="aspect-square max-h-[30vh] min-h-50 relative"
      />
    </div>
  </div>
</template>
