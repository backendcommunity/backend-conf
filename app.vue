<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
  >
    <AppHeader />
    <main class="pt-20">
      <NuxtPage />
    </main>
    <AppFooter />
    <CookieConsent
      v-if="showCookieConsent"
      @accept="acceptCookies"
      @decline="declineCookies"
    />
    <BackToTop />
  </div>
</template>

<script setup>
import BackToTop from "~/components/ui/BackToTop.vue";
import CookieConsent from "~/components/ui/CookieConsent.vue";
const showCookieConsent = ref(false);

onMounted(() => {
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");
  if (!cookiesAccepted) {
    showCookieConsent.value = true;
  }
});

function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  showCookieConsent.value = false;
}

function declineCookies() {
  localStorage.setItem("cookiesAccepted", "false");
  showCookieConsent.value = false;
}
</script>