<script setup>
const config = useRuntimeConfig();
const { name } = config.public;
const { scrollToElement } = useSmoothScroll();

const phrases = [
  "Building Brande.ai",
  "Frontend Engineer (VueJS / NuxtJS)",
  "Building SaaS products",
  "Passionate about Psychology",
  "Curious and Observant",
];

const { text } = useTypewriter(phrases, {
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseDuration: 2000,
});
</script>

<template>
  <section
    class="section min-h-screen flex items-center relative overflow-hidden"
  >
    <!-- Animated background grid -->
    <div class="absolute inset-0 bg-grid opacity-10"></div>

    <div class="relative z-10 w-full">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span class="text-primary">{{ name }}</span>
      </h1>

      <h2 class="text-xl md:text-2xl font-mono mb-6 text-gray-400 min-h-[2em]">
        {{ text }}<span class="animate-blink">|</span>
      </h2>

      <div class="flex gap-4">
        <a href="#connect">
          <GradientButton bg-color="#000">Let's Collaborate!</GradientButton>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid {
  background-image: linear-gradient(to right, #1f2937 1px, transparent 1px),
    linear-gradient(to bottom, #1f2937 1px, transparent 1px);
  background-size: 50px 50px;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}
</style>
