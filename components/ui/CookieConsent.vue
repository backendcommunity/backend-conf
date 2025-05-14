<template>
  <ClientOnly>
    <div 
      v-if="visible"
      class="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 p-4 border-t border-gray-200 dark:border-gray-700"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
    >
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="mb-4 md:mb-0 md:mr-8">
          <p class="text-gray-700 dark:text-gray-300">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div class="flex space-x-3">
          <button
            @click="$emit('decline')"
            class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors duration-200"
          >
            Decline
          </button>
          <button
            @click="$emit('accept')"
            class="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-colors duration-200"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  delay: {
    type: Number,
    default: 1000
  }
});

const visible = ref(false);

onMounted(() => {
  setTimeout(() => {
    visible.value = true;
  }, props.delay);
});

defineEmits(['accept', 'decline']);
</script>