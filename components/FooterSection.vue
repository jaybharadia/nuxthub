<script setup>
const config = useRuntimeConfig()
const { name } = config.public
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 px-4 text-center text-gray-400 border-t border-gray-800">
    <p class="mb-2">© {{ year }} {{ name }}. All Rights Reserved.</p>
    <p class="text-sm">Built with ❤️ using Nuxt.js</p>
  </footer>
</template>