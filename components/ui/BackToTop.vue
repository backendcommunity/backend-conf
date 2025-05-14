<template>
  <transition name="fade">
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-secondary-500 hover:bg-secondary-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-40"
      aria-label="Back to top"
    >
      <Icon name="ph:arrow-up" size="24" />
    </button>
  </transition>
</template>

<script setup>
const showButton = ref(false);

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

function checkScroll() {
  showButton.value = window.scrollY > 500;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>