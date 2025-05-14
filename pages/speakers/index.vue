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
          Our Speakers
        </h1>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          Learn from the brightest minds in backend development at BackendConf
        </p>
      </div>
    </section>

    <!-- Search and Filter Section -->
    <section class="py-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="relative md:w-1/3">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="ph:magnifying-glass" class="text-gray-400" />
            </div>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search speakers..."
              class="pl-10 py-2 px-4 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400"
            />
          </div>
          <div class="flex space-x-4">
            <select
              v-model="topicFilter"
              class="py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400"
            >
              <option value="">All Topics</option>
              <option v-for="topic in uniqueTopics" :key="topic" :value="topic">{{ topic }}</option>
            </select>
            <select
              v-model="sortBy"
              class="py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400"
            >
              <option value="name">Name</option>
              <option value="company">Company</option>
              <option value="topic">Topic</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Speakers Grid -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div v-if="filteredSpeakers.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <SpeakerCard
            v-for="(speaker, index) in filteredSpeakers"
            :key="index"
            :speaker="speaker"
            :index="index"
            @click="() => navigateTo(`/speakers/${speaker.slug}`)"
            class="cursor-pointer"
          />
        </div>
        <div v-else class="text-center py-16">
          <h3 class="text-2xl text-gray-600 dark:text-gray-400">No speakers found matching your criteria</h3>
          <button 
            @click="resetFilters" 
            class="mt-4 bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// State for search and filters
const searchQuery = ref('');
const topicFilter = ref('');
const sortBy = ref('name');

// Speakers data
const speakers = [
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
    bio: 'Sarah is a principal engineer at Google with over 15 years of experience in building scalable backend systems.',
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
    bio: 'Michael leads the technical strategy at ServerStack, focusing on serverless architecture and cloud computing.',
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
    bio: 'Priya oversees the backend systems at Netflix, focusing on building resilient and fault-tolerant architectures.',
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
    bio: 'David specializes in cloud-native database solutions and has helped numerous enterprises optimize their data infrastructure.',
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
    bio: 'Elena leads the engineering teams at Stripe, with a focus on API design and developer experience.',
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
    bio: 'James specializes in backend security and has contributed to numerous open-source security projects.',
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
    bio: 'Zoe is passionate about database technologies and helping developers build efficient data-driven applications.',
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
    bio: 'Marcus specializes in DevOps practices and has pioneered CI/CD methodologies for backend systems.',
    sessions: ['DevOps for Backend Engineers', 'Panel: Infrastructure as Code']
  }
];

// Compute unique topics for the filter dropdown
const uniqueTopics = computed(() => {
  return [...new Set(speakers.map(speaker => speaker.topic))];
});

// Filter and sort speakers based on user selection
const filteredSpeakers = computed(() => {
  let result = [...speakers];
  
  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(speaker => 
      speaker.name.toLowerCase().includes(query) ||
      speaker.role.toLowerCase().includes(query) ||
      speaker.company.toLowerCase().includes(query) ||
      speaker.topic.toLowerCase().includes(query)
    );
  }
  
  // Apply topic filter
  if (topicFilter.value) {
    result = result.filter(speaker => speaker.topic === topicFilter.value);
  }
  
  // Apply sorting
  result.sort((a, b) => {
    if (sortBy.value === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy.value === 'company') {
      return a.company.localeCompare(b.company);
    } else if (sortBy.value === 'topic') {
      return a.topic.localeCompare(b.topic);
    }
    return 0;
  });
  
  return result;
});

// Reset all filters
function resetFilters() {
  searchQuery.value = '';
  topicFilter.value = '';
  sortBy.value = 'name';
}
</script>