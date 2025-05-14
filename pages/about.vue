<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-primary-800 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1
          class="text-4xl md:text-5xl font-bold text-white mb-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          About BackendConf
        </h1>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          The premier conference for backend engineers and developers, organized by Masteringbackend
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 
            class="text-3xl font-bold text-primary-800 dark:text-white mb-6"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            Our Mission
          </h2>
          <p 
            class="text-lg text-gray-700 dark:text-gray-300 mb-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            BackendConf aims to bring together the brightest minds in backend development to share knowledge, 
            inspire innovation, and build a stronger community. We believe in fostering an environment where 
            developers can learn, network, and grow their careers.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="text-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
          >
            <div class="text-4xl font-bold text-secondary-500 mb-2">{{ stat.value }}</div>
            <div class="text-gray-700 dark:text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Meet the Team
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div 
            v-for="(member, index) in team" 
            :key="index"
            class="text-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
          >
            <div class="relative w-48 h-48 mx-auto mb-4">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-1">{{ member.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">{{ member.role }}</p>
            <div class="flex justify-center space-x-3">
              <a 
                v-for="(link, platform) in member.social" 
                :key="platform"
                :href="link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 hover:text-secondary-500 transition-colors duration-200"
              >
                <Icon :name="`ph:${platform}-logo`" size="20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Our Values
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(value, index) in values" 
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl p-6"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
          >
            <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mb-4">
              <Icon :name="value.icon" class="text-secondary-500" size="24" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-3">{{ value.title }}</h3>
            <p class="text-gray-700 dark:text-gray-300">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-800">
      <div class="container mx-auto px-4 text-center">
        <div 
          class="max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us at BackendConf 2025
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Be part of the most exciting backend development event of the year
          </p>
          <NuxtLink 
            to="/tickets" 
            class="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Get Your Ticket
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { value: '1000+', label: 'Attendees' },
  { value: '50+', label: 'Expert Speakers' },
  { value: '30+', label: 'Workshops' },
  { value: '3', label: 'Days of Learning' }
];

const team = [
  {
    name: 'John Smith',
    role: 'Conference Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'Program Manager',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=300',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Emily Brown',
    role: 'Community Manager',
    image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=300',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  }
];

const values = [
  {
    icon: 'ph:lightbulb',
    title: 'Innovation',
    description: 'We believe in pushing the boundaries of what\'s possible in backend development and fostering innovative solutions.'
  },
  {
    icon: 'ph:users-three',
    title: 'Community',
    description: 'Building and nurturing a strong, inclusive community of backend developers is at the heart of everything we do.'
  },
  {
    icon: 'ph:star',
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of the conference, from content quality to attendee experience.'
  }
];
</script>