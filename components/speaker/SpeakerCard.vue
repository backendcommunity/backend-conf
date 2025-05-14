<template>
  <div 
    class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 * (index || 0) } }"
  >
    <div class="relative aspect-[3/4] overflow-hidden">
      <img 
        :src="speaker.image" 
        :alt="speaker.name"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
        <div class="flex space-x-2">
          <a 
            v-for="(link, platform) in speaker.social" 
            :key="platform"
            :href="link" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-secondary-400 transition-colors duration-200"
            :aria-label="`${speaker.name}'s ${platform}`"
          >
            <Icon :name="`ph:${platform}-logo`" size="18" />
          </a>
        </div>
      </div>
    </div>
    <div class="p-4">
      <h3 class="font-bold text-lg text-primary-800 dark:text-white mb-1">{{ speaker.name }}</h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">{{ speaker.role }}</p>
      <div class="bg-secondary-100 dark:bg-secondary-900 rounded px-3 py-1 inline-block">
        <p class="text-secondary-800 dark:text-secondary-300 text-xs font-medium">{{ speaker.topic }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  speaker: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
});
</script>