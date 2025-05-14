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
          Past Events
        </h1>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          Relive the moments from our previous conferences
        </p>
      </div>
    </section>

    <!-- Events Timeline -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="space-y-16">
            <div 
              v-for="(event, index) in pastEvents" 
              :key="index"
              class="relative"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 200 } }"
            >
              <!-- Timeline line -->
              <div class="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"></div>
              
              <!-- Event content -->
              <div class="relative pl-8">
                <!-- Timeline dot -->
                <div class="absolute left-0 top-0 w-3 h-3 bg-secondary-500 rounded-full transform -translate-x-1/2"></div>
                
                <div class="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden">
                  <img 
                    :src="event.image" 
                    :alt="event.title"
                    class="w-full h-64 object-cover"
                  />
                  <div class="p-6">
                    <div class="text-secondary-500 font-medium mb-2">{{ event.date }}</div>
                    <h2 class="text-2xl font-bold text-primary-800 dark:text-white mb-4">{{ event.title }}</h2>
                    <p class="text-gray-700 dark:text-gray-300 mb-6">{{ event.description }}</p>
                    
                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-4 mb-6">
                      <div class="text-center">
                        <div class="text-2xl font-bold text-secondary-500">{{ event.stats.attendees }}</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Attendees</div>
                      </div>
                      <div class="text-center">
                        <div class="text-2xl font-bold text-secondary-500">{{ event.stats.speakers }}</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Speakers</div>
                      </div>
                      <div class="text-center">
                        <div class="text-2xl font-bold text-secondary-500">{{ event.stats.workshops }}</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Workshops</div>
                      </div>
                    </div>
                    
                    <!-- Links -->
                    <div class="flex space-x-4">
                      <a 
                        v-if="event.photosLink"
                        :href="event.photosLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center text-secondary-500 hover:text-secondary-600"
                      >
                        <Icon name="ph:camera" class="mr-1" />
                        Photos
                      </a>
                      <a 
                        v-if="event.videosLink"
                        :href="event.videosLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center text-secondary-500 hover:text-secondary-600"
                      >
                        <Icon name="ph:play-circle" class="mr-1" />
                        Videos
                      </a>
                      <a 
                        v-if="event.presentationsLink"
                        :href="event.presentationsLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center text-secondary-500 hover:text-secondary-600"
                      >
                        <Icon name="ph:presentation" class="mr-1" />
                        Presentations
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          What Attendees Say
        </h2>
        <div 
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl p-6"
          >
            <div class="flex items-center mb-4">
              <img 
                :src="testimonial.image" 
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="font-bold text-primary-800 dark:text-white">{{ testimonial.name }}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">{{ testimonial.role }}</p>
              </div>
            </div>
            <p class="text-gray-700 dark:text-gray-300">{{ testimonial.quote }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 text-center">
        <div 
          class="max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6">
            Don't Miss BackendConf 2025
          </h2>
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join us for another unforgettable experience of learning and networking
          </p>
          <NuxtLink 
            to="/tickets" 
            class="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Get Your Early Bird Ticket
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const pastEvents = [
  {
    date: 'September 15-17, 2024',
    title: 'BackendConf 2024',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Our most successful conference yet, featuring groundbreaking talks on microservices, serverless architecture, and cloud-native development.',
    stats: {
      attendees: '950+',
      speakers: '45',
      workshops: '25'
    },
    photosLink: '#',
    videosLink: '#',
    presentationsLink: '#'
  },
  {
    date: 'September 20-22, 2023',
    title: 'BackendConf 2023',
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Focused on scalability and performance optimization, with expert talks on database design and system architecture.',
    stats: {
      attendees: '800+',
      speakers: '40',
      workshops: '20'
    },
    photosLink: '#',
    videosLink: '#',
    presentationsLink: '#'
  },
  {
    date: 'September 18-20, 2022',
    title: 'BackendConf 2022',
    image: 'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Our inaugural conference, bringing together backend developers from around the world to share knowledge and experiences.',
    stats: {
      attendees: '600+',
      speakers: '35',
      workshops: '15'
    },
    photosLink: '#',
    videosLink: '#',
    presentationsLink: '#'
  }
];

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Senior Backend Engineer at Netflix',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'BackendConf was an incredible experience. The quality of talks and networking opportunities were unmatched. I left with new insights and connections that have directly impacted my work.'
  },
  {
    name: 'Maria Garcia',
    role: 'Tech Lead at Spotify',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'The workshops were particularly valuable. Being able to get hands-on experience with new technologies while learning from industry experts was invaluable.'
  },
  {
    name: 'James Wilson',
    role: 'CTO at TechStartup',
    image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'As a company leader, BackendConf helped me stay current with the latest trends and best practices in backend development. The ROI was immediate.'
  }
];
</script>