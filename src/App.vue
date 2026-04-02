<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute, useRouter, RouterView, RouterLink } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeItem = ref('home')
const scrolled = ref(false)
const pendingScroll = ref<string | null>(null)

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
      // setTimeout(0) ensures all child components have mounted their DOM elements
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
  if (route.path === '/') {
    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    pendingScroll.value = item
    router.push({ path: '/' })
  }
}

const navBg = () => scrolled.value
</script>

<template>
  <div class="bg-base">
    <nav
      class="flex w-full items-center justify-center sm:justify-end pl-[8vw] pr-[4vw] h-14 fixed z-50 transition duration-300 ease-in-out"
      :class="navBg() ? 'bg-black/50 backdrop-blur-sm shadow-lg' : ''"
    >
      <ul class="flex items-center gap-4 list-none">
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
            @click="activeItem = 'resume'"
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
    <RouterView />
  </div>
</template>
