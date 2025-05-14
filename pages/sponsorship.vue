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
          Become a Sponsor
        </h1>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          Connect with the backend development community and showcase your brand at BackendConf
        </p>
        <a
          href="#packages"
          class="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
        >
          View Sponsorship Packages
        </a>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white dark:bg-gray-950">
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

    <!-- Benefits Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Why Sponsor BackendConf?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl p-6"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
          >
            <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mb-4">
              <Icon :name="benefit.icon" class="text-secondary-500" size="24" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-700 dark:text-gray-300">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsorship Packages -->
    <section id="packages" class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Sponsorship Packages
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            v-for="(pkg, index) in packages"
            :key="index"
            :class="[
              'bg-gray-50 dark:bg-gray-900 rounded-xl p-8',
              { 'transform scale-105 md:translate-y-4': pkg.popular }
            ]"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 200 } }"
          >
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-primary-800 dark:text-white mb-2">{{ pkg.title }}</h3>
              <div class="text-4xl font-bold text-secondary-500 mb-2">${{ pkg.price.toLocaleString() }}</div>
              <p class="text-gray-600 dark:text-gray-400">{{ pkg.subtitle }}</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li v-for="(feature, featureIndex) in pkg.features" :key="featureIndex" class="flex items-start">
                <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
              </li>
            </ul>
            <button
              @click="contactAboutSponsorship(pkg.title)"
              class="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Sponsors -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Past Sponsors
        </h2>
        <div
          class="grid grid-cols-2 md:grid-cols-6 gap-8 items-center max-w-5xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div
            v-for="(sponsor, index) in pastSponsors"
            :key="index"
            class="flex items-center justify-center p-4"
          >
            <img
              :src="sponsor.logo"
              :alt="sponsor.name"
              class="max-h-12 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Frequently Asked Questions
        </h2>
        <div class="max-w-3xl mx-auto">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="mb-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
          >
            <h3 class="text-lg font-bold text-primary-800 dark:text-white mb-2">{{ faq.question }}</h3>
            <p class="text-gray-700 dark:text-gray-300">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-16 bg-primary-800">
      <div class="container mx-auto px-4 text-center">
        <div
          class="max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <h2 class="text-3xl font-bold text-white mb-6">Ready to Become a Sponsor?</h2>
          <p class="text-xl text-gray-300 mb-8">Let's discuss how we can create a partnership that benefits your brand</p>
          <button
            @click="contactAboutSponsorship()"
            class="bg-white hover:bg-gray-100 text-primary-800 font-medium px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { value: '1000+', label: 'Attendees' },
  { value: '70%', label: 'Senior Developers' },
  { value: '40+', label: 'Countries' },
  { value: '90%', label: 'Would Recommend' }
];

const benefits = [
  {
    icon: 'ph:users-three',
    title: 'Brand Exposure',
    description: 'Showcase your brand to over 1000+ backend developers, architects, and decision-makers.'
  },
  {
    icon: 'ph:handshake',
    title: 'Direct Engagement',
    description: 'Connect directly with potential customers and partners through dedicated networking sessions.'
  },
  {
    icon: 'ph:presentation-chart',
    title: 'Thought Leadership',
    description: 'Position your company as a leader in the backend development ecosystem.'
  }
];

const packages = [
  {
    title: 'Gold',
    price: 15000,
    subtitle: 'Premium visibility and engagement',
    features: [
      'Large booth in prime location',
      '6 conference passes',
      'Logo on main stage',
      'Speaking opportunity',
      'Workshop session',
      'Job board listings',
      'Social media promotion',
      'Attendee list access'
    ]
  },
  {
    title: 'Platinum',
    price: 25000,
    subtitle: 'Maximum exposure and benefits',
    popular: true,
    features: [
      'Everything in Gold, plus:',
      'Keynote speaking slot',
      '10 conference passes',
      'VIP dinner invitation',
      'Custom workshop track',
      'Private meeting room',
      'Lead generation support',
      'Custom branding opportunities'
    ]
  },
  {
    title: 'Silver',
    price: 8000,
    subtitle: 'Essential sponsorship package',
    features: [
      'Standard booth space',
      '4 conference passes',
      'Logo on website',
      'Swag bag inserts',
      'Social media mention',
      'Company description in program',
      'Access to attendee lounge',
      'Recruiting opportunities'
    ]
  }
];

const pastSponsors = [
  { name: 'AWS', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg' },
  { name: 'Google Cloud', logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg' },
  { name: 'Microsoft Azure', logo: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg' },
  { name: 'MongoDB', logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg' },
  { name: 'Redis', logo: 'https://www.vectorlogo.zone/logos/redis/redis-ar21.svg' },
  { name: 'Docker', logo: 'https://www.vectorlogo.zone/logos/docker/docker-ar21.svg' }
];

const faqs = [
  {
    question: 'What are the booth setup and teardown times?',
    answer: 'Booth setup is available the day before the conference from 2 PM to 8 PM. Teardown must be completed within 2 hours after the conference ends.'
  },
  {
    question: 'Can we bring our own booth design?',
    answer: 'Yes, you can bring your own booth design as long as it fits within your allocated space and meets our safety requirements.'
  },
  {
    question: 'Are there speaking opportunities available?',
    answer: 'Yes, Gold and Platinum sponsors receive speaking slots. The content must be educational and not promotional.'
  },
  {
    question: 'What are the payment terms?',
    answer: '50% deposit is required to secure your sponsorship, with the remaining balance due 60 days before the event.'
  }
];

function contactAboutSponsorship(packageTitle = '') {
  const subject = packageTitle
    ? `Interested in ${packageTitle} Sponsorship Package`
    : 'Sponsorship Inquiry';
  
  navigateTo(`/contact?subject=${encodeURIComponent(subject)}`);
}
</script>