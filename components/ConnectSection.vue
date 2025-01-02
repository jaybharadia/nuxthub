<script setup>
const config = useRuntimeConfig()
const { email, github, linkedin, twitter } = config.public

const socialLinks = [
  { name: 'GitHub', url: github, icon: 'mdi:github' },
  { name: 'LinkedIn', url: linkedin, icon: 'mdi:linkedin' },
  { name: 'Twitter', url: twitter, icon: 'mdi:twitter' }
]
</script>

<template>
  <section id="connect" class="section">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
      Connect With Me
    </h2>
    
    <div class="flex flex-col items-center gap-8">
      <div class="flex gap-6">
        <a v-for="link in socialLinks" 
           :key="link.name"
           :href="link.url"
           target="_blank"
           rel="noopener noreferrer"
           class="social-icon">
          <Icon :name="link.icon" class="w-full h-full" />
        </a>
      </div>
      
      <a :href="'mailto:' + email" class="btn">
        Send Me an Email
      </a>
    </div>
  </section>
</template>