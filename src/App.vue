<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute, useRouter, RouterView, RouterLink } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeItem = ref('home')
const scrolled = ref(false)
const pendingScroll = ref<string | null>(null)
let scrollingTimer: ReturnType<typeof setTimeout> | null = null
let isScrolling = false
const menuOpen = ref(false)

const sectionItems = ['home', 'about', 'projects', 'contact']
const allNavItems = ['home', 'about', 'projects', 'resume']

function onScroll() {
  scrolled.value = window.scrollY > 0
}

let observer: IntersectionObserver | null = null

function setupObserver() {
  observer?.disconnect()
  observer = new IntersectionObserver(
    (entries) => {
      if (isScrolling) return
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeItem.value = entry.target.id
      })
    },
    { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
  )
  sectionItems.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })
}

watch(
  () => route.path,
  (path) => {
    if (path === '/resume') {
      activeItem.value = 'resume'
      observer?.disconnect()
    } else {
      nextTick(() => setupObserver())
    }
  },
  { flush: 'post' },
)

let removeAfterEach: (() => void) | null = null

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  if (route.path === '/resume') {
    activeItem.value = 'resume'
  } else {
    setupObserver()
  }

  removeAfterEach = router.afterEach((to) => {
    if (to.path === '/' && pendingScroll.value) {
      const target = pendingScroll.value
      pendingScroll.value = null
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
  removeAfterEach?.()
})

function handleSectionClick(item: string) {
  activeItem.value = item
  menuOpen.value = false
  isScrolling = true
  if (scrollingTimer) clearTimeout(scrollingTimer)
  scrollingTimer = setTimeout(() => { isScrolling = false }, 1000)
  if (route.path === '/') {
    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    pendingScroll.value = item
    router.push({ path: '/' })
  }
}

function handleResumeClick() {
  activeItem.value = 'resume'
  menuOpen.value = false
}

const navBg = () => scrolled.value
</script>

<template>
  <div class="bg-base">
    <!-- single fixed container for nav + mobile dropdown sharing one blur surface -->
    <div
      class="fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out"
      :class="(navBg() || menuOpen) ? 'bg-black/50 backdrop-blur-sm shadow-lg' : ''"
    >
      <nav class="flex w-full items-center justify-end pl-[8vw] pr-[4vw] h-14">
        <!-- hamburger button (mobile only) -->
        <button
          class="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 bg-transparent border-none cursor-pointer"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <span
            class="block w-5 h-px bg-white/60 transition-all duration-300"
            :class="menuOpen ? 'rotate-45 translate-y-1.75' : ''"
          ></span>
          <span
            class="block w-5 h-px bg-white/60 transition-all duration-300"
            :class="menuOpen ? 'opacity-0' : ''"
          ></span>
          <span
            class="block w-5 h-px bg-white/60 transition-all duration-300"
            :class="menuOpen ? '-rotate-45 -translate-y-1.75' : ''"
          ></span>
        </button>

        <!-- desktop nav -->
        <ul class="hidden sm:flex items-center gap-4 list-none">
          <li v-for="item in allNavItems" :key="item">
            <RouterLink
              v-if="item === 'resume'"
              to="/resume"
              class="px-4 py-2 border rounded-md transition duration-400 ease-in-out font-light"
              :class="
                activeItem === 'resume'
                  ? 'border-white/40 text-white/80 hover:text-white'
                  : 'border-transparent text-white/50 hover:text-white/80'
              "
              @click="handleResumeClick"
            >resume</RouterLink>
            <button
              v-else
              class="px-4 py-2 border rounded-md transition duration-400 ease-in-out font-light cursor-pointer bg-transparent"
              :class="
                activeItem === item
                  ? 'border-white/40 text-white/80 hover:text-white'
                  : 'border-transparent text-white/50 hover:text-white/80'
              "
              @click="handleSectionClick(item)"
            >{{ item }}</button>
          </li>
        </ul>
      </nav>

      <!-- mobile dropdown menu -->
      <Transition name="menu">
        <div
          v-if="menuOpen"
          class="sm:hidden border-t border-white/8 py-4 px-[8vw] flex flex-col gap-2"
        >
          <template v-for="item in allNavItems" :key="item">
            <RouterLink
              v-if="item === 'resume'"
              to="/resume"
              class="px-4 py-3 border rounded-md transition duration-200 font-light text-center"
              :class="
                activeItem === 'resume'
                  ? 'border-white/40 text-white/80'
                  : 'border-transparent text-white/50 hover:text-white/80'
              "
              @click="handleResumeClick"
            >resume</RouterLink>
            <button
              v-else
              class="px-4 py-3 border rounded-md transition duration-200 font-light cursor-pointer bg-transparent text-center w-full"
              :class="
                activeItem === item
                  ? 'border-white/40 text-white/80'
                  : 'border-transparent text-white/50 hover:text-white/80'
              "
              @click="handleSectionClick(item)"
            >{{ item }}</button>
          </template>
        </div>
      </Transition>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
