<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-primary-800 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1
            class="text-4xl md:text-5xl font-bold text-white mb-6"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            Blog
          </h1>
          <p
            class="text-xl text-gray-300"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            Insights, tutorials, and updates from the backend development community
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div 
          class="max-w-4xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <NuxtLink :to="`/blog/${featuredPost.slug}`" class="block">
            <div class="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden">
              <img 
                :src="featuredPost.image" 
                :alt="featuredPost.title"
                class="w-full h-96 object-cover"
              />
              <div class="p-8">
                <div class="flex items-center space-x-4 mb-4">
                  <span class="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300 text-sm font-medium px-3 py-1 rounded">
                    {{ featuredPost.category }}
                  </span>
                  <span class="text-gray-600 dark:text-gray-400 text-sm">
                    {{ featuredPost.date }}
                  </span>
                </div>
                <h2 class="text-3xl font-bold text-primary-800 dark:text-white mb-4">
                  {{ featuredPost.title }}
                </h2>
                <p class="text-gray-700 dark:text-gray-300 mb-6">
                  {{ featuredPost.excerpt }}
                </p>
                <div class="flex items-center">
                  <img 
                    :src="featuredPost.author.image" 
                    :alt="featuredPost.author.name"
                    class="w-10 h-10 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div class="font-medium text-primary-800 dark:text-white">
                      {{ featuredPost.author.name }}
                    </div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                      {{ featuredPost.author.role }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <!-- Filters -->
        <div 
          class="max-w-4xl mx-auto mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div class="flex space-x-4">
              <select
                v-model="categoryFilter"
                class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              >
                <option value="">All Categories</option>
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
              <select
                v-model="sortBy"
                class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              >
                <option value="date">Latest</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
            <div class="relative">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search posts..."
                class="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              />
              <Icon 
                name="ph:magnifying-glass" 
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size="20"
              />
            </div>
          </div>
        </div>

        <!-- Posts Grid -->
        <div class="max-w-4xl mx-auto">
          <div 
            class="grid grid-cols-1 md:grid-cols-2 gap-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            <NuxtLink 
              v-for="post in filteredPosts" 
              :key="post.slug"
              :to="`/blog/${post.slug}`"
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="flex items-center space-x-4 mb-4">
                  <span class="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300 text-sm font-medium px-3 py-1 rounded">
                    {{ post.category }}
                  </span>
                  <span class="text-gray-600 dark:text-gray-400 text-sm">
                    {{ post.date }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-2">
                  {{ post.title }}
                </h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                  {{ post.excerpt }}
                </p>
                <div class="flex items-center">
                  <img 
                    :src="post.author.image" 
                    :alt="post.author.name"
                    class="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div class="text-sm">
                    <div class="font-medium text-primary-800 dark:text-white">
                      {{ post.author.name }}
                    </div>
                    <div class="text-gray-600 dark:text-gray-400">
                      {{ post.readTime }} min read
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Load More -->
        <div 
          class="max-w-4xl mx-auto mt-12 text-center"
          v-if="hasMorePosts"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <button
            @click="loadMorePosts"
            class="bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Load More Posts
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div 
          class="max-w-3xl mx-auto text-center"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <h2 class="text-3xl font-bold text-primary-800 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-8">
            Subscribe to our newsletter for the latest backend development insights and conference updates
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              v-model="newsletterEmail"
              placeholder="Enter your email"
              class="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 w-full sm:w-80"
              required
            />
            <button
              type="submit"
              class="bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const categoryFilter = ref('');
const sortBy = ref('date');
const searchQuery = ref('');
const newsletterEmail = ref('');
const postsPerPage = 6;
const currentPage = ref(1);

// Categories
const categories = [
  'Architecture',
  'DevOps',
  'Databases',
  'Security',
  'Performance',
  'Cloud',
  'API Design'
];

// Featured post
const featuredPost = {
  slug: 'scaling-microservices',
  title: 'Scaling Microservices: Lessons Learned from Handling 1M Requests per Second',
  excerpt: 'Learn how we scaled our microservices architecture to handle massive traffic while maintaining reliability and performance.',
  image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  category: 'Architecture',
  date: 'March 15, 2025',
  author: {
    name: 'Sarah Johnson',
    role: 'Principal Engineer at Google',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
};

// Blog posts
const posts = [
  {
    slug: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices for Production Deployments',
    excerpt: 'Essential tips and practices for running Kubernetes in production environments.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'DevOps',
    date: 'March 10, 2025',
    author: {
      name: 'Michael Chen',
      role: 'DevOps Lead',
      image: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    readTime: 8
  },
  {
    slug: 'postgresql-performance',
    title: 'PostgreSQL Performance Optimization Techniques',
    excerpt: 'Advanced strategies for optimizing PostgreSQL database performance.',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Databases',
    date: 'March 8, 2025',
    author: {
      name: 'Elena Rodriguez',
      role: 'Database Engineer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    readTime: 12
  },
  {
    slug: 'api-security',
    title: 'Securing Your APIs: A Comprehensive Guide',
    excerpt: 'Learn how to implement robust security measures for your APIs.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Security',
    date: 'March 5, 2025',
    author: {
      name: 'James Kim',
      role: 'Security Engineer',
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    readTime: 10
  },
  {
    slug: 'serverless-architecture',
    title: 'Building Scalable Applications with Serverless Architecture',
    excerpt: 'Explore the benefits and challenges of serverless architecture.',
    image: 'https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Architecture',
    date: 'March 3, 2025',
    author: {
      name: 'David Wilson',
      role: 'Cloud Architect',
      image: 'https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    readTime: 15
  },
  {
    slug: 'graphql-vs-rest',
    title: 'GraphQL vs REST: Choosing the Right API Architecture',
    excerpt: 'A detailed comparison of GraphQL and REST API architectures.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'API Design',
    date: 'March 1, 2025',
    author: {
      name: 'Priya Patel',
      role: 'API Architect',
      image: 'https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    readTime: 9
  },
  {
    slug: 'monitoring-metrics',
    title: 'Essential Metrics for Monitoring Backend Systems',
    excerpt: 'Key metrics and monitoring strategies for backend applications.',
    image: 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'DevOps',
    date: 'February 28, 2025',
    author: {
      name: 'Alex Thompson',
      role: 'SRE Engineer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    readTime: 11
  }
];

// Computed properties
const filteredPosts = computed(() => {
  let result = [...posts];
  
  // Apply category filter
  if (categoryFilter.value) {
    result = result.filter(post => post.category === categoryFilter.value);
  }
  
  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  }
  
  // Apply sorting
  if (sortBy.value === 'popular') {
    result.sort((a, b) => b.readTime - a.readTime);
  } else {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  
  return result.slice(0, currentPage.value * postsPerPage);
});

const hasMorePosts = computed(() => {
  return filteredPosts.value.length < posts.length;
});

// Methods
function loadMorePosts() {
  currentPage.value++;
}

function subscribeNewsletter() {
  // In a real implementation, this would send the email to a newsletter service
  console.log('Newsletter subscription:', newsletterEmail.value);
  alert('Thank you for subscribing to our newsletter!');
  newsletterEmail.value = '';
}
</script>