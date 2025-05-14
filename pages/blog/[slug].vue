<template>
  <div>
    <article>
      <!-- Hero Section -->
      <section class="bg-primary-800 py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="flex items-center space-x-4 mb-6">
              <NuxtLink 
                to="/blog"
                class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                v-motion
                :initial="{ opacity: 0, x: -20 }"
                :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
              >
                <Icon name="ph:arrow-left" class="mr-2" />
                Back to Blog
              </NuxtLink>
              <span 
                class="bg-secondary-500 text-white text-sm font-medium px-3 py-1 rounded"
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, transition: { duration: 800, delay: 200 } }"
              >
                {{ post.category }}
              </span>
            </div>
            <h1
              class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
              {{ post.title }}
            </h1>
            <div 
              class="flex items-center space-x-6"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
            >
              <div class="flex items-center">
                <img 
                  :src="post.author.image" 
                  :alt="post.author.name"
                  class="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div class="font-medium text-white">{{ post.author.name }}</div>
                  <div class="text-sm text-gray-300">{{ post.author.role }}</div>
                </div>
              </div>
              <div class="text-gray-300 flex items-center">
                <Icon name="ph:calendar" class="mr-2" />
                {{ post.date }}
              </div>
              <div class="text-gray-300 flex items-center">
                <Icon name="ph:clock" class="mr-2" />
                {{ post.readTime }} min read
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Image -->
      <div class="relative -mt-10">
        <div class="container mx-auto px-4">
          <div 
            class="max-w-4xl mx-auto"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <!-- Content -->
      <section class="py-16 bg-white dark:bg-gray-950">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div 
              class="prose prose-lg dark:prose-invert max-w-none"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
              <div v-html="post.content" class="space-y-6 leading-relaxed"></div>
            </div>

            <!-- Tags -->
            <div 
              class="mt-12 flex flex-wrap gap-2"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- Share -->
            <div 
              class="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
              <h3 class="text-lg font-bold text-primary-800 dark:text-white mb-4">
                Share this article
              </h3>
              <div class="flex space-x-4">
                <a 
                  v-for="(link, platform) in shareLinks" 
                  :key="platform"
                  :href="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors duration-200"
                >
                  <Icon :name="`ph:${platform}-logo`" size="24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>

    <!-- Related Posts -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 
            class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            Related Articles
          </h2>
          <div 
            class="grid grid-cols-1 md:grid-cols-3 gap-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            <NuxtLink 
              v-for="relatedPost in relatedPosts" 
              :key="relatedPost.slug"
              :to="`/blog/${relatedPost.slug}`"
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <img 
                :src="relatedPost.image" 
                :alt="relatedPost.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="p-6">
                <h3 class="font-bold text-primary-800 dark:text-white mb-2 group-hover:text-secondary-500 dark:group-hover:text-secondary-400 transition-colors duration-200">
                  {{ relatedPost.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {{ relatedPost.excerpt }}
                </p>
                <div class="flex items-center text-sm">
                  <img 
                    :src="relatedPost.author.image" 
                    :alt="relatedPost.author.name"
                    class="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div class="font-medium text-primary-800 dark:text-white">
                      {{ relatedPost.author.name }}
                    </div>
                    <div class="text-gray-600 dark:text-gray-400">
                      {{ relatedPost.date }}
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
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
            Enjoyed this article?
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-8">
            Subscribe to our newsletter for more insights on backend development
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
const route = useRoute();
const newsletterEmail = ref('');

// Sample blog post data (in a real app, this would come from an API or content management system)
const post = {
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
  },
  readTime: 15,
  content: `
    <h2>Introduction</h2>
    <p>
      Scaling microservices to handle high traffic is one of the most challenging aspects of modern backend development. 
      In this article, we'll share our experience of scaling a microservices architecture to handle 1 million requests 
      per second, including the challenges we faced and the solutions we implemented.
    </p>

    <h2>The Challenge</h2>
    <p>
      Our initial architecture was designed to handle around 100,000 requests per second. However, as our user base grew, 
      we needed to scale our system by an order of magnitude. This presented several challenges:
    </p>
    <ul>
      <li>Maintaining service reliability under high load</li>
      <li>Minimizing latency across service boundaries</li>
      <li>Managing database connections efficiently</li>
      <li>Implementing effective monitoring and alerting</li>
    </ul>

    <h2>Our Solution</h2>
    <p>
      We implemented several key changes to achieve our scaling goals:
    </p>
    <h3>1. Service Mesh Implementation</h3>
    <p>
      We introduced Istio as our service mesh to handle service-to-service communication more efficiently. This provided:
    </p>
    <ul>
      <li>Automatic load balancing</li>
      <li>Circuit breaking capabilities</li>
      <li>Better visibility into service communication</li>
    </ul>

    <h3>2. Caching Strategy</h3>
    <p>
      We implemented a multi-level caching strategy using Redis:
    </p>
    <ul>
      <li>Local in-memory caches for frequently accessed data</li>
      <li>Distributed cache for shared state</li>
      <li>Cache warming mechanisms to prevent cold starts</li>
    </ul>

    <h3>3. Database Optimization</h3>
    <p>
      Our database optimization efforts included:
    </p>
    <ul>
      <li>Implementing read replicas</li>
      <li>Query optimization and indexing</li>
      <li>Database connection pooling</li>
    </ul>

    <h2>Results</h2>
    <p>
      After implementing these changes, we successfully achieved our goal of handling 1M requests per second with:
    </p>
    <ul>
      <li>99.99% service availability</li>
      <li>Average response time under 100ms</li>
      <li>Reduced infrastructure costs through better resource utilization</li>
    </ul>

    <h2>Conclusion</h2>
    <p>
      Scaling microservices requires careful planning, monitoring, and continuous optimization. The key is to identify 
      bottlenecks early and implement solutions that can grow with your system's needs.
    </p>
  `,
  tags: ['microservices', 'scaling', 'performance', 'architecture', 'backend']
};

// Social share links
const shareLinks = computed(() => ({
  twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
}));

// Related posts
const relatedPosts = [
  {
    slug: 'kubernetes-best-practices',
    title: 'Kubernetes Best Practices for Production',
    excerpt: 'Essential tips for running Kubernetes in production.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    date: 'March 10, 2025'
  },
  {
    slug: 'api-design-patterns',
    title: 'API Design Patterns for Microservices',
    excerpt: 'Best practices for designing APIs in a microservices architecture.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'Elena Rodriguez',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    date: 'March 8, 2025'
  },
  {
    slug: 'monitoring-microservices',
    title: 'Monitoring Distributed Systems',
    excerpt: 'Comprehensive guide to monitoring microservices.',
    image: 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'David Wilson',
      image: 'https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    date: 'March 5, 2025'
  }
];

// Methods
function subscribeNewsletter() {
  // In a real implementation, this would send the email to a newsletter service
  console.log('Newsletter subscription:', newsletterEmail.value);
  alert('Thank you for subscribing to our newsletter!');
  newsletterEmail.value = '';
}

// Update page metadata
useHead({
  title: `${post.title} - BackendConf Blog`,
  meta: [
    {
      name: 'description',
      content: post.excerpt
    }
  ]
});
</script>

<style>
.prose {
  @apply text-gray-700 dark:text-gray-300;
}

.prose h2 {
  @apply text-2xl font-bold text-primary-800 dark:text-white mt-12 mb-6;
}

.prose h3 {
  @apply text-xl font-bold text-primary-800 dark:text-white mt-8 mb-4;
}

.prose p {
  @apply mb-6 leading-relaxed;
}

.prose ul {
  @apply list-disc list-inside mb-6 space-y-2;
}

.prose li {
  @apply text-gray-700 dark:text-gray-300;
}

.prose a {
  @apply text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300;
}

.prose blockquote {
  @apply border-l-4 border-secondary-500 pl-4 italic my-6;
}

.prose code {
  @apply bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono;
}

.prose pre {
  @apply bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6;
}

.prose img {
  @apply rounded-lg shadow-lg my-8;
}
</style>