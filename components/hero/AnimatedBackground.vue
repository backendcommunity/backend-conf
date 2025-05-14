<template>
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-800/90 z-10"></div>
    <div class="relative w-full h-full">
      <div v-for="circle in circles" :key="circle.id" 
        class="absolute rounded-full"
        :style="{
          width: `${circle.size}px`,
          height: `${circle.size}px`,
          left: `${circle.x}%`,
          top: `${circle.y}%`,
          animationDelay: `${circle.delay}s`,
          animationDuration: `${circle.duration}s`,
          background: `radial-gradient(circle at center, ${circle.color}, transparent 70%)`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const circles = ref([]);

const colors = [
  'rgba(19, 174, 206, 0.15)', // secondary-500 with lower opacity
  'rgba(71, 219, 239, 0.1)',  // secondary-300 with lower opacity
  'rgba(255, 255, 255, 0.05)' // white with very low opacity
];

onMounted(() => {
  circles.value = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 400 + 200, // Larger circles
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 15 + 15, // Slower animation
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
});
</script>

<style scoped>
.rounded-full {
  animation: float linear infinite;
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    transform: translate(-30px, -30px) scale(1.1);
    opacity: 0.3;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
}
</style>