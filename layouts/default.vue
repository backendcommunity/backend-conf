<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
// Default layout component
</script>