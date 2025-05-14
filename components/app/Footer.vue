<template>
  <footer
    class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <div
              class="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-bold text-lg">B</span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-xl text-primary-800 dark:text-white"
                >BackendConf</span
              ><i class="text-[10px] pl-3"> by Masteringbackend</i>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            The premier conference for backend engineers and developers. Join us
            to learn, network, and grow your backend skills.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors duration-200 shadow-sm"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" size="20" />
            </a>
          </div>
        </div>
        <div class="col-span-1">
          <h3 class="font-bold text-lg text-primary-800 dark:text-white mb-6">
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in quickLinks" :key="index">
              <NuxtLink
                :to="link.url"
                class="text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors duration-200"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-span-1">
          <h3 class="font-bold text-lg text-primary-800 dark:text-white mb-6">
            Resources
          </h3>
          <ul class="space-y-3">
            <li v-for="(resource, index) in resources" :key="index">
              <NuxtLink
                :to="resource.url"
                class="text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors duration-200"
              >
                {{ resource.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-span-1">
          <h3 class="font-bold text-lg text-primary-800 dark:text-white mb-6">
            Subscribe
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Join our newsletter to stay updated on upcoming events and
            announcements.
          </p>
          <form
            @submit.prevent="subscribeToNewsletter"
            class="flex flex-col space-y-3"
          >
            <input
              type="email"
              v-model="email"
              placeholder="Your email address"
              class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400"
              required
            />
            <button
              type="submit"
              class="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div
        class="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} BackendConf. All rights
          reserved. Organized by
          <a
            class="hover:text-secondary-500 dark:hover:text-secondary-400"
            href="https://masteringbackend.com?ref=backendconf"
            >Masteringbackend.</a
          >
        </p>
        <div class="flex space-x-6">
          <NuxtLink
            v-for="(link, index) in legalLinks"
            :key="index"
            :to="link.url"
            class="text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400 text-sm transition-colors duration-200"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const email = ref("");

const socials = [
  { name: "Twitter", icon: "ph:twitter-logo", url: "https://twitter.com" },
  { name: "LinkedIn", icon: "ph:linkedin-logo", url: "https://linkedin.com" },
  { name: "GitHub", icon: "ph:github-logo", url: "https://github.com" },
  { name: "YouTube", icon: "ph:youtube-logo", url: "https://youtube.com" },
];

const quickLinks = [
  { label: "Home", url: "/" },
  { label: "Speakers", url: "/speakers" },
  { label: "Schedule", url: "/schedule" },
  { label: "Get Tickets", url: "/tickets" },
  { label: "Venue", url: "/venue" },
];

const resources = [
  { label: "Blog", url: "/blog" },
  { label: "Past Events", url: "/past-events" },
  { label: "Become a Sponsor", url: "/sponsors" },
  { label: "FAQs", url: "/faqs" },
  { label: "Contact Us", url: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", url: "/privacy-policy" },
  { label: "Terms of Service", url: "/terms-of-service" },
  { label: "Code of Conduct", url: "/code-of-conduct" },
];

function subscribeToNewsletter() {
  // In a real implementation, this would send the email to a newsletter service
  alert(`Thank you for subscribing with ${email.value}!`);
  email.value = "";
}
</script>