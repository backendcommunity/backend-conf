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
          Venue & Location
        </h1>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          Everything you need to know about the BackendConf venue and how to get there
        </p>
      </div>
    </section>

    <!-- Venue Information -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            v-motion
            :initial="{ opacity: 0, x: -40 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          >
            <h2 class="text-3xl font-bold text-primary-800 dark:text-white mb-6">Moscone Center</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              BackendConf will be held at the prestigious Moscone Center in San Francisco. The venue offers state-of-the-art facilities and is located in the heart of the city, making it easily accessible for all attendees.
            </p>
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <div class="mt-1 mr-4 text-secondary-500">
                  <Icon name="ph:map-pin" size="24" />
                </div>
                <div>
                  <h3 class="font-bold text-primary-800 dark:text-white mb-1">Address</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    747 Howard St<br>
                    San Francisco, CA 94103<br>
                    United States
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="mt-1 mr-4 text-secondary-500">
                  <Icon name="ph:phone" size="24" />
                </div>
                <div>
                  <h3 class="font-bold text-primary-800 dark:text-white mb-1">Contact</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    +1 (415) 974-4000<br>
                    info@backendconf.com
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="mt-1 mr-4 text-secondary-500">
                  <Icon name="ph:clock" size="24" />
                </div>
                <div>
                  <h3 class="font-bold text-primary-800 dark:text-white mb-1">Event Hours</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    September 20-22, 2025<br>
                    8:00 AM - 6:00 PM (Daily)
                  </p>
                </div>
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=Moscone+Center,San+Francisco" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Get Directions
              <Icon name="ph:arrow-right" class="ml-2" />
            </a>
          </div>
          <div 
            class="rounded-xl overflow-hidden shadow-lg"
            v-motion
            :initial="{ opacity: 0, x: 40 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          >
            <img 
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Moscone Center" 
              class="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Location & Map
        </h2>
        <div 
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <!-- Map Placeholder (in a real implementation, this would be an actual map) -->
          <div class="aspect-video relative">
            <img 
              src="https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Map of Moscone Center" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div class="text-center">
                <h3 class="text-white text-2xl font-bold mb-4">Interactive Map</h3>
                <a 
                  href="https://maps.google.com/?q=Moscone+Center,San+Francisco" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transportation & Accommodations -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Getting There & Staying Nearby
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Transportation -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 h-full">
              <div class="flex items-center mb-6">
                <div class="bg-secondary-100 dark:bg-secondary-900 rounded-lg p-3 mr-4">
                  <Icon name="ph:airplane" class="text-secondary-500" size="28" />
                </div>
                <h3 class="text-2xl font-bold text-primary-800 dark:text-white">Transportation</h3>
              </div>
              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-primary-800 dark:text-white mb-2 flex items-center">
                    <Icon name="ph:airplane-landing" class="mr-2" size="20" />
                    By Air
                  </h4>
                  <p class="text-gray-700 dark:text-gray-300">
                    The nearest airport is San Francisco International Airport (SFO), approximately 13 miles from the venue. Alternative airports include Oakland International Airport (OAK) and San Jose International Airport (SJC).
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-primary-800 dark:text-white mb-2 flex items-center">
                    <Icon name="ph:train" class="mr-2" size="20" />
                    Public Transit
                  </h4>
                  <p class="text-gray-700 dark:text-gray-300">
                    BART (Bay Area Rapid Transit) provides service to Powell Street Station, just a short walk from the Moscone Center. The Muni bus system also has several stops nearby.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-primary-800 dark:text-white mb-2 flex items-center">
                    <Icon name="ph:car" class="mr-2" size="20" />
                    By Car
                  </h4>
                  <p class="text-gray-700 dark:text-gray-300">
                    Parking is available at the Moscone Center Garage and several nearby parking facilities. We recommend using ride-sharing services or public transit due to limited parking.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Accommodations -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
          >
            <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 h-full">
              <div class="flex items-center mb-6">
                <div class="bg-secondary-100 dark:bg-secondary-900 rounded-lg p-3 mr-4">
                  <Icon name="ph:bed" class="text-secondary-500" size="28" />
                </div>
                <h3 class="text-2xl font-bold text-primary-800 dark:text-white">Accommodations</h3>
              </div>
              <p class="text-gray-700 dark:text-gray-300 mb-6">
                We've partnered with these hotels to offer special rates for BackendConf attendees. Be sure to mention "BackendConf" when booking.
              </p>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <h4 class="font-bold text-primary-800 dark:text-white mb-1">Marriott Marquis</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">0.2 miles from venue</p>
                  <div class="flex justify-between items-center">
                    <span class="text-secondary-500 font-medium">$249/night</span>
                    <a 
                      href="#" 
                      class="text-sm text-secondary-500 hover:text-secondary-600 font-medium"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <h4 class="font-bold text-primary-800 dark:text-white mb-1">InterContinental San Francisco</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">0.3 miles from venue</p>
                  <div class="flex justify-between items-center">
                    <span class="text-secondary-500 font-medium">$279/night</span>
                    <a 
                      href="#" 
                      class="text-sm text-secondary-500 hover:text-secondary-600 font-medium"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <h4 class="font-bold text-primary-800 dark:text-white mb-1">Hilton Union Square</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">0.5 miles from venue</p>
                  <div class="flex justify-between items-center">
                    <span class="text-secondary-500 font-medium">$229/night</span>
                    <a 
                      href="#" 
                      class="text-sm text-secondary-500 hover:text-secondary-600 font-medium"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nearby Attractions -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Explore San Francisco
        </h2>
        <div 
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div v-for="(attraction, index) in attractions" :key="index" class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img :src="attraction.image" :alt="attraction.name" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-2">{{ attraction.name }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ attraction.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <Icon name="ph:map-pin" class="mr-1" size="16" />
                  {{ attraction.distance }}
                </span>
                <a 
                  :href="attraction.link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-secondary-500 hover:text-secondary-600 font-medium text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
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
        <div 
          class="max-w-3xl mx-auto space-y-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
            <h3 class="text-lg font-bold text-primary-800 dark:text-white mb-3">{{ faq.question }}</h3>
            <p class="text-gray-700 dark:text-gray-300">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Nearby attractions
const attractions = [
  {
    name: 'Union Square',
    description: 'A popular shopping district with high-end retailers, boutiques, and restaurants, just a short walk from the Moscone Center.',
    image: 'https://images.pexels.com/photos/1110234/pexels-photo-1110234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    distance: '0.6 miles',
    link: 'https://www.visitunionsquaresf.com/'
  },
  {
    name: 'Golden Gate Park',
    description: 'A vast urban park with gardens, museums, and recreational areas spanning over 1,000 acres.',
    image: 'https://images.pexels.com/photos/7245309/pexels-photo-7245309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    distance: '4.5 miles',
    link: 'https://goldengatepark.com/'
  },
  {
    name: 'Fisherman\'s Wharf',
    description: 'A popular tourist attraction with seafood restaurants, souvenir shops, and views of the bay and Alcatraz Island.',
    image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    distance: '2.3 miles',
    link: 'https://www.fishermanswharf.org/'
  }
];

// FAQs
const faqs = [
  {
    question: 'Is there parking available at the venue?',
    answer: 'Yes, there is parking available at the Moscone Center Garage and several nearby parking facilities. However, space is limited and can be expensive. We recommend using public transportation or ride-sharing services.'
  },
  {
    question: 'Are there food options at the venue?',
    answer: 'Yes, the Moscone Center has several food options within the venue. Additionally, there are numerous restaurants and cafes within walking distance.'
  },
  {
    question: 'What is the dress code for the conference?',
    answer: 'The dress code is business casual. We recommend comfortable attire as you\'ll be attending sessions throughout the day.'
  },
  {
    question: 'Is Wi-Fi available at the venue?',
    answer: 'Yes, complimentary high-speed Wi-Fi will be available for all attendees throughout the conference.'
  },
  {
    question: 'Are there any COVID-19 protocols in place?',
    answer: 'We will follow all local health guidelines in effect at the time of the conference. Updates will be communicated to registered attendees prior to the event.'
  }
];
</script>