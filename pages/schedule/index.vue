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
          Event Schedule
        </h1>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          Three days of workshops, talks, and networking events designed for backend developers
        </p>
      </div>
    </section>

    <!-- Schedule Navigation -->
    <section class="bg-white dark:bg-gray-950 sticky top-20 z-40 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex overflow-x-auto py-4 scrollbar-hide">
          <div class="flex space-x-2">
            <button
              v-for="(day, index) in days"
              :key="index"
              @click="activeDay = index"
              :class="[
                'px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors duration-200',
                activeDay === index
                  ? 'bg-secondary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              ]"
            >
              {{ day.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Content -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <!-- Search and Filter -->
        <div class="mb-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
            <div class="relative flex-grow">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon name="ph:magnifying-glass" class="text-gray-400" />
              </div>
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search sessions..."
                class="pl-10 py-2 px-4 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400"
              />
            </div>
            <div class="flex space-x-3">
              <select
                v-model="trackFilter"
                class="py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400"
              >
                <option value="">All Tracks</option>
                <option value="Main Stage">Main Stage</option>
                <option value="Track A">Track A</option>
                <option value="Track B">Track B</option>
                <option value="Workshop Room">Workshop Room</option>
              </select>
              <select
                v-model="typeFilter"
                class="py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400"
              >
                <option value="">All Types</option>
                <option value="talk">Talks</option>
                <option value="workshop">Workshops</option>
                <option value="panel">Panels</option>
                <option value="keynote">Keynotes</option>
              </select>
              <button
                @click="resetFilters"
                class="py-2 px-4 text-secondary-500 hover:text-secondary-600 font-medium focus:outline-none"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <!-- Timeline Schedule -->
        <div 
          v-if="filteredSchedule.length"
          class="relative bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <!-- Time column -->
          <div class="hidden md:block absolute left-8 top-8 bottom-8 w-24 border-r border-gray-200 dark:border-gray-700">
            <div v-for="hour in timeRange" :key="hour" class="absolute text-sm text-gray-500 dark:text-gray-400" :style="`top: calc(${(hour - 8) * 120}px)`">
              {{ formatTime(hour) }}
            </div>
          </div>

          <!-- Timeline columns -->
          <div class="md:pl-32">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="track in tracks" :key="track">
                <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-6">{{ track }}</h3>
                
                <div class="relative">
                  <!-- Background time grid (hidden on mobile) -->
                  <div class="hidden md:block absolute inset-0">
                    <div v-for="hour in timeRange" :key="hour" class="absolute w-full border-t border-gray-200 dark:border-gray-700" :style="`top: calc(${(hour - 8) * 120}px)`"></div>
                  </div>
                  
                  <!-- Session cards -->
                  <div class="relative min-h-[1000px]">
                    <div 
                      v-for="session in filteredScheduleByTrack(track)" 
                      :key="session.id"
                      class="absolute w-full bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border-l-4 hover:shadow-md transition-shadow duration-200"
                      :class="[
                        session.type === 'keynote' ? 'border-accent-500' : 
                        session.type === 'talk' ? 'border-secondary-500' : 
                        session.type === 'workshop' ? 'border-success-500' : 
                        'border-warning-500'
                      ]"
                      :style="`top: calc(${(getTimeInHours(session.startTime) - 8) * 120}px); height: calc(${getSessionDuration(session) * 120}px)`"
                    >
                      <div class="flex justify-between items-start mb-2">
                        <span class="text-sm font-medium text-secondary-500">{{ session.startTime }} - {{ session.endTime }}</span>
                        <span 
                          class="text-xs px-2 py-1 rounded-full"
                          :class="[
                            session.type === 'keynote' ? 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-300' : 
                            session.type === 'talk' ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300' : 
                            session.type === 'workshop' ? 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-300' : 
                            'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-300'
                          ]"
                        >
                          {{ session.type.charAt(0).toUpperCase() + session.type.slice(1) }}
                        </span>
                      </div>
                      <h4 class="font-bold text-primary-800 dark:text-white mb-2">{{ session.title }}</h4>
                      <div class="flex items-center mb-2">
                        <img 
                          :src="session.speakerImage" 
                          :alt="session.speaker"
                          class="w-6 h-6 rounded-full object-cover mr-2"
                        />
                        <span class="text-sm text-gray-600 dark:text-gray-400">{{ session.speaker }}</span>
                      </div>
                      <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{{ session.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- No results message -->
        <div 
          v-else
          class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm text-center"
        >
          <h3 class="text-2xl font-bold text-primary-800 dark:text-white mb-4">No sessions found</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your filters to see more sessions.</p>
          <button
            @click="resetFilters"
            class="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </section>

    <!-- Add to Calendar Section -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4 text-center">
        <h2 
          class="text-3xl font-bold text-primary-800 dark:text-white mb-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Never Miss a Session
        </h2>
        <p 
          class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          Add BackendConf to your calendar and stay updated with all the exciting sessions.
        </p>
        <div 
          class="flex flex-wrap justify-center gap-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
        >
          <a 
            href="#" 
            class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-primary-800 dark:text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-200"
          >
            <Icon name="ph:google-logo" class="mr-2" size="20" />
            Google Calendar
          </a>
          <a 
            href="#" 
            class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-primary-800 dark:text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-200"
          >
            <Icon name="ph:apple-logo" class="mr-2" size="20" />
            Apple Calendar
          </a>
          <a 
            href="#" 
            class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-primary-800 dark:text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-200"
          >
            <Icon name="ph:microsoft-outlook-logo" class="mr-2" size="20" />
            Outlook
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// State for active day and filters
const activeDay = ref(0);
const searchQuery = ref('');
const trackFilter = ref('');
const typeFilter = ref('');

// Days information
const days = [
  { name: 'Day 1 (Sept 20)', date: '2025-09-20' },
  { name: 'Day 2 (Sept 21)', date: '2025-09-21' },
  { name: 'Day 3 (Sept 22)', date: '2025-09-22' }
];

// Tracks
const tracks = ['Main Stage', 'Track A', 'Track B'];

// Time range for the schedule display (8AM to 6PM)
const timeRange = Array.from({ length: 11 }, (_, i) => i + 8);

// Schedule data for each day
const scheduleData = [
  // Day 1
  [
    {
      id: 1,
      title: 'Keynote: The Evolution of Backend Architecture',
      speaker: 'Sarah Johnson',
      speakerImage: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Main Stage',
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      type: 'keynote',
      description: 'An inspiring look at how backend architecture has evolved over the past decade and where it\'s headed in the future.'
    },
    {
      id: 2,
      title: 'Introduction to Event-Driven Architecture',
      speaker: 'Michael Chen',
      speakerImage: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track A',
      startTime: '10:30 AM',
      endTime: '11:30 AM',
      type: 'talk',
      description: 'Learn the fundamentals of event-driven architecture and how it can help you build more scalable and maintainable systems.'
    },
    {
      id: 3,
      title: 'Database Performance Optimization',
      speaker: 'David Wilson',
      speakerImage: 'https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track B',
      startTime: '10:30 AM',
      endTime: '11:30 AM',
      type: 'talk',
      description: 'Techniques for optimizing database performance in high-scale backend applications.'
    },
    {
      id: 4,
      title: 'Lunch Break',
      speaker: '',
      speakerImage: '',
      track: 'Main Stage',
      startTime: '12:00 PM',
      endTime: '1:00 PM',
      type: 'break',
      description: 'Networking lunch with fellow attendees.'
    },
    {
      id: 5,
      title: 'Building Resilient Backend Systems',
      speaker: 'Priya Patel',
      speakerImage: 'https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track A',
      startTime: '1:30 PM',
      endTime: '2:30 PM',
      type: 'talk',
      description: 'Learn how to design and build backend systems that can recover from failures and maintain availability.'
    },
    {
      id: 6,
      title: 'Workshop: Docker for Backend Developers',
      speaker: 'Marcus Johnson',
      speakerImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track B',
      startTime: '1:30 PM',
      endTime: '3:30 PM',
      type: 'workshop',
      description: 'A hands-on workshop on using Docker for local development and deployment of backend services.'
    },
    {
      id: 7,
      title: 'Panel: The Future of Serverless',
      speaker: 'Various Speakers',
      speakerImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Main Stage',
      startTime: '3:00 PM',
      endTime: '4:00 PM',
      type: 'panel',
      description: 'Industry experts discuss the future of serverless computing and its impact on backend development.'
    },
    {
      id: 8,
      title: 'RESTful API Best Practices',
      speaker: 'Elena Rodriguez',
      speakerImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track A',
      startTime: '4:30 PM',
      endTime: '5:30 PM',
      type: 'talk',
      description: 'Learn the best practices for designing and implementing RESTful APIs that are maintainable, scalable, and user-friendly.'
    }
  ],
  
  // Day 2
  [
    {
      id: 9,
      title: 'Keynote: Security in Modern Backend Systems',
      speaker: 'James Kim',
      speakerImage: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Main Stage',
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      type: 'keynote',
      description: 'A comprehensive overview of security challenges and solutions in modern backend development.'
    },
    {
      id: 10,
      title: 'NoSQL vs SQL: Choosing the Right Database',
      speaker: 'Zoe Taylor',
      speakerImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track A',
      startTime: '10:30 AM',
      endTime: '11:30 AM',
      type: 'talk',
      description: 'A practical guide to selecting the appropriate database technology for your specific use case.'
    },
    {
      id: 11,
      title: 'Workshop: GraphQL API Development',
      speaker: 'Michael Chen',
      speakerImage: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track B',
      startTime: '10:30 AM',
      endTime: '12:30 PM',
      type: 'workshop',
      description: 'A hands-on session on building and optimizing GraphQL APIs for your backend applications.'
    },
    {
      id: 12,
      title: 'Lunch Break',
      speaker: '',
      speakerImage: '',
      track: 'Main Stage',
      startTime: '12:00 PM',
      endTime: '1:00 PM',
      type: 'break',
      description: 'Networking lunch with fellow attendees.'
    },
    {
      id: 13,
      title: 'Scaling Microservices Architecture',
      speaker: 'Sarah Johnson',
      speakerImage: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track A',
      startTime: '1:30 PM',
      endTime: '2:30 PM',
      type: 'talk',
      description: 'Strategies and patterns for scaling microservices architecture to handle high loads and complex domains.'
    },
    {
      id: 14,
      title: 'Workshop: Security Auditing for Backends',
      speaker: 'James Kim',
      speakerImage: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track B',
      startTime: '1:30 PM',
      endTime: '3:30 PM',
      type: 'workshop',
      description: 'Learn how to identify and address security vulnerabilities in your backend systems.'
    },
    {
      id: 15,
      title: 'Panel: API Security',
      speaker: 'Various Speakers',
      speakerImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Main Stage',
      startTime: '3:00 PM',
      endTime: '4:00 PM',
      type: 'panel',
      description: 'Expert discussion on securing APIs against modern threats and vulnerabilities.'
    },
    {
      id: 16,
      title: 'Cloud-Native Database Solutions',
      speaker: 'David Wilson',
      speakerImage: 'https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track A',
      startTime: '4:30 PM',
      endTime: '5:30 PM',
      type: 'talk',
      description: 'An exploration of modern database solutions designed specifically for cloud environments.'
    }
  ],
  
  // Day 3
  [
    {
      id: 17,
      title: 'Keynote: The Future of Backend Development',
      speaker: 'Priya Patel',
      speakerImage: 'https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Main Stage',
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      type: 'keynote',
      description: 'A visionary look at emerging trends and technologies that will shape the future of backend development.'
    },
    {
      id: 18,
      title: 'DevOps for Backend Engineers',
      speaker: 'Marcus Johnson',
      speakerImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track A',
      startTime: '10:30 AM',
      endTime: '11:30 AM',
      type: 'talk',
      description: 'Best practices and tools for implementing DevOps workflows specifically for backend development teams.'
    },
    {
      id: 19,
      title: 'Workshop: Database Performance Tuning',
      speaker: 'Zoe Taylor',
      speakerImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track B',
      startTime: '10:30 AM',
      endTime: '12:30 PM',
      type: 'workshop',
      description: 'Hands-on techniques for optimizing database performance in high-scale production environments.'
    },
    {
      id: 20,
      title: 'Lunch Break',
      speaker: '',
      speakerImage: '',
      track: 'Main Stage',
      startTime: '12:00 PM',
      endTime: '1:00 PM',
      type: 'break',
      description: 'Networking lunch with fellow attendees.'
    },
    {
      id: 21,
      title: 'Chaos Engineering in Practice',
      speaker: 'Priya Patel',
      speakerImage: 'https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track A',
      startTime: '1:30 PM',
      endTime: '2:30 PM',
      type: 'talk',
      description: 'How to implement chaos engineering principles to build more resilient backend systems.'
    },
    {
      id: 22,
      title: 'Workshop: Designing for Scale',
      speaker: 'Sarah Johnson',
      speakerImage: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Track B',
      startTime: '1:30 PM',
      endTime: '3:30 PM',
      type: 'workshop',
      description: 'A practical workshop on designing backend systems that can scale to millions of users.'
    },
    {
      id: 23,
      title: 'Panel: Infrastructure as Code',
      speaker: 'Various Speakers',
      speakerImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Main Stage',
      startTime: '3:00 PM',
      endTime: '4:00 PM',
      type: 'panel',
      description: 'Expert discussion on the benefits and challenges of implementing infrastructure as code.'
    },
    {
      id: 24,
      title: 'Closing Remarks and Networking',
      speaker: 'Conference Organizers',
      speakerImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      track: 'Main Stage',
      startTime: '4:30 PM',
      endTime: '5:30 PM',
      type: 'talk',
      description: 'Final thoughts on the conference and structured networking session.'
    }
  ]
];

// Get the schedule for the active day, filtered by the user's criteria
const filteredSchedule = computed(() => {
  let sessions = scheduleData[activeDay.value];
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    sessions = sessions.filter(session => 
      session.title.toLowerCase().includes(query) ||
      session.speaker.toLowerCase().includes(query) ||
      session.description.toLowerCase().includes(query)
    );
  }
  
  if (trackFilter.value) {
    sessions = sessions.filter(session => session.track === trackFilter.value);
  }
  
  if (typeFilter.value) {
    sessions = sessions.filter(session => session.type === typeFilter.value);
  }
  
  return sessions;
});

// Filter sessions by track
function filteredScheduleByTrack(track) {
  return filteredSchedule.value.filter(session => session.track === track);
}

// Convert time string to hours (for positioning)
function getTimeInHours(timeStr) {
  const [hours, minutes] = timeStr.replace(/ (AM|PM)$/, '').split(':').map(Number);
  let totalHours = hours;
  
  if (timeStr.includes('PM') && hours < 12) {
    totalHours += 12;
  }
  
  return totalHours + (minutes / 60);
}

// Calculate session duration in hours
function getSessionDuration(session) {
  const startHours = getTimeInHours(session.startTime);
  const endHours = getTimeInHours(session.endTime);
  return endHours - startHours;
}

// Format hour to time string
function formatTime(hour) {
  if (hour < 12) {
    return `${hour}:00 AM`;
  } else if (hour === 12) {
    return `12:00 PM`;
  } else {
    return `${hour - 12}:00 PM`;
  }
}

// Reset all filters
function resetFilters() {
  searchQuery.value = '';
  trackFilter.value = '';
  typeFilter.value = '';
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>