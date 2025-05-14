<template>
  <div>
    <div v-if="speaker">
      <!-- Hero Section -->
      <section class="bg-primary-800 py-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row md:items-center md:space-x-12">
            <div 
              class="mb-8 md:mb-0 md:w-1/3 flex justify-center"
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            >
              <div class="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  :src="speaker.image" 
                  :alt="speaker.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div 
              class="md:w-2/3"
              v-motion
              :initial="{ opacity: 0, x: 20 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            >
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ speaker.name }}</h1>
              <p class="text-xl text-secondary-400 mb-4">{{ speaker.role }} at {{ speaker.company }}</p>
              <div class="mb-6 flex space-x-4">
                <a 
                  v-for="(link, platform) in speaker.social" 
                  :key="platform"
                  :href="link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white hover:text-secondary-400 transition-colors duration-200"
                  :aria-label="`${speaker.name}'s ${platform}`"
                >
                  <Icon :name="`ph:${platform}-logo`" size="24" />
                </a>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                <p class="text-white font-medium">{{ speaker.topic }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Speaker Bio -->
      <section class="py-16 bg-white dark:bg-gray-950">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 
              class="text-3xl font-bold text-primary-800 dark:text-white mb-8"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
              About {{ speaker.name }}
            </h2>
            <div 
              class="prose prose-lg max-w-none dark:prose-invert"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
            >
              <p class="text-gray-700 dark:text-gray-300 mb-6">{{ speaker.bio }}</p>
              <p class="text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, 
                nisl nunc aliquam nisl, eget aliquam nisl nunc vel nisl. Sed euismod, nisl vel tincidunt lacinia, 
                nisl nunc aliquam nisl, eget aliquam nisl nunc vel nisl.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Speaker Sessions -->
      <section class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 
              class="text-3xl font-bold text-primary-800 dark:text-white mb-8"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
              Sessions by {{ speaker.name }}
            </h2>
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
            >
              <div 
                v-for="(session, index) in speaker.sessions" 
                :key="index"
                class="mb-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-2">{{ session }}</h3>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 dark:text-gray-400 text-sm">
                  <div class="mb-2 sm:mb-0">
                    <Icon name="ph:calendar" class="inline-block mr-1" size="16" />
                    {{ ['September 20', 'September 21', 'September 22'][index % 3] }}, 2025
                  </div>
                  <div>
                    <Icon name="ph:clock" class="inline-block mr-1" size="16" />
                    {{ ['9:00 AM - 10:30 AM', '11:00 AM - 12:30 PM', '2:00 PM - 3:30 PM'][index % 3] }}
                  </div>
                </div>
                <div class="mt-4">
                  <NuxtLink 
                    to="/schedule"
                    class="text-secondary-500 hover:text-secondary-600 font-medium flex items-center"
                  >
                    View in Schedule
                    <Icon name="ph:arrow-right" class="ml-1" size="16" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Other Speakers -->
      <section class="py-16 bg-white dark:bg-gray-950">
        <div class="container mx-auto px-4">
          <h2 
            class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            Other Speakers You Might Like
          </h2>
          <div 
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            <SpeakerCard
              v-for="(relatedSpeaker, index) in relatedSpeakers"
              :key="index"
              :speaker="relatedSpeaker"
              :index="index"
              @click="() => navigateTo(`/speakers/${relatedSpeaker.slug}`)"
              class="cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
    <div v-else class="py-32 text-center">
      <h2 class="text-2xl text-gray-600 dark:text-gray-400">Speaker not found</h2>
      <NuxtLink 
        to="/speakers"
        class="mt-4 inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
      >
        View All Speakers
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

// Speakers data (would typically come from an API or content system)
const allSpeakers = [
  {
    name: 'Sarah Johnson',
    slug: 'sarah-johnson',
    role: 'Principal Engineer',
    company: 'Google',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300',
    topic: 'Scalable Architecture',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    bio: 'Sarah is a principal engineer at Google with over 15 years of experience in building scalable backend systems. She has led the design and implementation of several critical infrastructure projects that power Google\'s core services. Prior to Google, Sarah worked at Amazon Web Services where she contributed to the development of their distributed database solutions. She is passionate about system design, performance optimization, and mentoring the next generation of backend engineers.',
    sessions: ['Keynote: The Evolution of Backend Architecture', 'Workshop: Designing for Scale']
  },
  {
    name: 'Michael Chen',
    slug: 'michael-chen',
    role: 'CTO',
    company: 'ServerStack',
    image: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=300',
    topic: 'Serverless Computing',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    bio: 'Michael leads the technical strategy at ServerStack, focusing on serverless architecture and cloud computing. He has pioneered innovative approaches to building scalable, event-driven systems that have transformed how enterprises deploy and manage their backend infrastructure. Michael frequently speaks at conferences and contributes to open source projects related to serverless technologies.',
    sessions: ['The Future of Serverless Computing', 'Panel: Cloud Native Technologies']
  },
  {
    name: 'Priya Patel',
    slug: 'priya-patel',
    role: 'Engineering Director',
    company: 'Netflix',
    image: 'https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=300',
    topic: 'Resilient Systems',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    bio: 'Priya oversees the backend systems at Netflix, focusing on building resilient and fault-tolerant architectures. Her team is responsible for ensuring that Netflix services remain available even during significant outages or traffic spikes. Priya is known for her expertise in chaos engineering and has developed methodologies for testing system resilience that are widely adopted across the industry.',
    sessions: ['Building Resilient Backend Systems', 'Chaos Engineering in Practice']
  },
  {
    name: 'David Wilson',
    slug: 'david-wilson',
    role: 'Lead Architect',
    company: 'AWS',
    image: 'https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=300',
    topic: 'Database Solutions',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    bio: 'David specializes in cloud-native database solutions and has helped numerous enterprises optimize their data infrastructure. At AWS, he leads the architectural guidance for customers implementing large-scale database migrations and modernizations. David has authored several whitepapers on database performance optimization and is a recognized expert in both SQL and NoSQL technologies.',
    sessions: ['Cloud-Native Database Solutions', 'Workshop: Database Performance Optimization']
  },
  {
    name: 'Elena Rodriguez',
    slug: 'elena-rodriguez',
    role: 'VP of Engineering',
    company: 'Stripe',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    topic: 'API Design',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    bio: 'Elena leads the engineering teams at Stripe, with a focus on API design and developer experience. Under her leadership, Stripe has developed some of the most developer-friendly payment APIs in the industry. Elena is passionate about creating intuitive interfaces that simplify complex processes and enable developers to build innovative payment solutions quickly and securely.',
    sessions: ['RESTful API Best Practices', 'Panel: API Security']
  },
  {
    name: 'James Kim',
    slug: 'james-kim',
    role: 'Security Engineer',
    company: 'Microsoft',
    image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=300',
    topic: 'Security',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    bio: 'James specializes in backend security and has contributed to numerous open-source security projects. At Microsoft, he works on securing cloud services and implementing zero-trust architecture principles. James regularly conducts security audits and penetration testing of backend systems to identify vulnerabilities before they can be exploited.',
    sessions: ['Secure Backend Design Patterns', 'Workshop: Security Auditing for Backends']
  },
  {
    name: 'Zoe Taylor',
    slug: 'zoe-taylor',
    role: 'Developer Advocate',
    company: 'MongoDB',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    topic: 'Database Solutions',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    bio: 'Zoe is passionate about database technologies and helping developers build efficient data-driven applications. As a Developer Advocate at MongoDB, she creates educational content, speaks at conferences, and works directly with users to solve complex data modeling challenges. Zoe has extensive experience with both relational and NoSQL databases and enjoys helping teams choose the right database solution for their specific use cases.',
    sessions: ['NoSQL vs SQL: Choosing the Right Database', 'Workshop: MongoDB Performance Tuning']
  },
  {
    name: 'Marcus Johnson',
    slug: 'marcus-johnson',
    role: 'DevOps Lead',
    company: 'Cloudflare',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    topic: 'DevOps',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    bio: 'Marcus specializes in DevOps practices and has pioneered CI/CD methodologies for backend systems. At Cloudflare, he leads the team responsible for deployment automation and infrastructure as code initiatives. Marcus is known for creating efficient, reproducible deployment pipelines that enable teams to ship code with confidence. He is a strong advocate for GitOps and infrastructure automation.',
    sessions: ['DevOps for Backend Engineers', 'Panel: Infrastructure as Code']
  }
];

// Find the current speaker
const speaker = computed(() => {
  return allSpeakers.find(s => s.slug === slug);
});

// Find related speakers (same topic or company)
const relatedSpeakers = computed(() => {
  if (!speaker.value) return [];
  
  return allSpeakers
    .filter(s => s.slug !== speaker.value.slug)
    .filter(s => s.topic === speaker.value.topic || s.company === speaker.value.company)
    .slice(0, 4);
});

// Update the page title
useHead({
  title: speaker.value ? `${speaker.value.name} - BackendConf Speaker` : 'Speaker Not Found - BackendConf'
});
</script>