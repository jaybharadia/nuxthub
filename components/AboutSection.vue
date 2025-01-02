<script setup>
const skills = [
  { text: 'Building Brande.ai', icon: '🚀' },
  { text: 'Frontend Engineer (VueJS / NuxtJS / Directus)', icon: '💻' },
  { text: 'Building SaaS products', icon: '⚡' },
  { text: 'Passionate about human mind research and Psychology', icon: '🧠' },
  { text: 'Curiosity and Observation is my biggest strength', icon: '🔍' }
]
</script>

<template>
  <section class="section bg-gray-800/50">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
      About Me
    </h2>
    
    <div class="max-w-3xl mx-auto">
      <ul class="space-y-6">
        <li v-for="(skill, index) in skills" 
            :key="index"
            class="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg transform hover:-translate-x-2 transition-transform duration-300">
          <span class="text-2xl">{{ skill.icon }}</span>
          <span class="text-lg">{{ skill.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>