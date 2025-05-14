<template>
  <ClientOnly>
    <header
      :class="[
        'fixed w-full z-50 transition-all duration-300',
        scrolled || !isHome
          ? 'bg-white dark:bg-gray-900 shadow-md py-4'
          : 'bg-transparent py-6',
      ]"
    >
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div
            class="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold text-lg">BC</span>
          </div>
          <div class="flex flex-col">
            <span
              :class="[
                'font-bold text-xl',
                scrolled || !isHome
                  ? 'text-primary-800 dark:text-white'
                  : isLightMode
                  ? 'text-primary-800'
                  : 'text-white',
              ]"
              >BackendConf</span
            >
            <i class="text-[10px] pl-3"> by Masteringbackend</i>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.path"
            :class="[
              'font-medium text-sm transition-colors duration-200',
              scrolled || !isHome
                ? 'text-gray-700 hover:text-secondary-500 dark:text-gray-300 dark:hover:text-secondary-400'
                : isLightMode
                ? 'text-gray-700 hover:text-secondary-500'
                : 'text-white hover:text-secondary-300',
            ]"
            @click="item.children && toggleDropdown(item.label)"
          >
            {{ item.label }}
          </NuxtLink>
          <button
            class="ml-4 bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            @click="navigateTo('/tickets')"
          >
            Get Tickets
          </button>
          <button
            @click="toggleColorMode"
            :class="[
              'p-2 rounded-full transition-colors duration-200',
              scrolled || !isHome
                ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                : isLightMode
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10',
            ]"
            aria-label="Toggle dark mode"
          >
            <Icon v-if="$colorMode.value === 'dark'" name="ph:sun" size="20" />
            <Icon v-else name="ph:moon" size="20" />
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen"
          :class="[
            'p-2 rounded-lg transition-colors duration-200',
            scrolled || !isHome
              ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              : isLightMode
              ? 'text-gray-700 hover:bg-gray-100'
              : 'text-white hover:bg-white/10',
          ]"
          aria-label="Toggle menu"
        >
          <Icon v-if="mobileMenuOpen" name="ph:x" size="24" />
          <Icon v-else name="ph:list" size="24" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full left-0 top-full"
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }"
      >
        <div class="container py-4 flex flex-col space-y-4">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.path"
            class="py-2 text-gray-700 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors duration-200"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <div
            class="flex space-x-4 pt-2 border-t border-gray-200 dark:border-gray-800"
          >
            <button
              class="flex-1 bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              @click="
                navigateTo('/tickets');
                mobileMenuOpen = false;
              "
            >
              Get Tickets
            </button>
            <button
              @click="toggleColorMode"
              class="p-2 rounded-full transition-colors duration-200 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              <Icon
                v-if="$colorMode.value === 'dark'"
                name="ph:sun"
                size="20"
              />
              <Icon v-else name="ph:moon" size="20" />
            </button>
          </div>
        </div>
      </div>
    </header>
  </ClientOnly>
</template>

<script setup>
const route = useRoute();
const $colorMode = useColorMode();

const isHome = computed(() => {
  return route.path === "/";
});

const isLightMode = computed(() => {
  return $colorMode.value === "light";
});

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Speakers", path: "/speakers" },
  { label: "Schedule", path: "/schedule" },
  { label: "Blog", path: "/blog" },
  { label: "Past Events", path: "/past-events" },
  { label: "Sponsors", path: "/sponsors" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const mobileMenuOpen = ref(false);
const scrolled = ref(false);

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});

function handleScroll() {
  scrolled.value = window.scrollY > 50;
}

function toggleColorMode() {
  $colorMode.preference = $colorMode.value === "dark" ? "light" : "dark";
}
</script>