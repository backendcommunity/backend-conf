<template>
  <ClientOnly>
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
            Get Your Ticket
          </h1>
          <p
            class="text-xl text-gray-300 max-w-3xl mx-auto"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            Join us at BackendConf 2025 for three days of learning, networking, and inspiration
          </p>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="py-16 bg-white dark:bg-gray-950">
        <div class="container mx-auto px-4">
          <!-- Early Bird Banner -->
          <div 
            class="max-w-4xl mx-auto mb-12 bg-secondary-100 dark:bg-secondary-900 rounded-xl p-6 text-center"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            <div class="text-secondary-800 dark:text-secondary-200 font-bold text-lg mb-2">
              🎉 Early Bird Tickets Available
            </div>
            <p class="text-secondary-700 dark:text-secondary-300">
              Save up to 30% on tickets until May 1st, 2025
            </p>
          </div>

          <!-- Pricing Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Standard Ticket -->
            <div 
              class="bg-gray-50 dark:bg-gray-900 rounded-xl p-8"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
            >
              <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-4">Standard</h3>
              <div class="mb-6">
                <span class="text-4xl font-bold text-primary-800 dark:text-white">$499</span>
                <span class="text-gray-600 dark:text-gray-400 line-through ml-2">$699</span>
              </div>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Access to all conference talks</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Conference swag bag</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Lunch and refreshments</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Networking opportunities</span>
                </li>
              </ul>
              <button
                @click="purchaseTicket('standard')"
                class="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Get Standard Ticket
              </button>
            </div>

            <!-- Pro Ticket -->
            <div 
              class="bg-primary-800 rounded-xl p-8 transform scale-105 shadow-xl relative"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
            >
              <div class="absolute top-0 right-0 bg-secondary-500 text-white text-sm font-medium px-3 py-1 rounded-tr-xl rounded-bl-xl">
                Most Popular
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Pro</h3>
              <div class="mb-6">
                <span class="text-4xl font-bold text-white">$799</span>
                <span class="text-gray-300 line-through ml-2">$999</span>
              </div>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-400 mt-1 mr-2" />
                  <span class="text-gray-300">All Standard features</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-400 mt-1 mr-2" />
                  <span class="text-gray-300">Access to workshops</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-400 mt-1 mr-2" />
                  <span class="text-gray-300">VIP networking event</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-400 mt-1 mr-2" />
                  <span class="text-gray-300">Video recordings</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-400 mt-1 mr-2" />
                  <span class="text-gray-300">Priority seating</span>
                </li>
              </ul>
              <button
                @click="purchaseTicket('pro')"
                class="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Get Pro Ticket
              </button>
            </div>

            <!-- Enterprise Ticket -->
            <div 
              class="bg-gray-50 dark:bg-gray-900 rounded-xl p-8"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
            >
              <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-4">Enterprise</h3>
              <div class="mb-6">
                <span class="text-4xl font-bold text-primary-800 dark:text-white">$1,499</span>
                <span class="text-gray-600 dark:text-gray-400 line-through ml-2">$1,999</span>
              </div>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">All Pro features</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">5 team member tickets</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Private meeting room</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Custom training session</span>
                </li>
                <li class="flex items-start">
                  <Icon name="ph:check-circle" class="text-secondary-500 mt-1 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Company logo on website</span>
                </li>
              </ul>
              <button
                @click="purchaseTicket('enterprise')"
                class="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Get Enterprise Package
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <h2 
            class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            What's Included
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="text-center"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 200 } }"
            >
              <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon :name="feature.icon" class="text-secondary-500" size="32" />
              </div>
              <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-2">{{ feature.title }}</h3>
              <p class="text-gray-700 dark:text-gray-300">{{ feature.description }}</p>
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
              class="mb-6"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
            >
              <h3 class="text-lg font-bold text-primary-800 dark:text-white mb-2">
                {{ faq.question }}
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Group Discount -->
      <section class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div 
            class="max-w-4xl mx-auto bg-primary-800 rounded-xl p-8 text-center"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
          >
            <h2 class="text-3xl font-bold text-white mb-4">
              Coming with a Team?
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Get special discounts for groups of 5 or more
            </p>
            <button
              @click="contactSales"
              class="bg-white hover:bg-gray-100 text-primary-800 font-medium px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue';

const features = [
  {
    icon: 'ph:presentation',
    title: 'Expert Talks',
    description: 'Learn from industry leaders and experienced practitioners through keynotes and technical sessions.'
  },
  {
    icon: 'ph:users-three',
    title: 'Networking',
    description: 'Connect with fellow backend developers, share experiences, and build valuable relationships.'
  },
  {
    icon: 'ph:desktop',
    title: 'Workshops',
    description: 'Get hands-on experience with new technologies and tools in interactive workshop sessions.'
  }
];

const faqs = [
  {
    question: 'What\'s included in the ticket price?',
    answer: 'Your ticket includes access to all conference talks, workshops (Pro and Enterprise only), lunch and refreshments, conference swag, and networking events.'
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes, tickets are refundable up to 30 days before the event. After that, you can transfer your ticket to someone else.'
  },
  {
    question: 'Is there a student discount?',
    answer: 'Yes, we offer a 50% discount for students with valid student ID. Please contact us for details.'
  },
  {
    question: 'Will I get access to talk recordings?',
    answer: 'Pro and Enterprise ticket holders get access to all talk recordings after the event.'
  }
];

// Ticket prices and Paddle product IDs
const tickets = {
  standard: {
    price: 499,
    productId: 'prod_standard'
  },
  pro: {
    price: 799,
    productId: 'prod_pro'
  },
  enterprise: {
    price: 1499,
    productId: 'prod_enterprise'
  }
};

// Purchase ticket
async function purchaseTicket(type) {
  try {
    const { productId } = tickets[type];
    
    // For now, just navigate to contact page
    navigateTo('/contact?subject=Purchase%20' + type + '%20Ticket');
  } catch (error) {
    console.error('Error processing payment:', error);
    alert('There was an error processing your payment. Please try again.');
  }
}

// Contact sales for group discount
function contactSales() {
  navigateTo('/contact?subject=Group%20Tickets');
}
</script>