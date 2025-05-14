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
          Our Sponsors
        </h1>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          BackendConf is made possible by the support of these amazing companies
        </p>
        <NuxtLink
          to="/sponsorship"
          class="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
        >
          Become a Sponsor
        </NuxtLink>
      </div>
    </section>

    <!-- Platinum Sponsors -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Platinum Sponsors
        </h2>
        <div 
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div 
            v-for="(sponsor, index) in platinumSponsors" 
            :key="index"
            class="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center"
          >
            <img 
              :src="sponsor.logo" 
              :alt="sponsor.name"
              class="h-16 mx-auto mb-6"
            />
            <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-2">{{ sponsor.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ sponsor.description }}</p>
            <a 
              :href="sponsor.website"
              target="_blank"
              rel="noopener noreferrer"
              class="text-secondary-500 hover:text-secondary-600 font-medium"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Gold Sponsors -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Gold Sponsors
        </h2>
        <div 
          class="grid grid-cols-1 md:grid-cols-4 gap-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div 
            v-for="(sponsor, index) in goldSponsors" 
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 text-center"
          >
            <img 
              :src="sponsor.logo" 
              :alt="sponsor.name"
              class="h-12 mx-auto mb-4"
            />
            <h3 class="text-lg font-bold text-primary-800 dark:text-white mb-2">{{ sponsor.name }}</h3>
            <a 
              :href="sponsor.website"
              target="_blank"
              rel="noopener noreferrer"
              class="text-secondary-500 hover:text-secondary-600 font-medium text-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Silver Sponsors -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Silver Sponsors
        </h2>
        <div 
          class="grid grid-cols-2 md:grid-cols-6 gap-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div 
            v-for="(sponsor, index) in silverSponsors" 
            :key="index"
            class="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 flex items-center justify-center"
          >
            <img 
              :src="sponsor.logo" 
              :alt="sponsor.name"
              class="h-8"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Sponsor -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 
            class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            Why Sponsor BackendConf?
          </h2>
          <div class="space-y-8">
            <div 
              v-for="(benefit, index) in sponsorBenefits" 
              :key="index"
              class="flex items-start space-x-4"
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: index * 100 } }"
            >
              <div class="w-8 h-8 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon :name="benefit.icon" class="text-secondary-500" size="20" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-primary-800 dark:text-white mb-2">{{ benefit.title }}</h3>
                <p class="text-gray-700 dark:text-gray-300">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
          
          <div 
            class="mt-12 text-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOn

ce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            <NuxtLink
              to="/sponsorship"
              class="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
            >
              View Sponsorship Packages
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const platinumSponsors = [
  {
    name: 'Amazon Web Services',
    logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg',
    description: 'Leading cloud platform providing reliable, scalable, and inexpensive cloud computing services.',
    website: 'https://aws.amazon.com'
  },
  {
    name: 'Google Cloud',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg',
    description: 'Suite of cloud computing services running on the same infrastructure that Google uses internally.',
    website: 'https://cloud.google.com'
  },
  {
    name: 'Microsoft Azure',
    logo: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg',
    description: 'Cloud computing service for building, testing, deploying, and managing applications and services.',
    website: 'https://azure.microsoft.com'
  }
];

const goldSponsors = [
  {
    name: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
    website: 'https://www.mongodb.com'
  },
  {
    name: 'Redis',
    logo: 'https://www.vectorlogo.zone/logos/redis/redis-ar21.svg',
    website: 'https://redis.com'
  },
  {
    name: 'Docker',
    logo: 'https://www.vectorlogo.zone/logos/docker/docker-ar21.svg',
    website: 'https://www.docker.com'
  },
  {
    name: 'Kubernetes',
    logo: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg',
    website: 'https://kubernetes.io'
  }
];

const silverSponsors = [
  {
    name: 'PostgreSQL',
    logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg',
    website: 'https://www.postgresql.org'
  },
  {
    name: 'Node.js',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg',
    website: 'https://nodejs.org'
  },
  {
    name: 'Python',
    logo: 'https://www.vectorlogo.zone/logos/python/python-ar21.svg',
    website: 'https://www.python.org'
  },
  {
    name: 'Elastic',
    logo: 'https://www.vectorlogo.zone/logos/elastic/elastic-ar21.svg',
    website: 'https://www.elastic.co'
  },
  {
    name: 'GitLab',
    logo: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg',
    website: 'https://gitlab.com'
  },
  {
    name: 'Jenkins',
    logo: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg',
    website: 'https://www.jenkins.io'
  }
];

const sponsorBenefits = [
  {
    icon: 'ph:users-three',
    title: 'Access to Top Talent',
    description: 'Connect with over 1000+ backend developers, architects, and decision-makers in the tech industry.'
  },
  {
    icon: 'ph:broadcast',
    title: 'Brand Visibility',
    description: 'Showcase your brand to a highly targeted audience of backend development professionals.'
  },
  {
    icon: 'ph:handshake',
    title: 'Networking Opportunities',
    description: 'Engage with potential customers, partners, and talent through dedicated networking sessions.'
  },
  {
    icon: 'ph:presentation-chart',
    title: 'Speaking Opportunities',
    description: 'Present your technology and share your expertise through keynotes or technical sessions.'
  },
  {
    icon: 'ph:trophy',
    title: 'Industry Leadership',
    description: 'Position your company as a leader in the backend development ecosystem.'
  }
];
</script>