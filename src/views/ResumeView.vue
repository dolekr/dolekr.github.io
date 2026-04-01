<script setup lang="ts">
import TheFooter from '../components/TheFooter.vue'

const profile = `Software tester with a background in frontend development, UX design, IT analysis, and
project management. Working in a small development team has strengthened my sense of
responsibility and communication skills. Having naturally taken on multiple roles in one team,
I thrive in varied environments. Strong eye for detail, well suited to remote work.
Currently expanding expertise in AI tools. Temporarily relocating to Canada from May 2026.`

const experiences = [
  {
    company: 'Professional Development',
    location: null,
    period: 'April 2025 – present',
    roles: [
      {
        title: 'Frontend Dev & AI Tools',
        bullets: [
          'Frontend stack – HTML, CSS, Tailwind CSS, JavaScript, Vue.js, PrimeVue',
          'Collaborating on real-world frontend project under senior guidance',
          'Actively developing skills in AI tools and AI-assisted development',
        ],
      },
    ],
  },
  {
    company: 'CROSS Zlín, a.s.',
    location: 'Zlín',
    period: 'Oct 2024 – Mar 2025',
    roles: [
      {
        title: 'Software Tester',
        bullets: [
          'Department specialising in parking management software — vehicle barriers and payment kiosks supporting cash, card, QR, RFID, and licence plate recognition',
          'Tested the system\'s backend and frontend, hardware components, payment systems, and their correct integration',
          'Built a reusable test case library covering core product functionality, including parameterised test cases in Azure DevOps',
          'Regularly analysed system logs, used browser DevTools to investigate errors; occasionally used SQL and SSMS to verify server-side data',
          'Took part in backlog management, writing feature descriptions and release notes, sprint planning, and process improvements',
        ],
      },
    ],
  },
  {
    company: 'beecode, s.r.o.',
    location: 'Olomouc',
    period: 'Jan 2022 – Jul 2024',
    roles: [
      {
        title: 'Software Tester & Technical Support',
        bullets: [
          'Team developing native mobile apps (Android & iOS) for major Czech universities, used by tens of thousands of students',
          'Functional and non-functional testing of mobile and web apps, with occasional API testing',
          'Wrote and maintained test cases and test checklists',
          'Managed bug reports in ClickUp — logging, prioritising, and delegating to developers',
          'Provided technical support to students and clients via email, in-app reporting, or on-site meetings',
          'Wrote user manuals and release notes',
        ],
      },
      {
        title: 'IT Analyst & UI/UX Designer',
        bullets: [
          'Analysed business requirements and translated them into feature specifications',
          'Designed user interfaces for mobile and web applications',
          'Created wireframes and interactive prototypes in Figma',
          'Managed visual assets — icons, images, and logos for the applications',
          'Occasionally contributed to market analysis and sales strategy',
          'Created marketing content — social media posts, presentations, and product sheets in Canva',
        ],
      },
      {
        title: 'Scrum Master & Project Manager',
        bullets: [
          'Managed a small development team of 4–6 members using Agile methodology',
          'Maintained and prioritised the product backlog',
          'Facilitated daily standups and improved team communication',
          'Led sprint planning and roadmap planning; monitored progress toward long-term goals',
        ],
      },
    ],
  },
]

const education = [
  { year: '2025', title: 'Vue – The Complete Guide', institution: 'Udemy' },
  { year: '2025', title: 'The Web Developer Bootcamp', institution: 'Udemy' },
  { year: '2023–2025', title: 'Google UX Design Professional Certificate', institution: 'Coursera' },
  { year: '2022', title: 'Digital Academy: Testing', institution: 'Czechitas' },
  { year: '2022', title: 'Become a Coder', institution: 'Czechitas' },
  { year: '2019', title: 'English B2', institution: 'Academic & professional English, CZU' },
  { year: '2018–2021', title: 'Landscape Conservation & Use of Natural Resources, Bc.', institution: 'Czech University of Life Sciences in Prague' },
]

const skillGroups = [
  {
    category: 'Testing & QA',
    items: ['Test case design & management', 'Regression & exploratory testing', 'REST API Testing (Postman)', 'Basic SQL / SSMS'],
  },
  {
    category: 'Development',
    items: ['HTML / CSS / Tailwind CSS', 'JavaScript / Vue.js / PrimeVue', 'GitHub', 'Claude (AI-assisted dev)'],
  },
  {
    category: 'Design & Analysis',
    items: ['Figma & Canva', 'Wireframing & prototyping', 'UI/UX design', 'Technical writing'],
  },
  {
    category: 'Project Management',
    items: ['Agile methodology', 'Azure DevOps', 'ClickUp / Jira', 'Backlog & sprint planning'],
  },
  {
    category: 'Tools',
    items: ['Google Workspace', 'MS Office / LibreOffice', 'MS Teams / Slack'],
  },
]
</script>

<template>
  <div class="bg-base text-white min-h-screen">

    <!-- ── HERO HEADER ───────────────────────────────────────────── -->
    <header class="resume-hero relative overflow-hidden pt-28 pb-20 px-[8vw]">
      <!-- decorative teal glow blob -->
      <div class="pointer-events-none absolute right-[6vw] top-1/2 -translate-y-1/2 w-[40vw] h-[60%] rounded-full opacity-[0.06] blur-3xl bg-brand"></div>

      <div class="relative max-w-7xl mx-auto text-center">
        <!-- name -->
        <div class="fade-in">
          <div class="uppercase tracking-[0.12em] font-extralight leading-none text-white/90 text-[clamp(2.4rem,7vw,5rem)]">Kristyna</div>
          <div class="uppercase tracking-[0.12em] font-extralight leading-none text-white/90 text-[clamp(2.4rem,7vw,5rem)] mb-1">Dolezalova</div>
        </div>

        <!-- tagline -->
        <p class="mt-4 mb-8 text-white/35 tracking-[0.35em] uppercase text-[0.75rem] fade-in delay-1">
          QA &nbsp;·&nbsp; UX &nbsp;·&nbsp; PM &nbsp;·&nbsp; Frontend Dev &nbsp;·&nbsp; IT Analyst &nbsp;·&nbsp; Support
        </p>

        <!-- profile -->
        <p class="text-white/50 max-w-2xl text-[0.95rem] leading-[1.85] font-light whitespace-pre-line fade-in delay-2 mx-auto">{{ profile }}</p>
      </div>
    </header>

    <!-- ── RULED DIVIDER ─────────────────────────────────────────── -->
    <div class="h-px bg-linear-to-r from-transparent via-brand/25 to-transparent"></div>

    <!-- ── MAIN CONTENT ──────────────────────────────────────────── -->
    <main class="px-[8vw] py-16 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 max-w-7xl mx-auto">

      <!-- ── LEFT SIDEBAR ── -->
      <aside class="space-y-14">

        <!-- SKILLS -->
        <section>
          <div class="section-label">Skills</div>
          <div class="mt-5 space-y-5">
            <div v-for="group in skillGroups" :key="group.category">
              <div class="category-label">{{ group.category }}</div>
              <div class="mt-2 flex flex-wrap gap-1.5">
                <span
                  v-for="skill in group.items"
                  :key="skill"
                  class="skill-chip"
                >{{ skill }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- EDUCATION -->
        <section>
          <div class="section-label">Education</div>
          <div class="mt-5 space-y-3.5">
            <div
              v-for="edu in education"
              :key="edu.title"
              class="flex gap-5 group"
            >
              <span class="text-brand/40 text-[0.7rem] font-mono pt-0.5 min-w-[5rem] text-right leading-relaxed shrink-0">
                {{ edu.year }}
              </span>
              <div class="border-l border-white/8 pl-4 transition-colors duration-300 group-hover:border-brand/30">
                <div class="text-white/65 text-[0.9rem] font-light leading-snug">{{ edu.title }}</div>
                <div class="text-white/30 text-sm mt-0.5 font-light">{{ edu.institution }}</div>
              </div>
            </div>
          </div>
        </section>

      </aside>

      <!-- ── RIGHT: EXPERIENCE ── -->
      <section>
        <div class="section-label mb-8">Experience</div>

        <div class="space-y-0">
          <div
            v-for="exp in experiences"
            :key="exp.company"
            class="flex gap-6 group/exp"
          >
            <!-- timeline spine -->
            <div class="flex flex-col items-center shrink-0 pt-[5px]">
              <div class="timeline-dot"></div>
              <div class="w-px flex-1 mt-2 min-h-8 bg-linear-to-b from-white/12 to-transparent"></div>
            </div>

            <!-- content block -->
            <div class="pb-12 min-w-0">
              <!-- company + location -->
              <div class="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5 mb-0.5">
                <span class="text-white/85 font-light text-[1.05rem]">{{ exp.company }}</span>
                <span v-if="exp.location" class="text-white/25 text-sm">{{ exp.location }}</span>
              </div>
              <!-- period -->
              <div class="text-brand/50 text-[0.7rem] font-mono tracking-widest mb-5">{{ exp.period }}</div>

              <!-- roles -->
              <div
                v-for="(role, ri) in exp.roles"
                :key="role.title"
                :class="ri > 0 ? 'mt-6' : ''"
              >
                <!-- role badge -->
                <div class="role-badge">
                  <span class="role-tick"></span>
                  {{ role.title }}
                </div>

                <!-- bullets -->
                <ul class="mt-2.5 space-y-1.5">
                  <li
                    v-for="bullet in role.bullets"
                    :key="bullet"
                    class="flex gap-2.5 text-white/40 text-[0.9rem] font-light leading-[1.65]"
                  >
                    <span class="text-brand/30 shrink-0 mt-0.5 select-none">›</span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
/* ── hero background (matches TheMenu hero-bg) ──────────────── */
.resume-hero {
  background:
    radial-gradient(ellipse 55% 70% at 90% 50%, rgba(20, 184, 166, 0.10) 0%, transparent 65%),
    linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    #0a0a0a;
  background-size: 100% 100%, 60px 60px, 60px 60px;
}

/* ── section label ──────────────────────────────────────────── */
.section-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
}
.section-label::after {
  content: '';
  display: block;
  width: 1.5rem;
  height: 1px;
  background: rgba(20, 184, 166, 0.45);
  flex-shrink: 0;
}

/* ── category label ─────────────────────────────────────────── */
.category-label {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.22);
}

/* ── skill chip ─────────────────────────────────────────────── */
.skill-chip {
  display: inline-block;
  padding: 0.25rem 0.7rem;
  font-size: 0.78rem;
  font-weight: 300;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.5);
  border-radius: 0.2rem;
  transition: border-color 0.25s, color 0.25s, background 0.25s;
  cursor: default;
  line-height: 1.6;
}
.skill-chip:hover {
  border-color: rgba(20, 184, 166, 0.28);
  color: rgba(255, 255, 255, 0.78);
  background: rgba(20, 184, 166, 0.05);
}

/* ── timeline dot ───────────────────────────────────────────── */
.timeline-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(20, 184, 166, 0.7);
  flex-shrink: 0;
  box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.12), 0 0 10px rgba(20, 184, 166, 0.35);
  transition: box-shadow 0.3s;
}
.group\/exp:hover .timeline-dot {
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.18), 0 0 16px rgba(20, 184, 166, 0.55);
}

/* ── role badge ─────────────────────────────────────────────── */
.role-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(20, 184, 166, 0.6);
  padding: 0.25rem 0.6rem 0.25rem 0.4rem;
  border: 1px solid rgba(20, 184, 166, 0.15);
  background: rgba(20, 184, 166, 0.04);
  border-radius: 0.2rem;
}
.role-tick {
  display: block;
  width: 0.5rem;
  height: 1px;
  background: rgba(20, 184, 166, 0.4);
  flex-shrink: 0;
}

/* ── entrance animations ────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-in        { animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) both; }
.delay-1        { animation-delay: 0.12s; }
.delay-2        { animation-delay: 0.24s; }
</style>
