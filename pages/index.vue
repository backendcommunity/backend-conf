<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-primary-800"
    >
      <!-- Animated Background -->
      <WorldBackground />

      <!-- Content -->

      <div class="container relative z-10 text-center px-4">
        <div class="py-4 flex items-center justify-center">
          <p class="text-lg">From the creators of</p>
          <a href="https://masteringbackend.com?ref=backendconf">
            <img
              src="~/assets/img/mb-logo.png"
              alt="Masteringbackend"
              class="w-40 h-auto"
            />
          </a>
        </div>
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 200 },
          }"
        >
          <span class="block">The Premier Conference for</span>
          <span class="text-secondary-400">Backend Developers</span>
        </h1>

        <p
          class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 400 },
          }"
        >
          Join 1000+ backend engineers and industry leaders for 3 days of
          learning, networking, and career growth.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 600 },
          }"
        >
          <NuxtLink
            to="/tickets"
            class="bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 text-lg"
          >
            Get Your Ticket
          </NuxtLink>
          <NuxtLink
            to="/schedule"
            class="bg-transparent hover:bg-white/10 text-white border border-white border-opacity-30 font-medium px-8 py-3 rounded-lg transition-colors duration-200 text-lg"
          >
            View Schedule
          </NuxtLink>
        </div>

        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-8 inline-block"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 800 },
          }"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                20-22
              </div>
              <div class="text-secondary-400 text-lg">September 2025</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                San Francisco
              </div>
              <div class="text-secondary-400 text-lg">Moscone Center</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                50+
              </div>
              <div class="text-secondary-400 text-lg">Expert Speakers</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 800, delay: 1000 } }"
      >
        <Icon name="ph:arrow-down" size="32" />
      </div>
    </section>

    <!-- Featured Speakers -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            Featured Speakers
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 200 },
            }"
          >
            Learn from industry experts who are shaping the future of backend
            development
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 400 },
          }"
        >
          <SpeakerCard
            v-for="(speaker, index) in featuredSpeakers"
            :key="index"
            :speaker="speaker"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/speakers"
            class="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-medium"
          >
            View All Speakers
            <Icon name="ph:arrow-right" class="ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Event Highlights -->
    <section class="py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            Event Highlights
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 200 },
            }"
          >
            Three days of immersive learning, networking, and collaboration
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 400 },
          }"
        >
          <div
            v-for="(highlight, index) in highlights"
            :key="index"
            class="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div
              class="w-12 h-12 rounded-lg bg-secondary-100 dark:bg-secondary-900 flex items-center justify-center mb-4"
            >
              <Icon
                :name="highlight.icon"
                class="text-secondary-500"
                size="24"
              />
            </div>
            <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-3">
              {{ highlight.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ highlight.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Preview -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            Schedule Preview
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 200 },
            }"
          >
            Take a peek at some of our featured sessions
          </p>
        </div>

        <div
          class="bg-white dark:bg-gray-950 rounded-xl shadow-md overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 400 },
          }"
        >
          <div
            class="border-b border-gray-200 dark:border-gray-800 p-4 bg-gray-100 dark:bg-gray-900"
          >
            <div class="flex items-center justify-between">
              <div class="font-medium text-primary-800 dark:text-white">
                Day 1 - Sept 20, 2025
              </div>
              <NuxtLink
                to="/schedule"
                class="text-sm text-secondary-500 hover:text-secondary-600 flex items-center"
              >
                Full Schedule
                <Icon name="ph:arrow-right" class="ml-1" size="16" />
              </NuxtLink>
            </div>
          </div>

          <div>
            <div
              v-for="(session, index) in scheduleSample"
              :key="index"
              class="p-4 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
            >
              <div
                class="flex flex-col sm:flex-row sm:items-center justify-between mb-2"
              >
                <div class="text-secondary-500 font-medium">
                  {{ session.time }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ session.track }}
                </div>
              </div>
              <h3 class="text-lg font-bold text-primary-800 dark:text-white">
                {{ session.title }}
              </h3>
              <div class="mt-2 flex items-center">
                <img
                  :src="session.speakerImage"
                  :alt="session.speaker"
                  class="w-8 h-8 rounded-full object-cover mr-2"
                />
                <span class="text-gray-600 dark:text-gray-400">{{
                  session.speaker
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsors -->
    <section class="py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            Our Sponsors
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 200 },
            }"
          >
            BackendConf is made possible by the support of these amazing
            companies
          </p>

          <NuxtLink
            to="/sponsors"
            class="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 300 },
            }"
          >
            Become a Sponsor
          </NuxtLink>
        </div>

        <div class="space-y-10">
          <!-- Platinum Sponsors -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 400 },
            }"
          >
            <h3
              class="text-xl font-bold text-center text-primary-800 dark:text-white mb-8"
            >
              Platinum Sponsors
            </h3>
            <div class="flex flex-wrap justify-center gap-8">
              <div
                v-for="(sponsor, index) in platinumSponsors"
                :key="index"
                class="w-48 h-24 flex items-center justify-center bg-gray-50 dark:bg-gray-900 filter grayscale dark:grayscale-0 rounded-lg p-4 filter grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  :src="sponsor.logo"
                  :alt="sponsor.name"
                  class="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>

          <!-- Gold Sponsors -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 500 },
            }"
          >
            <h3
              class="text-xl font-bold text-center text-primary-800 dark:text-white mb-8"
            >
              Gold Sponsors
            </h3>
            <div class="flex flex-wrap justify-center gap-6">
              <div
                v-for="(sponsor, index) in goldSponsors"
                :key="index"
                class="w-36 h-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900 filter grayscale dark:grayscale-0 rounded-lg p-4 filter grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  :src="sponsor.logo"
                  :alt="sponsor.name"
                  class="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-primary-800 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full">
        <div
          class="w-full h-full bg-gradient-to-br from-primary-900 to-primary-800 opacity-70"
        ></div>
        <!-- Background pattern -->
        <div
          class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(19,174,206,0.1)_0,_transparent_40%)] bg-[length:40px_40px]"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div
          class="max-w-3xl mx-auto text-center"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <h2
            class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Join the Backend Community?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Secure your spot at BackendConf and be part of the most exciting
            backend development event of the year.
          </p>
          <NuxtLink
            to="/tickets"
            class="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg"
          >
            Get Your Ticket Now
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import the new component
import WorldBackground from "~/components/hero/WorldBackground.vue";

// Featured speakers data
const featuredSpeakers = [
  {
    name: "Sarah Johnson",
    role: "Principal Engineer at Google",
    image:
      "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300",
    topic: "Scaling Microservices Architecture",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO at ServerStack",
    image:
      "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=300",
    topic: "The Future of Serverless Computing",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Priya Patel",
    role: "Engineering Director at Netflix",
    image:
      "https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=300",
    topic: "Building Resilient Backend Systems",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "David Wilson",
    role: "Lead Architect at AWS",
    image:
      "https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=300",
    topic: "Cloud-Native Database Solutions",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
];

// Event highlights
const highlights = [
  {
    title: "Technical Workshops",
    description:
      "Hands-on sessions led by industry experts covering the latest backend technologies and methodologies.",
    icon: "ph:code",
  },
  {
    title: "Networking Events",
    description:
      "Connect with like-minded professionals, potential collaborators, and industry leaders in a relaxed setting.",
    icon: "ph:users-three",
  },
  {
    title: "Expert Panels",
    description:
      "Thought-provoking discussions on the future of backend development, challenges, and opportunities.",
    icon: "ph:chats-circle",
  },
];

// Schedule sample
const scheduleSample = [
  {
    time: "9:00 AM - 10:00 AM",
    title: "Keynote: The Evolution of Backend Architecture",
    speaker: "Sarah Johnson",
    speakerImage:
      "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300",
    track: "Main Stage",
  },
  {
    time: "10:30 AM - 11:30 AM",
    title: "Building Scalable APIs with GraphQL",
    speaker: "Michael Chen",
    speakerImage:
      "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=300",
    track: "Track A",
  },
  {
    time: "1:00 PM - 2:00 PM",
    title: "Database Performance Optimization Techniques",
    speaker: "Priya Patel",
    speakerImage:
      "https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=300",
    track: "Track B",
  },
];

// Sponsors
const platinumSponsors = [
  {
    name: "AWS",
    logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg",
  },
];

const goldSponsors = [
  {
    name: "MongoDB",
    logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
  },
  {
    name: "Redis",
    logo: "https://www.vectorlogo.zone/logos/redis/redis-ar21.svg",
  },
  {
    name: "Docker",
    logo: "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
  },
  {
    name: "Kubernetes",
    logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg",
  },
];
</script>