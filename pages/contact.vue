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
          Contact Us
        </h1>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          Have questions? We're here to help you make the most of BackendConf
        </p>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div 
            class="bg-gray-50 dark:bg-gray-900 rounded-xl p-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="tickets">Ticket Information</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="speaking">Speaking Opportunity</option>
                  <option value="press">Press/Media</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                class="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(info, index) in contactInfo"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 text-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 200 } }"
          >
            <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon :name="info.icon" class="text-secondary-500" size="24" />
            </div>
            <h3 class="text-lg font-bold text-primary-800 dark:text-white mb-2">
              {{ info.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ info.content }}
            </p>
            <a 
              v-if="info.link"
              :href="info.link"
              class="text-secondary-500 hover:text-secondary-600 font-medium mt-2 inline-block"
            >
              {{ info.linkText }}
            </a>
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
        <div class="max-w-3xl mx-auto space-y-6">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-gray-50 dark:bg-gray-900 rounded-xl p-6"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
          >
            <h3 class="text-lg font-bold text-primary-800 dark:text-white mb-3">
              {{ faq.question }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const contactInfo = [
  {
    icon: 'ph:envelope',
    title: 'Email Us',
    content: 'info@backendconf.com',
    link: 'mailto:info@backendconf.com',
    linkText: 'Send Email'
  },
  {
    icon: 'ph:phone',
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    linkText: 'Make Call'
  },
  {
    icon: 'ph:map-pin',
    title: 'Visit Us',
    content: 'Moscone Center, San Francisco, CA',
    link: 'https://maps.google.com/?q=Moscone+Center,San+Francisco',
    linkText: 'Get Directions'
  }
];

const faqs = [
  {
    question: 'How can I purchase tickets for BackendConf?',
    answer: 'You can purchase tickets through our ticketing page. We offer different ticket types including Early Bird, Regular, and VIP passes.'
  },
  {
    question: 'I\'m interested in speaking at BackendConf. How can I apply?',
    answer: 'We welcome speaker applications! Please fill out our speaker submission form with your proposed topic and speaking experience.'
  },
  {
    question: 'What are the sponsorship opportunities available?',
    answer: 'We offer various sponsorship packages to suit different needs and budgets. Check our sponsorship page or contact our sponsorship team for details.'
  },
  {
    question: 'Is there a code of conduct for the conference?',
    answer: 'Yes, we have a strict code of conduct that all attendees, speakers, and sponsors must follow. You can find it on our website.'
  }
];

async function submitForm() {
  // In a real implementation, this would send the form data to a backend service
  console.log('Form submitted:', form.value);
  alert('Thank you for your message! We\'ll get back to you soon.');
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
}
</script>