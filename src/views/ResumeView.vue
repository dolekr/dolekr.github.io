<script setup lang="ts">
import { useTemplateRef } from 'vue'
import TheFooter from '../components/TheFooter.vue'
import SectionDivider from '../components/SectionDivider.vue'
import { education, experiences, profile, skillGroups } from '../data/resume'
import { useReveal } from '../composables/useReveal'

useReveal(useTemplateRef('root'))
</script>

<template>
  <div ref="root" class="bg-base text-white min-h-screen">
    <!-- ── HERO HEADER ───────────────────────────────────────────── -->
    <header class="resume-hero relative overflow-hidden pt-28 pb-20 px-[8vw]">
      <!-- decorative teal glow blob -->
      <div
        class="pointer-events-none absolute right-0 bottom-0 translate-y-1/2 w-[35vw] h-[25vw] rounded-full opacity-[0.05] blur-3xl bg-brand"
      ></div>

      <div class="relative max-w-7xl mx-auto text-center">
        <!-- name -->
        <h1 class="fade-in">
          <span
            class="block uppercase tracking-[0.12em] font-extralight leading-none text-brand text-[clamp(2.4rem,7vw,5rem)]"
          >
            Kristyna
          </span>
          <span
            class="block uppercase tracking-[0.12em] font-extralight leading-none text-brand text-[clamp(2.4rem,7vw,5rem)] mb-1"
          >
            Dolezalova
          </span>
        </h1>

        <!-- tagline -->
        <p
          class="mt-4 mb-8 text-white/35 tracking-[0.35em] uppercase text-[0.75rem] fade-in fade-delay-1"
        >
          QA &nbsp;·&nbsp; UX &nbsp;·&nbsp; PM &nbsp;·&nbsp; Frontend Dev
          &nbsp;·&nbsp; IT Analyst &nbsp;·&nbsp; Support
        </p>

        <!-- profile -->
        <p
          class="text-white/50 max-w-2xl text-[0.95rem] leading-[1.85] font-light whitespace-pre-line fade-in fade-delay-2 mx-auto"
        >
          {{ profile }}
        </p>
      </div>
    </header>

    <!-- ── RULED DIVIDER ─────────────────────────────────────────── -->
    <SectionDivider />

    <!-- ── MAIN CONTENT ──────────────────────────────────────────── -->
    <main
      class="px-[8vw] py-16 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 max-w-7xl mx-auto"
    >
      <!-- ── LEFT SIDEBAR ── -->
      <aside class="flex flex-col gap-14 order-2 lg:order-1">
        <!-- SKILLS -->
        <section class="order-2 reveal">
          <h2 class="section-label mb-0">Skills</h2>
          <div class="mt-5 space-y-5">
            <div v-for="group in skillGroups" :key="group.category">
              <h3 class="category-label">{{ group.category }}</h3>
              <div class="mt-2 flex flex-wrap gap-1.5">
                <span
                  v-for="skill in group.items"
                  :key="skill"
                  class="skill-chip"
                  >{{ skill }}</span
                >
              </div>
            </div>
          </div>
        </section>

        <!-- EDUCATION -->
        <section class="order-1 reveal">
          <h2 class="section-label mb-0">Education</h2>
          <div class="mt-5 space-y-3.5">
            <div
              v-for="edu in education"
              :key="edu.title"
              class="flex gap-5 group"
            >
              <span
                class="text-brand/40 text-[0.7rem] font-mono pt-0.5 min-w-[5rem] text-right leading-relaxed shrink-0"
              >
                {{ edu.year }}
              </span>
              <div
                class="border-l border-white/8 pl-4 transition-colors duration-300 group-hover:border-brand/30"
              >
                <div
                  class="text-white/65 text-[0.9rem] font-light leading-snug"
                >
                  {{ edu.title }}
                </div>
                <div class="text-white/30 text-sm mt-0.5 font-light">
                  {{ edu.institution }}
                </div>
              </div>
            </div>
          </div>
        </section>
      </aside>

      <!-- ── RIGHT: EXPERIENCE ── -->
      <section class="order-1 lg:order-2">
        <h2 class="section-label mb-8">Experience</h2>

        <div class="space-y-0">
          <div
            v-for="exp in experiences"
            :key="exp.company"
            class="flex gap-6 group/exp reveal"
          >
            <!-- timeline spine -->
            <div class="flex flex-col items-center shrink-0 pt-[5px]">
              <div class="timeline-dot"></div>
              <div
                class="w-px flex-1 mt-2 min-h-8 bg-linear-to-b from-white/12 to-transparent"
              ></div>
            </div>

            <!-- content block -->
            <div class="pb-12 min-w-0">
              <!-- company + location -->
              <div
                class="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5 mb-0.5"
              >
                <span class="text-white/85 font-light text-[1.05rem]">{{
                  exp.company
                }}</span>
                <span v-if="exp.location" class="text-white/25 text-sm">{{
                  exp.location
                }}</span>
              </div>
              <!-- period -->
              <div
                class="text-brand/50 text-[0.7rem] font-mono tracking-widest mb-5"
              >
                {{ exp.period }}
              </div>

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
                    <span class="text-brand/30 shrink-0 mt-0.5 select-none"
                      >›</span
                    >
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
/* ── hero background (matches HeroSection hero-bg) ──────────────── */
.resume-hero {
  background:
    radial-gradient(
      ellipse 55% 70% at 90% 50%,
      color-mix(in srgb, var(--color-brand) 10%, transparent) 0%,
      transparent 65%
    ),
    linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    var(--color-base);
  background-size:
    100% 100%,
    60px 60px,
    60px 60px;
}

/* ── section label ──────────────────────────────────────────── */
.section-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.7rem;
  font-weight: inherit;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
}
.section-label::after {
  content: '';
  display: block;
  width: 1.5rem;
  height: 1px;
  background: color-mix(in srgb, var(--color-brand) 45%, transparent);
  flex-shrink: 0;
}

/* ── category label ─────────────────────────────────────────── */
.category-label {
  font-size: 0.68rem;
  font-weight: inherit;
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
  transition:
    border-color 0.25s,
    color 0.25s,
    background 0.25s;
  cursor: default;
  line-height: 1.6;
}
.skill-chip:hover {
  border-color: color-mix(in srgb, var(--color-brand) 28%, transparent);
  color: rgba(255, 255, 255, 0.78);
  background: color-mix(in srgb, var(--color-brand) 5%, transparent);
}

/* ── timeline dot ───────────────────────────────────────────── */
.timeline-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-brand) 70%, transparent);
  flex-shrink: 0;
  box-shadow:
    0 0 0 2px color-mix(in srgb, var(--color-brand) 12%, transparent),
    0 0 10px color-mix(in srgb, var(--color-brand) 35%, transparent);
  transition: box-shadow 0.3s;
}
.group\/exp:hover .timeline-dot {
  box-shadow:
    0 0 0 3px color-mix(in srgb, var(--color-brand) 18%, transparent),
    0 0 16px color-mix(in srgb, var(--color-brand) 55%, transparent);
}

/* ── role badge ─────────────────────────────────────────────── */
.role-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-brand) 60%, transparent);
  padding: 0.25rem 0.6rem 0.25rem 0.4rem;
  border: 1px solid color-mix(in srgb, var(--color-brand) 15%, transparent);
  background: color-mix(in srgb, var(--color-brand) 4%, transparent);
  border-radius: 0.2rem;
}
.role-tick {
  display: block;
  width: 0.5rem;
  height: 1px;
  background: color-mix(in srgb, var(--color-brand) 40%, transparent);
  flex-shrink: 0;
}
</style>
